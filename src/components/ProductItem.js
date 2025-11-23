import React from "react";
import axios from "axios";

function ProductItem({ product, refresh }) {
  const handleDelete = async () => {
    if (!window.confirm("Anda ingin menghapus item ?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/products/${product.id}`);
      alert('Produk dihapus');
      refresh();
    } catch (error) {
      alert('Gagal menghapus produk');
    }
  };

  return (
    <li>
    {product.name} - Rp {product.price}
    <button onClick={handleDelete}>Hapus</button>
    </li>
  );
}
export default ProductItem;