function Inicio() {
    return (
      <div>
        <div className="row m-0">
          <div className="col-lg-5 col-12 p-0 m-0 position-portada">
            <img
              src="https://fondosmil.com/fondo/60017.jpg"
              className="img-fluid img-portada"
              alt="Imagen Incrustada"
            />
            
          </div>
          <div className="position-logo"> 
            <div className="col-12 p-5 m-0 ">
              <div className="col-12 p-5 m-0 d-flex aling-items-center justify-content-end">
                <div className="col-12 p-5 m-0 d-flex aling-items-center justify-content-end">
                  <img src={require("../imagenes/mini.png")} className="img-fluid img-logo" style={{ minWidth: '100px', minHeight: '100px' }}/>
                </div>
              </div>
            </div>
          </div>
        </div>       
        <br></br>
        <div className="row m-0">
          <div className="col-lg-5 col-12 p-0 m-0">
            <div className="image-card">
              <img src="https://images.adsttc.com/media/images/58e0/47d6/e58e/ce48/a300/0264/medium_jpg/DELORDINAIREarchitects_highhouse_09.jpg?1491093421" className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-7 col-12 p-3 m-0">
            <div className="row p-0 m-0">
              <div className="row px-5 py-0 m-0 hidden">
                <div className="row px-5 m-0">
                <h1 style={{ color: "#a52638" , textAlign: "left"}} className="Ajustar p-0">ENKO</h1>
                <h1 style={{ color: "#656d5f" , textAlign: "center"}} className="p-0"><strong>arquitectura</strong></h1>
              </div>
              </div>
              <div className="row p-5 m-0" style={{ color: "#656d5f" ,textAlign: 'justify' }}>
                <div className="col-lg-4 col-12 m-0">
                </div>
                <div className="col-lg-8 col-12 m-0 hidden">
                  <p>Trabajamos en equipo con nuestros clientes
                  para lograr una solución única donde las
                  personas puedan realizas sus actividades 
                  de la mejor manera posible.</p>
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="col-lg-4 col-12 m-0">
                <h1 style={{ color: "#656d5f" , textAlign: "left"}} className="p-0"><strong>13 años</strong></h1>
                <h4 style={{ color: "#a52638" , textAlign: "left"}} className="p-0">DE EXPERIENCIA</h4>
                </div>
                <div className="col-lg-8 col-12 m-0">
                  <i class='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#fbc781"}}></i>
                  <i class='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#c97c87"}}></i>
                  <i class='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#8697c8"}}></i>
                  <i class='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#b7e5f7"}}></i>
                </div>
              </div>
           
              <div className="row p-0 m-0">
                <div className="col-12 d-flex aling-items-center justify-content-center">
                  <img src={require("../imagenes/patros.jpg")} className="img-fluid a-img"/>
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="col-lg-5 col-12 p-0 m-0">
                  <div className="image-card">
                    <div className="row p-1 m-0 hidden">
                      <hr style={{ border: '2px solid #000' }}/>
                      <h5>Izquierda</h5>
                      <strong>Merck Sharp & Dohme/Oficinas Corporativas</strong>
                      <h5>2,500 m<sup>2</sup></h5>
                      <h5>San Jerónimo, CDMX 2011</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 p-0 m-0">
                  <div className="image-card">
                    <div className="row p-1 m-0 hidden">
                      <hr style={{ border: '2px solid #000' }}/>
                      <h5>Superior:</h5>
                      <strong>Alsea/Oficinas Corporativas</strong>
                      <h5>2,2000 m<sup>2</sup></h5>
                      <h5>Reforma 222, CDMX, 2007</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12 p-0 m-0">
                  <div className="image-card">
                    <div className="row p-1 m-0 d-flex aling-items-center justify-content-center">
                      <img src={require("../imagenes/mini.png")} className="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
  
  export default Inicio;
  
  window.addEventListener("click", e=>{
    console.log(e.target)
  })