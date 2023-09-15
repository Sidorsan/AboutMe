let date = new Date();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">© {date.getFullYear()} Aleksandr Sidorenko</p>
      
    </footer>
  );
}

export default Footer;
