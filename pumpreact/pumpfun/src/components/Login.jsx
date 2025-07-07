
import "./Login.css"

export const Login = () => {
  return (
    <div className="modal fade bg-fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable custom-modal">
        <div className="modal-content bg-dark-background custom-modal-content">
          <div className="modal-header position-relative">
            <h2 className="modal-title fs-5 text-center flex-grow-1 text-center" id="staticBackdropLabel">connect or create wallet</h2>
            <button type="button" className="btn-close no-icon rounded-circle bg-gray text-light" data-bs-dismiss="modal" aria-label="close">
              <span>&times;</span>
            </button>
          </div>
          <div className="text-center">
              <img alt="logo" loading="lazy" width="72" height="72" decoding="async" data-nimg="1" className="m-6" src="https://pump.fun/_next/static/media/logo-pump.80ada4f8.svg" style={{color: "transparent"}}></img>
            </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quaerat fugiat optio. Nihil fuga ipsum ipsa enim, debitis at ipsam.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-green">connect</button> {/* data-bs-dismiss="modal"*/}
            <button type="button" className="btn btn-blue">create</button>
          </div>
        </div>
      </div>
    </div>
  )
}