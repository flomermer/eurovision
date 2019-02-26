import React, {Component} from 'react';
import './style.scss';
import _ from 'lodash';

class PicAndNotes extends Component{
  renderTexts(){
    let {notes} = this.props;
    return _.map(notes, (note, i) => {
      return <div key={i} className={`note ${note.title && 'withTitle'}`} title={note.title}>{note.text}</div>
    });
  }
  render(){
    return(
      <div className='PicAndNotes'>
        <main style={{backgroundImage: `url(${require(`./images/${this.props.pic}`)})`}}/>
        <footer>
          {this.renderTexts()}
        </footer>
      </div>
    );
  }
}

export default PicAndNotes;
