const _ = require('lodash');
const songs = [
  {
  id: 1,
  title: "Jolene",
  artist: "Dolly Parton",
  chords: ["Am", "C", "G"]
  },
  {
  id: 2,
  title: "Wonderwall",
  artist: "Oasis",
  chords: [
  "Em",
  "G",
  "D",
  "A"
  ]
  },
  {
  id: 3,
  title: "Linger",
  artist: "The Cranberries",
  chords: [
  "D",
  "A",
  "C",
  "G"
  ]
  },
  {
  id: 4,
  title: "Smelly Cat",
  artist: "Phoebe Buffay",
  chords: [
  "A",
  "E",
  "D"
  ]
  },
  {
  id: 5,
  title: "Fallin in love again",
  artist: "Eagle Eye Cherry",
  chords: [
  "Am",
  "C",
  "G"
  ]
  },
  {
  id: 6,
  title: "Whats up",
  artist: "4 non Blondes",
  chords: [
  "A",
  "Bm",
  "D"
  ]
  },
  {
  id: 7,
  title: "Set fire to the rain",
  artist: "Adele",
  chords: [
  "Am",
  "C",
  "Dm",
  "F",
  "G"
  ]
  },
  {
  id: 8,
  title: "Party in the USA",
  artist: "Miley Cyrus",
  chords: [
  "C",
  "Em",
  "Am",
  "G"
  ]
  },
  {
  id: 9,
  title: "Zombie",
  artist: "The Cranberries",
  chords: [
  "Em",
  "C",
  "G",
  "D"
  ]
  },
  {
  id: 10,
  title: "Have you ever seen the rain",
  artist: "CCR",
  chords: [
  "Am",
  "F",
  "C",
  "G"
  ]
  },
  {
  id: 11,
  title: "Have over feet",
  artist: "Alanis Morissette",
  chords: [
  "C",
  "G",
  "Am",
  "F",
  "D",
  "Bm",
  "A",
  "A#"
  ]
  },
  {
  id: 12,
  title: "Still havent found",
  artist: "U2",
  chords: [
  "A",
  "D",
  "E"
  ]
  },
  {
  id: 13,
  title: "Call me maybe",
  artist: "Carly Rae Jepsen",
  chords: [
  "A",
  "B",
  "C#m",
  "E"
  ]
  },
  {
  id: 14,
  title: "Yellow",
  artist: "Coldplay",
  chords: [
  "B",
  "F#",
  "E"
  ]
  },
  {
  id: 15,
  title: "The first cut is the deepest",
  artist: "Sheryl Crow",
  chords: [
  "A",
  "D",
  "G"
  ]
  },
  {
  id: 16,
  title: "Soak up the sun",
  artist: "Sheryl Crow",
  chords: [
  "A",
  "B",
  "E"
  ]
  },
  {
  id: 17,
  title: "Pumped up kicks",
  artist: "Foster The People",
  chords: [
  "Em",
  "G",
  "D",
  "A"
  ]
  },
  {
  id: 18,
  title: "Halo",
  artist: "Beyonce",
  chords: [
  "G",
  "Am",
  "Em",
  "C"
  ]
  },
  {
  id: 19,
  title: "Get lucky",
  artist: "Daft Punk",
  chords: [
  "Am",
  "C",
  "Em",
  "D"
  ]
  },
  {
  id: 20,
  title: "Dont stop believin",
  artist: "Journey",
  chords: [
  "E",
  "B",
  "C#m",
  "A"
  ]
  }
  ];

const chords = [
    {
  id: 1,
  name: "A"
  },
  {
  id: 2,
  name: "A#"
  },
  {
  id: 3,
  name: "Am"
  },
  {
  id: 4,
  name: "A#m"
  },
  {
  id: 5,
  name: "B"
  },
  {
  id: 6,
  name: "Bm"
  },
  {
  id: 7,
  name: "C"
  },
  {
  id: 8,
  name: "C#"
  },
  {
  id: 9,
  name: "Cm"
  },
  {
  id: 10,
  name: "C#m"
  },
  {
  id: 11,
  name: "D"
  },
  {
  id: 12,
  name: "D#"
  },
  {
  id: 13,
  name: "Dm"
  },
  {
  id: 14,
  name: "D#m"
  },
  {
  id: 15,
  name: "E"
  },
  {
  id: 16,
  name: "Em"
  },
  {
  id: 17,
  name: "F"
  },
  {
  id: 18,
  name: "F#"
  },
  {
  id: 19,
  name: "Fm"
  },
  {
  id: 20,
  name: "F#m"
  },
  {
  id: 21,
  name: "G"
  },
  {
  id: 22,
  name: "G#"
  },
  {
  id: 23,
  name: "Gm"
  },
  {
  id: 24,
  name: "G#m"
  }
  ];

const selectedChords = [ 1, 2, 3, 6, 7, 11, 17, 21 ];

const chordIDtoName = function (chordList, arrOfIDs) {
  return arrOfIDs.map (id => {
    const chord = chordList.find(element => element.id === id);
    return chord.name;
  })
}

const filtersongs = function (songsObj, arrOfIDs) {
  
  const arrOfNames = chordIDtoName(chords, arrOfIDs)
  return songsObj.filter(song => _.isEqual(song.chords.sort(), arrOfNames.sort()))
};

console.log(filtersongs(songs, selectedChords))