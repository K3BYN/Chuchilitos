import Container from "../components/container";
import { menu } from "../platillos";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import Link from "next/link";
const Menu = () => {
  return (
    <Container>
      <div className="title-img">
        <img src="/menu.png" alt="" />
      </div>
      {/** Menú */}
      <div className="productos">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center text-light">Menú</h1>
                </div>
                {menu.map(({ name, description, image }, i) => (
                  <div className="col-md-4 p-2" key={i}>
                    <div className="card h-200">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-12">
                <div className="text-center mt-3">
                  <Link href="https://www.whatsapp.com/catalog/5215619349840/?app_absent=0">
                    <a className="btn btn-outline-light" target="_blank">
                      Haz tu pedido
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
