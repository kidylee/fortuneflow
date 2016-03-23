var Q = require('q');
var nw = require('nw');
var pathUtil = require('path');
var childProcess = require('child_process');
var kill = require('tree-kill');
var gulp = require('gulp');
var utils = require('./utils');

var wpdsPath = pathUtil.resolve('./node_modules/.bin/webpack-dev-server');
var gulpPath = pathUtil.resolve('./node_modules/.bin/gulp');

var webpackPath = pathUtil.resolve('./node_modules/.bin/webpack');


if (process.platform === 'win32') {
    gulpPath += '.cmd';
    wpdsPath += '.cmd';
    webpackPath += '.cmd';
}

var wpds;

var runCopy = function () {
    var deferred = Q.defer();

    var build = childProcess.spawn(gulpPath, [
        'copy',
        '--env=' + utils.getEnvName(),
        '--color'
    ], {
        stdio: 'inherit'
    });

    build.on('close', function (code) {
        deferred.resolve();
    });

    return deferred.promise;
};

var runWebPack = function(){

    var deferred = Q.defer();

	var build = childProcess.spawn(webpackPath ,
		['webpack'],
		{
			stdio: 'inherit'
		}
	);

	build.on('close', function (code) {
        deferred.resolve();
    });

    return deferred.promise;
}

var runWebpackDevServer = function () {

	var deferred = Q.defer();

	wpds = childProcess.spawn(wpdsPath,[
		'webpack-dev-server',
		'--progress',
		'--colors',
		'--hot',
		'--inline',
		'--content-base dist'
		]
	);

	wpds.stdout.on('data', function(code){
		process.stdout.write(code);

		if(code.toString().indexOf("VALID") > 0){
			deferred.resolve("================Starting nwjs===================");

		}

	});

	return deferred.promise;

};

var runApp = function () {
    var app = childProcess.spawn(nw.findpath(), ['./dist' ,'--load-extension=./extensions/react-devtools'], {
        stdio: 'inherit'
    });

    app.on('close', function (code) {
        // User closed the app. Kill the host process.
        kill(wpds.pid, 'SIGKILL', function () {
            process.exit();
        });
    });
};

runCopy()
.then(runWebPack)
.then(runWebpackDevServer)
.then(runApp);
//
