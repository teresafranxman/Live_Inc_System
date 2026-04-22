import { DryItOffInator1 } from '../../../../../server/api/uploads/Dry-It-Off-Inator';
import { LuffaplexDilly1 } from '../../../../../server/api/uploads/Luffaplex-Dilly';
import { Shrinkinator1 } from '../../../../../server/api/uploads/Shrinkinator';
import { Slowmotionator1 } from '../../../../../server/api/uploads/Slow-motion-inator';
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
    {
        id: 4,
        image: [`${LuffaplexDilly1}`],
        category: "inator",
        title: "Luffaplex-Dilly",
        price: 30000
    }
];