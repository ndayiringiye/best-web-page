import { Link } from "react-router"

const ButtonCard = () => {
  return (
    <div className="flex justify-center ">
    <div className="  bg-[#8247C9] my-10  rounded-full shadow-md hover:bg-yellow-400 hover:text-white">
        <Link  className=" uppercase w-60 py-4 text-center text-white px-4 text-xl font-semibold  ">read more</Link>
    </div>
    </div>
  )
}

export default ButtonCard