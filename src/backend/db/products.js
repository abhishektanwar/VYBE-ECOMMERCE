import { v4 as uuid } from "uuid";
import utils from "../../utils";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Men's Trekking 50+10 L Backpack MT500 Air",
    description:"The MT500 AIR has been designed for you by our team of enthusiasts. Developed from the TREK 500, the MT500 AIR range has a new taut mesh back as well as a new polyamide component combining light weight and strength. The perfect bag for all types of hike!",
    image:utils.getImg("Hiking-Trekking","img1.webp"),
    imgAlt:"trekking_backpack",
    price:{current:6999,old:9999},
    seller:"Forclaz India",
    quantity:5,
    rating:4.3,
    featured:true,
    category:"hikingandtrekking",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"4356834"

  },
  {
    _id: uuid(),
    title: "Travel Backpack 50L - Forclaz 50",
    description:"We have designed this backpack for all those first outdoor adventures, whether it be mountain trekking or travelling around the world. A simple and functional bag with its pockets and front access, practical for occasional outings that require 50 L volume.",
    image:utils.getImg("Hiking-Trekking","img2.webp"),
    imgAlt:"trekking_backpack_small",
    price:{current:3999,old:4999},
    seller:"Forclaz India",
    quantity:3,
    rating:4,
    featured:false,
    category:"hikingandtrekking",
    badgeText:{
      text:"New Arrival",
      bg:"primary"
    },
    referenceId:"4673575"

  },
  {
    _id: uuid(),
    title: "Camping Tent MH100 - 2-Person",
    description:"Our designers eco-designed this 2-person tent that is simple and easy to pitch. A responsible and accessible tent. Thanks to its free-standing dome structure, it can be moved to a better location after it has been deployed.",
    image:utils.getImg("Hiking-Trekking","img3.webp"),
    imgAlt:"camping_tent",
    price:{current:2499,old:2999},
    seller:"QUECHUA India",
    quantity:5,
    rating:4.3,
    featured:true,
    category:"hikingandtrekking",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"2354346"

  },
  {
    _id: uuid(),
    title: "Travel Trekking Zip-Off Cargo Trousers - Travel 100 Zip-Off - khaki",
    description:"Our backpacker designers have designed these trousers so that you can travel the world with confidence, whatever the environment. Equipped with numerous pockets including 3 closing pockets these durable zip-off cargo pants which can be converted to shorts are perfect for taking on adventures & exploring world's different regions",
    image:utils.getImg("Hiking-Trekking","img4.webp"),
    imgAlt:"trekking_trouser",
    price:{current:2199,old:2999},
    seller:"Forclaz India",
    quantity:2,
    rating:4.6,
    featured:true,
    category:"hikingandtrekking",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"4556342"

  },
  {
    _id: uuid(),
    title: "Women's Hiking T-shirt - NH500",
    description:"Our hiker designers have eco-designed this NH500 T-Shirt for regular hiking in the plain, forest or on the coast. The perfect t-shirt in hot weather thanks to its loose fit and the ventilated jacquard insert on the back. The blend of recycled cotton, recycled polyester and Lyocell creates softness.",
    image:utils.getImg("Hiking-Trekking","img5.webp"),
    imgAlt:"trekking_women-tshirt",
    price:{current:499,old:699},
    seller:"QUECHUA India",
    quantity:5,
    rating:4.8,
    featured:true,
    category:"hikingandtrekking",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"6578905"

  },
  // skiing
  {
    _id: uuid(),
    title: "DOWNHILL SKIS WITH BOOST 500 BINDINGS - BLUE",
    description:"Our team, parents of little skiers, have developed these skis to support children's progress. Ideal to learn new turns. The sidecut and distribution of flexibility make this ski perfect for helping young skiers progress quickly.",
    image:utils.getImg("Skiing-Snowboarding","img1.webp"),
    imgAlt:"skis_blue",
    price:{current:9999,old:14999},
    seller:"WEDZE India",
    quantity:5,
    rating:4.2,
    featured:true,
    category:"skiingandsnowboarding",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"6554905"

  },
  {
    _id: uuid(),
    title: "ON-PISTE SKIS WITH 150 BINDINGS - YELLOW",
    description:"Ideal for skiers who want to progress on piste to intermediate level. It is a reassuring and comfortable ski on all types of snow. This ski enables you to increase skills at your own pace, learn on more varied types of snow for greater versatility. It also enables you to easily control trajectories.",
    image:utils.getImg("Skiing-Snowboarding","img2.webp"),
    imgAlt:"skis_199_yellow",
    price:{current:11999,old:17999},
    seller:"WEDZE India",
    quantity:5,
    rating:4.5,
    featured:true,
    category:"skiingandsnowboarding",
    badgeText:{
      text:"New Arrival",
      bg:"primary"
    },
    referenceId:"6578125"

  },
  {
    _id: uuid(),
    title: "MEN'S SKI JACKET 100 - BLACK",
    description:"This warm and comfortable jacket is great for learning to ski in the best conditions. In addition to being warm, this jacket provides essential protection against the elements. Ideal for making the most of your skiing holiday.",
    image:utils.getImg("Skiing-Snowboarding","img3.webp"),
    imgAlt:"skiing_jacket_mens",
    price:{current:1199,old:1699},
    seller:"QUECHUA India",
    quantity:2,
    rating:4,
    featured:true,
    category:"skiingandsnowboarding",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"5528905"

  },
  {
    _id: uuid(),
    title: "WOMEN'S SKI JACKET 100 - BEIGE",
    description:"This warm and comfortable jacket is great for learning to ski in the best conditions. In addition to being warm, this ski jacket provides essential protection against the elements. Ideal for making the most of your skiing holiday.",
    image:utils.getImg("Skiing-Snowboarding","img4.webp"),
    imgAlt:"skiing_jacket_women",
    price:{current:1299,old:1999},
    seller:"QUECHUA India",
    quantity:3,
    rating:4.8,
    featured:true,
    category:"skiingandsnowboarding",
    badgeText:{
      text:"New Arrival",
      bg:"primary"
    },
    referenceId:"2458405"

  },
  {
    _id: uuid(),
    title: "SNOWBOARDING GOGGLES MEN’S SNOW 100 FAIR WEATHER BLUE - P",
    description:"The SNOW 100 goggles let you ski in sunny or cloudy weather. Its brown lens benefits from the Essentiel anti-fogging treatment. Wearing corrective lenses 135mm wide is possible in size L.",
    image:utils.getImg("Skiing-Snowboarding","img5.webp"),
    imgAlt:"skiing_goggles",
    price:{current:499,old:699},
    seller:"WEDZE India",
    quantity:2,
    rating:3.7,
    featured:false,
    category:"skiingandsnowboarding",
    badgeText:{
      text:"",
      bg:""
    },
    referenceId:"3245905"
  },
  // rock climbing
  {
    _id: uuid(),
    title: "Men's Mountaineering Trousers - Alpinism Black",
    description:"These trousers for glacier hiking, cold-weather mountaineering and ski touring were developed in partnership with our mountain guides. Warm and durable, they offer great freedom of movement. Modular design with: adjustable detachable braces ventilation zip reinforced and gusseted lower leg detachable built-in gaiters",
    image:utils.getImg("RockClimbing-Mountaineering","img1.webp"),
    imgAlt:"mountaineering_trousers_men",
    price:{current:3999,old:4999},
    seller:"SIMOND India",
    quantity:3,
    rating:4.7,
    featured:true,
    category:"rockclimbingandmountaineering",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"3212905"
  },
  {
    _id: uuid(),
    title: "Men's Mountaineering Down Jacket - Makalu Red",
    description:"Our warmest down jacket! Down-filled and specially designed to protect mountaineers on their expeditions in extreme cold: down to -29°C High loft, very lightweight (only 610 g in size L) and compressible. It is also water-repellent with a durable reinforced area at the bottom of the sleeves to protect you from the elements.",
    image:utils.getImg("RockClimbing-Mountaineering","img2.webp"),
    imgAlt:"mountaineering_jacket_men",
    price:{current:8999,old:10999},
    seller:"SIMOND India",
    quantity:3,
    rating:4.4,
    featured:true,
    category:"rockclimbingandmountaineering",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"1412954"
  },
  {
    _id: uuid(),
    title: "CLIMBING SHOES EDGE LACES V2 - ANISEED/BLUE",
    description:"Developed with our expert climbers for performance, especially for big walls and on small holds. Vibram XS Grip sole provides added grip. Like to climb non-stop? Let nothing stop you. : with these shoes on your feet, you're guaranteed comfort and hold without losing precision.",
    image:utils.getImg("RockClimbing-Mountaineering","img3.webp"),
    imgAlt:"mountaineering_climbing_shoes",
    price:{current:7099,old:8999},
    seller:"SIMOND India",
    quantity:1,
    rating:4.2,
    featured:true,
    category:"rockclimbingandmountaineering",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"3212345"
  },
  {
    _id: uuid(),
    title: "CLIMBING SHOES - ROCK",
    description:"Our designers and climbing-instructor partners developed this shoe to allow you to discover climbing and help you up your first route. Looking for a beginner’s shoe that won't make your feet hurt? It easily adjusts to your foot shape. Its sole grips onto holds for safe climbing.",
    image:utils.getImg("RockClimbing-Mountaineering","img4.webp"),
    imgAlt:"mountaineering_shoes_rock",
    price:{current:3199,old:4499},
    seller:"SIMOND India",
    quantity:2,
    rating:4.1,
    featured:true,
    category:"rockclimbingandmountaineering",
    badgeText:{
      text:"Clearence",
      bg:"tertiary"
    },
    referenceId:"8215205"
  },
  {
    _id: uuid(),
    title: "CLIMBING AND MOUNTAINEERING HELMET - ROCK BLUE",
    description:"This helmet has been developed for climbers and mountaineers of all levels, adults and children. It is very hard-wearing and perfect for clubs. Strong and versatile. ABS shell construction provides excellent head protection.",
    image:utils.getImg("RockClimbing-Mountaineering","img5.webp"),
    imgAlt:"mountaineering_helmet",
    price:{current:1299,old:2499},
    seller:"SIMOND India",
    quantity:1,
    rating:4.7,
    featured:false,
    category:"rockclimbingandmountaineering",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"4722905"
  },
  // snorkelling
  {
    _id: uuid(),
    title: "Women’s Scuba Diving Wetsuit SCD 100 Back Zip",
    description:"A simple, durable diving suit with a cut designed for women, for scuba diving in tropical water (>25°C). Diving suit for warm waters. Comfortable and easy to put on!",
    image:utils.getImg("Snorkelling-Diving","img1.webp"),
    imgAlt:"diving_suit_women",
    price:{current:4299,old:5499},
    seller:"SUBEA India",
    quantity:3,
    rating:4.7,
    featured:true,
    category:"snorkellingdiving",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"4722905"
  },
  {
    _id: uuid(),
    title: "MASK AND SNORKEL KIT SNK 500 - GREY",
    description:"We have created this ideal Snorkelling kit for your first observations, thanks to its unbreakable polycarbonate mask and polyethylene snorkel. Looking for comfort for your face and head? Discover our Snorkelling kit which includes 1 mask and 1 snorkel for adults and children. Easily dry your equipment, thanks to the mesh.",
    image:utils.getImg("Snorkelling-Diving","img4.webp"),
    imgAlt:"snorkel_kit",
    price:{current:459,old:699},
    seller:"SUBEA India",
    quantity:3,
    rating:4.7,
    featured:true,
    category:"snorkellingdiving",
    badgeText:{
      text:"Best Seller",
      bg:"secondary"
    },
    referenceId:"2322905"
  },
  {
    _id: uuid(),
    title: "Adult Buoyancy Compensator SCD 100",
    description:"Developed by our team of Subea designers for beginner recreational divers or dive clubs looking for a simple and robust BCD. A diving buoyancy compensator developed to suit both men and women, providing simplicity, comfort and freedom of movement!",
    image:utils.getImg("Snorkelling-Diving","img3.webp"),
    imgAlt:"buoyancy_compensator",
    price:{current:12999,old:15499},
    seller:"SUBEA India",
    quantity:1,
    rating:4.2,
    featured:true,
    category:"snorkellingdiving",
    badgeText:{
      text:"New Arrival",
      bg:"primary"
    },
    referenceId:"9242905"
  },
  {
    _id: uuid(),
    title: "Men’s Scuba Diving Wetsuit SCD 100 Back Zip",
    description:"Our Subea team developed a simple and durable 3 mm diving suit perfect for divers diving in warm waters (>25°C). Diving suit for warm waters. Comfortable and easy to put on!",
    image:utils.getImg("Snorkelling-Diving","img2.webp"),
    imgAlt:"diving_suit_men",
    price:{current:4299,old:5499},
    seller:"SUBEA India",
    quantity:2,
    rating:4.8,
    featured:false,
    category:"snorkellingdiving",
    badgeText:{
      text:"New Arrival",
      bg:"primary"
    },
    referenceId:"7865905"
  },
];
