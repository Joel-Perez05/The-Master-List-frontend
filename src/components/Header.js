import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import "./Header.css"

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar className='p-5' color="success" light>
                <NavbarBrand className="me-auto fs-1">
                <img style={{height: "80px"}} src="/TPHD_Master_Sword_Artwork.webp" alt='master sword'/>
                he Master List
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink style={{
                                color: "black",
                                textDecoration: "none",
                                fontSize: "1.4em"
                            }} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "black",
                                textDecoration: "none",
                                fontSize: "1.4em"
                            }} to="/zelda/lists">View Top 5 List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "black",
                                textDecoration: "none",
                                fontSize: "1.4em"
                            }} to="/zelda/list/new">Create Top 5 List</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;