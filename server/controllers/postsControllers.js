import PostsModel from "../models/postsModel.js"

export const index = async (req, res) => {
    try {
        const posts = await PostsModel.find()

        console.log(posts)
        res.status(200).json({posts, msg: 'All Posts'})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    
    const newPost = new PostsModel(post)

    try {
        await newPost.save()

        res.status(201).json({ post: newPost, msg: 'Post successfully created'})
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}