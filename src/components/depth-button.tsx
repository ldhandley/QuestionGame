import * as React from 'react';

class DepthButton extends React.Component<any,any>{
  constructor(props){
    super(props);
  }
  
  chooseColor(){
    if(this.props.depth === 1){
      return ['#2ECC71','#208e4e'];
    }
    else if (this.props.depth === 2){ 
      return ['#3498db','#1d6fa5'];
    }
    else if (this.props.depth === 3){ 
      return ['#8067B7','#4C3D6D'];
    }
    else {
      return ['#FFFFFF','#FFFFFF'];
    }
  }
    
  render(){  
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
        background: this.chooseColor()[0],
	      boxShadow: '0px 0.4vw 0px '+ this.chooseColor()[1]
	      }}
	      onClick={()=>{
          this.props.depthSelectionCallback(this.props.depth);
	      }}>
	      {"Level " + this.props.depth}
      </button>
    );
  };
}

export default DepthButton;
