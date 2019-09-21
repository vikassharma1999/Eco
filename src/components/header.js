import React, {Component} from 'react'
import {Navbar, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap'
import download from '../shopping-cart.svg'



class Header extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      click:false
    }
  }
  
    render()
    {
        return(
            <Navbar bg="light" expand="lg" style={{display:"flex"}} >
  <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#men">Men</Nav.Link>
      <Nav.Link href="#women">Women</Nav.Link>
      <Nav.Link href="#kids">Kids</Nav.Link> */}
     <NavDropdown title="Men" id="basic-nav-dropdown">
        
        <NavDropdown.Item href="/men/footwear">Footwear</NavDropdown.Item>
        
        <NavDropdown.Item href="/men/clothings">Clothings</NavDropdown.Item>
        <NavDropdown.Item href="/men/watches">Watches</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
     </NavDropdown>
      {/* <Nav.Link href="#login_signup">Login&Signup</Nav.Link>
      <Nav.Link href="#add_cart">Add</Nav.Link> */}
      <NavDropdown title="Women" id="basic-nav-dropdown">
        <NavDropdown.Item href="/women/footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="/women/clothings">Clothings</NavDropdown.Item>
        <NavDropdown.Item href="/women/watches">Watches</NavDropdown.Item>
       </NavDropdown>
       <NavDropdown title="Kids" id="basic-nav-dropdown">
        <NavDropdown.Item href="/kids/footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="/kids/clothings">Clothings</NavDropdown.Item>
        <NavDropdown.Item href="/kids/babycare">Baby Care</NavDropdown.Item>
       </NavDropdown>
    </Nav>
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav className="mr-sm-2" >
      
      <Nav.Link  href="/login">
        Login  
       </Nav.Link>
    
       <Nav.Link href="#add_cart" ><img src={download} alt="cart" style={{width:40 ,height:40, alignItems:"right"}}/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}
export default Header