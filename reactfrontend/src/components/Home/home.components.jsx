import { Link } from 'react-router-dom';
import pizza from '../../assets/image/pizzaitem2.jpg';
import MenuGrid from '../Menu/gridMenu/gridMenu';
import './home.css'
const Home = () => {
    return (
        <div className="Home">


            <h3 className="headerTitle">Fresh From Pizzon</h3>
            <h1 className="header-tag">OUR SPECIALITY</h1>
            <div class="OrderOnlineCard">
                <div class="HomeBox container-fluid" >
                    <div class="home-img text-center"><Link className="nav-link" to="/AddOrder">
                        <img src={pizza} width={250} height={250} alt="pizza" /></Link>
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>
                    </div>

                    <div class="home-img text-center"><Link className="nav-link" to="/AddOrder">
                        <img src={pizza} width={300} height={300} alt="pizza" /></Link>
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>
                    </div>

                    <div class="home-img text-center"><Link className="nav-link" to="/AddOrder">
                        <img src={pizza} width={300} height={300} alt="pizza" /></Link>
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>
                    </div>

                </div>
                <div className="ViewMore text-center" >

                    <Link className='homeLink ' to="/MenuGrid">View More</Link>

                </div>
            </div>
            
            <h3 className="headerTitle"> Fresh From Pizzon</h3>
            <h1 className="header-tag">OUR SPECIAL MENU</h1>
           

            <MenuGrid/>
        </div>
    )
}
export default Home;