/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('index.html');
};

exports.queue = function(req, res) {
    res.json(queue);
}

exports.dac = function(req, res) {
    res.json(doneAndCurrent);
}