import Header from "./Components/Header"
import Discount from "./Components/Discount"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import ProductParent from "./Components/ProductParent"
import Cart from "./Components/Cart"
import { useState, useEffect } from "react"
interface ProductPrice {
  NGN: number[];
}

interface productPropType {
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  alt: string
  quantity: number
  current_price: ProductPrice[];
  photos: { url: string }[];
}

const App = () => {
  const [showCart, setShowCart] = useState<boolean>(true)
  const [cart, setCart] = useState<productPropType[]>([])
  const [products, setProducts] = useState([])

  const organization_id = import.meta.env.VITE_ORGANIZATION_ID
  const api_key = import.meta.env.VITE_API_KEY
  const api_id = import.meta.env.VITE_API_ID

  const fetchProducts = async () => {
    const apiUrl = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
    apiUrl.searchParams.append('organization_id', organization_id);
    apiUrl.searchParams.append('Appid', api_id);
    apiUrl.searchParams.append('Apikey', api_key)
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json()
      setProducts(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const addToCart = (id: string) => {
    const product: any = products[products.findIndex((element: any) => element.id === id)]
    if (product) {
      if (cart.some((element: any) => element.id == product.id)) {
        const newCart = cart.map((item: any) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newCart)
      }
      else {
        setCart(prev => [...prev, product])
      }
    }
  }
  const cartLength = cart.length;

  const removeFromCart = (id: string) => {
    const product: any = products[products.findIndex((element: any) => element.id === id)]
    const newCart: any = cart.filter(cartItem => cartItem.id !== product.id)
    setCart(newCart)
  }

  const IncreaseItem = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      removeFromCart(id);
    }
  }

  const decreaseItem = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      removeFromCart(id);
    }
  }
  const handleShowCart = () => setShowCart(!showCart);
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cart')
  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart]);

  return (
    <div className='bg-primary pt-[22px] bg-no-repeat relative'>
      <Header showCart={showCart} handleShowCart={handleShowCart} cartLength={cartLength} />
      <Hero />
      {showCart ?
        <>
          <ProductParent addToCart={addToCart} products={products} />
        </>
        : <Cart cart={cart} removeFromCart={removeFromCart} IncreaseItem={IncreaseItem} decreaseItem={decreaseItem} />}
      <Discount />
      <Footer />
    </div>
  )
}

export default App