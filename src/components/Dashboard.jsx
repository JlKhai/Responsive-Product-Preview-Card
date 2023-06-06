import { AiOutlineShoppingCart } from 'react-icons/ai'
import productImg from '../images/image-product-desktop.jpg'
import productImgMob from '../images/image-product-mobile.jpg'

const Dashboard = () => {
  return (
    <>
      <div className=" bg-white md:bg-orange-50 flex justify-center items-center w-screen h-screen">
        <div className="flex-none md:flex w-[100%] md:w-[720px] h-[100%] md:h-[500px] justify-center">
          <img
            className="hidden md:block rounded-l-xl w-[50%]  h-[100%]"
            src={productImg}
            alt=""
          />
          <img
            className="rounded-none w-[100%]  md:hidden"
            src={productImgMob}
            alt=""
          />
          <div className="bg-white w-[100%] md:w-[50%] h-[70%] md:h-[100%] rounded-none md:rounded-r-xl flex flex-col gap-10 md:gap-6 p-10 md:p-10 ">
            <p className=" opacity-60 font-semibold font-Fraunces text-center md:text-start">
              R E R F U M E
            </p>
            <h1 className=" text-4xl font-black font-Fraunces-700 text-center md:text-start">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="opacity-60 font-sm Montserrat text-center md:text-start">
              A floral,solar and voluptuous interpretation composed by Olivier
              Polge,Perfumer-Creator for the House of CHANEL.
            </p>
            <div className=" flex items-center justify-center md:justify-start gap-3">
              <p className="text-4xl font-extrabold text-green-700 font-Fraunces-200 select-none ">
                $149.99
              </p>
              <span className=" line-through opacity-50  font-semibold select-none  ">
                $169.99
              </span>
            </div>
            <button className=" bg-green-700 hover:bg-green-900 focus:ring-2 focus:ring-green-700 text-white rounded-lg px-6 py-4 mt-auto">
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-xl font-bold">
                  <AiOutlineShoppingCart />
                </i>
                <span className=" font-bold font-Montserrat select-none">
                  Add to Cart
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
