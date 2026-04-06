import { DoofRobot, ShrinkanatorRGBA } from '../../app/assets';

export interface Review {
    id: number;
    name: string;
    comment: string;
    rating: number
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: number,   
    count: number;
    reviews?: Review[];
}

export const productsList: Product[] = [
    {
        id: 1,
        title: "Replacement Robot",
        price: 499.99,
        description: "The Doof Robot is a versatile and reliable companion designed to assist with various tasks. With its advanced AI capabilities, it can perform household chores, provide entertainment, and even offer companionship. Whether you need help with cleaning, cooking, or simply want a friendly presence around the house, the Doof Robot is here to make your life easier and more enjoyable.",
        category: "electronics",
        image: `${DoofRobot}`,
        rating: 4.9,
        count: 2,
        reviews: [
            {
                id: 1,
                name: "John Doe",
                comment: "Great product! Works as advertised.",
                rating: 4
            },
            {
                id: 2,
                name: "Jane Smith",
                comment: " I love my Doof Robot! It's been a game-changer in my daily routine.",
                rating: 5
            }
        ]

    },
    {
        id: 2,
        title: "Shrinkanator",
        price: 19999.99 ,
        description: "The Shrinkanator is a revolutionary device that allows you to shrink objects to a fraction of their original size. With its cutting-edge technology, you can easily reduce the size of items for convenient storage or transportation. Whether you need to shrink bulky furniture, large appliances, or even your own belongings, the Shrinkanator is the perfect solution. Experience the power of miniaturization and make your life more efficient with the Shrinkanator.",
        category: "inator",
        image: `${ShrinkanatorRGBA}`,
        rating: 4.1,
        count: 4,
        reviews: [
            {
                id: 1,
                name: "Alice Johnson",
                comment: "The Shrinkanator is amazing! It has made my life so much easier when it comes to storage.",
                rating: 4
            },
        ]
    },
];