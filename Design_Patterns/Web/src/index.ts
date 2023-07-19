import { User } from './models/User';

// const user = User.buildUser({ id: 1 });

// to solve the above we used collection

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
