import { AiOutlineShoppingCart } from 'react-icons/ai'

const Dashboard = () => {
  return (
    <>
      <div className="body flex justify-center items-center w-screen h-screen">
        <div className=" sm:flex-none lg:flex sm:w[100%] lg:w-[720px]  sm:h[100%] lg:h-[500px] justify-center  ">
          <img
            className=" img lg:rounded-l-xl sm:w-[100%] lg:w-[50%] "
            src="../public/images/image-product-desktop.jpg"
            alt=""
          />
          <div className="bg-white sm:w-[100%] lg:w-[50%] rounded-r-xl flex flex-col gap-5 p-10">
            <p className=" opacity-60 font-semibold font-montserrat select-none">
              R E R F U M E
            </p>
            <h1 className=" text-4xl font-black font-Fraunces select-none">
              Gabrielle <br /> Essence Eau <br /> De Parfum
            </h1>
            <p className="opacity-60 font-sm Montserrat f">
              A floral,solar and voluptuous <br /> interpretation composed by
              <br /> Olivier Polge,Perfumer-Creator <br /> for the House of
              CHANEL.
            </p>
            <div className=" flex items-center gap-5">
              <p className="text-4xl font-bold text-green-700 font-Fraunces select-none">
                $149.99
              </p>
              <span className=" line-through opacity-50  font-semibold select-none">
                $169.99
              </span>
            </div>
            <button className="bg-green-700 hover:bg-green-900 text-white rounded-lg px-6 py-4 mt-4">
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-xl font-bold">
                  <AiOutlineShoppingCart />
                </i>
                <span className=" font-bold font-Montserrat"> Add to Cart</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
