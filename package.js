Package.describe({
  name: 'estate:fullpage',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor fullpage Library',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mizzao:jquery-ui', 'client');
  api.addFiles([
    'dist/jquery.fullPage.css',
    'dist/jquery.fullPage.min.js',
    'dist/jquery.easings.min.js',
    'dist/jquery.slimscroll.min.js',
    'dist/jquery.inview.min.js'
    ], 'client');
});
