import * as React from 'react';

import QuestionViewer from '../components/question-viewer';

var data1 = [
  {img: "http://az616578.vo.msecnd.net/files/2016/02/10/635907389307772482120429611_siblings81809slw.jpg",
   question: "How many siblings do you have, and what do they do?",
   color: "white",
   depth: 1,
   negative: true},  
  {img: "http://cosmouk.cdnds.net/16/03/980x490/landscape-1453286906-143479396.jpg",
   question: "Do you consider yourself an introvert or extravert?",
   color: "white",
   depth: 1,
   negative: true}
]

class App extends React.Component<any,any> {
  render() {
    return (
      <div>
      	<QuestionViewer data = {data1}/>
      </div>
    );
  };
};

export default App;
