

import TickerComponent from "./Flash.component"
import "./Home.component.css"
import NewcoinComponent from "./Newcoin.component"

function HomeComponent() {

  return (
    <section className="home">
      <div className="col-md-2 left-float">
        <div className="pumpfun-log d-flex justify-content-start position-relative align-items-center">
          <a href="/" className="pt-4 pb-3 image-link d-flex gap-2 align-items-center ms-3">
            <img className="logo-image" src="https://i.ibb.co/Wvb8Js3W/logo.png" alt="Pump" loading="lazy" height="40" />
            <span className="text-white pumpfun-text">pump<span className="blue-dot">.</span><span>fun</span></span>
          </a>
          <button className="ms-5 collapse-button">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ strokeWidth: "1.5px", color: "#5d5f67" }}><path d="M11.28 9.53 8.81 12l2.47 2.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-3-3a.75.75 0 0 1 0-1.06l3-3a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z"></path><path d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25Zm13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z"></path></svg>
          </button>
        </div>
        <div className="home-link d-flex align-items-start nav-text-size">
          <div className="nav flex-column nav-pills gap-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link nav-link-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <span className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="sidebar-logo-transition-multi-2 h-6 w-6"><path d="M13.8153 2.55582C12.7771 1.64342 11.2229 1.64342 10.1847 2.55582L3.93468 8.04824C3.34056 8.57035 3 9.323 3 10.1139V18.459C3 19.9778 4.23122 21.209 5.75 21.209H8.16057C9.12707 21.209 9.91057 20.4255 9.91057 19.459V17.209C9.91057 16.1044 10.806 15.209 11.9106 15.209H12C13.1046 15.209 14 16.1044 14 17.209V19.459C14 20.4255 14.7835 21.209 15.75 21.209H18.25C19.7688 21.209 21 19.9778 21 18.459V10.1139C21 9.323 20.6594 8.57035 20.0653 8.04824L13.8153 2.55582Z" fill="currentColor"></path></svg>
              </span>
              <span>Home</span>
            </a>
            <a className="nav-link link-hover-text w-100 d-flex align-items-center" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <span className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="sidebar-logo-transition-multi-2 h-6 w-6"><path d="M9.75 14.959H10.5C10.5 14.5448 10.1642 14.209 9.75 14.209V14.959ZM4.25 20.459H3.5V21.209H4.25V20.459ZM15.25 9.45898H16C16 9.04477 15.6642 8.70898 15.25 8.70898V9.45898ZM20.75 20.459V21.209H21.5V20.459H20.75ZM2.25 19.709C1.83579 19.709 1.5 20.0448 1.5 20.459C1.5 20.8732 1.83579 21.209 2.25 21.209V19.709ZM22.75 21.209C23.1642 21.209 23.5 20.8732 23.5 20.459C23.5 20.0448 23.1642 19.709 22.75 19.709V21.209ZM5.25 15.709H9.75V14.209H5.25V15.709ZM9 14.959V20.459H10.5V14.959H9ZM9.75 19.709H4.25V21.209H9.75V19.709ZM5 20.459V15.959H3.5V20.459H5ZM5.25 14.209C4.2835 14.209 3.5 14.9925 3.5 15.959H5C5 15.8209 5.11193 15.709 5.25 15.709V14.209ZM10.75 10.209H15.25V8.70898H10.75V10.209ZM14.5 9.45898V20.459H16V9.45898H14.5ZM15.25 19.709H9.75V21.209H15.25V19.709ZM10.5 20.459V10.459H9V20.459H10.5ZM10.75 8.70898C9.7835 8.70898 9 9.49249 9 10.459H10.5C10.5 10.3209 10.6119 10.209 10.75 10.209V8.70898ZM16.25 4.70898H19.75V3.20898H16.25V4.70898ZM20 4.95898V20.459H21.5V4.95898H20ZM20.75 19.709H15.25V21.209H20.75V19.709ZM16 20.459V4.95898H14.5V20.459H16ZM19.75 4.70898C19.8881 4.70898 20 4.82091 20 4.95898H21.5C21.5 3.99249 20.7165 3.20898 19.75 3.20898V4.70898ZM16.25 3.20898C15.2835 3.20898 14.5 3.99249 14.5 4.95898H16C16 4.82091 16.1119 4.70898 16.25 4.70898V3.20898ZM2.25 21.209H22.75V19.709H2.25V21.209Z" fill="currentColor"></path></svg>
              </span>
              <span>
                advanced
              </span>
            </a>
            <a className="nav-link link-hover-text" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>
              <span className="icon-wrapper">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="sidebar-logo-transition-multi-2 h-6 w-6" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"></path></svg>
              </span>
              <span>livstreams</span>
            </a>
            <a className="nav-link link-hover-text" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              <span className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="sidebar-logo-transition-multi-2 h-6 w-6"><path d="M4.75 9.75V9.5C4.75 5.77208 7.99594 2.75 12 2.75C16.0041 2.75 19.25 5.77208 19.25 9.5V9.75M12 19.6429V20.25C12 20.8023 12.4477 21.25 13 21.25H15C17.4853 21.25 19.5 19.2353 19.5 16.75M4.25 9.75H5.75V16.25H4.25C3.42157 16.25 2.75 15.5784 2.75 14.75V11.25C2.75 10.4216 3.42157 9.75 4.25 9.75ZM18.25 9.75H19.75C20.5784 9.75 21.25 10.4216 21.25 11.25V14.75C21.25 15.5784 20.5784 16.25 19.75 16.25H18.25V9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
              <span>support</span>
            </a>
            {/* <!-- Example single dropdown button --> */}
            <div className="btn-group">
              <a className="nav-link link-hover-text" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="h-5 w-5"><path d="M12 4.95898C12.5523 4.95898 13 4.51127 13 3.95898C13 3.4067 12.5523 2.95898 12 2.95898C11.4477 2.95898 11 3.4067 11 3.95898C11 4.51127 11.4477 4.95898 12 4.95898Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 13.209C12.5523 13.209 13 12.7613 13 12.209C13 11.6567 12.5523 11.209 12 11.209C11.4477 11.209 11 11.6567 11 12.209C11 12.7613 11.4477 13.209 12 13.209Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 21.459C12.5523 21.459 13 21.0113 13 20.459C13 19.9067 12.5523 19.459 12 19.459C11.4477 19.459 11 19.9067 11 20.459C11 21.0113 11.4477 21.459 12 21.459Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <span>more</span>
              </a>
              <ul className="dropdown-menu dropdown-bg">
                <li><a className="dropdown-item text-white nav-text-size bg-hover" href="#">PumpSwap</a></li>
                <li><a className="dropdown-item text-white nav-text-size bg-hover" href="#">livestream policy</a></li>
                <li><a className="dropdown-item text-white nav-text-size bg-hover" href="#">DMCA policy</a></li>
                <li><a className="dropdown-item text-white nav-text-size bg-hover" href="#">trademark guidelines</a></li>
                <li><a className="dropdown-item text-white nav-text-size bg-hover" href="#">how it works</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <span className="dropdown-item text-white nav-text-size bg-hover-non">
                    <span className="twitter-icon me-2"><i className="fa-brands fa-x-twitter"></i></span>
                    <span className="instagram-icon me-2"><i className="fa-brands fa-instagram"></i></span>
                    <span className="tiktok-icon me-2"><i className="fa-brands fa-tiktok" style={{color: "#ffffff"}}></i></span>
                    <span className="youtube-icon me-2"><i className="fa-brands fa-youtube" style={{color: "#ffffff"}}></i></span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="create-button">
              <button className="btn creat-coin-button text-center py-2">create coin</button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------- end of left float --------------------------- */}
      {/* ---------------------- start of right float --------------------------- */}
      <TickerComponent />
      <NewcoinComponent />
    </section>
  )
}

export default HomeComponent