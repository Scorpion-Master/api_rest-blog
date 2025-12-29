import Joi from "joi";



export const PostSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category:Joi.string().required(),
    tags: Joi.array()
})

export  const categoryFilterSchema = Joi.object({
    category: Joi.string().required().max(10)
})


