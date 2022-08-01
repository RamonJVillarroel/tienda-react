import React from 'react';
import './style.css'
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
            <div className='menu bg-neutral-700'>
                <Link to="/"><h1 className='letramenu text-teal-400 '>La Tiendita</h1></Link>
                {categories.map((category) => <NavLink key={category.id} className="letranav text-teal-400" to={category.route}>{category.name}</NavLink>)}
                <Link to="/Carrito" className=' text-teal-400'><CartWidget /></Link>

            </div>
        </header>
    )
}
export default NavBar