import {Component} from 'react';

class KeyDetect extends Component{
  constructor(props){
    super(props);
    this.keyListener = this.keyListener.bind(this);
  }
  componentDidMount(){
   document.addEventListener("keydown", this.keyListener, false);
 }
 componentWillUnmount(){
   document.removeEventListener("keydown", this.keyListener, false);
 }
 keyListener(event){
   this.props.ascii.forEach((ascii, index) => {
     if(event.keyCode === ascii && this.props.isCtrl && event.ctrlKey) {
       this.props.callback(this.props.payloads[index]);
     }
   })
 }

 render(){
  return null;
 }
}

export default KeyDetect;
