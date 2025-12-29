import {PostSchema} from "../Schema/schema.js"
import {prisma} from "../lib/prisma.js"


export default async function CreatePost (req ,res){
    
    const data = PostSchema.validate(req.body);


    if(data.error){
        return res.status(400).json({
            ErrorMessage: data.error.message
        })
    }


        const {title, content, category, tags} = data.value;


            const newPost = await prisma.post.create({
                data:{
                    title,
                    content,
                    category,
                    tags
                }
            })


            if(!newPost){
                return res.status(400).json({
                    Message: "error al rear the new post",
                    status: false
                })
            }

            res.status(201).json({
                Message: "New Post created",
                post: newPost,
                status: true
    })
}