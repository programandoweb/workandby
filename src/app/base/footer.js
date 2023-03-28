//import './../../assets/bellecolombia/footer/css/fontello.css';
import Bg_footer from '../../assets/workandby/home/footer.png';
import logo_footer from '../../assets/workandby/home/logo-footer.svg';
import facebook from '../../assets/workandby/home/facebook.svg';
import instagram from '../../assets/workandby/home/instagram.svg';
import icon1 from '../../assets/workandby/home/correo.svg';
import icon2 from '../../assets/workandby/home/telefono.svg';
import icon3 from '../../assets/workandby/home/ubicacion.svg';
const App=()=>{
  return  <footer style={{backgroundImage:'url('+Bg_footer+')'}}>
            <div className="row col-12 margin-footer">
              <div className="col-md-5">
                <div className="container-logo-footer m-auto">
                  <img src={logo_footer} className="w-100 img-footer"/>
                  <div className="redes-footer">
                    <h6 className="text-azul-oscuro pr-2">Siguenos en nuestras redes:</h6>
                    <a className="p-1" href="https://www.facebook.com/Beituzy/" target="_blank">
                      <img className="redes" src={facebook} alt="facebook"/>
                    </a>
                    <a className="p-1" href="https://twitter.com/beituzy" eventKey={3} target="_blank">
                      <img className="redes" src={instagram} alt="twitter"/>
                    </a>
                  </div>
                  <p className="text-white">Copyright 2021 workandby®</p>
                </div>
              </div>
              <div className="col-md-7 text-white p-lg-4" style={{borderLeft:'1px solid white'}}>
                <div className="col-md-10 mr-auto d-none d-lg-block">
                  <h6 className="pr-5 footer-text-soluciones">Soluciones innovadoras y dinamicas Que nos combierten en la mejor opcion de BPOpara tus negocios.</h6>
                </div>
                <div className="row p-4">
                  <div className="col-md-6">
                    <div className="d-flex p-1">
                      <img src={icon2} className="icon-footer"/>
                      3117654
                    </div>
                    <div className="d-flex p-1">
                      <img src={icon2} className="icon-footer"/>
                      3217603903
                    </div>
                    <div className="d-flex p-1">
                      <img src={icon1} className="icon-footer"/>
                      info@workandby.com
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex p-1">
                      <img src={icon3} className="icon-footer" />
                      Kilometro 11 via sector cerritos malabar centro de negocios oficina 301
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
}

export default App
