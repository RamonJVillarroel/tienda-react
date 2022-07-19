import React from 'react';
import './menu.css'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const categories = [
        { name: "Electronicos", id: 0, route: "/category/electronics" },
        { name: "Joyeria", id: 1, route: "/category/jewelery" },
        { name: "Hombre", id: 2, route: "/category/men's clothing" },
        { name: "Mujer", id: 3, route: "/category/women's clothing" },
    ];
    return (
        <header>
            <div className='menu'>
                <Link to="/"><h1 className='letramenu'>La Tiendita</h1></Link>
                {categories.map((category) => <NavLink key={category.id} className="letranav" to={category.route}>{category.name}</NavLink>)}
                <Link to="/Carrito" className='letranav'><CartWidget /></Link>

            </div>
        </header>
    )
}
export default NavBar