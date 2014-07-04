/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('index', {
        title: 'Express'
    });
};

exports.queue = function(req, res) {
    res.json(queue);
}

exports.dac = function(req, res) {
    res.json(doneAndCurrent);
}