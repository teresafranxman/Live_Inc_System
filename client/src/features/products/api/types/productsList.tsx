import type { Product } from "./product.type";
import {
  DoofRobot,
  ShrinkanatorRGBA,
  DryItOffInator,
  Slowmotionator,
} from "../../../../assets";

export const productsList: Product[] = [
  {
    id: 1,
    title: "Replacement Robot",
    price: 499.99,
    description:
      "The Doof Robot is a versatile and reliable companion designed to assist with various tasks. With its advanced AI capabilities, it can perform household chores, provide entertainment, and even offer companionship. Whether you need help with cleaning, cooking, or simply want a friendly presence around the house, the Doof Robot is here to make your life easier and more enjoyable.",
    category: "electronics",
    image: [`${DoofRobot}`],
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
    image: [`${ShrinkanatorRGBA}`],
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
    image: [`${DryItOffInator}`],
    rating: 5,
    count: 4,
    reviews: [
      {
        id: 1,
        name: "Alice Johnson",
        comment: "The dry-it-off-inator is amazing! It has made my life so much easier when it comes to getting ready!",
        rating: 5
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
    image: [`${Slowmotionator}`],
    rating: 4.5,
    count: 3,
    reviews: [
      {
        id: 1,
        name: "Bob Wilson",
        comment: "The slowmotionator is incredible! It's like having a time machine.",
        rating: 5
      },
      {
        id: 2,
        name: "Emily Davis",
        comment: "I can't believe how fast time goes when I use the slowmotionator.",
        rating: 4
      },
    ],
  }
];
