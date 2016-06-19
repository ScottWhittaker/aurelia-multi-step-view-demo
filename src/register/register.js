import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Register {

  viewModels = [
    'register/register-step-one',
    'register/register-step-two',
    'register/register-step-three'
  ];

  constructor(router) {
    this.router = router;
  }

  multiStepViewCancel() {
    this.router.navigate('home');
  }

  multiStepViewComplete(multiStepViewData) {
    // TODO do something with data
    this.router.navigate('register-complete');
  }
}
