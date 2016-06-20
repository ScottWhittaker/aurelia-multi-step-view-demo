import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {required} from 'aurelia-validatejs';

@inject(NewInstance.of(ValidationController))
export class RegisterStepOne {

  @required
  firstName = '';

  @required
  lastName = '';

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
    this.firstName = this.model.firstName;
    this.lastName = this.model.lastName;
  }

  _updateModel() {
    this.model.firstName = this.firstName;
    this.model.lastName = this.lastName;
  }
}
