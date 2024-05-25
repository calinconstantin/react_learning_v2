import React from "react";
import styles from './ProductTile.scss'
import { Button } from "../Button/Button.js";

export function ProductTile({ product }) {

    return (
        <div className="productTile">
            <div className="product">
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <h2>{product.price}</h2>
                <Button btnValue={product.btnValue} />
            </div>
        </div>
    );

}
