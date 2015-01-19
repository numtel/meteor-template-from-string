Package.describe({
  name: 'numtel:template-from-string',
  summary: 'Create template from HTML string',
  version: '0.1.0',
  git: 'https://github.com/numtel/meteor-template-from-string.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('templating');
  api.use('spacebars-compiler');
  api.addFiles('Template.fromString.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('templating');
  api.use('blaze');
  api.use('numtel:template-from-string');
  api.addFiles('test.js', 'client');
});
