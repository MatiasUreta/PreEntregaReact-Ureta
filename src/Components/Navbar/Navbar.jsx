import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="../index.html"><img src="../public/logo_size.jpg" alt="Logo" /></a>
        <ul className='listNavBar' style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/categoria/landing'}><li>Plan Landing-Page</li></Link>
            <Link to={'/categoria/ecommerce'}><li>Plan E-commerce</li></Link>
            <Link to={'/categoria/logo'}><li>Plan Logos</li></Link>       
            <Link to={'/categoria/marketing'}><li>Plan Marketing</li></Link>
            <Link to={'/categoria/mantenimiento'}><li>Mantenimiento Web</li></Link>
            <Link to={'/categoria/diseño'}><li>Diseño Gráfico</li></Link>
            <Link to={'/categoria/app'}><li>Desarrollo APP</li></Link>
            <Link to={'/categoria/posicionamiento'}><li>Posicionamiento SEO</li></Link>
        </ul>    
        <CartWidget/>
    </div>
  )
}

export default Navbar
