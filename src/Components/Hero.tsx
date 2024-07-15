import Button from "./Button"
import heroImg from '../assets/heroImg.png'
import bg from '/backgrounds/hero-bg-overlay.png'

const Hero = () => {
  return (
    <div className="w-full relative h-[700px] lg:mt-20 mt-16">
      <img className="absolute z-10 top-0 object-fill h-[550px] w-[80%] opacity-15 left-[10%] hidden lg:block" src={bg} alt="" />

    <div className="flex absolute left-0 right-0  items-center md:gap-0 px-[2px] ex:p-5 md:items-start ex:items-center justify-between md:pl-[50px] md:pr-[17px] lg:px-[130px] z-20">
      <div className="w-[40%] min-w-[121px] ex:w-[500px] lg:w-[600px]">
        <h1 className="text-lg md:text-2xl font-abhayaExtraBold ex:text-[54px] lg:text-[70px] text-accent leading-7 ex:leading-[83px]">Our Exclusive  Menu is Waiting  For You</h1>
        <p className="text-[12px] md:text-lg font-abhayaMedium text-accent mt-3 lg:mt-10">You Deserve a Break Today. Feed your child with our amazing meals. <span className="hidden lg:inline-block">McDonald is cooking ... breakfast!</span></p>
        <Button className="bg-white rounded-[10px] lg:text-[20px] w-[130px] lg:w-[170px] h-[35px] lg:h-[50px] shadow-heroBtn font-abhayaMedium mt-5  lg:mt-10" children="Let’s Find Out" type="button" onClick={() => console.log('hello')} />
      </div>
      <div className="min-w-[145px] w-[63%] md:w-[65%] md:max-w-[250px] md:min-w-[150px] lg:min-w-[450px] ex:w-[40%]">
        <img className="w-full" src={heroImg} alt="Example of a macdonald dish" />
      </div>
    </div>
    </div>
  )
}

export default Hero
