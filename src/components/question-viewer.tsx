import * as React from 'react';
import DepthButton from './depth-button';
import QuestionAndImage from './question-and-image';

class QuestionViewer extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {};
    this.state.current = 0;
    this.state.depth = 1;
    this.state.used = [this.getData()[this.state.current].id];
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
    var counter=0;

    //Choose a random index
    //and arbitrary counter is less than 500 (CAN'T HAVE MORE THAN 500 QUESTIONS???) 
    while(choosing == false && counter < 500){
      var new_question_index = Math.floor(Math.random()*this.getData().length)
      //If the id of the question in the data at that index doesn't exist in used...
      if(!(this.state.used.indexOf(this.getData()[new_question_index].id) >= 0)){
        choosing = true;
      }
      counter++;
      //get out of the while loop
    }
    
    if(choosing == true){
      //and set the state for current and update the used array
      this.setState({
        current: new_question_index,
        used: this.state.used.concat(this.getData()[new_question_index].id)
      });
    }

    console.log("These have been used:" + this.state.used)

  };

  render() {
    return (
      <div>
	      <div onClick={this.next.bind(this)}>
	        <QuestionAndImage thing={this.getData()[this.state.current]} />
	      </div>
	      <div style={{textAlign: 'center'}}>
	        <DepthButton depth={1} depthSelectionCallback={this.depthSelection.bind(this)} />
	        <DepthButton depth={2} depthSelectionCallback={this.depthSelection.bind(this)} />
	        <DepthButton depth={3} depthSelectionCallback={this.depthSelection.bind(this)} />
	      </div>
      </div>
    );
  }
};

export default QuestionViewer;
