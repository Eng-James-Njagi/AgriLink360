import {Link} from 'react-router-dom'
import {Menu} from 'lucide-react'
import {useState} from 'react'
import '../css/navbar.css'
import logo from '../assets/logo.jpg'
export default function NavBar(){
   const[Nav, setNav ] = useState(false)

   const toggleNav = () => {
      setNav(!Nav)
   }

   return(
      <>
      <div className="navigation">
         <div className="companySection">
            <img src={logo}/>
         </div>
         <ul className= {`navLinks ${Nav ? 'show' : ''}`}>
            <li>
               <Link to="">MarketPlace</Link>
            </li>
            <li>
               <Link to="">Dashboard</Link>
            </li>
             <li>
               <Link to="">About</Link>
            </li>
             <li>
               <Link to="">Contact</Link>
            </li>
         </ul>
         <div className="hamburger" onClick={toggleNav}  >
            <Menu  className="hamburgerIcon" />
         </div>
         <div className="btns">
             <button>
               Log In
            </button>
            <button>
               Log Out
            </button>
         </div>
      </div>
      </>
   )
}