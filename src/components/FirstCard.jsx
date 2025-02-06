import SecondCard from "./SecondCard";


const FirstCard = ({ img, description }) => {
    const picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZeuTd-HK1lM91eKaB6hospcCLc3mvcmjXRLaA0szO6ew5xIcaHiNvMwTr4J4yVac1uE&usqp=CAU"
    return (
        <div className="">
            <div className="grid grid-cols-2 w-11/12 mx-auto ">
                <div className=" h-130  bg-[#8247C9] mt-10 py-10 px-5">
                    <div className="flex justify-center px-16">
                        <img className="w-80 h-80 rounded-full " src={img} alt="big man" />
                    </div>
                    <div className="px-16 text-center mt-18 pb-4 ">
                        <p className="text-white font-semibold    text-roboto ">{description}</p>
                    </div>
                </div>
                <div>
                    <SecondCard sketing={picture} sub="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." />
                </div>
            </div>
        </div>
    )
};

export default FirstCard