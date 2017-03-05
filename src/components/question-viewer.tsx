import * as React from 'react';

import QuestionAndImage from './question-and-image';

class QuestionViewer extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {};
    this.state.current = 0;
    this.state.depth = 1;
  };
      
  depthButton(n){
    return (
      <button style={{
        background: this.state.depth === n ? 'gray' : 'white', 
        border: 'none'}} 
	onClick={()=>{
          this.setDepth(n);
	}}>
	{n}
      </button>
    );
  };

  // Return all questions in the data set where the intimacy depth is the same as what's currently saved in state 
  getData(){
    return this.props.data
      .filter((d)=>{
        return (d.depth === this.state.depth);
      });
  };

  setDepth(depth){
    this.setState({
      depth: depth, 
      current: 0
    });
  };

  next(){
    this.setState({
      current: (this.state.current + 1) % this.getData().length
    });
  };

  render() {
    return (
      <div>
	<div onClick={this.next.bind(this)}>
	  <QuestionAndImage thing={this.getData()[this.state.current]} />
	</div>
	<div style={{textAlign: 'center'}}>
	  {'Intimacy level: '}
	  {this.depthButton(1)}
	  {this.depthButton(2)}
	  {this.depthButton(3)}
	  <div>
	    {'There are ' + this.getData().length + ' questions at this intimacy level.'}
	  </div>
	</div>
      </div>
    );
  }
};

export default QuestionViewer;
