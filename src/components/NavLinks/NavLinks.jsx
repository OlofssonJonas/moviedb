
import './NavLinks.css'
import { Link } from 'react-router-dom'

function NavLinks () {
    return (
        <nav>
        <ul>
            <li><Link to='/MyMovies'> Movies</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </nav>
    )
}
export default NavLinks