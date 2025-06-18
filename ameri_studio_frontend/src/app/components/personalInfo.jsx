import Link from "next/link";
import React from "react";

function PersonalInfo() {
  return (
    <div className="container-fluid">
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Quienes somos?</h3>
          <span className="line mb-5"></span>
          <h5 className="mb-3">
            Los barberos de la zona sur de san luis, Argentina.
          </h5>
          <p className="mt-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet,
            Qui deserunt consequatur fugit repellendusillo voluptas?
          </p>
          <button className="btn btn-outline-danger">
            <i className="icon-down-circled2 "></i>VER MAS
          </button>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Contacto Personal</h3>
          <span className="line mb-5"></span>
          <ul className="mt40 info list-unstyled">
            <li>
              <span>Email</span> : info@mail.com
            </li>
            <li>
              <span>Celu</span> : + (266) 444-44-44
            </li>
            <li>
              <span>Direccion</span> : Barrio 500 sur, M 00, C 00
            </li>
          </ul>
          <ul className="social-icons pt-3">
            <li className="social-item">
              <Link
                className="social-link"
                href="https://www.facebook.com"
                target="_blank"
              >
                <i className="ti-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link
                className="social-link"
                href="https://www.twitter.com"
                target="_blank"
              >
                <i className="ti-twitter" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link
                className="social-link"
                href="https://www.instagram.com"
                target="_blank"
              >
                <i className="ti-instagram" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Mi Experiencia</h3>
          <span className="line mb-5"></span>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-widget icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Curso 1</h6>
              <p className="subtitle"> Excelente!</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-paint-bucket icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Curso 2</h6>
              <p className="subtitle">Lorem ipsum dolor sit consectetur.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-stats-up icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Curso 3</h6>
              <p className="subtitle">Lorem ipsum dolor sit amet.</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
