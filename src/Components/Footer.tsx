import pushUp from '../assets/push-up.svg'
import appleStore from '../assets/apple-store.png'
import playStore from '../assets/play-store.png'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className='py-8'>
      <a href='#header' className="w-[60px] h-[60px] mt-0 mb-7 lg:mb-16 grid place-items-center mx-auto"
      >
        <img className='h-[53px]' src={pushUp} alt="go to top" />
      </a>

      <div className='flex items-start flex-wrap md:flex-nowrap gap-5 md:gap-0 text-white justify-between w-[85%] mt-85 mx-auto'>

        <div className='flex items-start flex-col gap-2'>
          <h5 className='text-sm font-abhayaExtraBold lg:text-2xl'>Quick Links</h5>
          <a className='text-[13px] font-abhayaMedium lg:text-2xl' href="#">Know more about Us</a>
          <a className='text-[13px] font-abhayaMedium lg:text-2xl' href="#">Visit our Store</a>
          <a className='text-[13px] font-abhayaMedium lg:text-2xl' href="#">Locate Stores</a>
        </div>

        <div className='flex items-start flex-col gap-2'>
          <h5 className='text-sm font-abhayaExtraBold lg:text-2xl'>Site Links</h5>
          <a className='text-[13px] font-abhayaMedium lg:text-2xl' href="#">Privacy Policy</a>
          <a className='text-[13px] font-abhayaMedium lg:text-2xl' href="#">Shopping Details</a>
          <a className='text-[13px] font-abhayaMedium lg:text-2xl' href="#">Offer Coupons</a>
        </div>

        <div className='flex items-start flex-col lg:gap-8 lg:items-center'>
          <h5 className='text-sm font-abhayaExtraBold lg:text-2xl'>Download Mobile App</h5>
          <div className='flex center flex-col lg:flex-row gap-2'>
            <a className='text-primary bg-white flex items-center justify-center w-[95px] h-9 lg:w-[182px] lg:h-[56px] rounded-full lg:rounded-[20px] text-[13px] leading-4 font-abhayaMedium lg:text-2xl'
              href="#">
              <img className='w-[15px] lg:w-[30px]' src={playStore} alt="" /><span className='w-[70%]'>Get it on Play Store</span></a>
            <a className='text-primary bg-white flex items-center justify-center w-[95px] h-9 lg:w-[182px] lg:h-[56px]  rounded-full lg:rounded-[20px]  text-[13px] leading-4 font-abhayaMedium lg:text-2xl' href="#">
              <img className='w-[15px] lg:w-[30px]' src={appleStore} alt="" /><span className='w-[70%]'>Available on Apple Store</span></a>
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full mt-20 mx-auto relative flex items-center flex-col gap-4 pl-[60px]">
          <img className='w-[49px] lg:w-[141px] absolute left-[23px] lg:h-[85px]' src={logo} alt="" />
          <p className='text-center w-[40%] md:w-auto text-white font-abhayaMedium text-[13px] lg:text-2xl'>If you need any help, contact self-help  on +234 91 39965381</p>
          <p className='text-white font-abhayaMedium text-[13px] lg:text-2xl'>Ikeja, Lagos.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
