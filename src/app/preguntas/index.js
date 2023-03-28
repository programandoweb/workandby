import { Accordion,Card } from "react-bootstrap";
import Bg from '../../assets/bellecolombia/preguntas/fondo_preguntas.jpg';
import Bg2 from '../../assets/bellecolombia/preguntas/fondo_preguntas2.jpg';
import Bg3 from '../../assets/bellecolombia/preguntas/banner-estilo-de-vida.png';
import Bg4 from '../../assets/bellecolombia/preguntas/fondo_preguntas3.jpg';

const App=()=>{
  return  <>
            <div className="container-fluid" style={{backgroundImage: 'url("'+Bg+'")'}} >
              <img src={Bg} className="w-100" />
            </div>
            <div className="container-fluid d-flex" style={{minHeight:'100vh',backgroundImage: 'url("'+Bg2+'")'}}>
            <div className="col-md-7 m-auto text-white">
              <Accordion>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  ¿Qué es vídeochat?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Vídeochat es un servicio de entretenimiento para adultos que no implica contacto físico, a través de páginas web especializadas, de una manera segura y con ingresos garantizados desde el primer momento de transmisión de una modelo.</Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Es como hablar igual que con un amigo.
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Si alguna vez has conversado por Facebook, Whatsapp o Skype con algún amigo o amiga ya sabes como funciona el arte de ser modelo webcam, la diferencia es que en BELLE Colombia® te pagamos por ello, tu eres quien motiva tu sala, con tu show recibirás premios si a los visitantes les gusta lo que haces, somos más que sexo... algunas modelos ganan cientos de dólares al mes solo por su personalidad y creatividad.</Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  ¿Debo ser mayor de edad?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Nuestro principal requisito es ser mayor de edad y contar con cédula de ciudadanía original, si por alguna razón has perdido tu documento de identidad podrás certificar tu mayoría de edad por medio de licencia de conducción o pasaporte. Recuerda que la contraseña NO es un medio de identificación valido.</Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  No es prostitución...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>El desarrollo de la actividad de modelo webcam NO implica ningún tipo de contacto físico, es la modelo webcam quien define sus propios límites y elige hasta donde desea llegar, NO existiendo obligación alguna para la modelo sobre un show o practica en especifico, teniendo la posibilidad de conversar con persona de otros países, aprendiendo sobre otras culturas y generando ambientes fantasiosos y agradables que permitirán al modelo disfrutar de su turno de transmisión.</Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  ¡La actitud lo es todo!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>Sobre cualquier cosa nos importa tu simpatía y carisma más que tu aspecto físico, en BELLE Colombia® no tenemos un perfil definido, nuestras modelos profesionales webcam no son mejores por su apariencia, sino por la manera como hacen las cosas frente a la cámara.</Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  Tu privacidad
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p>Tu privacidad hace parte de nuestro compromiso por ello trabajamos bajo estándares del SISTEMA DE GESTIÓN DE LA SEGURIDAD DE LA INFORMACIÓN ISO 27001 Versión 2013, nuestras páginas pueden ser bloqueadas para Colombia, además tu nombre real no estará expuesto en ningún momento, utilizando como protección adicional un nickname o seudónimo, de esta manera tu circulo social no se enterará de lo que haces si tú así lo decides.</p>
                      <p>BELLE Colombia® hace parte de un grupo empresarial, por lo que tu certificado de afiliación, EPS, ARL y hasta certificados laborales se tramitarán por medio de otra razón social que no reflejará en ningún momento la actividad de modelaje webcam.</p>
                    </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </div>
           </div>
           <div className="container-fluid" style={{backgroundImage: 'url("'+Bg3+'")',backgroundSize:'cover'}}>
              <div className="row p-5">
                <div className="col-12 col-sm-6 pt-5">
                  <div className="text-center w-100">
                    <img src={Bg4} className="w-75 m-auto" />
                  </div>
                  <h5 className="p-3">
                    Ser modelo webcam es un camino ideal para cualquier mujer que desee vivir un estilo de vida exitoso, lleno de belleza, glamour, independencia y estabilidad financiera, como cualquier otra profesión requiere entrega, dedicación y pasión.
                  </h5>
                  <h5 className="p-3">
                    <b>!Pero no te preocupes!</b> En Belle Colombia® no solo te damos una oportunidad, también te enseñamos como lograrlo.
                  </h5>
                  <div className="text-center"><button type="button" class="btn btn-dark">Quiero Aplicar</button></div>
                </div>
                <div className="col-12 col-sm-6">
                </div>
              </div>
            </div>
          </>
}

export default App