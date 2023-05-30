import { AiOutlineShoppingCart } from 'react-icons/ai'

const Dashboard = () => {
  return (
    <>
      <div className="md:bg-orange-50 bg-white flex justify-center items-center w-screen h-screen">
        <div className=" flex-none md:flex w-[100%] md:w-[720px]  h-[100%] md:h-[500px] justify-center">
          <img
            className="rounded-none md:rounded-l-xl w-[100%] md:w-[50%] object-cover h-80 md:h-[100%] md:object-fill"
            src="../public/images/image-product-desktop.jpg"
            alt=""
          />
          <div className="bg-white w-[100%] md:w-[50%] rounded-none md:rounded-r-xl flex flex-col gap-5 p-7 md:p-10">
            <p className=" opacity-60 font-semibold font-Fraunces select-none">
              R E R F U M E
            </p>
            <h1 className=" text-4xl font-black font-Fraunces-700 select-none">
              Gabrielle <br /> Essence Eau <br /> De Parfum
            </h1>
            <p className="opacity-60 font-sm Montserrat f">
              A floral,solar and voluptuous <br /> interpretation composed by
              <br /> Olivier Polge,Perfumer-Creator <br /> for the House of
              CHANEL.
            </p>
            <div className=" flex items-center gap-5">
              <p className="text-4xl font-extrabold text-green-700 font-Fraunces-200 select-none">
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
