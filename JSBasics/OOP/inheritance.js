class A {}

class B extends A {}

// By data

class User {
  constructor(name) {
    this.name = name;
  }

  login(name, password) {
    console.log(`Logging in ${name} ${password}`);
  }

  logout() {
    console.log(`Logging out ${this.name}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name);

    this.isAdmin = true;
  }
}

console.log(new User("John"));
console.log(new Admin("Alex"));

// By methods

class AnonimUser extends User {
  constructor(name) {
    super(name);

    this.requestApproval();
    super.login("name", "password");
  }

  login(name) {
    console.log(`Logging in ${name}`);
    // this.requestApproval();
    // super.login(this.name, "password");
  }

  logout() {
    throw new Error("This type of users can not logout");
  }

  requestApproval() {
    console.log(`${this.name} has requested an approval`);
  }
}

const anonimUser = new AnonimUser("Helen");

anonimUser.requestApproval();
anonimUser.login();
// anonimUser.logout();

new User("name").logout();
