class Catalog {
  constructor(){
    this._media = [];
  }

  get media(){
    return this._media;
  }
  
  addMedia(media){
    if (typeof media === 'string'){
      this._media.push(media);
    } else{
      media.forEach(item => {
        this._media.push(item)
      });
    }

  }
}

class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(val){
    if(typeof val === 'boolean'){
      this._isCheckedOut = val;
    }
  }

  getAverageRating(){
    let sum = this._ratings.reduce((accumulator, currentValue) => accumulator+currentValue);
    let average = sum/this._ratings.length;
    return average;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut; 
  }
  addRating(rating){
    if (rating >=1 && rating <=5){
    this._ratings.push(rating);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, cast, title, runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
    this._cast = cast;
  }

  get director(){
    return this._director;
  }

  get cast (){
    return this._cast;
  }

  get runtime(){
    return this._runtime;
  }

  addCast(cast){
    this._cast.push(cast);
  }
}

class CD extends Media {
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist(){
    return this._artist;
  }

  get songs(){
    return this._songs;
  }

  addSong(song){
    this._songs.push(song)
  }

  addSongs(songs){
    for (const song of songs){
      this._songs.push(song);
    }
  }

  shuffle(){
    const shuffled = [];
    while (true){
      // get a random index from songs
      let ran = Math.floor(Math.random() * this._songs.length);
      //put song in shuffled only if is not there
      if (!shuffled.includes(this._songs[ran])){
        shuffled.push(this._songs[ran]);
      }
      // end when length of shuffled is same as songs to make sure all songs are there
      if (shuffled.length == this._songs.length){
        break;
      }
    }
    return shuffled;
  }
}

// new Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(' Book: History Of Everything ')
historyOfEverything.toggleCheckOutStatus();
console.log(' Checked out: ',historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(' Average rating: ',historyOfEverything.getAverageRating());

// new Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
// toggle checked out status
 speed.toggleCheckOutStatus();
//  log checked out status
 console.log('\n Movie Speed \n Checked Out: ',speed.isCheckedOut);
//  add 3 ratings 1, 1 and 5 to movie speed
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
// get average ratings on Movie speed and log it
console.log(' Average rating: ',speed.getAverageRating());

// create new CD instance
const forestHillDrives = new CD('J.Cole', '2014 Forest Hill Drives', ['Love yours', '03\' Adolescence', 'Tale of 2 citiez', 'January 28th', 'Wet Dreamz', 'Fire Squad', 'St. Tropez', 'G.O.M.D', 'No Role Modelz', 'Hello', 'Apparently', 'Note to Self']);
// shuffle songs
console.log('\n CD shuffle: \n',forestHillDrives.shuffle());

// create catalog
const catalog = new Catalog();
// add media to catalog
catalog.addMedia([forestHillDrives.title,speed.title,historyOfEverything.title]);
// log catalog
console.log('\n CATALOG');
console.log(catalog.media);


