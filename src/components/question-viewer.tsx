import * as React from 'react';

import QuestionAndImage from './question-and-image';

class QuestionViewer extends React.Component<any, any> {
  constructor(props){
    super(props)
    this.state = {}
    this.state.current = 0
    this.state.depth = 1
    this.state.negative = false
  }
      
  depthButton(n){
    return (
      <button style={{
        background: this.state.depth == n ? "gray" : "white", 
        border: "none"}} 
	onClick={()=>{this.setDepth(n)}}>{n}
      </button>
    )
  }
  
  getData(){
    return this.props.data
      .filter((d)=>{
        return d.depth == this.state.depth
      })
      .filter((d)=>{			       return !this.state.negative || !!d.negative == !!this.state.negative
      }) 
  }

  setDepth(depth){
    this.setState({
      depth: depth, 
      current: 0
    })
  }
  
  render() {
    return (
      <div>
	<div>
	  <QuestionAndImage thing={this.getData()[this.state.current]} />
	</div>
	<div style={{textAlign: "center"}}>
	  {this.depthButton(1)}
	  {this.depthButton(2)}
	  {this.depthButton(3)}
	  <button 
	    style={{
	      backgroundColor: "white",
	      border: "none"
	    }} 
	    onClick={()=>{
	      this.setState({
	        negative: !this.state.negative
	      })
	    }}>
	    {this.state.negative ? "-" : "+"}
	  </button>
	  <div>
	    {this.getData().length + " questions."}
	  </div>
	</div>
      </div>
    );
  }
}

export default QuestionViewer;
