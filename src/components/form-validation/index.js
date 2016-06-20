import {FormValidationRenderer} from './form-validation-renderer';

export function configure(config) {
  config.container.registerHandler(
    'form-validation',
    container => container.get(FormValidationRenderer));
}
