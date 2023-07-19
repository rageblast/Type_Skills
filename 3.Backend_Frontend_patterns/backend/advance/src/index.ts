import express from 'express';
// import { router } from './routes/loginRoutes';
// import { router as controllerRouter } from './controllers/decorators/controller';
import { AppRouter } from './AppRouter';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['rock'] }));

// app.use(router);
// app.use(controllerRouter);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
