export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home' },
      { route: 'register', name: 'register', moduleId: 'register/register', nav: true, title: 'Register' }
    ]);

    this.router = router;
  }
}
