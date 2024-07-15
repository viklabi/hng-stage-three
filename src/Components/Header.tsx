import logo from '../assets/logo.png'
import cart from '../assets/cart.svg'
import notifications from '../assets/notifications.svg'
import search from '../assets/search.svg'
import profile from '../assets/profile.jpeg'
import activeCart from '../assets/activeCart.svg'

interface headerPropType {
  showCart: boolean
  cartLength: number
  handleShowCart: () => void
}

const Header = ({showCart, handleShowCart, cartLength}: headerPropType) => {
  
  
  return (
    <header id='header' className='flex fixed border-b top-0 right-0 py-2 left-0 items-center justify-between text-accent pr-3 pl-3 md:pr-[18px] md:pl-[45px] lg:pl-14 xl:pl-24 lg:pr-10 xl:pr-[117px] z-50 bg-primary'>
      <a href='#' className="w-10 md:w-[55.29px]">
        <img src={logo} alt="logo" />
      </a>
      <ul className='flex items-center ex:gap-8 xl:gap-16 lg:-ml-4 xl:-ml-28'>
        <li className='hidden ex:block'>
          <a className='text-lg font-abhayaMedium' href="#">Home</a>
        </li>
        <li className='hidden ex:block'>
          <a className='text-lg font-abhayaMedium' href="#">Download App</a>
        </li>
        <li className='relative'>
          <a className='text-lg font-abhayaMedium after:content-[""] after:w-full after:absolute after:h-[3px] after:bottom-0 after:bg-accent after:left-0 after:right-0 after:rounded-full' href="#">Exclusive offers</a>
        </li>
        <li className='hidden ex:block'>
          <a className='text-lg font-abhayaMedium' href="#">About Food</a>
        </li>
      </ul>
      <div className="flex items-center lg:gap-12 xl:gap-20">
        <div className="relative hidden lg:block w-[191px] rounded-full h-[35px] bg-white">
          <img src={search} alt="search" className="w-5 absolute top-1/2 -translate-y-1/2 left-4" />
          <input type="text" placeholder='Search' className='bg-transparent h-full P-1 rounded-full pl-12 w-full text-base font-abhayaMedium text-black opacity-3/10' />
        </div>
        <div className="flex items-center md:gap-[40px] lg:gap-[14px] gap-0">
          <div className="w-10 relative" onClick={handleShowCart}>
            <img src={showCart ?cart :activeCart} alt="cart" />
            <span className="grid place-items-center rounded-full absolute bg-accent text-black text-base w-5 h-5 -top-5 right-0">{cartLength}</span>
          </div>
          <div className="relative">
            <img src={notifications} alt="notifications" />
            <span className="rounded-full absolute bg-accent w-2 h-2 -top-2 right-0 font-abhayaMedium"></span>
          </div>
          <div className="hidden lg:block w-fit">
            <img src={profile} alt="profile pic" className='object-cover h-10 w-10 rounded-full' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
