// components/ModalReserva.jsx
import React, { useState } from "react";

const ModalReservas = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    // Agrega aquí los demás campos de tu formulario
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: "", // Limpiar el error al cambiar el valor
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
      isValid = false;
    }

    // Agrega aquí más validaciones para los otros campos

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(formData); // Llama a la función onSubmit proporcionada por el padre
      onClose(); // Cierra el modal después de enviar (simulado)
      setFormData({ nombre: "", email: "" /* Reinicia los campos */ });
      setErrors({}); // Limpia los errores
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/50 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-20">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  ¡Reserva tu Turno!
                </h3>
                <div className="mt-2">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="nombre"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Nombre:
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.nombre ? "border-red-500" : ""
                        }`}
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-xs italic">
                          {errors.nombre}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs italic">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    {/* Agrega aquí los demás campos del formulario */}
                    <div className="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={onClose}
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        ¡Reservar Ahora!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReservas;
