import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './utils/themeContext';


const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);
  const theme = useContext(ThemeContext)


    const handleToggle = () => {
      setIsToggled(!isToggled);
      theme.toggleTheme()
    };
  
    return (
      <nav className='navBar'>
        <div className='navBar_links'>
          <Link to='/home'>Home</Link>
          <Link to='/contact'>Contacto</Link>
          <Link to='/favs'>Favorito</Link>
        </div>
        <div className='navBar-button'>
          <button onClick={handleToggle}>
            {isToggled ? 'Ligth' : 'Dark'}
          </button>
        </div>


      </nav>
    )
  }

  export default Navbar;