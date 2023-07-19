import { Router, Request, Response, NextFunction } from 'express';
// import { get } from './decorators/routes';

// import { controller } from './decorators/controller';

// see index.ts
import { get, controller, bodyValidator, post } from './decorators';

@controller('/')
class LoginController {
  // see the routes.ts why the below one shows error
  // @get('/')
  // add(a: number, b:number): number {
  //   return a + b;
  // }

  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
  <div>
  <label>Email</label>
  <input name="email"/>
  </div>
  <div>
  <label>Password</label>
  <input name="password" type="password" />
  </div>
  <button>Submit</button>
    </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      // Mark this person as logged in
      req.session = { loggedIn: true };
      // redirect them to the root route
      res.redirect('/');
    } else {
    }
  }

  @get('logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
