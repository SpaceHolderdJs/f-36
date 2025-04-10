import { FC, useState } from "react";
import { LandingProductType } from "./landing.types";

import "./LandingProductCard.css";

type PropsType = {
    product: LandingProductType;
};

export const LandingProductCard: FC<PropsType> = ({ product }) => {
    const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
            </div>

            <div className="product-body">
                <h3 className="product-title">{product.title}</h3>

                <button
                    className="product-category"
                    onClick={() => setIsDescriptionOpened(!isDescriptionOpened)}
                >
                    {isDescriptionOpened ? "Hide description" : "Full description"}
                </button>

                <p className="product-description">
                    {isDescriptionOpened
                        ? product.description
                        : product.description.slice(0, 40).concat("...")}
                </p>

                <div className="product-info">
                    <span>💰 {product.price}$</span>
                    <span>⭐ {product.rating.rate}</span>
                </div>
                <div className="product-extra">Оценок: {product.rating.count}</div>
                <a href="#" className="product-category">
                    {product.category}
                </a>
            </div>
        </div>
    );
};