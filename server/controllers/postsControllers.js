import PostsModel from "../models/postsModel.js"

export const index = async (req, res) => {
    try {
        const posts = await PostsModel.find()

        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    
    const newPost = new PostsModel(post)

    try {
        await newPost.save()

        res.status(201).json(post)
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}

export const getPost = async (req, res) => {
    console.log("Getting post")
    res.status(200).json("Done")
}

export const deletePost = async (req, res) => {
    console.log("Getting Post")
}

export const updatePost = async (req, res) => {
    console.log("Getting Post")
}