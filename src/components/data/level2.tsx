import IQuestion from './question_interface';

var data2:Array<IQuestion> = [
  {
    img:'https://s-media-cache-ak0.pinimg.com/originals/1f/97/9d/1f979db6e76458eed51f1464cd1f9db5.jpg',
    question: 'If a crystal ball could tell you the truth about yourself, your life, or anything else, what would you want to know?',
    depth:2,
    tags: [
      {
        aspirations: true
      }
    ]
  },
  {
    img:'http://www.billmarshjr.com/wp-content/uploads/2015/08/dream1.jpg',
    question: 'Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?',
    depth: 2,
    tags: [
      {
        aspirations: true
      }
    ]
  },
  {
    img: "https://elearningindustry.com/wp-content/uploads/2014/08/9-Tips-To-Apply-Adult-Learning-Theory-to-eLearning.jpg",
    question: "Regardless of your actual age, do you consider yourself to be an adult?",
    color: "white",
    depth: 2,
    tags: [
      {
        personality: true
      }
    ]
  },
  {
    img: "http://www.prevention.com/sites/prevention.com/files/static/anger-throwing-cup-628x363compass3085296.JPG?1405995496",
    question: "What makes you angry?",
    color: "white",
    depth: 2,
    tags: [
      {
        personality: true
      },
      {
        negative: true
      }
    ]
  },
  {
    img: "http://halfmeasuresroom.com/wp-content/uploads/2016/11/angry.jpg",
    question: "When was the last time you were angry, and why?",
    color: "white",
    depth: 2,
    tags: [
      {
        personality: true
      },
      {
        negative: true
      }
    ]
  },
  {
    img: "https://s-media-cache-ak0.pinimg.com/564x/d3/43/b9/d343b907fd6cf7b7026fb0087f8cb3f3.jpg",
    question: "What is a problem you used to have that you have solved for good?",
    color: "white",
    depth: 2,
    tags: [
      {
        personality: true
      },
      {
        aspirations: true
      }
    ]
  }, 
  {
    img: "http://www.dingtwist.com/wp-content/uploads/2014/07/giving-advice.jpg",
    question: "If you could give an insight to your 20-year-old self, what would it be?",
    color: "white",
    depth: 2,
    tags: [
      {
        aspirations: true
      },
      {
        history: true
      }
    ]
  },
  {
    img: "http://combiboilersleeds.com/images/resistance/resistance-1.jpg",
    question: "What's something you resisted doing that you ended up liking?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      },
      {
        personality: true
      }
    ]
  },
   
]

export default data2;
