import NavBar from "../features/navbar/navbar";
import ProductDetail from "../features/product/components/ProductDetail";
function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </div>
  );
}

export default ProductDetailPage;
