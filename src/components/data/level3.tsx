import IQuestion from './question_interface';

var data3:Array<IQuestion> = [
  {
    img:'http://data.websitebox.com/data/users/0015/580/uploads/VXQ_fireplacejpg.jpg',
    question: 'How close and warm is your family? Do you feel your childhood was happier than most other people\'s?',
    depth: 3,
    tags: [
      {family: true},
      {childhood: true},
      {memory: true}
    ]
  },
  {
    img:'http://www.smallbusinessconnect.org/wp-content/uploads/2016/05/mother-429158_1920.jpg',
    question: 'How do you feel about your relationship with your mother?',
    depth: 3,
    tags: [
      {family: true}
    ]
  },
  {
    img: "https://static.pexels.com/photos/6371/red-love-heart-valentines.jpg",
    question: "List the people you've dated in life.  Say a few words about each relationship.",
    color: "white",
    depth: 3,
    tags: [
      {lovelife: true},
      {history: true}
    ]
  },
  {
    img: "https://media.giphy.com/media/nm82hi108J4DC/giphy-facebook_s.jpg",
    question: "How often do you do things out of spite?",
    color: "white",
    depth: 3,
    tags: [
      {personality: true},
      {negative: true}
    ]
  },
  {
    img: "https://s-media-cache-ak0.pinimg.com/736x/ae/c1/9f/aec19f14b08aeab81758183ffbd238c5.jpg",
    question: "How do you think your future self will judge the person you are today?",
    color: "white",
    depth: 3,
    tags: [
      {aspirations: true}
    ]
  },
   
]

export default data3;
