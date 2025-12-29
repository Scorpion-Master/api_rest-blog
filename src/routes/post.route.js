import { Router } from "express";
import CreatePost from "../controllers/create.post.controller.js";
import getAllPosts from "../controllers/get_all_posts.controller.js";
import getPostById from "../controllers/get.post.controller.js";
import updatePost from "../controllers/update.post.controller.js";
import deletePostById from "../controllers/delete.post.controller.js";
import getAllPostsByQuery from "../controllers/filter.post.controller.js";

const router = Router();



router.get('/posts', getAllPosts);
router.get('/post/:id',getPostById);
router.post('/post', CreatePost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePostById);
router.get('/posts/filter', getAllPostsByQuery); // ?category=category





export default router;