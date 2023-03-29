import Bg from '../../assets/workandby/servicios/banner-servicios.png';
import Bg2 from '../../assets/workandby/servicios/fondo-servicios-1.png';
import Bg3 from '../../assets/workandby/servicios/fondo-servicios-2.png';
import icon1 from '../../assets/workandby/servicios/altos_niveles.svg';
import icon2 from '../../assets/workandby/servicios/politicas.svg';

const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")',backgroundSize:'cover',backgroundPosition:'center',position:'relative',zIndex:'9'}} >
              <div className="row">
                <div className="col-md-6 m-auto">
                  <div className="p-md-5 text-center slider">
                    <div className="text-white pt-5 text-intro">
                      <h2 className="mb-0 pt-4"><b>La nube es el pilar de una empresa</b></h2>
                      <h3>que se proyecta en el futuro.</h3>
                      <a href="./contactenos" className="btn btn-primary btn-lg mt-4">
                        Contáctenos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid min-height" style={{backgroundImage: 'url("'+Bg2+'")',backgroundSize:'cover',backgroundPosition:'center',marginTop:'-140px',display:'flex',alignItems:'center'}}>
                <div className="col-md-4 d-none d-md-block"></div>
                <div className="col-md-8 text-white mt-5">
                  <h1 className="text-azul"><b>Cloud</b><br/>contac Center</h1>
                  <p>Ponga en marcha su negocio con los servicios en cloud:</p>
                   <span className="text-azul">✔</span> Sin inversión en hardware, software o infraestructura compleja.<br/>
                   <span className="text-azul">✔</span> Sin altos costos de mantenimiento y configuración.<br/>
                   <span className="text-azul">✔</span> Con Personalizaciones. Y por módulos.<br/>
                   <span className="text-azul">✔</span> Alta disponibilidad y contingencia.<br/>
                   <span className="text-azul">✔</span> Escalable y flexible, reflejando la dinámica de su negocio en minutos.<br/>
                   <span className="text-azul">✔</span> Sin importar el tamaño de las campañas o su duración.<br/>
                   <span className="text-azul">✔</span> Con Agentes distribuidos en cualquier parte del mundo.<br/>
                </div>
            </div>
            <div className="container p-5" >
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex">
                    <img src={icon1} className="icon-servicios" />
                    <h2 className="text-azul-oscuro text-icon-servicios pl-4"><b>Altos niveles</b><br/>
                      de seguridad:</h2>
                  </div>
                  <div className="items-servicios mt-4">
                    <span className="text-azul">✔</span> Operaciones centradas en redes geográficamente redundantes.<br/>
                    <span className="text-azul">✔</span> Conectividad de alta seguridad como VPN.<br/>
                    <span className="text-azul">✔</span> Personal altamente capacitado 24/7.<br/>
                    <span className="text-azul">✔</span> Sistemas 100% redundantes.<br/>
                    <span className="text-azul">✔</span> Instancias independientes por cliente garantizando la seguridad de su información y la de sus clientes.<br/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <img src={icon2} className="icon-servicios" />
                    <h2 className="text-azul-oscuro text-icon-servicios pl-4"><b>Políticas de</b><br/>
                    seguridad y calidad:</h2>
                  </div>
                  <div className="items-servicios mt-4">
                    <span className="text-azul">✔</span> SARLAFT.<br/>
                    <span className="text-azul">✔</span> ISO 27001.<br/>
                    <span className="text-azul">✔</span> Anticorrupción y soborno.<br/>
                    <span className="text-azul">✔</span> Habeas data.<br/>
                    <span className="text-azul">✔</span> Compliance.<br/>
                    <span className="text-azul">✔</span> SGSST.<br/>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid p-md-5 padding-movil" style={{backgroundImage: 'url("'+Bg3+'")',backgroundSize:'cover',backgroundPosition:'center',display:'flex',alignItems:'center'}}>
              <div className="col-md-7 ml-auto p-md-5 text-white">
                <span className="text-azul">✔</span> Disminuye contingencias para que pueda desarrollar todo su potencial.<br/>
                <span className="text-azul">✔</span> La diferencia entre un consejo trivial y una asesoría integral puede ser muy significativo para tu empresa, y eso se consigue con el conocimiento y la experiencia de potentes equipos multidisciplinarios, que conozcan a fondo todos los aspectos de la parte de Outsourcing. Diseñamos, implementamos y operamos procesos de trabajo de alta calidad en materia de contabilidad, impuestos y finanzas, con el fin de operar en los aspectos más estratégicos del cliente y la posterior toma de decisiones.<br/>
                <a href="./contactenos" className="btn btn-primary btn-lg mt-5">
                  Contáctenos
                </a>
                <div className="card-porcentajes mt-5">
                  <div class="porcentaje"><b>25%</b></div>
                  <div class="texto-porcentajes ml-4">Disminución tiempo de inactividad</div>
                </div>
                <div className="card-porcentajes mt-2">
                  <div class="porcentaje"><b>34%</b></div>
                  <div class="texto-porcentajes ml-4">Disminución de abandono de clientes</div>
                </div>
                <div className="card-porcentajes mt-2">
                  <div class="porcentaje"><b>12%</b></div>
                  <div class="texto-porcentajes ml-4">Aumento de utilidad</div>
                </div>
              </div>
            </div>
          </>
}

export default App
