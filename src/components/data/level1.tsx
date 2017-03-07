import IQuestion from './question_interface';

var data1:Array<IQuestion> = [
  {
		img: 'http://az616578.vo.msecnd.net/files/2016/02/10/635907389307772482120429611_siblings81809slw.jpg',
		question: 'How many siblings do you have, and what do they do?',
		color: 'white',
		depth: 1,
    tags: [
      {family: true}
    ]
	},  
  {
    img: 'http://cosmouk.cdnds.net/16/03/980x490/landscape-1453286906-143479396.jpg',
    question: 'Do you consider yourself an introvert or extravert?',
    color: 'white',
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    img: "http://img1.rnkr-static.com/list_img_v2/1518/161518/full/countries-ruled-by-a-democracy-u1.jpg",
    question: "Do you consider yourself a left- or right-leaning on financial and social issues?",
    color: "white",
    depth: 1,
    tags: [
      {
        politics: true
      },
      {
        finance: true
      }
    ] 
  },
  {
    img: "https://i.ytimg.com/vi/IUDfxGZ6pPI/maxresdefault.jpg",
    question: "What music genres do you like? Any genres you don't like?",
    color: "white",
    depth: 1,
    tags: [
      {
        interests: true
      }
    ]  
  },
  {
    img: "http://more-sky.com/data/out/8/IMG_272735.jpg",
    question: "Are you a cat person or dog person?",
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
  {
    img: "http://www.betterretailing.com/wp-content/uploads/2015/03/ice-cream-people-696x313.jpg",
    question: "What's your favorite flavor of ice cream?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      }
    ]  
  },
  {
    img: "https://s3.amazonaws.com/usc-cache.salvationarmy.org/f3e44f79-1bb7-488f-b09e-ac13d9ab3b9a_kids-music.jpg",
    question: "Do you play a musical instrument?",
    color: "white", 
    depth: 1,
    tags: [
      {
        abilities: true
      }
    ]
  },
  {
    img: "http://www.livescience.com/images/i/000/034/021/original/shutterstock_102937733.jpg",
    question: "What's your favorite season and why?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      }
    ]
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Oil_painting_palette.jpg",
    question: "What's your favorite color?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      }
    ]
  },
  {
    img: "http://www.restaurantbusinessonline.com/sites/default/files/styles/731_x_411/public/takeout-food-boxes-to-go_0.jpg",
    question: "What's your favorite drive-through or take-out meal?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      }
    ]
  },
  {
    img: "http://cdn.pcwallart.com/images/cool-alarm-clock-wallpaper-2.jpg",
    question: "What do you do on a 'normal day'?  Start with 'I wake up, and...'  End with '...and then I go to sleep'.",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      },
      {
        personality: true
      },
      {
        interests: true
      }
    ]
  },
  {
    img: "http://www.promobilewebsites.com.au/wp-content/uploads/sites/13/2014/01/person-searching-on-smartphone.jpg",
    question: "What's your favorite social media channel?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      }
    ]
  },
  {
    img: "http://dingo.care2.com/pictures/greenliving/1276/1275121.large.jpg",
    question: "Do you have pets?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      }
    ]
  },
  {
    img: "https://www.doschdesign.com/images2/Red-DVI-People-Sports.jpg",
    question: "Do you play or watch any sports?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      },
      {
        interests: true
      }
    ]
  },
  {
    img: "http://addictionblog.org/wp-content/uploads/2011/06/Why-do-people-start-drinking-alcohol-Top-10-reasons2.jpg",
    question: "Do you remember the first time you drank alcohol, smoked a cigarrette, or took drugs?",
    color: "white",
    depth: 1,
    tags: [
      {
        history: true
      },
      {
        preferences: true
      },
      {
        negative: true
      }
    ]
  },
  {
    img: "http://www.slate.com/content/dam/slate/articles/health_and_science/medical_examiner/2014/10/141002_MEDEX_AlcoholDrinking.jpg.CROP.promo-mediumlarge.jpg",
    question: "When was the last time you drank, smoked a cigarette, or took drugs?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      },
      {
        negative: true
      }
    ]
  },
  {
    img: "https://www.mcminnlaw.com/assets/accident-car-ambulance.jpg",
    question: "Have you ever been in a car accident?",
    color: "white",
    depth: 1,
    tags: [
      {
        history: true
      },
      {
        negative: true
      }
    ]
  },
  {
    img: "http://i.huffpost.com/gen/1447961/images/o-YOUNG-PEOPLE-TALKING-TO-OLD-PEOPLE-facebook.jpg",
    question: "What age do you consider old?",
    color: "white",
    depth: 1,
    tags: [
      {
        personality: true
      },
      {
        preferences: true
      }
    ]
  },
  {img: "https://thumbs.dreamstime.com/x/north-america-space-11512625.jpg",
    question: "Do you have relatives in other states (or countries)? If so, which ones?",
    color: "white",
    depth: 1,
    tags: [
      {
        family: true
      }
    ]
  },
  {
    img: "http://martintrench.com/wp-content/uploads/2014/11/Cup-of-coffee-coffee-17731301-1680-1050.jpg",
    question: "Are you a morning person?",
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
  {
    img: "http://www.greentoys.com/sites/default/files/151023_GreenToys_Bestseller_Baby_0369_887x591.jpg",
    question: "What were your favorite toys when you were younger?",
    color: "white",
    depth: 1,
    tags: [
      {
        preferences: true
      },
      {
        memory: true
      }
    ]
  },
  {
    img: "http://p2cdn4static.sharpschool.com/UserFiles/Servers/Server_3076632/Image/staff%20images/6th%20Grade/Tombs/Technology/School-Food.jpg",
    question: "What's the first memory you have when you think of the words 'school lunch'?",
    color: "white",
    depth: 1,
    tags: [
      {
        history: true
      },
      {
        memory: true
      }
    ]
  },
  {
    img: "http://www.ronedmondson.com/wp-content/uploads/2012/06/little-boy-waiting1.jpg",
    question: "What's something you remember looking forward to when you were young?",
    color: "white",
    depth: 1,
    tags: [
      {
        memory: true
      },
      {
        history: true
      },
      {
        preferences: true
      }
    ]
  },
  {
    img: "http://wallpapers-diq.org/wallpapers/11/Gas_Ring%2C_Water_Flame_Fantasy.jpg",
    question: "What's a phase you went through?",
    color: "white",
    depth: 1,
    tags: [
      {
        memory: true
      }
    ]
  },
  {
    img: "http://discoveringalabama.org/wp-content/uploads/2012/04/geography-teacher-4.jpg",
    question: "How do you think your teachers would have described you?",
    color: "white",
    depth: 1,
    tags: [
      {
        memory: true
      },
      {
        personality: true
      }
    ]
  },
  {
    img: "http://www.childrensrights.org/wp-content/uploads/2014/09/2011-07-06_ri_blog_post_kids_blurry_running.jpg",
    question: "What's a story you've heard about something you did when you were young?",
    color: "white",
    depth: 1,
    tags: [
      {
        memory: true
      },
      {
        family: true
      },
      {
        history: true
      }
    ]
  },
  {
    img: "http://blogs.voanews.com/science-world/files/2014/01/wakingupfromanightmare.jpg",
    question: "What's one of the scariest dreams you can remember having?",
    color: "white",
    depth: 1,
    tags: [
      {
        memory: true
      },
      {
        negative: true
      }
    ]
  },
    
]

export default data1;
