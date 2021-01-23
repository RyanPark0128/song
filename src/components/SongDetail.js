import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

    return song ? <div>
        <h3> Details for:</h3>
        <p>Title: {song.title}</p>
        <p>Duration: {song.duration}</p>
    </div>
        :
        <div>
            Select a Song
        </div>
}

const mapStatetoProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStatetoProps)(SongDetail);