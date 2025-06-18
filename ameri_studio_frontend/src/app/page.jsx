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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clientes`); // sin localhost
  const json = await res.json();

  if (!json.ok) {
    console.log("Error: " + json.message);
  } else {
    console.log("Clientes:", json.data);
    return json.data;
  }
}

async function AmeriHome() {
  /* const clientes = await getClientes();
  console.log("clientes", clientes.data);
  clientes.data.map((cliente) => {
    console.log("cliente", cliente);
    console.log("cliente.nombre", cliente.nombreCompleto);
  }); */

  return (
    <div>
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <Link
                className="social-link text-light"
                href="https://www.facebook.com"
                target="_blank"
              >
                <i className="ti-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link
                className="social-link text-light"
                href="https://www.twitter.com"
                target="_blank"
              >
                <i className="ti-twitter" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="social-item">
              <Link
                className="social-link text-light"
                href="https://www.instagram.com"
                target="_blank"
              >
                <i className="ti-instagram" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hola, Nosotros somos</h4>
            <h1 className="header-title">Ameri Studio</h1>
            <h6 className="header-mono">Baberia | Clases</h6>
            <button className="btn btn-primary btn-rounded">
              <i className="ti-printer pr-2"></i>VER MAS
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
