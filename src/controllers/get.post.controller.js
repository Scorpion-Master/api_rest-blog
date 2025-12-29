import { prisma } from "../lib/prisma.js";

export default async function getPostById(req, res) {
  try {
    const { id } = req.params;


    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "ID invalid",
        status: false,
      });
    }


    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });


    if (!post) {
      return res.status(404).json({
        message: "Post not Fond",
        status: false,
      });
    }

    return res.status(200).json({
      status: true,
      data: post,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error intern del server",
      status: false,
    });
  }
}
