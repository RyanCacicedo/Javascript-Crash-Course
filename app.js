let users = [
  {
    username: `Ryan`,
    email: `ryancacicedo@gmail.com`,
    password: `test123`,
    subscriptionStatus: `VIP`,
    discordId: `Ryan Cac#001`,
    lessonsCompleted: [0, 1],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      if (users[i].password === password) {
        console.log(`log the user in - the details are correct`);
      } else {
        console.log(`password is incorrect - try again`);
      }
      return;
    }
  }
  console.log(`could not find an email that matches`);
}

login(`ryancacicedo@gmail.com`, `test123`);

function register(user) {
  users.push(user)
}

register({
  username: `Ryan`,
  email: `ryancacicedo@gmail.com`,
  password: `Test123`,
  subscriptionStatus: `VIP`,
  discordId: `Ryan cac#001`,
  lessonsCompleted: [0, 1]
});

console.log(users);