import React, {Component} from 'react';
import './style.scss';

class Winner extends Component{
  songArtists(){
    let {winner} = this.props;
    if(!winner) return false;
    let artists = winner.song.artist;
    return 'artist: ' + artists.map((artist) => `${artist}`).join(' & ');
  }
  render(){
    let {winner} = this.props;
    if(!winner) return null;
    return(
      <div className='Winner'>
        <main></main>
        <footer>
          <div className='country'>{winner.winner.toUpperCase()}</div>
          <div className='song' title={this.songArtists()}>{winner.song.name}</div>
        </footer>
      </div>
    );
  }
}

export default Winner;
