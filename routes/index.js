/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2013-03-28
 */

var shelljs = require('shelljs'),
    post = require('./post'),
    rss = require('./rss'),
    stat = require('./stat'),
    examples = require('./examples'),
    config = require('../config');

module.exports = function (app) {
    app.get('/', checkUrl);
    app.get('/:file', checkUrl);
    app.get('/:yy/:mm/:dd/:file', checkUrl);
    app.get('/examples/:project/:func', examples);
    app.post('/hooks/' + config.key, autoBuild);
};

function checkUrl(req, res) {
    if (req.params.file === 'rss.xml') {
        rss.list(req, res);
        return;
    }
    if (req.params.file === 'stat') {
        stat.visits(req, res);
        return;
    }
    post.get(req, res);
}

function autoBuild(req, res) {
    var command = 'git pull --rebase; node build';
    shelljs.exec(command, function (code, output) {
        console.log(output);
        res.status(200);
        res.end();
    });
}