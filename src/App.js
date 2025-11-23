import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <h1>Toko Sembako APP</h1>
      <ProductForm refresh={()=>window.location.reload}/>
      <ProductList/>
    </div>
  );
}

export default App;
