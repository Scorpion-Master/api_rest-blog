import {prisma} from "../lib/prisma.js";


export  default  async function deletePostById(req, res) {
    try {

        const { id } = req.params;


        if (!id || isNaN(id)) {
            return res.status(400).json({
                message: "ID invalid",
                status: false,
            });
        }


        const delete_post = await prisma.post.delete({
            where: {
                id: Number(id),
            },
        });

        if (delete_post) {
            return res.status(200).json({
                message: "Post deleted successfully",
                status: true,
            })
        }

    }catch (error) {
        console.log(error.message);
        res.status(500).json({
            errorMessage: "Something went wrong",
            status: false,
        });
    }
}