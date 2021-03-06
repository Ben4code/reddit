import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';

import User from '../entities/User';

export default async (request: Request, res: Response, next: NextFunction) => {
	try {
		const token = request.cookies.token;
		if (!token) {
			throw new Error('Unautenticated');
		}

		const {username}: any = jwt.verify(token, process.env.JWT_SECRET!);

		const user = await User.findOne({username});
		if (!user) {
			throw new Error('Unautenticated');
		}

		res.locals.user = user;
		next(); return;
	} catch (error) {
		console.log(error);
		return res.status(401).json({error: error.message});
	}
};
