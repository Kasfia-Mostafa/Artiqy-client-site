import Home from "../Pages/Home/Home"
import "./Main.css"


const Main = () => {
  return (
    <div className="Main">
      <div className="blur" style={{top: '-18%',right:'0'}}></div>
      <div className="blur" style={{top: '36%',left:'-8rem'}}></div>
      <Home></Home>
    </div>
  )
}

export default Main
