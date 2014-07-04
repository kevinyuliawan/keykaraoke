var Person = function(name, song, thumbs) {
    this.name = name,
    this.song = song,
    this.thumbs = thumbs;
};

var queue = [ // first is currently playing
    new Person('Adam', 'Queen - We Are The Champions', 0),
    new Person('Bob', "Cage The Elephant - Ain't No Rest For The Wicked", 0),
    new Person("Charles", "Bad Rabbits - Fall In Love", 0),
    new Person("Dave", "Usher - There Goes My Baby", 0),
    new Person("Earl", "Weezer - My Name Is Earl", 0)
];



var done = [ //last is most recent
    new Person("Xavier", "Pokemon Theme Song", 4),
    new Person("Yelyah", "Paramore - Aint It Fun", 6),
    new Person("Zach", "Toby Williams - Red Solo Cup Currently", 3)
];

var messages = [];

exports.queue = function(req, res) {
    res.json(queue);
}

exports.done = function(req, res) {
    res.json(done);
}

exports.thumbs = function(req, res) {
    queue[0].thumbs += 1;
    res.send(200);
}

exports.finishCurrent = function(req, res) {
    // pop current from queue, add to done
    var cur = queue.shift();
    done.push(cur);
    res.send(200);
}

exports.request = function(req, res) {
    var song = req.params.artist + ' - ' + req.params.song;
    queue.push(new Person(req.params.name, song, 0));
    res.send(200);
}

exports.requestfront = function(req, res) {
    var song = req.params.artist + ' - ' + req.params.song;
    queue.unshift(new Person(req.params.name, song, 0));
    res.send(200);
}