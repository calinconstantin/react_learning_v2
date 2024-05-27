import React from "react";
import styles from "./CarouselProducts.scss"
import { ProductTile } from "../ProductTile/ProductTile";

export function CarouselProducts(products) {
    const data = products.products;
    if (Array.isArray(data)) {
        return (
            <div className="carouselProducts">
                <button className="btn--carousel btn--carousel--left">Left</button>
                <button className="btn--carousel btn--carousel--right">Right</button>
                {data.map((product, index) => (
                    <ProductTile key={index} product={product} />
                ))}
            </div>
        );
    }
}