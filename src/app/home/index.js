import Bg from '../../assets/workandby/home/banner-home.png';
import Bg2 from '../../assets/workandby/home/quienes-somos-home.png';
import Bg3 from '../../assets/workandby/home/servicios-home.png';


const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")',backgroundSize:'cover',backgroundPosition:'center',position:'relative',zIndex:'9'}} >
              <div className="row">
                <div className="col">
                  <div className="p-md-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0 pt-4"><b>Servicios inspirados</b></h2>
                      <h3>en tus necesidades</h3>
                      <div className="btn btn-primary btn-lg mt-4">
                        Contáctenos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid min-height" style={{backgroundImage: 'url("'+Bg2+'")',backgroundSize:'cover',marginTop:'-140px',display:'flex',alignItems:'center'}}>
                <div className="col-md-1 	d-none d-sm-block"></div>
                <div className="col-lg-5 col-12 text-white mt-5">
                  <h2 className="text-azul p-3"><b>¿Quiénes Somos?</b></h2>
                  <p>workandby® es una integradora multiempresa y multiplataforma creada para operar bajo sistemas de BPO, siendo reconocida como una de las más importantes de América Latina, fundada en el año 2016 en la ciudad de Medellín (Antioquia) Colombia.</p>
                  <p>En la actualidad Skayenz® cuenta con partners de internacionalización en Estados Unidos, Brasil, México y España para la atención especializada de Clientes a nivel mundial.</p>
                  <p>Nuestros proyectos son desarrollados por mano de obra calificada 100% Colombiana, contando con cuatro grandes líneas de servicios por outsoursing.</p>
                  <h4 className="p-2"><b>¡Bienvenidos a una empresa de pujanza Paisa con proyección mundial!.</b></h4>
                </div>
                <div className="col-md-12"></div>
            </div>
            <div className="container-fluid p-5" >
              <div className="text-center">
                <div className="text-azul-oscuro">
                  <h2 className="col-md-6 m-auto"><b>Soluciones innovadoras y dinámicas</b> que nos combierten en la mejor opción de BPO para tus negocios.</h2>
                  <div className="btn btn-primary btn-lg mt-4">
                    Contáctenos
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid p-md-5" style={{backgroundImage: 'url("'+Bg3+'")',backgroundSize:'cover',backgroundPosition:'center',display:'flex',alignItems:'center'}}>
              <div className="col-lg-7 col-12 m-auto row p-md-5 text-white container-servicios-home">
                <div className="col-lg-6">
                  <span className="text-azul">✔</span> Software como servicio SAAS<br/>
                  <span className="text-azul">✔</span> Servidores<br/>
                  <span className="text-azul">✔</span> Bigdata e inteligencia artificial<br/>
                  <span className="text-azul">✔</span> Posicionamiento SEO<br/>
                  <span className="text-azul">✔</span> Testing de software<br/>
                  <span className="text-azul">✔</span> Servicios de ingeniería<br/>
                  <span className="text-azul">✔</span> Servicios de Infraestructura<br/>
                  <span className="text-azul">✔</span> Servicios de formación y capacitación<br/>
                  <span className="text-azul">✔</span> Dispersión de pagos<br/>
                  <span className="text-azul">✔</span> Contabilidad y revisoría fiscal<br/>
                  <span className="text-azul">✔</span> Implementación NIIF<br/>
                  <span className="text-azul">✔</span> Servicios de Inversión<br/>
                  <span className="text-azul">✔</span> Manejo de rendimientos<br/>
                </div>
                <div className="col-lg-6">
                  <span className="text-azul">✔</span> Servicio al cliente en español<br/>
                  <span className="text-azul">✔</span> Servicio al cliente en inglés<br/>
                  <span className="text-azul">✔</span> Televenta<br/>
                  <span className="text-azul">✔</span> Gestión de compras<br/>
                  <span className="text-azul">✔</span> Análisis de datos<br/>
                  <span className="text-azul">✔</span> Atención en puntos de ventas y servicio<br/>
                  <span className="text-azul">✔</span> Consultoría<br/>
                  <span className="text-azul">✔</span> Gestión de recursos humanos<br/>
                  <span className="text-azul">✔</span> Servicios legales<br/>
                  <span className="text-azul">✔</span> Cliente Incognito<br/>
                  <span className="text-azul">✔</span> Gestión de cartera y cobranzas<br/>
                  <span className="text-azul">✔</span> Servicios legales<br/>
                </div>
              </div>
            </div>
          </>
}

export default App