import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {required, email} from 'aurelia-validatejs';

@inject(NewInstance.of(ValidationController))
export class RegisterStepTwo {

  @required
  @email
  email = '';

  constructor(controller) {
    this.controller = controller;
  }

  activate(model) {
    this.model = model;
    this._prepopulate();
  }

  isValid() {
    if (this.controller.validate().length) return false;
    this._updateModel();
    return true;
  }

  _prepopulate() {
    this.email = this.model.email;
  }

  _updateModel() {
    this.model.email = this.email;
  }
}
