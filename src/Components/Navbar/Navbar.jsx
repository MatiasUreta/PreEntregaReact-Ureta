
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="../index.html"><img src="../public/logo_size.jpg" alt="Logo" /></a>
        <ul className='listNavBar' style={{display: 'flex', justifyContent: 'space-between'}}>
            <a href=""><li>Home</li></a>
            <a href=""><li>Plan Landing-Page</li></a>
            <a href=""><li>Plan E-commerce</li></a>
            <a href=""><li>Plan Logos</li></a>           
            <a href=""><li>Plan Marketing</li></a>
            <a href=""><li>Mantenimiento Web</li></a>
            <a href=""><li>Diseño Gráfico</li></a>
            <a href=""><li>Desarrollo APP</li></a>
            <a href=""><li>Posicionamiento SEO</li></a>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar
