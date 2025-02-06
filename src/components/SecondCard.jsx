const SecondCard = ({ sketing, sub }) => {
    return (
        <div className="h-130  bg-[#C8ADE9] mt-10 py-10 px-5 right-[-10] ">
            <div className="px-16 flex justify-center">
                <p className="text-white font-semibold  text-center text-roboto ">{sub}</p>
            </div>
            <div className="mt-18 pb-4">
                <div className="flex justify-center px-16">
                <img src={sketing} alt="bueatfull girl" className="w-80 h-80 rounded-full " />
                </div>
            </div>

        </div>
    )
}

export default SecondCard