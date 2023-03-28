import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {useScrollYPosition} from 'react-use-scroll-position';
import Config from '../../helpers/Config';
import Functions from '../../helpers/Functions';
import logo from '../../assets/workandby/home/logo.svg';
import facebook from '../../assets/workandby/home/facebook.svg'
import instagram from '../../assets/workandby/home/instagram.svg'

const App=(props)=>{
  const scrollY   = useScrollYPosition();

  return  <Navbar expand="lg" bg="dark2" variant={scrollY<12?"dark nav-text-normal":"dark nav-text-white"} fixed="top">
            <Navbar.Brand href="#home" className="p-sm-4  ">
              <img src={logo} alt="pgrw" className="logo pt-4"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto parent navbar-nav">
                <Nav.Link href={Config.ConfigAppUrl} className={Functions.segment(1)===''?"border-primary-pgrw":""}>
                  Home
                </Nav.Link>
                <Nav.Link href={Config.ConfigAppUrl+"nosotros"} className={Functions.segment(1)==='nosotros'?"border-primary-pgrw":""}>
                  Nosotros
                </Nav.Link>
                <Nav.Link className={Functions.segment(1)==='beneficios'?"border-primary-pgrw":""} href={Config.ConfigAppUrl+"beneficios"}>Servicios</Nav.Link>
                <Nav.Link className={Functions.segment(1)==='sedes'?"border-primary-pgrw":""} href={Config.ConfigAppUrl+"sedes"}>Joberp</Nav.Link>
                <Nav.Link className={Functions.segment(1)==='contactenos'?"border-primary-pgrw":""} href={Config.ConfigAppUrl+"contactenos"}>Contacto</Nav.Link>
              </Nav>
              <Nav className="d-none d-md-block">
                <a className="p-2" href="https://www.facebook.com/Beituzy/" target="_blank">
                  <img className="redes" src={facebook} alt="facebook"/>
                </a>
                <a className="p-2" href="https://twitter.com/beituzy" eventKey={3} target="_blank">
                  <img className="redes" src={instagram} alt="twitter"/>
                </a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
}
export default App