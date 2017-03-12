import IQuestion from './question_interface';

var data1:Array<IQuestion> = [
  {
    id: '60b7d196-64bc-426f-a0ba-a6bb22683f43',
    img: 'http://az616578.vo.msecnd.net/files/2016/02/10/635907389307772482120429611_siblings81809slw.jpg',
		question: 'How many siblings do you have, and what do they do?',
		color: 'white',
		depth: 1,
    tags: [
      {family: true}
    ]
	},  
  {
    id: '5c64a1aa-56b3-4283-800f-353d14c5eb1d',
    img: 'http://cosmouk.cdnds.net/16/03/980x490/landscape-1453286906-143479396.jpg',
    question: 'Do you consider yourself an introvert or extravert?',
    color: 'white',
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    id: 'cecdc61f-d1f5-417a-9ee9-04aeb503d825',
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
    id: '5fecdcc4-caa2-4098-9201-a13c80644209',
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
    id: '467196a3-7d4f-4873-bea3-349fed65367d',
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
    id: '087638d7-46c9-4169-a1f8-4dc4b7e0f563',
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
    id: '48c917cd-95b6-450a-acb3-fc0b12027445',
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
    id: 'f9f44156-7c2f-4bd4-bcec-4cbec25d1f18',
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
    id: 'b79d00a8-eee0-4c4c-9ee4-6b2093d0f282',
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
    id: 'f63402a3-dd89-45b7-823f-66dc1f462912',
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
    id: '759169bb-c52a-4c48-a1bc-e098b1e67686',
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
    id: '1da32f97-cc75-4289-a6e9-bcbba26ea704',
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
    id: '13160dee-c4fc-4ed4-b174-85bfdc6928db',
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
    id: '86e9449b-31c1-44c9-bcc9-59f47d4501f3',
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
    id: 'fc91aa5a-1c55-470b-8d37-49b3a439691f',
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
    id: '86729ecd-f1e9-43e9-918d-34f1281c6641',
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
    id: 'de0efe5f-9d5f-4fe1-b12b-5ae01a91f110',
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
    id: 'f2cbba5c-0ea3-4546-b509-39d09b2564a1',
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
  {
    id: '755d2849-92fc-445f-971a-b4f9edc3f7ed',
    img: "https://thumbs.dreamstime.com/x/north-america-space-11512625.jpg",
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
    id: '5d119dd4-1864-46f9-9631-1b1b9357a2f6',
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
    id: 'a352cc73-8298-4adc-a4cd-57f0874c73f1',
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
    id: '5a4eb4ed-c727-46ab-a069-f3ae4d205005',
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
    id: '4b11beca-2dd5-4a6e-956e-4a2de93981d7',
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
    id: '8dfb576b-acaf-47fb-81f9-ccbc02a37e30',
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
    id: 'cda15437-ccd1-4d8d-af2b-136b85e7dab4',
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
    id: '49fa864d-2d08-4b18-9a15-678077f1d364',
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
    id: '738393aa-3f88-4a6d-82f5-109ec2699e20',
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
  {
    id: '592982d2-0d8f-40e1-99e8-59020527cab1',
    img: "https://stopandpraytv.files.wordpress.com/2015/03/sin-apple.jpg",
    question: "What temptations would you be better off removing from your life?",
    color: "white",
    depth: 1,
    tags: [
    ]
  },
  {
    id: '6b19b370-31eb-43ba-b935-14c8fcdc9f81',
    img:"http://cdn.attackofthecute.com/January-04-2013-19-49-49-k.jpg",
    question: "What activity do you never procrastinate on when it needs doing?",
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    id: '2597c520-7a50-46ea-b089-88529af28fbd',
    img:"http://www.guardyourhealth.com/wp-content/uploads/2014/05/160887834_1600x1000-800x500.jpg",
    question: "What's something you enjoy doing for other people?",
    depth: 1,
    tags: [
      {personality: true},
      {interests: true}
    ]
  },
  {
    id: '430cbd6b-ea1b-4131-bbe6-2b1db5d5021b',
    img:"https://onlossandlove.files.wordpress.com/2015/01/little-girl-smiling.jpg",
    question: "What's something you enjoy doing again and again?",
    depth: 1,
    tags: [
      {interests: true}
    ]
  },
  {
    id: 'baf4e6e7-9063-40ec-8f12-59c7f520f40d',
    img:"https://media.mnn.com/assets/images/2015/03/women-laughing.jpg.653x0_q80_crop-smart.jpg",
    question: "When did you last laugh so much it hurt?",
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    id: 'd2fffd28-d6e7-4a1b-aa6d-156a1cd4c01f',
    img:"http://46iz7l49slf33wb8i5o2x0r406.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/cliff_wide-054d76bca17db78df42b4c95905b64cdc48bfe2a-s6-c30.jpg",
    question: "If you woke up tomorrow with no fear, what would you do first?",
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    id: '1034d784-b808-4a46-bb68-d43abd3c0ba3',
    img:"http://www.planetware.com/photos-large/CAY/caribbean-best-beaches-pink-sand-beach.jpg",
    question: "What's something that always leaves you wanting more?",
    depth: 1,
    tags: [
      {interests: true}
    ]
  },
  {
    id: 'ed01317e-40d4-4830-9c94-3505569ce285',
    img:"http://s.hswstatic.com/gif/water-life-crop.jpg",
    question: "What's the first childhood memory you think of when you hear the word 'Water'?",
    depth: 1,
    tags: [
      {memory: true}
    ]
  },
  {
    id: 'f75b4e14-adb7-48d1-9df9-cd74a7cf5325',
    img:"https://static.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg",
    question: "What's the first childhood memory you think of when you hear the word 'Stars'?",
    depth: 1,
    tags: [
      {memory: true}
    ]
  },
  {
    id: '16b5a549-f432-4b30-8369-109c0f13981c',
    img:"https://cdn.pastemagazine.com/www/articles/1roadtripmain.jpg",
    question: "What's the first childhood memory you think of when you hear the word 'Car'?",
    depth: 1,
    tags: [
      {memory: true}
    ]
  },
  {
    id: '3017a2ad-14b1-461a-9f9f-b9f8b5f2cc8f',
    img:"http://4.bp.blogspot.com/_-FEgefSk_mQ/TFeSdEZeJfI/AAAAAAAAAZc/N6SY6VUQX4s/s400/IMG_9467.JPG",
    question: "What's the earliest school-related memory that comes to mind? (First day of school?)",
    depth: 1,
    tags: [
      {memory: true}
    ]
  },
  {
    id: '2864ba7a-b383-4223-ac6c-5b02d53a94d5',
    img:"http://golf4good.org/wp-content/uploads/2016/05/dinner.jpg",
    question: "Given the choice of anyone in the world, whom would you want as a dinner guest?",
    depth: 1,
    tags: [
      {interests: true}
    ]
  },
  {
    id: '09cd307f-0b33-4e34-8259-c353aba66195',
    img:"https://www.serentespa.com/serentespawp/wp-content/uploads/Red-Carpet-Ready.jpg",
    question: "Would you like to be famous? In what way?",
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    id: '68abbc1f-b04b-4475-880c-a360ca75ed6b',
    img:"https://c1.staticflickr.com/6/5821/21709019379_4c9f743339_b.jpg",
    question: "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
    depth: 1,
    tags: [
      {personality: true}
    ]
  },
  {
    id: 'f76d6c8b-d038-4c77-9fc9-9cb720261bf3',
    img:"https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg",
    question: "What would constitute a “perfect” day for you?",
    depth: 1,
    tags: [
      {personality: true},
      {preferences: true}
    ]
  },
  {
    id: '1acbe3e0-49e9-48ea-b783-3b22d7f3c881',
    img:"http://az616578.vo.msecnd.net/files/2015/12/19/6358614596527738711752945771_music.jpg",
    question: "When did you last sing to yourself? To someone else?",
    depth: 1,
    tags: [
    ]
  },
  {
    id: '564c16f4-3142-4adc-bbbf-5865937a85f7',
    img:"http://www.washington.edu/news/files/2014/01/elderly-man-teaches-grandson-about-chess.jpg",
    question: "If you were to live to the age of 90 and retain the mind or body of a 30-year-old, which would you want?",
    depth: 1,
    tags: [
    ]
  },
  {
    id: 'bcda1f12-ae7f-48e3-9506-2142ece340f7',
    img:"https://www.pickthebrain.com/blog/wp-content/uploads/2014/01/change-your-life.png",
    question: "Take four minutes and tell your life story in as much detail as possible.",
    depth: 1,
    tags: [
      {history: true},
      {memory: true}
    ]
  },
  {
    id: '90615aee-ebd1-441d-86ee-f42cd464446c',
    img:"http://wallpaper-gallery.net/images/mountain-image/mountain-image-2.jpg",
    question: "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
    depth: 1,
    tags: [
    ]
  }
]

export default data1;
