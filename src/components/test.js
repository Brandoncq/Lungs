import React, { useEffect, useRef } from 'react';
function Portada() {
  return (
    <div>
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="image-card">
            <img src="https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b7ee442f1e5b9fee1c117_hacerse-una-casa.jpeg" className="img-fluid"/>
            <div className="row p-5 m-0 hidden">
              <hr style={{ border: '2px solid #000' }}/>
              <h5>Izquierda</h5>
              <strong>Mancera Ernst & Young/Oficinas Corporativas</strong>
              <h5>16000 m<sup>2</sup></h5>
              <h5>Antara, CDMX, 2006</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="image-card">
            <img src="https://e1.pxfuel.com/desktop-wallpaper/861/917/desktop-wallpaper-modern-house.jpg" className="img-fluid"/>
            <div className="row p-5 m-0">
              <hr style={{ border: '2px solid #000' }}/>
              <div className="col-lg-8 col-6 hidden">
                <h5>Derecha</h5>
                <strong>Tip & Toe/Clinica de Belleza</strong>
                <h5>100 m<sup>2</sup></h5>
                <h5>Metec, Mex, 2014</h5>
              </div >
              <div className="col-lg-4 col-6 d-flex aling-items-center justify-content-center">
                <img src={require("../imagenes/mini.png")} className="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="image-card" style={{ backgroundColor:"#231f20" }}>
            <div className="row p-3 m-0">
              <div className="col-12 d-flex aling-items-center justify-content-end">
                <img src={require("../imagenes/enko.png")} className="img-fluid" style={{ maxWidth: '200px', maxHeight: '200px' }}/>
              </div>
            </div>
            <div className="row px-5 py-2 m-0 hidden">
              <h5 style={{ color: "#aca8a9", textAlign: "center" }}>“BRINDAMOS</h5>
              <h2 style={{ color: "#78797d", textAlign: "center" }}><strong>una correcta planeación</strong></h2>
              <h5 style={{ color: "#aca8a9", textAlign: "center" }}>DE LOS ESPACIOS CON BASE</h5>
              <h2 style={{ color: "#78797d", textAlign: "center" }}><strong>a la creatividad y las</strong></h2>
              <h5 style={{ color: "#aca8a9", textAlign: "right" }}>NECESIDADES DE CADA CLIENTE”</h5>
            </div>
            <div className="row p-3 m-0">
              <div className="col-12 hidden" style={{ textAlign: "right" }}>
                <h6 style={{ color: "white", textAlign: "right" }}>Adolfo Arévalo</h6>
                <p style={{ color: "white", textAlign: "right" }}><em>Arquitecto de Enko Arquitectura</em></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="image-card">
            <img src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-7.jpg" className="img-fluid"/>
            <div className="row p-5 m-0">
              <hr style={{ border: '2px solid #000' }}/>
              <div className="col-lg-8 col-6 hidden">
                <h5>Derecha</h5>
                <strong>Grupo Editorial Expansión/Comedor</strong>
                <h5>800 m<sup>2</sup></h5>
                <h5>Constituyentes, CDMX, 2009</h5>
              </div >
              <div className="col-lg-4 col-6 d-flex aling-items-center justify-content-center">
                <img src={require("../imagenes/mini.png")} className="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Portada;

window.addEventListener("click", e=>{
  console.log(e.target)
})