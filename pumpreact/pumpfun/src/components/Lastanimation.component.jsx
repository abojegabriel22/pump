import { Link } from "react-router-dom"

export const LastCards = () => {
  return (
    <>
      <section className="middle-animation mt-5 ps-lg-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 overflow-hidden">
          {/* <!-- ------------------- col duplicate as many as you want ----------------  --> */}
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmYQ9RReezM1vPP4pP4mkdwbWjriwqkhigbqwhd57cmQso?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded"
                      alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">8K8qFC</span>
                      <span className="creator-span ps-1">13m ago</span>
                      <span className="creator-span ps-2 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $6.8K</div>
                    <div className="replies-text small">replies: 11</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>literally a under valued coin (UVCoin):</strong> the coin is literally under valued
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreicdy5xhv3lojlw7h4ynpkw4tsfwucsbcudtziu7or7jajctipuzoi?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="tanlines"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-inline-flex flex-nowrap gap-1">
                        <span className="d-none d-lg-inline creator-span">creator</span>
                        <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt=""/>
                        <span className="creator-span creator-span-2">C4HGWd</span>
                      </span>
                      <span className="creator-span ps-1">1h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $28.4K</div>
                    <div className="replies-text small">replies: 158</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>tanlines (tanlines):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeia77cqx74b6tbqpd6nuuspftpjvuh3e2rznmdqi4pkwkpe54jrsmy?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="GRWM"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-inline-flex flex-nowrap gap-1">
                        <span className="d-none d-lg-inline creator-span">creator</span>
                        <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt=""/>
                        <span className="creator-span creator-span-2">CCTpKn</span>
                      </span>
                      
                      <span className="creator-span ps-1">40m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $24.1K</div>
                    <div className="replies-text small">replies: 4</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Get Ready With Me (GRWM):</strong> GRWM are basically pumpfun for girls.. 20 million posts with BILLIONS of views on tiktok, deserves a token!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmVvXERRw5E9XRFrNAsrJXxS2T96ef6gy4YiU8L8Jr5CeD?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">8cztdS</span>
                      <span className="creator-span ps-1">15m ago</span>
                      <span className="creator-span ps-2 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $25.4K</div>
                    <div className="replies-text small">replies: 29</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>BwuttHole (BwuttHole):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmSE2iAhrdbH8LFCZPMYMZL9UNqkmLPJqM2CWKhiQuE2UR?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt=""/>
                      <span className="creator-span creator-span-2">DPw5Vt</span>
                      <span className="creator-span ps-1">26m ago</span>
                      <span className="creator-span ps-2 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.0K</div>
                    <div className="replies-text small">replies: 1</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Scam Cuban (cuban):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmZcc925tQDB2efZAgkrsc1Td6PyTuWcn4cVHvStoNaMuf?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt=""/>
                      <span className="creator-span creator-span-2">bs5qTw</span>
                      <span className="creator-span ps-1">35m ago</span>
                      <span className="creator-span ps-2 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $22.0K</div>
                    <div className="replies-text small">replies: 42</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>pump fun chat ( CHAT):</strong> The official pump fun chat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeifcfo6jz5dcubms66norizywtlxiju2hjhyhroa4igbpopbqvsvri?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">DWyo4w</span>
                      <span className="creator-span ps-1">43m ago</span>
                      <span className="creator-span text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $6.4K</div>
                    <div className="replies-text small">replies: 9</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>BARFCAT (BARFCAT):</strong> The trenchers pukey feline friend. MEOW!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmP3iXrkQ8m4vCUBiywPWQoc8sHjyS5drDwUCGGEyk9QDr?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt=""/>
                      <span className="creator-span creator-span-2">6QaiBS</span>
                      <span className="creator-span ps-1">45m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $200.4K</div>
                    <div className="replies-text small">replies: 44</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>for trading (coin):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreiguorlhb2yswof3u3rcje65loebdshdaoq6hwm7nf7olwiqgvdo2u?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">G6h31M</span>
                      <span className="creator-span ps-1">48m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $3.9K</div>
                    <div className="replies-text small">replies: 3</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Bombclat (Bombclat):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary border-red">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1 position-relative" style={{ width: "128px" }}>
                    <img src="https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/335682/1750792332888.jpeg?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                  <span className="position-absolute alignment px-2 rounded">LIVE</span>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">8ktdvV</span>
                      <span className="creator-span ps-1">55m ago</span>
                      <span className="creator-span text-white ps-1 search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $5.0K</div>
                    <div className="replies-text small">replies: 0</div>
                    <p className="card-text small p-color">
                      <strong>c8ktalks (c8k):</strong>                          
                        Im here to motivate and inspire! Will talk about real life hardship's and and real life events in general. Im a father and Investor and have been in crypto since 2016. I will drop gems or give my opinion may even chart some coins or stocks of your liking &gt; I will talk about retaining your focus when it comes to women talking your focus...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreie2fz6n75274dbuamyh33aewazz7ndc4kqng5zibecgewvdwfy6tm?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">9bVND3</span>
                      <span className="creator-span ps-1">1h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $10.2K</div>
                    <div className="replies-text small">replies: 19</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>for twading (cwoin):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreid22ow57jtbzlj4cpc7m4xm5kv4z6mcm52bttr5tn4o3hqjjtjlay?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">DBDGnK</span>
                      <span className="creator-span ps-1">1h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.0K</div>
                    <div className="replies-text small">replies: 1</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>THC (BLINKERS$):</strong> EVERY MARKET RAISE IM BLINKING A 99% THC VAPE STREAM FOR MINIMAL 5 HOURS UNTIL I PASSOUT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeifb3u6blp5piw6nek4p4dqyjcqikkbv6qcky62ligfiu664mkixxm?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">6rYr6M</span>
                      <span className="creator-span ps-1">3h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $7.2K</div>
                    <div className="replies-text small">replies: 24</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Farteam Store (FARTEAM):</strong>
                        Farteam is a platform for digital fart distribution, stinky rights management, gassy multiplayer gameplay, and nose-burning communication. $FARTEAM https://farteam.store
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmQ47Tncech46m3FrXftAHGJwuQdsoqz49iSaHbPjmD1Mj?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">5ZKXn5</span>
                      <span className="creator-span ps-1">2h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.0K</div>
                    <div className="replies-text small">replies: 13</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>United States Asshole Dollars (USAD):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreidmdcwbzydcbdmjl4sj5apa3oefp7oeqazagccehx2hkjx5ccbele?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">GQk9XD</span>
                      <span className="creator-span ps-1">2h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.3K</div>
                    <div className="replies-text small">replies: 3</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Toly's rbm (RBM):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmZTEg52PBTUUK1rMovQAZhwC9qjwWC84nLs9jXXdyxPdF?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">2M1Eev</span>
                      <span className="creator-span ps-1">2h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.2K</div>
                    <div className="replies-text small">replies: 15</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>muslima (muslima):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div className="row g-0 h-100" style={{flexWrap: "nowrap"}}>
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/333721/1750707283568.jpeg"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">5J4hy2</span>
                      <span className="creator-span ps-1">3h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $16.5K</div>
                    <div className="replies-text small">replies: 78</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Walking live until 1M (WLK):</strong> walking live until we hit 1 million mcap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary border-red">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1 position-relative" style={{ width: "128px" }}>
                    <img src="https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/334458/1750749510036.jpeg?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                  <span className="position-absolute alignment px-2 rounded">LIVE</span>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">kZfdHz</span>
                      <span className="creator-span ps-1">4h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $25.7K</div>
                    <div className="replies-text small">replies: 1 <span className="text-danger">[NSFW]</span></div>
                    <p className="card-text small p-color">
                      <strong>10kPushUpsLive (PUSHUP):</strong>
                          Join me LIVE on pump.fun 10kpushupslive! Sweat, blood, and tears all recorded & archived. Push ups anywhere at anytime by any means necessary, we WILL DO IT! LOCK IN with WILL 24/7 LIVE on kick and pumpfun ... GODSPEED!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreihaje56n6ui2xkwcj6qqgoy45iebor5lueelievqi3uvq7534c4aa?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">Cvk1XA</span>
                      <span className="creator-span ps-1">5h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.1K</div>
                    <div className="replies-text small">replies: 7</div>
                    <p className="card-text small p-color">
                      <strong>Lockheed Fartin (LOCKHEED):</strong>
                      Your favorite US military industrial complex company. We deliver innovative solutions to the world's toughest challenges, harnessing the power of human farts. Whether its air, land, sea or space, your enemies will think twice knowing you're armed with our human methane gas products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeiennzi47kw65vokljj7daojyb26vncf4u47bzxmiguv3mtky3yxju?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">4EBaA6</span>
                      <span className="creator-span ps-1">5h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $9.5K</div>
                    <div className="replies-text small">replies: 0</div>
                    <p className="card-text small p-color">
                      <strong>ALLIGATOR ALCATRAZ (ALTRA):</strong>
                        Picture an iconic, aggressive green alligator emerging from behind prison bars, jaws open wide, revealing golden crypto tokens clenched between its razor-sharp teeth. The bars are metallic grey, slightly bent—signifying the strength to break through constraints. Its eyes glow neon-orange, symbolizing fierce market vigilance...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreib3e4vbccf4u4jdqv2rsjtz5fgr4475mhr5czfm4hfwygdrv4yhre?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">98ZTjk</span>
                      <span className="creator-span ps-1">5h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $16.2K</div>
                    <div className="replies-text small">replies: 99</div>
                    <p className="card-text small p-color">
                      <strong>Solana House (SOLHOUSE):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary border-red">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1 position-relative" style={{ width: "128px" }}>
                    <img src="https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/333981/1750716381081.jpeg?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                  <span className="position-absolute alignment px-2 rounded">LIVE</span>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">8HH8oV</span>
                      <span className="creator-span ps-1">8h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.4K</div>
                    <div className="replies-text small">replies: 1 <span className="text-danger">[NSFW]</span></div>
                    <p className="card-text small p-color">
                      <strong>PUTIGGA ($PTN):</strong>
                        dont awnser just buy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreigkqh6s4wand4rlfh5bq3jzbcmw3kbmxx6lemrvtgxs3chptqah7i?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">HQSgGJ</span>
                      <span className="creator-span ps-1">8h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.0K</div>
                    <div className="replies-text small">replies: 0</div>
                    <p className="card-text small p-color">
                      <strong>Bonkhemist Foundation (BKM):</strong>
                        Combine elements, craft magic! Mint unique assets with BONK COIN in this alchemy-powered adventure where imagination meets innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreihjygx7hmlj5zckjbmcvrynxkhpu7g2grpjvhtjl5i62ghboqvrmy?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">Gy9cB5</span>
                      <span className="creator-span ps-1">13m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $12.0K</div>
                    <div className="replies-text small">replies: 25</div>
                    <p className="card-text small p-color">
                      <strong>Fuck + Art (FART):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreibwculpk6kaodvsmd3aftvlfpsncgjjouibnndtbwyuywz5g3wfe4?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">63E2HS</span>
                      <span className="creator-span ps-1">27m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $20.3K</div>
                    <div className="replies-text small">replies: 1</div>
                    <p className="card-text small p-color">
                      <strong>beancoin (beancoin):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreicowprtyexoiri23cllyeyajzhtauz53yaz2wux6vumdkalflmnvu?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">AhmpoE</span>
                      <span className="creator-span ps-1">9h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.0K</div>
                    <div className="replies-text small">replies: 0</div>
                    <p className="card-text small p-color">
                      <strong>Saying PEACE 1 Mil Times Live (PCE):</strong>
                        I will lock my supply when stream starts for 1 month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary border-red">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1 position-relative" style={{ width: "128px" }}>
                    <img src="https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/333975/1750716407920.jpeg?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                  <span className="position-absolute alignment px-2 rounded">LIVE</span>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">7bptS5</span>
                      <span className="creator-span ps-1">9h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $5.1K</div>
                    <div className="replies-text small">replies: 2 <span className="text-danger">[NSFW]</span></div>
                    <p className="card-text small p-color">
                      <strong>Live till i lose 10 pounds (10lbs):</strong>                          
                        My whole life, I’ve been judged for my weight. Bullied. Ignored. Treated like I’m less because I’ve struggled with something I never asked for. I’ve tried to lose weight privately, quietly, and failed every time. This time, it’s different. I’m launching $10lbs to hold myself accountable in front of the world. I’ll be streaming live until I lose 10 pounds...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- //////////////////////// note done ////////////////////////////// --> */}
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmXY8QTq2juebZimE3NMVCsDPTc97o8RxEo7tGyCsLVo5s?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">GDoJEY</span>
                      <span className="creator-span ps-1">10h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $12.0K</div>
                    <div className="replies-text small">replies: 1</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Roboception (Roboify):</strong> elon robofying taxis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeiesxhhkw3gy7n7zbgehzqbih6gww5f3rtp67gucc2m7plqbz4ue6y?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">bs5qTw</span>
                      <span className="creator-span ps-1">11h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $8.1K</div>
                    <div className="replies-text small">replies: 196</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>hostage cat (hostage):</strong> the war just began. I wasn't ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeih747agrfljdfzet7wq62ow6g7tshce6duz4mc5mqhucqntdp7cmy?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">B5E1CD</span>
                      <span className="creator-span ps-1">46m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.3K</div>
                    <div className="replies-text small">replies: 21</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>retard trump (retrump):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeifxbenl5tuuy6bhfjnvk7g44lc7ixbyzjpjoxett3jpx62k77422u?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">3YWaGt</span>
                      <span className="creator-span ps-1">1h ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $176.5K</div>
                    <div className="replies-text small">replies: 75</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>miraclecoin (miracle):</strong> a coin for the followers of god and jesus christ himself
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary border-red">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1 position-relative" style={{ width: "128px" }}>
                    <img src="https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/335773/1750795726734.jpeg"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                  <span className="position-absolute alignment px-2 rounded">LIVE</span>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">7sZhGQ</span>
                      <span className="creator-span ps-1">53m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $12.1K</div>
                    <div className="replies-text small">replies: 6</div>
                    <p className="card-text small p-color">
                      <strong>angry bunny (angrybunny):</strong>                          
                        i am your bunny, but your bunny came back even angrier! everyone who wnats to interact with me is very welcome! i love to talk. but no boobies, you perverts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeidqcs67k46gffsmf4q2hrqq3xykpqngnxj33hm423flu2eef6emh4?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">9bVND3</span>
                      <span className="creator-span ps-1">32m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.9K</div>
                    <div className="replies-text small">replies: 0</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>zombie dog (zombie):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreiepd6fhsynnaijwmdb3dr6mv2tzqmgswhv4ukhfil6c6tf27umvqy?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">Axa43W</span>
                      <span className="creator-span ps-1">53m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.4K</div>
                    <div className="replies-text small">replies: 0</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Pythagorean Cult ( Pythagor):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreia2dtqassrwyiiq2qwrqrcvqemfggabnbdav66rgoplhspg5qoyiu?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Lockheed Fartin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle"
                          width="16"
                          height="16"
                          alt="image"/>
                      <span className="creator-span creator-span-2">3UTstw</span>
                      <span className="creator-span ps-1">43m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $18.2K</div>
                    <div className="replies-text small">replies: 14</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>sexless (sexless):</strong> no sex no sleep just crypto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeiavsfhvwr6nu5jgylcvk4ryt4d3oathurrzsokcehxuzdcuxr3sge?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded" alt="dogwifsquid"/>
                  </div>
                </div>
                {/*Right: Content*/}
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                        className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">CCTpKn</span>
                      <span className="creator-span ps-1">13m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 hover:text-white">
                          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $9.3K</div>
                    <div className="replies-text small">replies: 13</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>dogwifsquid (WIF):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeihecokdhl5p7lt4iyjvyisykmnjyqojfy52drljxanwddu4dwdeqe?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded" alt="Squidification"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                        className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">GyiAMV</span>
                      <span className="creator-span ps-1">5m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 hover:text-white">
                          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $5.1K</div>
                    <div className="replies-text small">replies: 6</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Squidification (SQUIDIFY):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreihkvhprwactvibckvjpak7gf7rtwhittawbgla46o2h2wgefvwwqy?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded" alt="SQUID"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                        className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">A1soQP</span>
                      <span className="creator-span ps-1">9m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 hover:text-white">
                          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $15.6K</div>
                    <div className="replies-text small">replies: 3</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>this will attract whales (SQUID):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreidpjik2d46gmkqs6iprklxnu6fxrcela7rfsogmtqpacbkb5ra2sy?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded" alt="Squid House"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                        className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">DX7Rpx</span>
                      <span className="creator-span ps-1">18m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 hover:text-white">
                          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $20.1K</div>
                    <div className="replies-text small">replies: 11</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Squid House (SQUIDHOUSE):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreiggdb3hp4n4c67io6w7wfdk7f53nwpphozgfyn44ar7i72vkwctnm?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded" alt="Minsoo"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                        className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">BT4kMg</span>
                      <span className="creator-span ps-1">31m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 hover:text-white">
                          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $18.9K</div>
                    <div className="replies-text small">replies: 15</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>The Minsoo Directive (Minsoo):</strong> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmS3rD21L5CM53Vo3hTAVTWon2PKFhpPUdHjiyMEbYhsCb?img-width=256&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded" alt="Minsoo"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                        className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">37SSvQ</span>
                      <span className="creator-span ps-1">5m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 hover:text-white">
                          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $29.6K</div>
                    <div className="replies-text small">replies: 7</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Xi Chat ($XICHAT):</strong> dis is da XICHAT APP folks!!! xi knows all, xi hears all, xi sees all, xi chats all! XI CHAT TO THE MOON! 💬🟢💬🟢💬🟢💬🟢💬🟢💬🟢💬🟢 💬🟢💬🟢💬🟢💬🟢💬🟢💬🟢 💬🟢💬🟢💬🟢💬🟢💬🟢💬🟢 💬🟢💬🟢💬🟢💬🟢💬🟢💬🟢 💬🟢💬🟢💬🟢💬🟢💬🟢💬🟢 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeib7qxarf4dlhgt64mlrcs4j4zhcansusog3gw2gofziv7nr2owqde?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="catwifsquid"/>
                  </div>
                </div>

                {/*Right: Content*/}
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect"
                          className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">CCTpKn</span>
                      <span className="creator-span ps-1">23m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        {/* your search icon SVG*/}
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>

                    <div className="market-cap-text small">market cap: $4.2K</div>
                    <div className="replies-text small">replies: 1</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>catwifsquid (CAT):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/QmRdficHU8ocmZoEpwDZtLdTzGLSKEU4rQ63vSiiXSZBh5?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Pepe Game"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">D5aTBJ</span>
                      <span className="creator-span ps-1">15m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        {/* your search icon SVG*/}
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.0K</div>
                    <div className="replies-text small">replies: 176</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Pepe Game (PG):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeiadjk3erdhuxdd7lpnoodws35xeryi5ktnz3udvxyitd5esfgiaai?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="W INvestment"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">E5nbb3</span>
                      <span className="creator-span ps-1">10m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        {/* your search icon SVG*/}
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $14.1K</div>
                    <div className="replies-text small">replies: 2</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>W INvestment (WIN):</strong> This is a W INvestment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreify5lddylcvb5y3algpevrhvfquwxpmlqlkorryppjgyxfzgf35by?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Fart Squid Game"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">7UmUdJ</span>
                      <span className="creator-span ps-1">13m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        {/* your search icon SVG*/}
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.7K</div>
                    <div className="replies-text small">replies: 2</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Fart Squid Game (FARTSQUID):</strong> Stop Killing People, Just Fart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafybeiaw2pfcsqkyuthyfb5or3n3suwsjvzncxjo7v3qrcm245zdwhylli?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Peak"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt="coin"/>
                      <span className="creator-span creator-span-2">3CSrmr</span>
                      <span className="creator-span ps-1">5d ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $21.6K</div>
                    <div className="replies-text small">replies: 534</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>It's just so peak (PEAK):</strong> Peak is a breakout success, with the indie co-op climbing game selling 1 million copies in a week with almost no marketing The game has gone viral because people can't stop joking about the name
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreidtmv5yitzrj6hk5ugrl5zrapl65nw73dlwfornzaoybj3mnj6z2q?img-width=128&img-dpr=2&img-onerror=redirect"
                        className="img-fluid rounded"
                        alt="Peak"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt="coin"/>
                      <span className="creator-span creator-span-2">HhaSZQ</span>
                      <span className="creator-span ps-1">20m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $3.9K</div>
                    <div className="replies-text small">replies: 1</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>Gitcopter (Gitcopter):</strong> -▬▬.◙.▬▬‐ ▂▄▄▓▄▄▂ ◢◤ █▀▀████▄▄▄◢◤ █▄ █ █▄ ███▀▀▀▀▀▀╬ ◥█████◤ ══╩══╩══ ╬═╬ ╬═╬ Just dropped down to say ╬═╬ Don't ╬═╬ Push To Production On Friday ╬═╬ ╬═╬ ☻/ ╬═╬/▌ ╬═╬/ \
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding">
            <div className="card bg-transparent text-white hover-border-secondary">
              <div className="row g-0 col-hover" style={{flexWrap: "nowrap"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="col-auto pe-2 pt-2">
                  <div className="ratio ratio-1x1" style={{ width: "128px" }}>
                    <img src="https://pump.mypinata.cloud/ipfs/bafkreia4hvyvzls4solcqs2nszi5vlhvx7ubwgm5xwjqo2wggqg5cdx24y?img-width=128&img-dpr=2&img-onerror=redirect"
                      className="img-fluid rounded"
                      alt="Slutcoin"/>
                  </div>
                </div>
                <div className="col">
                  <div className="card-body d-flex flex-column gap-1 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 text-muted small">
                      <span className="d-none d-lg-inline creator-span">creator</span>
                      <img src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&img-dpr=2&img-onerror=redirect" className="rounded-circle" width="16" height="16" alt="image"/>
                      <span className="creator-span creator-span-2">AjAt7t</span>
                      <span className="creator-span ps-1">5m ago</span>
                      <span className="creator-span ps-1 text-white search-icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-white"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </span>
                    </div>
                    <div className="market-cap-text small">market cap: $4.5K</div>
                    <div className="replies-text small">replies: 7</div>
                    <p className="card-text small mb-0 p-color">
                      <strong>This will get shared around (Slutcoin):</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="bottom-button mt-5">
        <div className="w-100 text-center">
          <button className="text-sm cursor-not-allowed text-slate-400 bg-transparent no-border disabled-button" disabled>[ &lt;&lt; ]</button>
            <span className="text-light">1</span>
          <button className="text-sm cursor-not-allowed text-slate-400 bg-transparent text-light no-border" data-bs-toggle="modal" data-bs-target="#exampleModal">[ &gt;&gt; ]</button>
        </div>
        </section>
        <section className="footer bg-transparent p-color">
        <footer>
          <div className="container pt-4 px-3 space-for-fixed-botom">
            <div className="row align-items-center text-center">
              <div className="col-12 col-md-3 mb-md-0 text-md-start">
                <p className="mb-0 small">© pump.fun 2025</p>
              </div>
              <div className="col-12 col-md-8 mb-md-0 d-flex justify-content-center flex-wrap gap-1 padding-footer">
                <Link className="text-decoration-underline small p-color" data-bs-toggle="modal" data-bs-target="#exampleModal">privacy policy</Link>
                <span>|</span>
                <Link className="text-decoration-underline small p-color" data-bs-toggle="modal" data-bs-target="#exampleModal">terms of service</Link>
                <span>|</span>
                <Link className="text-decoration-underline small p-color" data-bs-toggle="modal" data-bs-target="#exampleModal">fees</Link>
                <span>|</span>
                <Link className="text-decoration-underline small p-color" data-bs-toggle="modal" data-bs-target="#exampleModal">tech updates</Link>
              </div>
              <div className="col-12 col-md-3 text-md-end d-none d-md-block"></div>
            </div>
          </div>
          <div>
            <nav className="navbar navbar-dark bg-dark-bottom border-top fixed-bottom border-secondary d-block d-lg-none">
              <div className="container-fluid d-flex justify-content-around px-0 custom-icons">
                <Link className="text-center navlink-home2 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none" className="sidebar-logo-transition-multi-2 h-6 w-6"><path d="M13.8153 2.55582C12.7771 1.64342 11.2229 1.64342 10.1847 2.55582L3.93468 8.04824C3.34056 8.57035 3 9.323 3 10.1139V18.459C3 19.9778 4.23122 21.209 5.75 21.209H8.16057C9.12707 21.209 9.91057 20.4255 9.91057 19.459V17.209C9.91057 16.1044 10.806 15.209 11.9106 15.209H12C13.1046 15.209 14 16.1044 14 17.209V19.459C14 20.4255 14.7835 21.209 15.75 21.209H18.25C19.7688 21.209 21 19.9778 21 18.459V10.1139C21 9.323 20.6594 8.57035 20.0653 8.04824L13.8153 2.55582Z" fill="currentColor"></path></svg>
                </Link>
                <Link className="text-center text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none" className="h-[30px] w-[30px]"><path d="M16.2426 12.2094H7.75736M12 16.4521V7.9668M21.25 12.209C21.25 17.3176 17.1086 21.459 12 21.459C6.89137 21.459 2.75 17.3176 2.75 12.209C2.75 7.10035 6.89137 2.95898 12 2.95898C17.1086 2.95898 21.25 7.10035 21.25 12.209Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                </Link>
                <Link className="text-center text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" className="h-[30px] w-[30px]"><path d="M4.75 4.75H14.25C15.3546 4.75 16.25 5.64543 16.25 6.75V8.75L19.7681 6.81505C20.4345 6.44851 21.25 6.93067 21.25 7.69127V16.3087C21.25 17.0693 20.4345 17.5515 19.7681 17.1849L16.25 15.25V17.25C16.25 18.3546 15.3546 19.25 14.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V6.75C2.75 5.64543 3.64543 4.75 4.75 4.75Z" stroke="#F8FAFC" strokeWidth="1.5"></path><path d="M12.25 12C12.25 13.5188 11.0188 14.75 9.5 14.75C7.98122 14.75 6.75 13.5188 6.75 12C6.75 10.4812 7.98122 9.25 9.5 9.25C11.0188 9.25 12.25 10.4812 12.25 12Z" stroke="#F8FAFC" strokeWidth="1.5"></path></svg>
                </Link>
                <Link className="text-center text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" className="h-[30px] w-[30px]"><path d="M7 2.75V10.75M7 10.75H5.75C4.64543 10.75 3.75 11.6454 3.75 12.75V16.25C3.75 17.3546 4.64543 18.25 5.75 18.25H7M7 10.75H8.25C9.35457 10.75 10.25 11.6454 10.25 12.75V16.25C10.25 17.3546 9.35457 18.25 8.25 18.25H7M7 18.25V21.25M17 2.75001V5.75M17 5.75H15.75C14.6454 5.75 13.75 6.64543 13.75 7.75V16.25C13.75 17.3546 14.6454 18.25 15.75 18.25H17M17 5.75H18.25C19.3546 5.75 20.25 6.64543 20.25 7.75V16.25C20.25 17.3546 19.3546 18.25 18.25 18.25H17M17 18.25V21.25" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
                {/* <!-- Example single dropdown button --> */}
                <div className="btn-group dropup">
                  <a className="nav-link" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="icon-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none" className="h-5 w-5"><path d="M12 4.95898C12.5523 4.95898 13 4.51127 13 3.95898C13 3.4067 12.5523 2.95898 12 2.95898C11.4477 2.95898 11 3.4067 11 3.95898C11 4.51127 11.4477 4.95898 12 4.95898Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 13.209C12.5523 13.209 13 12.7613 13 12.209C13 11.6567 12.5523 11.209 12 11.209C11.4477 11.209 11 11.6567 11 12.209C11 12.7613 11.4477 13.209 12 13.209Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 21.459C12.5523 21.459 13 21.0113 13 20.459C13 19.9067 12.5523 19.459 12 19.459C11.4477 19.459 11 19.9067 11 20.459C11 21.0113 11.4477 21.459 12 21.459Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                  
                  </a>
                  <ul className="dropdown-menu dropdown-bg-bottom dropdown-menu-end left-auto">
                    <li><Link className="dropdown-item text-white nav-text-size bg-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">PumpSwap</Link></li>
                    <li><Link className="dropdown-item text-white nav-text-size bg-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">livestream policy</Link></li>
                    <li><Link className="dropdown-item text-white nav-text-size bg-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">DMCA policy</Link></li>
                    <li><Link className="dropdown-item text-white nav-text-size bg-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">trademark guidelines</Link></li>
                    <li><Link className="dropdown-item text-white nav-text-size bg-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">how it works</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li>
                      <span className="dropdown-item text-white nav-text-size bg-hover-non">
                        <span className="twitter-icon me-2"><i className="fa-brands fa-x-twitter" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                        <span className="instagram-icon me-2"><i className="fa-brands fa-instagram" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                        <span className="tiktok-icon me-2"><i className="fa-brands fa-tiktok" style={{color: "#ffffff"}} data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                        <span className="youtube-icon me-2"><i className="fa-brands fa-youtube" style={{color: "#ffffff"}} data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

        </footer>
      </section>
    </>
  )
}