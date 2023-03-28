import Bg from '../../assets/workandby/nosotros/banner.png';
import Bg2 from '../../assets/workandby/nosotros/nosotros-fondo.png';
import Bg3 from '../../assets/workandby/nosotros/costo_operativo.png';
import Bg4 from '../../assets/workandby/nosotros/servicio-personalizad.png';
import Bg5 from '../../assets/workandby/nosotros/tecnologia-orientada.png';
import Bg6 from '../../assets/workandby/nosotros/brazo.png';

const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")',backgroundSize:'cover',backgroundPosition:'center',position:'relative',zIndex:'9'}} >
              <div className="row">
                <div className="col">
                  <div className="p-md-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0 pt-4"><b>Soluciones innovadoras</b></h2>
                      <h3>BPO para tus negocios</h3>
                      <div className="btn btn-primary btn-lg mt-4">
                        Contáctenos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid" style={{backgroundImage: 'url("'+Bg2+'")',backgroundSize:'cover',marginTop:'-170px',paddingTop:'160px'}}>
                <div className="col-md-5 offset-md-6 mt-5 text-white pl-5 pr-5 text-justify">
                  <h2 className="text-azul p-3"><b>¿Por que contratar</b><br/> una BPO colombiana?</h2>
                  <p>Colombia es uno de los destinos más atractivos del mundo para la localización de servicios globales, así lo señalan AT Kearney & Gartner, por su alta disponibilidad de talento humano calificado, costos competitivos y clima de negocios favorable, esto nos permite consolidarnos como una plataforma exportadora de servicios cada vez más sofisticada, que incorpora nuevas y mejores tecnologías.</p>
                  <p>La estabilidad jurídica de Colombia juega un papel muy importante para los inversionistas, como empresa BPO de constante crecimiento podemos garantizar una ubicación geográfica privilegiada y alta infraestructura en temas de conectividad que genera confianza en términos de operaciones.</p>
                </div>
                <div className="container cards-nosotros">
                  <div className="row mt-5 mb-5">
                    <div className="col-md-4">
                      <div className="my-card text-center">
                        <img src={Bg3} className="img-card-nosotros"/>
                        <div class="text-card mt-5">
                          <h3 class="title-card"><b>Disminución del</b><br/> costo operativo.</h3>
                          <p class="text-center mt-4">Terceriza aquellos procesos complementarios a tu actividad​ y dedícate a la operación real de tu empresa.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="my-card text-center">
                        <img src={Bg4} className="img-card-nosotros"/>
                        <div class="text-card mt-5">
                          <h3 class="title-card"><b>Servicio</b><br/> personalizado.</h3>
                          <p class="text-center mt-4">Que nos permite garantizar más que un servicio, una solución real adaptada a tus necesidades.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="my-card text-center">
                        <img src={Bg5} className="img-card-nosotros"/>
                        <div class="text-card mt-5">
                          <h3 class="title-card"><b>Tecnología orientada</b><br/> a tus ventas</h3>
                          <p class="text-center mt-4">Sabemos la importancia de tu crecimiento, por ello todos nuestros procesos BPO nace del concepto "Primero la venta"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={Bg6} className="brazo d-lg-block d-none" />
            </div>
          </>
}


export default App
