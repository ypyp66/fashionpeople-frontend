import React, { Component } from 'react';
import "antd/dist/antd.css";
import './css/navbar.css';
import {Button,Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

class Navbars extends Component{
  render(){
    return (
      <div style={{position:'fixed', display:'inline-block', width:'100%', top:'0', zIndex:'1'}}>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{fontSize:'2rem',}}>
          <Link to='/' style={{color:'black', textDecoration: 'none'}}>OOTD</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav inline>
            <Nav.Link>
            <Link to='/feedback' style={{color:'black'}}>
              <MenuItem style={{paddingLeft: 13, textDecoration: 'none'}} >피드백</MenuItem>
            </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to='/market' style={{color:'black'}}>
                <MenuItem style={{paddingLeft: 13, textDecoration: 'none'}} >마켓</MenuItem>
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to='/ranking' style={{color:'black'}}>
                <MenuItem style={{paddingLeft: 13, textDecoration: 'none'}} >랭킹</MenuItem>
              </Link>
            </Nav.Link>
            <Button variant="outline-success" style={{fontSize:'0.9rem', marginLeft:'4rem'}}>
              <Link to='/login' style={{color:'black'}}>로그인/회원가입</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    
    );
  }
}
export default Navbars;
