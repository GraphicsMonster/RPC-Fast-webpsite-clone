import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <section className='footer'>
        <div className='footer-content'>
            <div className='links'>
                  <div className='logo'>
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 256 256"
    >
      <path
        fill="#f6f5f5"
        strokeMiterlimit="10"
        d="M6 3C4.346 3 3 4.346 3 6v10c0 1.654 1.346 3 3 3h3v2a1 1 0 102 0v-2h5c1.654 0 3-1.346 3-3v-4h5a1 1 0 100-2h-5V6c0-1.654-1.346-3-3-3zm28 0c-1.654 0-3 1.346-3 3v4h-3a1 1 0 100 2h3v4c0 1.654 1.346 3 3 3h4v5a1 1 0 102 0v-5h4c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM9.984 23.986A1 1 0 009 25v6H6c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-4h3a1 1 0 100-2h-3v-4c0-1.654-1.346-3-3-3h-5v-6a1 1 0 00-1.016-1.014zm29 3A1 1 0 0038 28v2h-4c-1.654 0-3 1.346-3 3v5h-5a1 1 0 100 2h5v3c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V33c0-1.654-1.346-3-3-3h-4v-2a1 1 0 00-1.016-1.014z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.12)"
      ></path>
    </svg>
                  </div>
                  <div className='footer-nav-links'>
                          <div className='available-chains'>
                            <h2>Available Blockchains</h2>
                            <ul>
                                <li>Ethereum API</li>
                                <li>Binance API</li>
                                <li>Polygon API</li>
                                <li>Velas API</li>
                            </ul>
                          </div>
                          <div className='resources'>
                            <h2>
                                Resources
                            </h2>
                            <ul>
                                <li>
                                    Documentation
                                </li>
                                <li>Guides</li>
                                <li>Blog</li>
                            </ul>
                          </div>
                          <div className='company'>
                            <h2>Company</h2>
                            <ul>
                                <li>Pricing</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                          </div>
                  </div>
            </div>

            <div className='contacts'>
                <div className='contacts-text'>
                  <p>Tallinn, Vesivärava str 50-201, 10152, Estonia</p>
                  <p>dgupta0069@gmail.com</p>
                  <p>@RPC Fast API by Dysnix. 2023. <span>Privacy Policy</span>  <span>Terms of Use</span></p>
                </div>
                <div className='contacts-link'>
                    <a href="https://github.com/GraphicsMonster"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 256 256"
    >
      <path
        fill="#949292"
        strokeMiterlimit="10"
        d="M29 17c-6.617 0-12 5.383-12 12v42c0 6.617 5.383 12 12 12h42c6.617 0 12-5.383 12-12V29c0-6.617-5.383-12-12-12zm0 2h42c5.514 0 10 4.486 10 10v42c0 5.514-4.486 10-10 10H29c-5.514 0-10-4.486-10-10V29c0-5.514 4.486-10 10-10zm5.5 4C28.159 23 23 28.159 23 34.5v31C23 71.841 28.159 77 34.5 77h31C71.841 77 77 71.841 77 65.5v-15a.5.5 0 00-1 0v15C76 71.29 71.29 76 65.5 76h-6.023v-8.346c0-2.213-1.038-4.286-2.745-5.654h.694c7.173 0 13.008-5.814 13.008-12.96 0-3.238-1.2-6.33-3.385-8.733.33-2.064.335-5.163-.6-7.965a.502.502 0 00-.474-.342c-4.051 0-7.472 2.689-8.899 4H44.668c-3.5-3.304-6.655-4-8.691-4a.502.502 0 00-.475.342c-.768 2.3-1.106 5.055-.897 7.258a13.014 13.014 0 00-4.084 9.441C30.521 56.187 36.355 62 43.527 62h.668c-1.32 1.032-2.267 2.451-2.629 3.996-1.997-.032-4.286-.328-5.355-1.932-2.425-3.64-3.648-3.912-5.236-3.912-.663 0-1.162.29-1.371.795-.294.708.048 1.65.917 2.52 1.172 1.173 1.174 1.171 2.368 3.558.722 1.444 2.79 3.838 8.588 3.97V76H34.5C28.71 76 24 71.29 24 65.5v-31C24 28.71 28.71 24 34.5 24h31a.5.5 0 000-1zm1.838 10.008c1.868.084 4.62.842 7.697 3.77l.092.087a.5.5 0 00.342.135h12.804c.127 0 .261-.058.354-.145 1.192-1.123 4.304-3.685 7.986-3.847.8 2.645.742 5.517.409 7.37a.499.499 0 00.128.433 11.951 11.951 0 013.284 8.228C69.434 55.634 64.047 61 57.426 61h-2.45a.5.5 0 00-.208.953c2.252 1.033 3.709 3.27 3.709 5.701V76h-16v-5.5a.5.5 0 00-.5-.5c-4.181 0-7.092-1.216-8.194-3.422-1.243-2.485-1.267-2.531-2.554-3.818-.671-.672-.788-1.224-.702-1.43.063-.155.308-.178.448-.178 1.123 0 2.093 0 4.404 3.467C36.786 66.73 39.644 67 41.977 67a.499.499 0 00.492-.42c.318-1.949 1.74-3.72 3.715-4.625a.499.499 0 00-.207-.955h-2.448c-6.62 0-12.007-5.366-12.007-11.96 0-3.366 1.437-6.6 3.943-8.876a.502.502 0 00.162-.428c-.229-1.967.049-4.566.71-6.728zM76.5 34a.5.5 0 00-.5.5V38a.5.5 0 001 0v-3.5a.5.5 0 00-.5-.5zm0 7a.5.5 0 00-.5.5V48a.5.5 0 001 0v-6.5a.5.5 0 00-.5-.5z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(2.56)"
      ></path>
    </svg></a>

    <a href="https://twitter.com/DGupta9999"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 256 256"
    >
      <path
        fill="#989797"
        strokeMiterlimit="10"
        d="M30.613 17.654c-7.168 0-13 5.832-13 13v39c0 7.168 5.832 13 13 13h39c7.168 0 13-5.832 13-13v-39c0-7.169-5.83-13-13-13zm0 2h39c6.065 0 11 4.935 11 11v39c0 6.065-4.935 11-11 11h-39c-6.065 0-11-4.935-11-11v-39c0-6.065 4.935-11 11-11zm2.838 2.998c-5.976 0-10.838 4.862-10.838 10.838v33.326c0 5.976 4.862 10.836 10.838 10.836h33.326c5.976 0 10.836-4.86 10.836-10.836V48.154a.499.499 0 10-1 0v18.662c0 5.424-4.412 9.838-9.836 9.838H33.451c-5.424 0-9.838-4.414-9.838-9.838V33.49c0-5.424 4.414-9.838 9.838-9.838h33.662a.5.5 0 000-1zm22.701 14.696c-3.894 0-7.06 3.167-7.06 7.062 0 .322.02.64.06.953a18.21 18.21 0 01-12.535-6.63.498.498 0 00-.818.064 7.073 7.073 0 00.805 8.223 6.065 6.065 0 01-1.073-.465.5.5 0 00-.742.418l-.002.1a7.089 7.089 0 003.586 6.15 5.927 5.927 0 01-.69-.092.509.509 0 00-.468.158.502.502 0 00-.102.484 7.059 7.059 0 005.252 4.752 12.569 12.569 0 01-6.795 1.965c-.508 0-1.016-.03-1.508-.088a.5.5 0 00-.328.916 19.124 19.124 0 0010.33 3.028c12.003 0 19.176-9.751 19.176-19.176 0-.202-.004-.403-.011-.604a13.717 13.717 0 003.183-3.365.5.5 0 00-.617-.734c-.557.248-1.13.451-1.717.615a7.05 7.05 0 001.512-2.603.5.5 0 00-.73-.583 12.672 12.672 0 01-3.749 1.477 7.102 7.102 0 00-4.959-2.025zm20.961.306a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm-20.959.694c1.671 0 3.285.699 4.428 1.916a.5.5 0 00.461.146 13.535 13.535 0 003.021-.97 6.087 6.087 0 01-2.093 2.09.499.499 0 00.314.923c.77-.09 1.529-.247 2.268-.465a12.884 12.884 0 01-2.125 1.928.5.5 0 00-.207.426c.01.274.02.553.02.83 0 8.934-6.798 18.174-18.175 18.174-2.792 0-5.524-.64-8.01-1.864 2.92-.1 5.666-1.099 7.973-2.908a.5.5 0 00-.299-.892 6.065 6.065 0 01-5.365-3.457 7.084 7.084 0 002.32-.233.5.5 0 00-.03-.972c-2.562-.514-4.483-2.624-4.813-5.213a7.08 7.08 0 002.404.506c.225.032.424-.135.492-.348a.5.5 0 00-.197-.569 6.063 6.063 0 01-2.697-5.046c0-.83.169-1.648.494-2.403a19.2 19.2 0 0013.398 6.46.526.526 0 00.409-.18c.1-.12.14-.281.103-.434a6.07 6.07 0 015.906-7.445zm20.96 3.306a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4c0-.277-.224-.5-.5-.5z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(2.56)"
      ></path>
    </svg></a>

    <a href="https://www.linkedin.com/in/devansh-gupta-40a408240/">    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 256 256"
    >
      <path
        fill="#989898"
        strokeMiterlimit="10"
        d="M30.307 17.654c-7.168 0-13 5.832-13 13v39c0 7.168 5.832 13 13 13h39c7.168 0 13-5.832 13-13v-39c0-7.169-5.831-13-13-13zm0 2h39c6.065 0 11 4.935 11 11v39c0 6.065-4.935 11-11 11h-39c-6.065 0-11-4.935-11-11v-39c0-6.065 4.935-11 11-11zm2.838 2.998c-5.976 0-10.838 4.862-10.838 10.838v33.326c0 5.976 4.862 10.836 10.838 10.836H66.47c5.976 0 10.836-4.86 10.836-10.836V48.154a.5.5 0 10-1 0v18.662c0 5.424-4.412 9.838-9.836 9.838H33.145c-5.424 0-9.838-4.414-9.838-9.838V33.49c0-5.424 4.414-9.838 9.838-9.838h33.662a.5.5 0 000-1zm5.68 13.043c-2.088 0-3.602 1.463-3.602 3.479s1.483 3.478 3.564 3.478c2.087 0 3.604-1.462 3.604-3.49-.05-2.04-1.519-3.467-3.567-3.467zm0 1c1.52 0 2.529.98 2.566 2.48 0 1.46-1.07 2.48-2.637 2.48-1.49 0-2.531-1.02-2.531-2.48s1.07-2.48 2.601-2.48zm37.982.96a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 4a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zm-19.23 2.876c-2.2.013-3.984.67-5.272 2.051v-1.43a.5.5 0 00-.5-.5H45.73a.503.503 0 00-.363.155.504.504 0 00-.137.369c.081 1.749 0 18.802 0 18.974a.5.5 0 00.499.502h6.078a.5.5 0 00.5-.5V53.54c0-.612.058-1.066.175-1.353.243-.6 1-1.997 2.784-1.997 2.668 0 2.957 2.707 2.957 3.875l.082 10.092a.5.5 0 00.5.496h6a.5.5 0 00.5-.5V53.975c0-3.33-.822-5.84-2.442-7.457-1.32-1.318-3.098-1.987-5.287-1.987zm-21.77.123a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5zm21.754.88h.015c1.915 0 3.457.57 4.582 1.693 1.425 1.423 2.149 3.693 2.149 6.748v9.68h-5.004l-.08-9.593c0-3.004-1.515-4.873-3.955-4.873-1.66 0-3.048.98-3.711 2.62-.168.412-.25.977-.25 1.73v10.113h-5.075c.013-2.696.063-14.97.01-17.998h5.065v2.303a.522.522 0 00.5.697c.208 0 .386-.166.46-.365.73-1.2 2.079-2.756 5.294-2.756zm-21.254.12h5v18h-5z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(2.56)"
      ></path>
    </svg></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;