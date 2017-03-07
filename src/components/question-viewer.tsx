import * as React from 'react';
import QuestionAndImage from './question-and-image';

class QuestionViewer extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {};
    this.state.current = 0;
    this.state.depth = 1;
  };

  chooseColor(n){
    if(n === 1){
      return ['#2ECC71','#208e4e'];
    }
    else if (n === 2){ 
      return ['#3498db','#1d6fa5'];
    }
    else if (n === 3){ 
      return ['#8067B7','#4C3D6D'];
    }
    else {
      return ['#FFFFFF','#FFFFFF'];
    }
  }
      
  depthButton(n){
    return (
      <button 
        style={{
	  border: 'none',
	  textAlign: 'center',
	  padding: '1.2vw 3vw 1vw',
	  borderRadius: '0.2vw',
	  fontWeight: 'bold',
	  textTransform: 'uppercase',
	  margin: '1.3vw',
	  outline: 'none',
	  cursor: 'pointer',
	  transition: 'all .15s',
	  color: 'white',
          background: this.chooseColor(n)[0],
	  boxShadow: '0px 0.4vw 0px '+ this.chooseColor(n)[1]
	}}
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
	  <h1>Intimacy level: </h1>
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
