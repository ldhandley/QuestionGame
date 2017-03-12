import * as React from 'react';

import QuestionViewer from '../components/question-viewer';
import data1 from '../components/data/level1';
import data2 from '../components/data/level2';
import data3 from '../components/data/level3';


// tags:
//   abilities
//   aspirations
//   family
//   finance
//   history
//   interests
//   lovelife
//   memory
//   personality
//   politics
//   preferences

class App extends React.Component<any,any> {
  render() {

    return (
      <div style={{width:"100%"}}>
      	<QuestionViewer 
          level1={data1} 
          level2={data2} 
          level3={data3}
        />
      </div>
    );
  };
};

export default App;
