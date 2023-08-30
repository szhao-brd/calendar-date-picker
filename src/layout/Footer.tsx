const Footer = () =>{
    return <footer className="nsw-footer">
    <div className="nsw-footer__lower">
      <div className="nsw-container">
        <p>We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their continued connection to their country and culture.</p>
        <hr />
        <div className="nsw-footer__links">
        <ul>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Copyright</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Content sources</a></li>
          <li><a href="#">RSS</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
        <div className="nsw-footer__social">
          <a className="nsw-icon-button" href="#" target="_blank" rel="noopener">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.7939 0H3.08695C1.62824 0 0.352905 1.05027 0.352905 2.49231V29.2576C0.352905 30.708 1.62824 32 3.08695 32H29.7855C31.2526 32 32.3529 30.6996 32.3529 29.2576V2.49231C32.3612 1.05027 31.2526 0 29.7939 0ZM10.2721 26.6736H5.68762V12.4199H10.2721V26.6736ZM8.13825 10.2527H8.10491C6.63787 10.2527 5.68762 9.16071 5.68762 7.79369C5.68762 6.40166 6.66287 5.33471 8.16326 5.33471C9.66365 5.33471 10.5806 6.39332 10.6139 7.79369C10.6139 9.16071 9.66365 10.2527 8.13825 10.2527ZM27.0265 26.6736H22.442V18.8799C22.442 17.0127 21.7751 15.7374 20.1164 15.7374C18.8494 15.7374 18.0992 16.596 17.7657 17.4295C17.6407 17.7296 17.6074 18.138 17.6074 18.5548V26.6736H13.0229V12.4199H17.6074V14.4037C18.2742 13.4535 19.3162 12.0865 21.7418 12.0865C24.7509 12.0865 27.0265 14.0703 27.0265 18.3464V26.6736V26.6736Z" fill="white"/>
            </svg>
            <span className="sr-only">Linkedin</span>
          </a>
          <a className="nsw-icon-button" href="#" target="_blank" rel="noopener">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.7027 7.96632C35.7267 8.3135 35.7267 8.66067 35.7267 9.01105C35.7267 19.6872 27.5992 32 12.7377 32V31.9936C8.3476 32 4.04867 30.7425 0.352905 28.3714C0.991265 28.4482 1.63282 28.4866 2.27598 28.4882C5.91415 28.4914 9.44833 27.2707 12.3106 25.0228C8.85317 24.9572 5.82136 22.703 4.76223 19.412C5.97335 19.6456 7.22127 19.5976 8.41 19.2728C4.64063 18.5113 1.92881 15.1995 1.92881 11.3533C1.92881 11.3181 1.92881 11.2845 1.92881 11.2509C3.05194 11.8765 4.30946 12.2236 5.59577 12.262C2.0456 9.8894 0.951267 5.16649 3.09513 1.47393C7.19727 6.52161 13.2497 9.59022 19.7469 9.91499C19.0957 7.10877 19.9853 4.16816 22.0843 2.19548C25.3385 -0.863526 30.4566 -0.706736 33.5156 2.54586C35.3251 2.18908 37.0594 1.52512 38.6465 0.584383C38.0433 2.45467 36.781 4.04337 35.0947 5.0529C36.6962 4.86411 38.2609 4.43534 39.7344 3.78098C38.6497 5.40648 37.2834 6.82239 35.7027 7.96632Z" fill="white"/>
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
          <a className="nsw-icon-button" href="#" target="_blank" rel="noopener">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 16.0978C33 7.20722 25.7771 0 16.8672 0C7.95731 0 0.734421 7.20722 0.734421 16.0978C0.734421 24.1326 6.63394 30.7924 14.3465 32V20.751H10.2503V16.0978H14.3465V12.5512C14.3465 8.51673 16.755 6.2882 20.44 6.2882C22.2051 6.2882 24.0513 6.60261 24.0513 6.60261V10.5642H22.017C20.0129 10.5642 19.388 11.8051 19.388 13.0781V16.0978H23.8623L23.147 20.751H19.3879V32C27.1005 30.7924 33 24.1326 33 16.0978" fill="white"/>
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
        </div>
        </div>
        <div className="nsw-footer__info">
          <div className="nsw-footer__copyright">Copyright © 2022</div>
          <div className="nsw-footer__built">Built by <a href="https://www.digital.nsw.gov.au/digital-design-system" target="_blank" rel="noopener noreferrer">NSW Design System</a></div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;