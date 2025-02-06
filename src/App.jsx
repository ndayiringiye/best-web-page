import ButtonCard from "./components/ButtonCard"
import FirstCard from "./components/FirstCard"
import Footer from "./components/Footer"

const App = () => {
  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYZZAps00sZNyCYGeQLcFLztLaGyoMw9rgaPwoiTamGTPiuFXVXTfmHWDo-wZLA4ieqM&usqp=CAU"
  return (
    <div>
      <FirstCard img ={image} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." />
      <div>
      <ButtonCard />
       <Footer />
      </div>
    </div>
  )
}

export default App