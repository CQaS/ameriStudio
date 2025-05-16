import Link from "next/link";
import Navbar from "./components/navbar";
import PersonalInfo from "./components/personalInfo";
import Resumen from "./components/resumen";
import Hphc from "./components/hphc";
import Servicios from "./components/servicios";
import Precios from "./components/precios";
import Blog from "./components/blog";
import Contacto from "./components/contacto";
import Footer from "./components/footer";

async function getClientes() {
  const res = await fetch("http://localhost:3000/api/clientes");
  console.log("res", res);
  const data = await res.json();
  return data;
}

async function AmeriHome() {
  const clientes = await getClientes();
  console.log("clientes", clientes);
  clientes.Lista.map((cliente) => {
    console.log("cliente", cliente);
    console.log("cliente.nombre", cliente.nombreCompleto);
  });

  return (
    <div>
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <Link className="social-link text-light" href="#">
                <i className="ti-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link className="social-link text-light" href="#">
                <i className="ti-twitter" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link className="social-link text-light" href="#">
                <i className="ti-google" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link className="social-link text-light" href="#">
                <i className="ti-instagram" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link className="social-link text-light" href="#">
                <i className="ti-github" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">John Doe</h1>
            <h6 className="header-mono">Frond end Designer | Developer</h6>
            <button className="btn btn-primary btn-rounded">
              <i className="ti-printer pr-2"></i>Print Resume
            </button>
          </div>
        </div>
      </header>
      <Navbar />
      <PersonalInfo />
      <Resumen />
      <Hphc />
      <Servicios />
      <Precios />
      <Blog />
      <Contacto />
      <Footer />
    </div>
  );
}

export default AmeriHome;
