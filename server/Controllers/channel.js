import mongoose from "mongoose";
import users from "../Models/Auth.js"
export const updatechaneldata = async (req, res) => {
    const { id: id } = req.params;
    const { name, desc } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Channel unavailable...")

    }
    try {
        const updatedata = await users.findByIdAndUpdate(
            id, {
            $set: {
                name: name,
                desc: desc,
            },

        },
            { new: true }

        );
        res.status(200).json(updatedata)
    }
    catch (error) {
        res.status(405).json({ message: error.message })
        return
    }
}

export const getallchanels = async (req, res) => {
    try {
        const allchanels = await users.find();
        const allchaneldata = []
        allchanels.forEach((channel) => {
            allchaneldata.push({
                id: channel._id,
                name: channel.name,
                email: channel.email,
                desc: channel.desc,
            })
        })
        res.status(200).json(allchaneldata)
    }
    catch (error) {
        res.status(405).json({ message: error.message })
        return
    }
}