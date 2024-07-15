import Button from './Button.tsx'
import buttonCart from '../assets/buttonCart.svg'
import formatPrice from '../Utils/formatPrice';

interface productPropType {
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  quantity: number
  alt: string,
  addToCart: (id: string) => void
}

const Product = ({ src, name, price, about, addToCart, id }: productPropType) => {

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className='flex items-start flex-col w-[80%] justify-between max-w-[284px] mx-auto h-[400px] lg:h-[600px]'>
      <div className='w-full grid place-items-center'>
        <img className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full object-cover shadow-product' src={src} />
      </div>
      <h2 className='font-abhayaExtraBold text-2xl text-accent lg:text-[40px]'>{name}</h2>
      <p className='text-lg lg:text-xl font-abhayaMedium text-accent'>{about}</p>
      <p className='text-lg lg:text-xl font-abhayaMedium text-accent'>{`₦${formatPrice(price)}`}</p>

      <div className='grid place-items-center w-full'>
        <Button type='button' onClick={handleAddToCart} className='text-primary bg-accent text-2xl font-abhayaMedium rounded-full mt-0 mx-auto active:shadow-none delay-500 shadow-product w-[150px] h-9 flex items-center justify-center gap-2'>
          <span>Buy Now</span>
          <img src={buttonCart} alt="cart" className='w-6' />
        </Button>

      </div>
    </div>
  )
}

export default Product