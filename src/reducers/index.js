import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'some song', duration: '4:05'},
        {title: 'some song1', duration: '4:08'},
        {title: 'some song2', duration: '4:10'},
        {title: 'some song3', duration: '4:50'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})