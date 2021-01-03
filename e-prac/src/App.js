import React,{ useState , useEffect } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import {commerce} from './lib/commerce';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  const [products,setProducts] = useState([]);
  const [cart,setCart]=useState({});

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list(); 
    setProducts(data);
  }
  const fetchCart = async () =>{
     setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId,quantity)=>{
    const item= await commerce.cart.add(productId,quantity);
    setCart(item.cart);
  
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };



  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[]);

console.log(products);
console.log(cart);


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path='/'>
            <Products products={products} onClickHandler={handleAddToCart}/>
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
