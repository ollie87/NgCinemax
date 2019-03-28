// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({
        basePath: '',
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            { pattern: '../node_modules/jquery/dist/jquery.min.js', included: false, watched: false },
            { pattern: '../node_modules/materialize-css/dist/js/materialize.js', watched: false },
        ],
        frameworks: ['jasmine', '@angular-devkit/build-angular', 'jquery-3.3.1'],
        plugins: [
            require('karma-jquery'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage/NgCinemax'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        restartOnFileChange: true
    });
};