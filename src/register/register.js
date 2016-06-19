export class Register {

  viewModels = [
    'register/register-step-one',
    'register/register-step-two',
    'register/register-step-three'
  ];

  multiStepViewCancel() {
    // Navigate home
  }

  multiStepViewComplete(multiStepViewData) {
    // Navigate to register completion view
  }
}
