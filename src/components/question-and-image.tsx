import * as React from 'react';

class QuestionAndImage extends React.Component<any,any> {
  constructor(props){
    super(props)
  }
  
  render() {
    return(
      <div style={{
	backgroundImage: "url("+this.props.thing.img+")", 
	padding: 30, 
	backgroundSize: "cover", 
	width: screen.width / 1.5, 
        height: 500,
      	margin: "auto"
      }}>
        <span style={{
	  backgroundColor: "rgba(0,0,0,0.5)", 
	  color: this.props.thing.color || "white", 
	  fontFamily: "courier", 
	  fontSize: "20pt"
        }}>
      	  {this.props.thing.question}
        </span>
      </div>
    )
  } 
}

export default QuestionAndImage;
