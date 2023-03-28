import Bg from '../../assets/workandby/joberp/banner-joberp.png';
import Bg2 from '../../assets/workandby/joberp/fondo-1.png';
import Bg3 from '../../assets/workandby/joberp/celular.png';
import Bg4 from '../../assets/workandby/joberp/fondo-2.png';
import robot from '../../assets/workandby/joberp/robot-pequeno.png';

const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")',backgroundSize:'cover',backgroundPosition:'center',position:'relative',zIndex:'9'}} >
              <div className="row">
                <div className="m-auto pt-5">
                  <div className="p-md-5 text-center slider">
                    <div className="text-white pt-5 intro-movil">
                      <h2 className="mb-0 pt-5"><b>Más que un aplicativo</b></h2>
                      <h3>¡Un asistente para tus negocios!</h3>
                      <div className="btn btn-primary btn-lg mt-4">
                        Contáctenos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid min-height" style={{backgroundImage: 'url("'+Bg2+'")',backgroundSize:'cover',backgroundPosition:'center',marginTop:'-140px',display:'flex',alignItems:'center'}}>
                <div className="col-md-6 d-none d-md-block"></div>
                <div className="col-md-4 text-white mt-5">
                  <h1 className="text-azul mb-4"><b>Decisiones</b><br/>en tiempo real</h1>
                    <span className="text-azul">✔</span> Con JobERP® sabrás en tiempo real, el estado de tu empresa, proporcionándote la capacidad de toma de decisiones ágiles y efectivas.<br/>
                    <span className="text-azul">✔</span> Disminuye costos de operación, controla tu productividad, mejora procesos y aumenta rentabilidad.<br/>
                    <span className="text-azul">✔</span> Realiza con JobERP® de manera tranquila tus negocios al saber que tu información está segura.<br/>
                </div>
            </div>
            <div className="container-fluid p-5" >
              <div className="row text-center">
              <div className="col-md-8 p-md-5 sedes-movil">
                <div className="text-azul-oscuro">
                  <h2 className="col-md-12"><b>Soluciones innovadoras y dinámicas</b> que nos combierten en la mejor opción de BPO para tus negocios.</h2>
                  <div className="btn btn-primary btn-lg mt-4">
                    Contáctenos
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <img src={Bg3} className="img-celular"/>
              </div>
              </div>
            </div>
            <div className="container-fluid p-md-5 padding-movil" style={{backgroundImage: 'url("'+Bg4+'")',backgroundSize:'cover',backgroundPosition:'center',display:'flex',flexWrap:'wrap',alignItems:'center'}}>
              <div className="col-md-7 m-auto p-md-5 text-azul text-center">
                <h1><strong>Entendemos tú empresa y nos</strong><br/> ajustamos a tu tipo de industria</h1>
              </div>
              <div className="col-md-8 ml-auto mr-auto row pl-5 pr-5 text-white mb-5 pb-5 cards-movil">
                <div className="col-md-6 pb-4">
                  <div className="my-card">
                      <span className="text-azul">✔</span> Servicios profesionales.<br/>
                      <span className="text-azul">✔</span> Contadores<br/>
                      <span className="text-azul">✔</span> Distribuidores y Mayoristas.<br/>
                      <span className="text-azul">✔</span> Logística y transportes<br/>
                      <span className="text-azul">✔</span> Actividades agrícolas.<br/>
                      <span className="text-azul">✔</span> Tiendas, comercios y abarrotes.<br/>
                      <span className="text-azul">✔</span> Ferreterías y ferroeléctricos.<br/>
                      <span className="text-azul">✔</span> Hoteles y hostales.<br/>
                      <span className="text-azul">✔</span> Restaurantes, cafeterías y bares.<br/>
                      <span className="text-azul">✔</span> Boutiques.<br/>
                      <span className="text-azul">✔</span> Limpieza y mantenimiento.<br/>
                      <span className="text-azul">✔</span> Compraventas y prenderías.<br/>
                      <span className="text-azul">✔</span> Inmobiliarias.<br/>
                  </div>
                </div>
                <div className="col-md-6 pb-4 position-relative">
                  <img src={robot} className="img-robot"/>
                  <div className="my-card">
                    <span className="text-azul">✔</span> Panaderías y pastelerías.<br/>
                    <span className="text-azul">✔</span> Farmacias.<br/>
                    <span className="text-azul">✔</span> Peluquerías y barberías.<br/>
                    <span className="text-azul">✔</span> Spas y estéticas.<br/>
                    <span className="text-azul">✔</span> Actividades agrícolas.<br/>
                    <span className="text-azul">✔</span> Tiendas Online.<br/>
                    <span className="text-azul">✔</span> Food trucks y kioskos.<br/>
                    <span className="text-azul">✔</span> Escuelas y clubes.<br/>
                    <span className="text-azul">✔</span> Gimnasios.<br/>
                    <span className="text-azul">✔</span> Catering.<br/>
                    <span className="text-azul">✔</span> Talleres y autopartes.<br/>
                    <span className="text-azul">✔</span> Constructoras.<br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </>
}

export default App