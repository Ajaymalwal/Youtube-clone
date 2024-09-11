import likevideo from "../Models/likevideo.js";

export const likedvideocontroller = async(req,res)=>{
    const likedvideodata = req.body;
    const addtolikedvideo = new likevideo(likedvideodata)
    try {
        await addtolikedvideo.save()
        res.status(200).json("added to liked video")
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const getalllikedvideo = async(req,res)=>{
    try {
        const files = await likevideo.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}
export const deletelikedvideo= async (req,res)=>{
    const {videoid:videoid,viewer:viewer} = req.params
    try {
        await likevideo.findOneAndDelete({
            videoid:videoid,viewer:viewer,

        })
        res.status(200).json({message:"removed from liked video"})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}