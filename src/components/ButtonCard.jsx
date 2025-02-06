import { Link } from "react-router"

const ButtonCard = () => {
  return (
    <div className="flex justify-center ">
    <div className="  bg-[#8247C9] my-10 py-5 px-16 rounded-full shadow-md hover:bg-yellow-400 hover:text-white">
        <Link to="https://www.zara.com/uk/en/floral-print-palazzo-trousers-p02729855.html?v1=6034011&v2=719022" className=" uppercase w-60 text-center text-white  text-xl font-semibold  ">read more</Link>
    </div>
    </div>
  )
}

export default ButtonCard