import Products from "../../Products/Products";
import "./RelatedProducts.scss";

function RelatedProducts() {
    return (
        <div className="related-products">
            <Products headingTexy="Related Products" innerPage={undefined}  />
        </div>
    )
}

export default RelatedProducts
