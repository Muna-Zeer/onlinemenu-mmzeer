
import React from 'react';
import { Link } from "react-router-dom";
const NavigationHeader = () => {
    return (
        <div>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/menu">Menu</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
            <li>
            <Link to="/restaurant">Restaurant </Link>
            </li>
            <li>
            <Link to="/price">price</Link>
            </li>
            {/* <Navbar collapseOnselect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/menu'>Menu</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                            <Nav.Link href='/restaurant'>Restaurant</Nav.Link>
                            <Nav.Link href='/price'>Price</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                  
                </Container>
            </Navbar> */}
        </div>
    );
}
export default NavigationHeader ;