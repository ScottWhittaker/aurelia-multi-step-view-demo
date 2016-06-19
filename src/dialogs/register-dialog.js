import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class RegisterDialog {

  viewModels = [
    'register/register-step-one',
    'register/register-step-two',
    'register/register-step-three'
  ];

  constructor(dialogController) {
    this.dialogController = dialogController;
  }

  multiStepViewCancel() {
    this.dialogController.cancel();
  }

  multiStepViewComplete(multiStepViewData) {
    this.dialogController.ok(multiStepViewData);
  }
}
