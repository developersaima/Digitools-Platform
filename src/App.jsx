import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import StatsSection from './components/StatsSection'
import ToolsSection from './components/ToolsSection'

const fetchProductData = async () => {
  const res = (await fetch("/data.json")).json();
  return res;
};
const productData = fetchProductData();

const App = () => {
  const [selectBtn, setSelectBtn] = useState("products");

  const [cartItem, setCartItem] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItem");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (item) => {
    if (!item) return;

    setCartItem((prev) => [...prev, item]);

    toast.success("Product add to cart successfully");
  };
  const removeItem = (item) => {
    if (!item) return;
    setCartItem((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Product removed successfully");
  };

  const checkOut = () => {
    setCartItem([]);
    toast.success("Checkout successfully");
  };
  return (
    <div >
      <Navbar> </Navbar>
       <Banner></Banner> 
    <StatsSection></StatsSection>
    <ToolsSection
          setSelectBtn={setSelectBtn}
          selectBtn={selectBtn}
          cartItem={cartItem}
          removeItem={removeItem}
          productData={productData}
          addToCart={addToCart}
          checkOut={checkOut}
        />
    </div>
  )
}

export default App
