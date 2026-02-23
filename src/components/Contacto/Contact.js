// src/pages/Contact.jsx
export default function Contact() {
  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="mb-4">Contacto</h2>
        <div className="row">
          <div className="col-lg-7">
            <form onSubmit={(e) => { e.preventDefault(); alert("¡Gracias por tu mensaje!"); }} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Nombre</label>
                <input className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="col-12">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="5" required />
              </div>
              <div className="col-12">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="p-4 bg-light rounded-3 h-100">
              <h5 className="mb-2">¿Tomamos un café virtual?</h5>
              <p className="mb-0">Santiago, Chile · Disponible para colaboraciones ✨</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
