import 'reflect-metadata';
import {createConnection} from 'typeorm';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import subsRoutes from './routes/subs';
import trim from './middleware/trim';

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(trim);
app.use(cookieParser());

app.get('/', (_, res) => res.send('Welcome Ben'));
app.use('/api/auth/', authRoutes);
app.use('/api/posts/', postsRoutes);
app.use('/api/subs/', subsRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
	console.log('Server running at http://localhost:' + PORT);
	try {
		await createConnection();
		console.log('Database connected!');
	} catch (error) {
		console.log(error);
	}
});
