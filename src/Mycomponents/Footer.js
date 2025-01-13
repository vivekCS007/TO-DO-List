const Footer = () => {
  let footerstyle = {
    position: "fixed",
    // top: "100vh",
    bottom: "0",
    width: "100%",
    border: "2px solid grey"
  }
  const currentYear = new Date().getFullYear();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="bg-dark text-white text-center py-3 " style={footerstyle}>

        <div className="container">
          <p className="mb-1">&copy; {currentYear} VivekTodosList.com</p>
          <p className="mb-0 small">Designed by Vivek</p>
          <div className="mt-2">
            <a href="https://facebook.com" className="text-white mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
