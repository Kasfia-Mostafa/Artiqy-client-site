import Home from "../Pages/Home/Home"
import Profile from "../Pages/Profile/Profile"
import "./Main.css"


const Main = () => {
  return (
    <div className="Main">
      <div className="blur" style={{top: '-18%',right:'0'}}></div>
      <div className="blur" style={{top: '36%',left:'-8rem'}}></div>
      {/* <Home></Home> */}
      <Profile></Profile>
    </div>
  )
}

export default Main
