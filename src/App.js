import './App.css';
function App() {
  return (
    <div>
      <br></br>
      <div className="row m-0 position-relative">
        <div className="col-lg-5 col-12 p-0">
          <div className="image-card">
            <img src="https://img10.naventcdn.com/avisos/18/00/58/82/00/69/1200x1200/219945847.jpg" className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-7 col-12 p-5">
          <div className="col-12 d-flex justify-content-end h-100 flex-column p-2  hidden">
            <h1 style={{ color: "#a52638" }}>SERVICIOS</h1>
            <h5 style={{ color: "#656d5f"}}>1. Proyecto arquitectónico, estructural e instalaciones.</h5>
            <h5 style={{ color: "#656d5f"}}>2. Análisis del inmueble</h5>
            <h5 style={{ color: "#656d5f"}}>3. Coordinación de todas las especialidades</h5>
            <h5 style={{ color: "#656d5f"}}>4. Construcción del espacio</h5>
            <div className="row p-0 m-0">
             <hr style={{ border: '2px solid #000' }} />
                <div className="col-lg-4 col-6" style={{ color: "#656d5f"}}>
                  <h6>Izquierda y Centro:</h6>
                  <strong>4e/oficinas Corporativas</strong>
                  <h6>600 m<sup>2</sup></h6>
                  <h6>Lomas Verdes, Edo. De Méx., 2012</h6>
                </div>
                <div className="col-lg-4 col-6" style={{ color: "#656d5f"}}>
                  <h6>Derecha:</h6>
                  <strong>Tupperware/Comedors</strong>
                  <h6>500 m<sup>2</sup></h6>
                  <h6>Lerma, Edo de Méx., 2015</h6>
                </div>
                <div className="col-lg-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("./imagenes/mini.png")} className="img-fluid" style={{ maxWidth: '70px', maxHeight: '70px' }}/>
                </div>
            </div>
          </div>
          
        </div>
        <div className="p-0 position-absolute-img">
          <img
            src="https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1444430088/p/photo/image/990375/2015-04-28_20.06.jpg"
            className="img-absolute-incrustada img-fluid"
            alt="Imagen Incrustada"
          />
          <img
            src="https://www.arquitecturaydiseno.es/medio/2023/06/02/casa-tibi-de-buyo-interiores-fachada_f41a0a45_230602115948_1280x794.jpg"
            className="img-absolute-incrustada img-fluid"
            alt="Imagen Incrustada"
          />
        </div>
      </div>
      <br></br>
      <div className="row m-0 position-relative">
        <div className="col-lg-6 col-12 p-0">
          <div className="image-card">
            <img src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-12.jpg" className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0">
          <div className="image-card">
            <img src="https://www.arquitecturaydiseno.es/medio/2017/05/30/34411-main-2609-1-34411-sc-v2com_fe81303b.jpg" className="img-fluid"/>
          </div>
        </div>
        <div className="position-absolute">
          <img
            src="https://www.roomdiseno.com/wp-content/uploads/2021/01/ShineMaker7-750x500.jpg"
            className="img-absolute img-fluid"
            alt="Imagen Incrustada"
          />
        </div>    
      </div>
      <br></br>
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-0">
          <div className="image-card">
            <div className="row p-2 m-0 hidden">
              <h1 style={{ color: "#a52638" , textAlign: "right"}} className='Ajustar'>EXPERIENCIA</h1>
              <h1 style={{ color: "#656d5f" , textAlign: "right"}}><strong>comercial</strong></h1>
            </div>
            <img src="https://liqe.es/wp-content/uploads/01-ESQUINA.jpg" className="img-fluid p-0 m-0"/>
            <div className="row px-5 py-5 m-0">
              <div className="row px-5 py-0 m-0 hidden">
                <h3><strong style={{ color: "#656d5f" , textAlign: "left"}}>Hacemos palpable</strong></h3>
                <h5 style={{ color: "#a52638", textAlign: "center" }} className="light">LA PERSONALIDAD DE LAS EMPRESAS</h5>
                <h3 style={{ color: "#656d5f", textAlign: "center" }}><strong>en cada m<sup>2</sup></strong></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0">
          <div className="row p-5 m-0 d-flex justify-content-center">
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>AXA</strong></h6>
              <p>Búsqueda e Implementación 
                <br></br>de tiendas para Promotores</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>NEXTEL</strong></h6>
              <p>Proyecto ejecutivo de remodelación
              <br></br>de Centros de Atención y Tiendas.
              <br></br>Proyecto ejecutivo para nuevos
              <br></br>Centros de Atención y Tiendas</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>CINEMEX</strong></h6>
              <p>Proyecto de remodelación para cines existentes.
              <br></br>Proyecto de nuevos complejos.</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>TOYOTA</strong></h6>
              <p>Propuesta para remodelación
              <br></br>de nuevas salas de espera</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>WALTMART</strong></h6>
              <p>Proyectos para implementación de banco Walmart
              <br></br>Levantamientos Arquitectónicos
              <br></br>Proyectos Varios</p>
            </div>
            <div className="col-12 p-0" style={{ color: "#656d5f", textAlign: "right" }}>
              <div className="row p-0 m-0">
                <div className="col-lg-6 col-8 hidden">
                  <hr style={{ border: '2px solid #000' }} />
                  <h6><strong>Aistom/Oficionas Corporativas</strong></h6>
                  <p>2.500<sup>2</sup>
                  <br></br>Montes, Urales, CDMX, 2010</p>
                </div>
                <div className="col-lg-6 col-4 d-flex align-items-center justify-content-center">
                  <img src={require("./imagenes/mini.png")} className="img-fluid" style={{ maxWidth: '70px', maxHeight: '70px' }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
