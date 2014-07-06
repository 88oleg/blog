/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2013-03-28
 */

var post = require('./post'),
	rss = require('./rss'),
	stat = require('./stat'),
    examples = require('./examples');

module.exports = function(app) {
	app.get('/', checkUrl);
	app.get('/:file', checkUrl);
	app.get('/:yy/:mm/:dd/:file', checkUrl);
    app.get('/examples/:project/:func', examples);
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
