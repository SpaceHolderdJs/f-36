import { FC } from "react"
import { LandingProductType } from "./landing.types"
import { LandingProductCard } from "./LandingProductCard";


type PropsType = {
    products: LandingProductType[];
}

export const LandingProducts: FC<PropsType> = ({products}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5">
        {products.map((product) => <LandingProductCard key={`product:${product.id}`} product={product} /> )}
    </div>
  )
}
