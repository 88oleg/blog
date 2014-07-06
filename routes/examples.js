/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * examples for projects
 */

var projects = {
    bootstrap_table: {
        data: function(req, res) {
            var offset = +req.query.offset || 0,
                limit = +req.query.limit || 20,
                max = offset + limit,
                result = {
                    total: 1000,
                    rows: []
                };

            if (max > 1000) {
                max = 1000;
            }
            for (var i = offset; i < max; i++) {
                result.rows.push({
                    id: i,
                    name: 'test' + i,
                    price: '$' + i
                });
            }
            res.json(result);
        }
    }
};

module.exports = function(req, res) {
    projects[req.params.project][req.params.func](req, res);
};