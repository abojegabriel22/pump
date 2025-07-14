import "./Supply.css"

export const SupplyModal =() => {
  return (
    <div className="container">
      <div className="withdrawl-supply-div">
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark-background1 custom-modal-content border">
              <div className="modal-header">
                <h1 className="modal-title fs-5 modal-size" id="exampleModalToggleLabel">supplies and airdrops</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body modal-size">
                🚀✨ Join the ultimate PumpFun experience — now with seamless Withdrawals, Instant Supplies, and Exciting Airdrops! Don't miss your chance to fuel your wallet, stack your tokens, and earn massive rewards effortlessly. Everything you need is in one place — fast, easy, and built for you! 💸🔥
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button className="btn btn-green1 button-size1" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">🏧Withdraw supplies</button>
                <button className="btn btn-blue1 button-size1" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">🛄Claim AirDrop</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark-background1 custom-modal-content1 border">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">continue with contract address</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">enter token contract address to proceed. <i className="fa-solid fa-arrow-down animate1"></i></label>
                  <input type="text" className="form-control text-dark" id="formGroupExampleInput" placeholder="address..."/>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-green1" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                  proceed
                  <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Open first modal</button>
      </div>
    </div>
  )
}