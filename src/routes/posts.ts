import {Request, Response, Router} from 'express';
import Post from '../entities/Post';
import Sub from '../entities/Sub';

import auth from '../middleware/auth';

const createPost = async (request: Request, res: Response) => {
	const {title, body, sub} = request.body;
	const user = res.locals.user;
	if (title.trim() === '') {
		return res.status(400).json({title: 'Title must not be empty'});
	}

	try {
		//Find sub
		const subReacord = await Sub.findOneOrFail({name: sub})

		const post = new Post({title, body, sub: subReacord, user});
		await post.save();
		return res.json(post);
		
	} catch {
		return res.status(500).json({error: 'Something went wrong.'});
	}
};

const router = Router();
router.post('/', auth, createPost);

export default router;
