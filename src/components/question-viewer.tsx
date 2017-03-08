import * as React from 'react';
import DepthButton from './depth-button';
import QuestionAndImage from './question-and-image';

//TODO: UPDATE questions with GUID attributes and values: https://www.guidgenerator.com/online-guid-generator.aspx

class QuestionViewer extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {};
    this.state.current = 0;
    this.state.depth = 1;
    this.state.used = [];
  };

  // Return all questions in the data set where the intimacy depth is the same as what's currently saved in state 
  getData(){
    if (this.state.depth === 1){
      return this.props.level1;
    }
    else if (this.state.depth === 2){
      return this.props.level2;
    }
    else if (this.state.depth === 3){
      return this.props.level3;
    }
  };

  depthSelection(depth){
    this.setState({
      depth: depth, 
      current: 0
    });
  };

  next(){
    var choosing=false;

    //Choose a random index
    while(choosing == false){
      var new_question_index = Math.floor(Math.random()*this.getData().length)
      if(!(this.state.used.indexOf(new_question_index) >= 0)){
        choosing = true;
      }
     
    }
    
    this.setState({
      current: new_question_index,
      used: this.state.used.concat([new_question_index])
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
	        <DepthButton depth={1} depthSelectionCallback={this.depthSelection.bind(this)} />
	        <DepthButton depth={2} depthSelectionCallback={this.depthSelection.bind(this)} />
	        <DepthButton depth={3} depthSelectionCallback={this.depthSelection.bind(this)} />
          <div>
	          {'There are ' + this.getData().length + ' questions at this intimacy level.'}
	        </div>
	      </div>
      </div>
    );
  }
};

export default QuestionViewer;
