import {Link} from 'react-router-dom'
import {useState} from "react"
import "./Navbar.scss"

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)

  const handleLiClick = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <header>
      <div className="user">
      < p className='disable user-title'>Daniel</p>
      </div>
      <nav>
        <ul>
          <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleLiClick(0)}>
            <Link to={"error"} className='icon1'>
              <img src="./icons/ICON - Search.png" alt="Search" />
            </Link>
          </li>
          <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleLiClick(1)}>
            <Link to={"/"} className='icon2'>
              <img src="./icons/Group 46.png" alt="Home" />
            </Link>
          </li>
          <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleLiClick(2)}>
            <Link to={"error"} className='icon3'>
              <img src="./icons/Group 56.png" alt="TV Shows"  />
            </Link>
          </li>
          <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleLiClick(3)}>
            <Link to={"error"} className='icon4'>
              <img src="./icons/Group 54.png" alt="Movies" />
            </Link>
          </li>
          <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleLiClick(4)}>
            <Link to={"error"} className='icon5'>
              <img src="./icons/Group 53.png" alt="Genres" />
            </Link>
          </li>
          <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleLiClick(5)}>
            <Link to={"error"} className='icon6'>
              <img src="./icons/Group 47.png" alt="Watch Later" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="information">
        <ul>
          <li className='disable'>LANAGUAGE</li>
          <li className='disable'>GET HELP</li>
          <li className='disable'>EXIT</li>
        </ul>
      </div>
    </header>
  )
}
