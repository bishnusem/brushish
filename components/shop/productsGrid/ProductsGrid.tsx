import { usePathname } from "next/navigation";
import "./style.scss";
import ProductCard from "../productCard/ProductCard";
import Link from "next/link";

const ProductsGrid = () => {
  return (
    <section id="productsGrid">
      <div className="title-container">
        <h2>Trending</h2>
        <Link href="/">View All</Link>
      </div>
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsGrid;
