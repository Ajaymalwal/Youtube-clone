import users from '../Models/Auth.js'

export const downloadVideo = async (req, res) => {
    const { userId, videoId } = req.body;

    try {
        const user = await users.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const today = new Date().setHours(0, 0, 0, 0);
        if (user.usertype === "Free") {
            if (user.lastDownload && new Date(user.lastDownload).setHours(0, 0, 0, 0) === today) {
                return res.status(403).json({ message: "Free users can only download one video per day" });
            }

            if (user.downchance <= 0) {
                return res.status(403).json({ message: "No download chances left" });
            }
            user.downvid.push(videoId);
            user.lastDownload = new Date();
            user.downchance -= 1;

        } else if (user.usertype === "Premium") {
            // Premium users can download unlimited videos
            user.downvid.push(videoId);
        }
        await user.save();
        return res.status(200).json({ message: "Video downloaded successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }


}


export const getDownloadedVid = async (req, res) => {
    const { userId } = req.params;

    try {
        // Find the user by ID 
        const user = await users.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });


        return res.status(200).json({
            downloadedVideos: user.downvid, // List of downloaded videos
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
};
