import { useState, useEffect } from "react";
import TarjetaProyecto from "./TarjetaProyecto";
import ProyectoModal from "./ProyectoModal";
import proyectosData from "../data/proyectos.json";
function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [modalProyecto, setModalProyecto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setProyectos(proyectosData);
  }, []);

  const handleOpen = (proyecto) => {
    setModalProyecto(proyecto);
    setShowModal(true);
  };

  const handleClose = () => {
      setShowModal(false);
      setModalProyecto(null);
  };

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Mis proyectos</h2>
      <div className="row">
        {proyectos.map((proyecto, i) => (
          <TarjetaProyecto
            key={i}
            proyecto={proyecto}
            abrirModal={handleOpen}
          />
        ))}
      </div>
      <ProyectoModal
        proyecto={modalProyecto}
        show={showModal}
        onClose={handleClose}
      />
    </section>
  );
}

export default Proyectos;
