import {bindable} from 'aurelia-framework';

export class MultiStepViewCustomElement {

  @bindable cancel;
  @bindable complete;
  @bindable viewModels;

  backButtonActive = false;
  completeButtonActive = false;
  nextButtonActive = true;

  currentViewModelPath;
  currentStep = 1;
  totalSteps = 0;

  composeRef;
  model = {};

  bind() {
    if (!this.cancel) {
      throw new Error('bindable property `cancel` must be defined on MultiStepViewCustomElement');
    }
    if (!this.complete) {
      throw new Error('bindable property `complete` must be defined on MultiStepViewCustomElement');
    }
    if (!this.viewModels) {
      throw new Error('bindable property `viewModels` must be defined on MultiStepViewCustomElement');
    }
    this.totalSteps = this.viewModels.length;
    this._update();
  }

  back() {
    this.currentStep--;
    this._update();
  }

  next() {
    if (!this._isValidView()) return;
    this.currentStep++;
    this._update();
  }

  _update() {
    this._setButtons();
    this._setViewModel();
  }

  _setViewModel() {
    this.currentViewModelPath = this.viewModels[this.currentStep - 1];
  }

  _setButtons() {
    this.backButtonActive = this.currentStep > 1;
    this.nextButtonActive = this.currentStep < this.totalSteps;
    this.completeButtonActive = this.currentStep === this.totalSteps;
  }

  _isValidView() {
    if (!this.composeRef.currentViewModel.isValid) {
      throw new Error(`${this.composeRef.viewModel} must implement an isValid method returning a boolean`);
    }
    return this.composeRef.currentViewModel.isValid();
  }
}
