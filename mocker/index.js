const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');
const app = express();
const glob = require('glob');

const paths = glob.sync(path.join(__dirname, './src/*.js')).map(function (item) {
    return item;
});

apiMocker(app, paths);
app.listen(3722);
