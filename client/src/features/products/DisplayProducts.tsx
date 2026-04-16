import { getProducts } from "./api/getProducts";

export const DisplayProducts = () => {
    const products = getProducts();
    console.log(products);

    return (
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image[0] || ""} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </>
    )
};
