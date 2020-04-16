const _ = require('lodash');

export const mixin = { 
  methods: {
  chordIDtoName(chordList, arrOfIDs) {
    return arrOfIDs.map (id => {
      const chord = chordList.find(element => element.id === id);
      return chord.name;
    })
  },

    filtersongs(songsObj, arrOfIDs) {
      const arrOfNames = chordIDtoName(chords, arrOfIDs)
      return songsObj.filter(song => _.isEqual(song.chords.sort(), arrOfNames.sort()))
    }
  }
};