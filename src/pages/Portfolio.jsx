import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
const Portfolio = () => {
    return (
      <>
      <Sidebar>
        <div >
        <h3 className='bg-light text-dark display-4 fs-5'>Portfolio</h3>
              <div className="d-flex justify-content-between align-items-center">
    <h2 className="m-0">Portfolio</h2>
    <Button variant="primary">Add Portfolio</Button>
  </div>
  <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Form inline>
          <FormControl type="text" placeholder="Search By Survey Name" className="mr-sm-2 w-100" />
        </Form>
      </Nav>
      <Nav>
        <NavDropdown title="Filter" id="basic-nav-dropdown">
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Another action</NavDropdown.Item>
          <NavDropdown.Item>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div >
  <table className="table table-striped">
  <thead>
      <tr>
      <th>Name</th>
      <th>Code</th>
      <th>Type</th>
      <th>Division</th>
      <th>Status</th>
      <th>Action</th>
      </tr>
    </thead>
  </table>
  </div>
  <div className='eye'>
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off eye1" width="150px" height="150px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<line x1="3" y1="3" x2="21" y2="21" />
<path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
<path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
</svg>
</div >
     <div style={{textAlign:"center"}}>
         <button className='border border-1 border-light btn1'>Add Portfolio</button>
     </div>
  
    </div> 
    </Sidebar>
    </>  
    );
};

export default Portfolio;