import PostsModel from "../models/postsModel.js"
import mongoose from 'mongoose'

/* -------------------------------------------------------------------------- */
/*                       NOTE Fetching all post (server)                      */
/* -------------------------------------------------------------------------- */
export const index = async (req, res) => {
    try {
        const posts = await PostsModel.find()

        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/* -------------------------------------------------------------------------- */
/*                         NOTE Creating post (server)                        */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                     NOTE Getting a single post (server)                    */
/* -------------------------------------------------------------------------- */
export const getPost = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404)

    const post = await PostsModel.findById(_id)
    return res.json(post)
}

/* -------------------------------------------------------------------------- */
/*                         NOTE Deleting post (server)                        */
/* -------------------------------------------------------------------------- */
export const deletePost = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404)

    await PostsModel.findByIdAndDelete(_id)

    return res.status(201).json({ message: 'Deleted successfully'})
}

/* -------------------------------------------------------------------------- */
/*                             NOTE Updating Post (server)                           */
/* -------------------------------------------------------------------------- */
export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404)

    const updatedPost = await PostsModel.findByIdAndUpdate(_id, post, { new: true })
    return res.json(updatedPost)
}

/* -------------------------------------------------------------------------- */
/*                          NOTE Liking a post server                         */
/* -------------------------------------------------------------------------- */

export const likePost = async (req, res) => {
    const { id: _id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404)

    const post = await PostsModel.findById(_id)
    const updatedPost = await PostsModel.findByIdAndUpdate(_id, { likeCount: post.likeCount +1 }, { new: true })

    return res.json(updatedPost)

}