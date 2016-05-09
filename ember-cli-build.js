const EmberApp = require('ember-cli/lib/broccoli/ember-app'),
      Funnel = require('broccoli-funnel'),
      fs = require('fs'),
      vendorDir = JSON.parse(fs.readFileSync('./.bowerrc')).directory + '/';

const bowerIncludes = [
  'font-awesome/css/font-awesome.css'
];

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'bower_components/semantic-ui'
      ],
      plugins: [ require('less-plugin-glob') ]
    },

    SemanticUI: {
      css: false,
      javascript: true,
      fonts: true
    }
  });

  bowerIncludes.forEach(path => app.import(vendorDir + path));

  var fonts = new Funnel('bower_components/font-awesome', {
    srcDir: '/fonts',
    include: ['*.*'],
    destDir: '/assets/fonts'
  });

  return app.toTree(fonts);
};
