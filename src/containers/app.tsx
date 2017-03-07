import * as React from 'react';

import QuestionViewer from '../components/question-viewer';
import data1 from '../components/data/level1';
import data2 from '../components/data/level2';
import data3 from '../components/data/level3';


// tags:
//   aspirations
//   family
//   personality

class App extends React.Component<any,any> {
  render() {
    var all_data = data1.concat(data2).concat(data3);

    return (
      <div>
      	<QuestionViewer data={all_data} />
      </div>
    );
  };
};

export default App;
