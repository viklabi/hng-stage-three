//import { cart } from '../index'
import Button from './Button'
import CartItem from './CartItem'
import phone from '../assets/phone.svg'
import formatPrice from '../Utils/formatPrice'

interface ProductPrice {
  NGN: number[];
}

interface CartItemType {
  id: string;
  name: string;
  price: number;
  src: string;
  alt: string;
  quantity: number;
  current_price: ProductPrice[];
  photos: { url: string }[];
}


interface cartPropType {
  cart: CartItemType[]
  removeFromCart: (id: string) => void
  IncreaseItem: (id: string, newQuantity: number) => void
  decreaseItem: (id: string, newQuantity: number) => void
}

const Cart = ({ cart, removeFromCart, IncreaseItem, decreaseItem }: cartPropType) => {
  const getItemPrice = (cartItem: CartItemType) => {
    return cartItem.current_price?.[0]?.NGN?.[0] ?? 0;
  }
  const getItemPhotoUrl = (cartItem: CartItemType) => {
    return cartItem.photos?.[0]?.url ?? '';
  }

  const cartPrices = cart.map(cartItem => +(getItemPrice(cartItem) * cartItem.quantity))
  const totalPrice = cartPrices.reduce((total: number, num:number) => total + num, 0)

  return (
    <div className='mt-24'>
      <h2 className='text-2xl text-center md:text-3xl ex:text-4xl lg:text-5xl font-abhayaExtraBold text-accent'>Cart</h2>
      <div className="flex z-20 flex-wrap w-full items-center justify-between ex:justify-center mx-auto mt-10 gap-10 md:gap-20 lg:gap-32">
        {cart.length !== 0
          ?
          cart.map((cartItem: any) =>
            <CartItem
              id={cartItem.id}
              key={cartItem.id}
              name={cartItem.name}
              price={getItemPrice(cartItem)}
              src={`https://api.timbu.cloud/images/${getItemPhotoUrl(cartItem)}`}
              alt={cartItem.alt}
              quantity={cartItem.quantity}
              removeFromCart={removeFromCart}
              IncreaseItem={IncreaseItem}
              decreaseItem={decreaseItem}
            />)
          :
          <p className='text-xl lg:text-2xl font-abhayaExtraBold text-accent'>Your cart is empty</p>}
      </div>
      <div className='flex items-center justify-center gap-2 mt-32 mx-auto'>
        <Button type='button' onClick={() => console.log('Phone is not ready')} className='h-[50px] w-[50px] border-[#FF7F3E] border-[1.5px] rounded-[5px] grid place-items-center'>
          <img className='w-[23px]' src={phone} alt="phone" />
        </Button>
        <Button type='button' onClick={() => console.log('Checkout is not ready')} className='h-[50px] bg-[#FF7F3E] border-white border-[3px] rounded-[5px] md:min-w-[300px] w-[75%] max-w-[1000px]'>
          {`CHECKOUT ₦${formatPrice(+totalPrice.toFixed(2))}`}
        </Button>
      </div>
    </div>
  )
}

export default Cart