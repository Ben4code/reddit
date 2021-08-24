import {Request, Response, NextFunction} from 'express';

export default (request: Request, _: Response, next: NextFunction) => {
	const exceptions = new Set(['password']);
	for (const key of Object.keys(request.body)) {
		if (!exceptions.has(key) && typeof request.body[key] === 'string') {
			request.body[key] = request.body[key].trim();
		}
	}

	next();
};
