import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {RegisterDialog} from 'dialogs/register-dialog';

@inject(DialogService)
export class Home {

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  register() {
    this.dialogService.open({viewModel: RegisterDialog})
      .then(response => {
        if (!response.wasCancelled) {
          // TODO do something with response.output
        }
      });
  }
}
