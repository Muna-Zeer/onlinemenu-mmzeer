import './Menu.component.css'


import { Link } from "react-router-dom";

const NavbarMenu = () => {
    return (
        <div className="Menu">
            <nav className='navMenu'>
                <div><Link to="/">ALL</Link></div>
                <div><Link to="/">DRINKS</Link></div>
                <div><Link to="/">SALADS</Link></div>
                <div><Link to="/">PASTA</Link></div>
                <div><Link to="/">BURGERS</Link></div>
                <div><Link to="/">DESERTS</Link></div>
                <div><Link to="/">PIZZAS</Link></div>
            </nav>
            
                   
           
        </div >);
}
export default NavbarMenu;
