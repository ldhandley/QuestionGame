import * as React from 'react';

import QuestionViewer from '../components/question-viewer';

var data1 = [
  {img: "http://az616578.vo.msecnd.net/files/2016/02/10/635907389307772482120429611_siblings81809slw.jpg",
   question: "How many siblings do you have, and what do they do?",
   color: "white",
   depth: 1
  },  
  {img: "http://cosmouk.cdnds.net/16/03/980x490/landscape-1453286906-143479396.jpg",
   question: "Do you consider yourself an introvert or extravert?",
   color: "white",
   depth: 1
  },
  {img:"https://s-media-cache-ak0.pinimg.com/originals/1f/97/9d/1f979db6e76458eed51f1464cd1f9db5.jpg",
   question: "If a crystal ball could tell you the truth about yourself, your life, or anything else, what would you want to know?",
    depth:2
  },
  {img:"http://www.billmarshjr.com/wp-content/uploads/2015/08/dream1.jpg",
   question: "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
   depth: 2
  },
  {img:"http://data.websitebox.com/data/users/0015/580/uploads/VXQ_fireplacejpg.jpg",
   question: "How close and warm is your family? Do you feel your childhood was happier than most other people's?",
   depth: 3,
   memories: "childhood"
  },
  {img:"http://www.smallbusinessconnect.org/wp-content/uploads/2016/05/mother-429158_1920.jpg",
   question: "How do you feel about your relationship with your mother?",
   depth: 3
  }
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
