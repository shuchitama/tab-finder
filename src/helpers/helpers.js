const _ = require('lodash');

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