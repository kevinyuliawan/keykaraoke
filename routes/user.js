/*
 * GET users listing.
 */

var Person = function(name, song, thumbs) {
    this.name = name,
    this.song = song,
    this.thumbs = thumbs;
};

var queuevar = [
    new Person('Adam', 'Queen - We Are The Champions', 0),
    new Person('Bob', "Cage The Elephant - Ain't No Rest For The Wicked", 0),
    new Person("Charles", "Bad Rabbits - Fall In Love", 0),
    new Person("Dave", "Usher - There Goes My Baby", 0),
    new Person("Earl", "Weezer - My Name Is Earl", 0)
];



var doneAndCurrent = [
    new Person("Xavier", "Pokemon Theme Song", 4),
    new Person("Yelyah", "Paramore - Aint It Fun", 6),
    new Person("Zach", "Toby Williams - Red Solo Cup Currently", 3)
];

exports.list = function(req, res) {
    res.send("respond with a resource");
};

exports.queue = function(req, res) {
    res.json(queuevar);
}