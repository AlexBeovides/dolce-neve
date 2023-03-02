import '../styles/FooterSection.scss'

export function FooterSection() {
  return (
    <footer className='footer-section'>
      <div className="footer-wrapper">
        <div className="footer-info-wrapper">
          <div className="about">
            <h2 className='footer-logo-txt'>dolce neve</h2>

            <div className="footer-logo-img">

            </div>
          </div>

          <div className="contact-container">
            <div className="contact">
              <div className="contact-header">
                Contacto
              </div>
              <div className="contact-details">
                <p>Ave. 1ra e/36 & 38</p>
                <p>Playa, La Habana</p>
                <p>+53 58923312</p>
                <a href='dolceneve@gmail.com'>dolceneve@gmail.com</a>

              </div>
            </div>
            <div className="quick-links">
              <div className="links-header">
                Acceso Rápido
              </div>
              <div className="footer-links-list">
                <ul>
                  <li><a href="">Principal</a></li>
                  <li><a href="">Menú</a></li>
                  <li><a href="">Recetas</a></li>
                  <li><a href="">Nosotros</a></li>
                </ul>

              </div>
               
            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <hr className="footer-line"/>

          <div className="footer-footer">
            <div className="copyright">
              Copyright © 2023 
            </div>
            <div className="social">
                <div className="icon facebook"><a href="#"></a></div> 
                <div className="icon twitter"><a href="#"></a></div>
                <div className="icon instagram"><a href="#"></a></div>
                <div className="icon pinterest"><a href="#"></a></div>
            </div>
          </div>
        </div>
        

      </div>
    </footer>
  )
}