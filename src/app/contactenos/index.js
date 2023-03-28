import React,{useState} from 'react';
import Bg from '../../assets/workandby/contactanos/fondo-banner.png';
import Bg2 from '../../assets/workandby/contactanos/fondo-contactanos.png';
import icon1 from '../../assets/workandby/home/correo.svg';
import icon2 from '../../assets/workandby/home/telefono.svg';
import icon3 from '../../assets/workandby/home/ubicacion.svg';
import Functions from '../../helpers/Functions';


const App=()=>{
  const [inputs, setInputs] = useState({});

  const onChange=(e)=>{
    let input = {...inputs}
        input[e.target.name]  = e.target.value
        setInputs(input)
  }

  function onSubmit(e){
    e.preventDefault()
    let data  = inputs
    Functions.PostAsync("Contacto","contactenos",data,{},{name:"callbackContinue",funct:callbackContinue})
  }

  function callbackContinue(data){

  }

  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")',backgroundSize:'cover',backgroundPosition:'center',position:'relative',zIndex:'9'}} >
              <div className="row">
                <div className="col-md-8">
                  <div className="p-md-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0 pt-4"><b>Profesionales del BPO</b></h2>
                      <h3>Tú mejor elección</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid p-5 contact-movil" style={{backgroundImage: 'url("'+Bg2+'")',backgroundSize:'cover',marginTop:'-140px',display:'flex',alignItems:'center'}}>
              <div className="col-md-6 m-auto p-md-5">
                <div className="row mt-5 p-md-5">
                  <div className="col-md-4 text-center">
                    <img src={icon1} className="w-50" />
                    <div className="text-contactos mt-4">
                      3117654<br/>
                      3217603903
                    </div>
                  </div>
                  <div className="col-md-4 text-center bordes">
                    <img src={icon2} className="w-50" />
                    <div className="text-contactos mt-4">
                      Kilometro 11 via sector cerritos malabar centro de negocios oficina 301
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <img src={icon3} className="w-50" />
                    <div className="text-contactos mt-4">
                      info@workandby.com
                    </div>
                  </div>
                </div>
                <div className="formulario-contacto">
                  <div className="header-formaulario">
                    Contáctanos
                  </div>
                  <div className="formulario">
                    <input type="text" className="input" name="nombre_completo" placeholder="Nombre completo*" required="required" />
                    <input type="text" className="input mt-3" name="email" placeholder="Correo electronico*" required="required" />
                    <input type="text" className="input mt-3" name="telefono" placeholder="Telefono*" required="required" />
                    <textarea name="" className="input mt-3" cols="40" rows="5" placeholder="Mensaje y/o comentario"></textarea>
                    <div class="form-check m-3">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Autorizo el tratamiento de Datos Personales
                      </label>
                    </div>
                    <div className="text-right">
                      <div className="btn btn-primary btn-lg">
                        Enviar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
}


export default App
