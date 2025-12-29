import  {prisma} from "../lib/prisma.js";
import {categoryFilterSchema} from "../Schema/schema.js";
import * as tty from "node:tty";


export  default async  function getAllPostsByQuery (req, res) {

        try {

            const validCategory = categoryFilterSchema.validate(req.query);

            if(validCategory.error){
                return res.status(400).send({
                    ErrorMessage :validCategory.error.message,
                    status : false
                });
            }

            const filterPosts = await prisma.post.findMany({
                where: {
                    category:validCategory.value.category
                }
            })


            if(!filterPosts.length){
                return res.status(400).json({
                    message: "No posts found.",
                    status: false
                })
            }

            res.status(200).json({
                message: "Posts found.",
                status: true,
                posts: filterPosts
            });



        }catch (error){
            console.log(error.message)
            return res.status(400).json({
                message:"Something went wrong",
                status: false
            })

        }




}