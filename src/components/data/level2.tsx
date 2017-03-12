import IQuestion from './question_interface';

var data2:Array<IQuestion> = [
  {
    id: '385bba4e-8d3c-4630-87c1-856bc6d81337',
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
    id: '41e53003-d3d6-4546-8f73-c3d734d88df8',
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
    id: '68707c85-2b58-43bf-9c1f-93c51b6dedf0',
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
    id: 'bd360003-5098-49e3-a114-e4bce3cf9e7a',
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
    id: 'b2a77095-d9b1-4bec-aa16-37f99b06dc57',
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
    id: '88e77b97-df31-4b11-9fcc-12ce0afe14ad',
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
    id: '32287af2-6f21-4079-bff4-488ee39b5295',
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
    id: '8938a022-2284-41ea-9ec8-10975e7bcf2b',
    img: "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/blogs/130326/2013/10/134511-134329.jpg?itok=EjrVL-zP",
    question: "What's something you resisted doing that you ended up liking?",
    color: "white",
    depth: 2,
    tags: [
      {
        preferences: true
      },
      {
        personality: true
      }
    ]
  },
  {
    id: '139d7c2a-f647-4794-8d02-620f72deed42',
    img:"http://farm1.static.flickr.com/75/156398965_7204fbb1ba_b.jpg",
    question: "What's the single worst quality a person can have?",
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
    id: '6fb916b5-cc8c-4025-9fde-1bae1ff5540d',
    img:"http://www.space.com/images/i/000/055/491/original/Mike_killian-milky-way.jpg?interpolation=lanczos-none&fit=inside%7C660:*",
    question: "What will you never know for sure?",
    depth: 2,
    tags: [
    ]
  },
  {
    id: '94c95cec-1344-4615-8cc7-27bf88bce8ad',
    img:"http://www.radioiloveit.com/wp-content/uploads/female-radio-listener-headphones-smiling-eyes-closed-01.jpg",
    question: "What song reminds you of good times from your teenage years?",
    depth: 2,
    tags: [
      {
        memory: true
      }
    ]
  },
  {
    id: 'd9d155a8-0b9d-47ff-b9a4-f0db8337ff0e',
    img:"https://drscdn.500px.org/photo/80448871/m%3D900/53a4c1fb9f6494b856f0f1956e691bed",
    question: "What's something you don't care about even though lots of people do seem to care about it?",
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
    id: 'cb628e5a-b41f-4747-89cc-bcedce36d98a',
    img:"http://www.safran-arts.com/art/photographs-new-york-crowded-street-48-53-12.jpg",
    question: "When did you last judge someone you didn't even know?",
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
    id: '4a686760-7f7b-4d0e-8b40-e7317683eebf',
    img:"https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAW3AAAAJGRhM2YyM2FhLTE1YjMtNDU5ZS04MjNhLTM2ZGU1NWQ2NmU0NA.jpg",
    question: "In one word, what's standing between you and your biggest goal?",
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
    id: 'a91acf52-1969-46ca-bbd5-a161c5c5549d',
    img:"http://unitedbloggers.no/uploads/sites/88/2015/12/secret1.jpg",
    question: "Do you have a secret hunch about how you will die?",
    depth: 2,
    tags: [
      {
        negative: true
      }
    ]
  },
  {
    id: '5222b604-ed45-4616-be6d-4acf8b6979eb',
    img:"http://www.abc.net.au/news/image/6813488-3x2-940x627.jpg",
    question: "Name three things you and someone else playing this game appear to have in common.",
    depth: 2,
    tags: [
    ]
  },
  {
    id: 'f4ed7b35-f048-4f8c-9633-a6f504a03ae9',
    img:"http://az616578.vo.msecnd.net/files/2016/02/14/635910651833815068-341846207_swing-childhood-mood.jpg",
    question: "If you could change anything about the way you were raised, what would it be?",
    depth: 2,
    tags: [
      {
        family: true
      },
      {
        memory: true
      }
    ]
  },
  {
    id: '02848fb8-1944-4973-8d7a-5c248b59b02c',
    img:"https://s-media-cache-ak0.pinimg.com/originals/1f/97/9d/1f979db6e76458eed51f1464cd1f9db5.jpg",
    question: "If a crystal ball could tell you the truth about yourself, your life, or anything else, what would you want to know?",
    depth: 2,
    tags: [
    ]
  },
  {
    id: '6eb48c72-aeef-4c3a-87b0-c64e8ac95a63',
    img:"http://www.billmarshjr.com/wp-content/uploads/2015/08/dream1.jpg",
    question: "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
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
    id: '62a8402b-720b-4ff5-b02e-25105b07227d',
    img:"http://kingofwallpapers.com/sprout/sprout-023.jpg",
    question: "What is the greatest accomplishment of your life?",
    depth: 2,
    tags: [
      {
        history: true
      }
    ]
  },
  {
    id: '4656d0bd-5e96-4234-8573-13a162a88cea',
    img:"https://cdn.thinglink.me/api/image/773479278535770114/1240/10/scaletowidth",
    question: "What do you value most in a friendship?",
    depth: 2,
    tags: [
      {
        personality: true
      }
    ]
  },
  {
    id: '16573d3f-1a39-40a8-9484-ee6e527947cf',
    img:"http://www.hbc333.com/data/out/85/47131972-friendship-pictures.png",
    question: "What does friendship mean to you?",
    depth: 2,
    tags: [
      {
        personality: true
      }
    ]
  },
  {
    id: 'eaa21afb-ef95-453a-ab65-0a32eb2b2eee',
    img:"http://www.pen-outwrite.org/wp-content/uploads/2015/05/Image-Eric-Kilby-Embrace-Sculpture1-700x467.jpg",
    question: "What roles do love and affection play in your life?",
    depth: 2,
    tags: [
      {
        personality: true
      }
    ]
  },
  {
    id: 'cba96c61-e291-4cde-a6a1-ccd266b45414',
    img:"https://www.callcentrehelper.com/images/stories/2010/2015/08/positive.jpg",
    question: "Alternate sharing something you consider a positive characteristic of the the people in your group. Share a total of two items with each person.",
    depth: 2,
    tags: [
    ]
  },
  {
    id: '5aab71ba-0a39-4eb2-bb46-54568f721202',
    img:"http://www.clipartkid.com/images/786/children-silhouettes-holding-hands-up-by-macinivnw-on-deviantart-LmjNJU-clipart.jpg",
    question: "Make three true 'we' statements each. For instance, 'We are all in this room feeling ...' ",
    depth: 2,
    tags: [
    ]
  },
  {
    id: 'ce2dc065-748e-412b-9e54-b3a286013099',
    img:'http://files.differencebetween.com/wp-content/uploads/2016/03/Difference_Between_CloseFriend_BestFriend_Image1.jpg',
    question: "If you were going to become a close friend with the person to your right, please share what would be important for him or her to know.",
    depth: 2,
    tags: [
    ]
  },
  {
    id: '216fb7c3-7aa9-4dbe-90e2-7a303537c0e3',
    img:'http://wmsmile.com/wp-content/uploads/2015/12/smiling-group-of-people.jpg',
    question: "Tell the person to your right something that you like about them already.",
    depth: 2,
    tags: [
    ]
  },
  {
    id: '4288d5d9-bef3-4fef-a854-089612862ae9',
    img:'https://s-media-cache-ak0.pinimg.com/originals/64/d4/e7/64d4e7f648c93f7c98203034a5d79923.jpg',
    question: "What, if anything, is too serious to be joked about?",
    depth: 2,
    tags: [
      {
        personality: true
      }
    ]
  },
  {
    id: '5bd98256-9bc6-4c5f-a5bd-60862c646c42',
    img:'http://static.wixstatic.com/media/875d61_a96bf8a3f9384749b9a3830ba35ac918.jpg',
    question: "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
    depth: 2,
    tags: [
      {
        preferences: true
      }
    ]
  }   
]

export default data2;
