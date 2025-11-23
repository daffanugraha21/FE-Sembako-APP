import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({refresh}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://127.0.0.1:8000/api/products', {
        name, price, description
      });
      alert(res.data.message);
      setName('');
      setPrice('');
      setDescription('');
      refresh();
    } catch (error) {
      alert('Gagal menambahkan produk')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='nama produk' value={name} onChange={e => setName(e.target.value)} required/>
      <input placeholder='harga' value={price} onChange={e => setPrice(e.target.value)} required/>
      <input placeholder='deskripsi' value={description} onChange={e => setDescription(e.target.value)} required/>
      <button type='submit'>Tambah Produk</button>
    </form>
  );
}
export default ProductForm;