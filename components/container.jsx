import Navbar from "./navbar"

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <footer>
        <div className="bg-footer">
          <div className="body-footer">
            <h1>
              <a
                href="https://www.whatsapp.com/catalog/5215619349840/?app_absent=0"
                target="_blank"
              >
                <img src="whatsapp.svg" alt="" />
              Chuchilito's Website
              </a>
            </h1>
            <p>&copy; All rights Reserved. 2022 - {new Date().getFullYear()};</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Container;
