import Button from "./Button"
import cart from '../assets/discountCart.svg'

const Discount = () => {
  return (
    <div className="w-full bg-[url('/backgrounds/discount-section-bg.png')] bg-cover bg-center h-[398px] lg:h-[564px] lg:grid lg:place-items-center mt-10 pt-24 lg:pt-0">
      <div className="mx-auto w-[70%] grid place-items-center gap-8">
        <h3 className='text-extra text-2xl lg:text-[40px] font-abhayaExtraBold'>Order Now to get this exclusive offers at 5% discount</h3>
        <Button onClick={() => console.log('good')
        } type="button" className='bg-extra text-lg lg:text-2xl rounded-[20px] text-white flex items-center justify-center gap-3 h-[50px] w-40 md:w-64'>
          Order Now
          <img src={cart} alt="cart" />
        </Button>
      </div>
    </div>
  )
}

export default Discount