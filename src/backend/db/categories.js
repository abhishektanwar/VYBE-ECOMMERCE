import { v4 as uuid } from "uuid";
import utils from "../../utils";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    title: "Hiking and Trekking",
    img:utils.getImg("Hiking-Trekking","category.webp"),
    category:"hikingandtrekking"
  },
  {
    _id: uuid(),
    title: "Skiing and Snowboarding",
    img:utils.getImg("Skiing-Snowboarding","category.webp"),
    category:"skiingandsnowboarding"
  },
  {
    _id: uuid(),
    title: "Rock Climbing and Mountaineering",
    img:utils.getImg("RockClimbing-Mountaineering","category.webp"),
    category:"rockclimbingandmountaineering"
  },
  {
    _id: uuid(),
    title: "Swimming",
    img:utils.getImg("Swimming","category.webp"),
    category:"swimming"
    
  },
  {
    _id: uuid(),
    title: "Snorkelling and Diving",
    img:utils.getImg("Snorkelling-Diving","category.webp"),
    category:"snorkellingdiving"
    
  },
  // {
  //   _id: uuid(),
  //   categoryName: "Clothing",
  //   img:utils.getImg("Hiking-Trekking","category","webp")
    
  // },
];
