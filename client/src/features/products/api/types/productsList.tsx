import Robosmall1 from "../../../../assets/Robosmall/Robot1.png";
import DryItOffInator1 from "../../../../assets/Dry-It-Off-Inator/DryItOff1.png";
import Shrinkinator1 from "../../../../assets/Shrinkinator/Shrinkinator1.png";
import Slowmotionator1 from "../../../../assets/Slow-motion-inator/Slowmotion-inator1.png";
import { LuffaplexDilly1 } from "../../../../../../server/api/uploads/Luffaplex-Dilly";
import { VaporizerInator1 } from "../../../../../../server/api/uploads/Vaporizer-inator 2.0";
import type { Product } from "./product.type";

export const productsList: Product[] = [
  {
    id: 1,
    title: "Replacement Robot",
    price: 499.99,
    description:
      "The Doof Robot is a versatile and reliable companion designed to assist with various tasks. With its advanced AI capabilities, it can perform household chores, provide entertainment, and even offer companionship. Whether you need help with cleaning, cooking, or simply want a friendly presence around the house, the Doof Robot is here to make your life easier and more enjoyable.",
    category: "electronics",
    image: [`${Robosmall1}`],
    rating: 4.9,
    count: 2,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Great product! Works as advertised.",
        rating: 4,
      },
      {
        id: 2,
        name: "Jane Smith",
        comment:
          " I love my Doof Robot! It's been a game-changer in my daily routine.",
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Shrinkanator",
    price: 19999.99,
    description:
      "The Shrinkanator is a revolutionary device that allows you to shrink objects to a fraction of their original size. With its cutting-edge technology, you can easily reduce the size of items for convenient storage or transportation. Whether you need to shrink bulky furniture, large appliances, or even your own belongings, the Shrinkanator is the perfect solution. Experience the power of miniaturization and make your life more efficient with the Shrinkanator.",
    category: "inator",
    image: [`${Shrinkinator1}`],
    rating: 4.1,
    count: 4,
    reviews: [
      {
        id: 1,
        name: "Alice Johnson",
        comment:
          "The Shrinkanator is amazing! It has made my life so much easier when it comes to storage.",
        rating: 4,
      },
    ],
  },
  {
    id: 3,
    title: "Dry-It-Off-Inator",
    price: 19999.99,
    description:
      "The dry-it-off-inator is a revolutionary device that allows you to dry your clothes without the need for any water.",
    category: "inator",
    image: [`${DryItOffInator1}`],
    rating: 5,
    count: 4,
    reviews: [
      {
        id: 1,
        name: "Alice Johnson",
        comment:
          "The dry-it-off-inator is amazing! It has made my life so much easier when it comes to getting ready!",
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    title: "Slowmotionator",
    price: 19999.99,
    description:
      "The slowmotionator is a revolutionary device that allows you to slow down time for a brief moment.",
    category: "inator",
    image: [`${Slowmotionator1}`],
    rating: 4.5,
    count: 3,
    reviews: [
      {
        id: 1,
        name: "Bob Wilson",
        comment:
          "The slowmotionator is incredible! It's like having a time machine.",
        rating: 5,
      },
      {
        id: 2,
        name: "Emily Davis",
        comment:
          "I can't believe how fast time goes when I use the slowmotionator.",
        rating: 4,
      },
    ],
  },
  {
    id: 5,
    title: "Luffaplex Dilly",
    price: 19999.99,
    description: " The Luffaplex Dilly is a revolutionary device that allows you to create and manipulate luffa sponges with ease.",
    category: "inator",
    image: [`${LuffaplexDilly1}`],
    rating: 4.5,
    count: 3,
    reviews: [
      {
        id: 1,
        name: "Bob Wilson",
        comment:
          "The Luffaplex Dilly is incredible!",
        rating: 5,
      },
    ]
  },
  {
    id: 6,
    title: "Vaporizer Inator 2.0",
    price: 19999.99,
    description: "The Vaporizer Inator 2.0 is a revolutionary device that allows you to vaporize liquids and create flavorful vapor clouds with ease.",
    category: "inator",
    image: [`${VaporizerInator1}`],
    rating: 4.5,
    count: 3,
    reviews: [
      {
        id: 1,
        name: "Alice Johnson",
        comment:
          "The Vaporizer Inator 2.0 is amazing! It has made my life so much easier when it comes to creating vapor clouds.",
        rating: 5,
      },
      {
        id: 2,
        name: "Bob Wilson",
        comment:
          "It's like having a personal vaporizer at home. I love it!",
        rating: 4,
      },
    ],
  },
];
