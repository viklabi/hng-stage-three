import Button from "./Button"
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import formatPrice from '../Utils/formatPrice';
interface cartPropType{
  src: string,
  name: string,
  price: number,
  id: string
  quantity: number
  alt: string
  removeFromCart: (id:string) => void
  IncreaseItem: (id:string, newQuantity: number) => void
  decreaseItem: (id:string, newQuantity: number) => void
}

const CartItem = ({name, price, quantity, src, alt, removeFromCart, id, IncreaseItem, decreaseItem}:cartPropType) => {
 
  return (
    <div className="flex items-center w-[60%] min-w-[90%] ex:min-w-0  ex:w-auto ex:h-[280px] lg:h-[360px] ex:justify-between ml-[10%] lg:ml-0 ex:flex-col gap-3 pr-2 md:pr-0  md:gap-8 h-32">

      <div>
        <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] object-cover object-center lg:w-[250px] lg:h-[250px] rounded-full shadow-heroBtn" src={src} alt={alt} />
      </div>

      <div className=" flex items-start w-[50%] flex-col ex:w-full">
        <h2 className="lg:text-[40px] text-2xl text-accent font-abhayaExtraBold">{name}</h2>
       <p className="text-[20px] text-accent font-abhayaMedium">{`₦${formatPrice(price*quantity)}`}</p>

       <div className="flex items-center justify-between lg:flex-row-reverse px-2 w-full font-abhayaMedium">
        <div className="flex items-center justify-center gap-2">
        <Button type="button" className="bg-green w-[13px] h-[13px] lg:w-[35px] lg:h-[35px] shadow-cart" onClick={() => decreaseItem(id, (quantity - 1))}>
          <img className="w-[6px] lg:w-[14px]" src={minus} alt="minus" />
        </Button>
          <div className="bg-white w-5 h-[13px] lg:w-[50px] lg:h-[35px] text-black grid place-items-center text-[13px] lg:text-2xl">{quantity}</div>
        <Button type="button" className="bg-green w-[13px] h-[13px] lg:w-[35px] lg:h-[35px] shadow-cart grid place-items-center" onClick={() => IncreaseItem(id, (quantity + 1))}>
          <img className="w-[6px] lg:w-[14px]" src={plus} alt="plus" />
        </Button>
       </div>
       <Button type="button"  className="text-black text-base lg:text-xl grid place-items-center" onClick={() => removeFromCart(id)}>Remove</Button>
       </div>
    </div>
    </div>
  )
}


export default CartItem
