import { prisma } from "../lib/prisma.js";



export default async function getAllPosts(req ,res){

            try {
                
                const posts = await prisma.post.findMany();
                
                if(!posts){
                    res.status(404).json({
                        Message: "Not Found",
                        status: false
                    })
                }

                res.status(200).json({
                    Message: "all posts",
                    status: true,
                    posts: posts
                })

            } catch (error) {
               res.status(400).json({
                message: error.message,
                status: false
               }) 
            }





}



