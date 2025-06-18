"use client";
import { useEffect, useState } from "react";
import ModalReservas from "./modalReservas";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReservaSubmit = (formData) => {
    console.log("Datos de la Reserva desde el Navbar:", formData);
    // Aquí iría la lógica para enviar los datos reales al backend
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
      data-spy="affix"
      data-offset-top="510"
    >
      {/* <ul className="navbar-nav brand">
            <img src="/imgs/avatar.jpg" alt="" className="brand-img"></img>
            <li className="brand-txt">
              <h5 className="brand-title">John Doe</h5>
              <div className="brand-subtitle">Web Designer | Developer</div>
            </li>
          </ul> */}
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center text-xl font-semibold">
          <svg
            className="w-6 h-6 mr-2 fill-current text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M19.69 5.23c-.38-.38-1-.39-1.39 0l-2.12 2.12-1.41-1.41-2.12 2.12-1.41-1.41-2.12 2.12-1.41-1.41-2.12 2.12-1.39-.01-1.39.38 0 .39l2.12-2.12 1.41 1.41 2.12-2.12 1.41 1.41 2.12-2.12 1.41 1.41 2.12-2.12.01 1.39.38 1.39 1.39 0l2.12 2.12 1.41-1.41 2.12 2.12 1.41-1.41 2.12 2.12 1.39.01 1.39-.38 0-.39l-2.12 2.12-1.41-1.41-2.12 2.12-1.41-1.41-2.12 2.12-1.39.01-1.39-.38zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
          </svg>
          Barbería Ameri Studio
        </a>

        <div className="hidden md:flex space-x-4">
          <div className="nav-item">
            <a href="/" className="hover:text-blue-800 nav-link">
              Inicio
            </a>
          </div>
          <div className="nav-item">
            <a href="#servicios" className="hover:text-blue-800 nav-link">
              Servicios
            </a>
          </div>
          <div className="nav-item">
            <a href="/barberos" className="hover:text-blue-800 nav-link">
              Barber
            </a>
          </div>
          <div className="nav-item">
            <a href="/reservas" className="hover:text-blue-800 nav-link">
              Reservas
            </a>
          </div>
          <div className="nav-item">
            <a href="#contacto" className="hover:text-blue-800 nav-link">
              Contacto
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-blue-500 via-orange-500 to-white text-gray-800 py-2.5 px-6 rounded-full shadow-lg font-semibold hover:shadow-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            ¡Reservar Turno!
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${isMobileMenuOpen ? "block" : "hidden"} bg-gray-800 py-4`}
      >
        <a href="/" className="block px-4 py-2 hover:bg-gray-700">
          Inicio
        </a>
        <a href="/servicios" className="block px-4 py-2 hover:bg-gray-700">
          Servicios
        </a>
        <a href="/barberos" className="block px-4 py-2 hover:bg-gray-700">
          Barberos
        </a>
        <a href="/reservas" className="block px-4 py-2 hover:bg-gray-700">
          Reservas
        </a>
        <a href="/contacto" className="block px-4 py-2 hover:bg-gray-700">
          Contacto
        </a>
        <a
          href="/reservar"
          className="block px-4 mt-2 bg-yellow-500 text-gray-800 rounded-full text-center py-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >
          Reservar Cita
        </a>
      </div>

      {/* Modal */}
      {/* Renderiza el componente ModalReserva */}
      <ModalReservas
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleReservaSubmit}
      />
    </nav>
  );
}

export default Navbar;
