import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog')
    .plugin('aurelia-validation')
    .plugin('aurelia-validatejs')
    .feature('components/form-validation');
  aurelia.start().then(() => aurelia.setRoot());
}
