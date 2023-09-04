import './App.css';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { Amazon } from './components/Amazon';
import { useState } from 'react';
import "./Styles/Amazon.css"
function App() {
  const handleclick = (item) => {
    if (cart.some((product) => product.id === item.id)) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
    } else {
      setcart([...cart, item]);
    }
  };
  const handlechange = (item,d) => {
    let ind = -1
    cart.forEach((items,index) =>{
      if(items.id === item.id) {
        ind = index;
      }
    })
    if(ind !== -1) {
      cart[ind].amount += d;
    }
    if (cart[ind].amount < 1) {
      cart[ind].amount = 1;
    }
    setcart([...cart])
  }
  const [show,setshow] = useState(true)
  const [cart,setcart] = useState([])
  const [warning,setwarning] = useState(false)


  return (
    <div className="App">
      <NavBar size={cart.length} setshow={setshow}/>
  
   
      {
        warning && <div className='warning'>already added to the list</div>
      }

      {
        show ?     <Amazon handleclick={handleclick}/> :    <Cart setshow={setshow} cart={cart} setcart={setcart} handlechange={handlechange}/>
      }
    </div>
  );
}

export default App;
