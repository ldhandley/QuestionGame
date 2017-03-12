import * as React from 'react';

class QuestionAndImage extends React.Component<any,any> {
  constructor(props){
    super(props);
  }
  
  render() {
    return(
      <div>
          <span style={{
            position: "absolute",
            padding: 10,
            margin: 10,
            backgroundColor: 'rgba(0,0,0,0.5)', 
            color: this.props.thing.color || 'white', 
            fontFamily: 'courier',
            fontSize: '1.5em'
          }}>
            {this.props.thing.question}
          </span>
        <img src={this.props.thing.img} style={{
              width: '100%',
              margin: 'auto'
        }}/>
      </div>
    );
  } 
}

export default QuestionAndImage;
