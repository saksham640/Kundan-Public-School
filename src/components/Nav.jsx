import MobileNavBar from "./mobileNavBar/MobileNavBar"
import Navbar from "./Navbar/Navbar"
import TopNav from "./TopNav/TopNav"


export default function Nav(){
  return(
    <div style={{position:"sticky", top:0}}>
      <TopNav/>
      <MobileNavBar/>
      <Navbar/>
    </div>
  )
}