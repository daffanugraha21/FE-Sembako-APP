import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(res.data);
    } catch (error) {
      alert("Gagal mengambil data produk");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Daftar Produk</h2>
      {products.length === 0 && <p>Belum ada produk</p>}
      <ul>
        {products.map(p => (
          <ProductItem key={p.id} product={p} refresh={fetchProducts}/>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;