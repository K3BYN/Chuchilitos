import Container from "../components/container";
import "bootswatch/dist/cosmo/bootstrap.min.css";
const Index = () => {
  return (
    <Container>
      <div className="title-img">
        <img src="index.png" alt="" />
      </div>
      <div className="i-container">
        <h2>
          Chuchilitos Alitas BBQ está entre los lugares mejor puntuados de
          Tlalnepantla de Baz en la sección Restaurantes de Nicelocal. Ha
          obtenido 21 puntuaciones de los usuarios de este sitio web, obteniendo
          una media de 4.6.
        </h2>
        <article class="_card">
          <div class="_card-body">
            <h5>Fernanda Labrada</h5>
            <p>
              Excelente local para consumir cosas ricas, limpio, buena atención,
              ofrecen una gran variedad de postres en charolas grandes y te los
              preparan con lo que más te gusta. Tienen alitas de salsa BBQ,
              búfalo y mango habanero! Las papas a la francesa son naturales no
              de bolsa lo cual las hace más ricas .
            </p>
          </div>
          <div class="_card-body">
            <hr />
            <h5>biker_owl</h5>
            <p>Lo mejor de la zona para comer snacks!!</p>
          </div>
          <div class="_card-body">
            <hr />
            <h5>Angélica Labrada</h5>
            <p>Muy rico todo Excelente servicio</p>
          </div>
          <div class="_card-body">
            <hr />
            <h5>Manuel Mar</h5>
            <p>
              Muy buenos productos de excelente calidad, frescos y muy sabrosos,
              además tienen precios accesibles
            </p>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Index;
