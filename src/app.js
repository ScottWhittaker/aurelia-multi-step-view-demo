export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home' },
      { route: 'register', name: 'register', moduleId: 'register/register', nav: true, title: 'Register' },
      { route: 'register-complete', name: 'register-complete', moduleId: 'register/register-complete', title: 'Registration Complete' }
    ]);

    this.router = router;
  }
}
