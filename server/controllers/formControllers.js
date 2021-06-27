import PostsModel from "../models/postsModel.js"

export const createPost = async (req, res) => {
    const post = req.body
    
    console.log('post body', post)
    const newPost = new PostsModel(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}