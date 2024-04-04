import NavBar from "../features/navbar/navbar";
import ProductList from "../features/product-list/components/ProductList";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList />
      </NavBar>
    </div>
  );
}

export default Home;
