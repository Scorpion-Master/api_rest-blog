import {prisma} from "../lib/prisma.js";
import {PostSchema} from "../Schema/schema.js";


export default async function updatePost(req,res){

    try {

        const { id } = req.params;

        const validate_data = PostSchema.validate(req.body);

        if (!id || isNaN(id)) {
            return res.status(400).json({
                message: "ID invalid",
                status: false,
            });
        }

        if (validate_data.error) {
            return res.status(400).json({
                message: "Validation error",
                status: false,
            })
        }

            const {title, content, category, tags} = validate_data.value;

        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title,
                content,
                category,
                tags,
            }
        });


        if (post) {
            res.status(200).json({
                message: "Post update successfully",
                status: true,
            })
        }

    }catch (error){
        console.log(error.message);
        res.status(500).json({
            ErrorMessage: "Something went wrong",
            status: false
        })
    }
}