import { DryItOffInator1 } from '../../../assets/Dry-It-Off-Inator';
import { LuffaplexDilly1 } from '../../../assets/Luffaplex-Dilly';
import { Shrinkinator1 } from '../../../assets/Shrinkinator';
import { Slowmotionator1 } from '../../../assets/Slow-motion-inator';
import type { Product } from "../../products/api/types/product.type";

export const CardItems: Product[] = [
    {
        id: 1,
        image: [`${Slowmotionator1}`],
        category: "inator",
        title: "Slowmotion-ator",
        price: 19999.99
    },
    {
        id: 2,
        image: [`${DryItOffInator1}`],
        category: "inator",
        title: "Dry-It-Off-Inator",
        price: 9999.99
    },
    {
        id: 3,
        image: [`${Shrinkinator1}`],
        category: "inator",
        title: "Shrink-inator",
        price: 30000
    },
    {   id: 4,
        image: [`${LuffaplexDilly1}`],
        category: "inator",
        title: "Luffaplex-Dilly",
        price: 30000
    }
];