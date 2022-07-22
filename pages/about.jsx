import Container from "../components/container";
import "bootswatch/dist/cosmo/bootstrap.min.css";

const About = () => {
  return (
    <Container>
      <div className="a-container">
        <header className="row">
          <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="perfil.png"
                    alt="Kevin Hernández"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8">
                  <h1>Kevin Hernández</h1>
                  <h4>FullStack Developer</h4>
                  <p>
                    Esta página fue desarrollada para un local, por lo que está
                    sujeta a cambios. Soy un chico egresado del Instituto
                    Politécnico Nacional, entusiasta por aprender y aplicar
                    dichos conocimientos en web developer.
                  </p>
                  <p>Contáctame: khernandezd1400@alumno.ipn.mx</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Container>
  );
};

export default About;
