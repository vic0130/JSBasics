///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MOSH explanation
// 'this' is the object that executing the current function

// in a method -> 'this' refers to the object itself
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
};

video.play();
video.stop();

// in a function -> 'this' refers to Global Object (window or global in Node)
function playVideo() {
    console.log('Global Object' + this);
};

playVideo();

// with constructor (capitalized)
function Video(title) {
    this.title = title;
    console.log(this);
};

// create a new object -> 'this' wil reference a new empty object
const v = new Video('my Title');

const videoTags = {
    title: 'Gladiator',
    tags: ['comedy', 'horror', 'action'],
    show() {
        this.tags.forEach(function (tag) { // the anonymous callback function here references the Global Object
            console.log(this, tag)
        });
    },
    showTitle() {
        this.tags.forEach(function (tag) {
            console.log(this, tag)
        }, this.title);
    }
};

videoTags.show();
videoTags.showTitle();