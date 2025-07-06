
import {useState, useEffect, useRef} from "react"

const mockTickerItems = [
  {
    buyer: "BX64hR",
    amount: "0.0124 SOL",
    coin: "crab",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmVQy5C67FdE897VmA6x75Njj8RPkti6GKETkkuzFVXJ63",
    mcap: "$6.9k"
  },
  {
    buyer: "ZP29cK",
    amount: "0.45 SOL",
    coin: "frog",
    coinImg: "https://pump.mypinata.cloud/ipfs/Qmb87KwLgExRVDXz2NNK37e1oTqABhzXMnMdeRHEDxNzgE",
    mcap: "$5.3k"
  },
  {
    buyer: "JL2pXF",
    amount: "1.1976 SOL",
    coin: "pump",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmT7xymAZGhALDMLbsnHDGjsPHZgR96aFoyKMbUzZAb8gE",
    mcap: "$2.4k"
  },
  {
    buyer: "KD83pW",
    amount: "0.2200 SOL",
    coin: "slug",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmXXrTqPg6A1XcKjZ8qE28CEr7PshV5HADpJcDxKMRv9i1",
    mcap: "$6.1k"
  },
  {
    buyer: "RM82qL",
    amount: "0.382 SOL",
    coin: "ape",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmU1r3cYt8w1LTwJpNQ2QG7UqFM14T8Rx9U7cdkoFnt83S",
    mcap: "$8.2k"
  },
  {
    buyer: "XA77bV",
    amount: "2.005 SOL",
    coin: "lion",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmQ4RLuS7wZRLKzz1ebZ3dPvDFyR1vXe2ZT66XnmqBGe7k",
    mcap: "$10.3k"
  },
  {
    buyer: "TW19dQ",
    amount: "0.0321 SOL",
    coin: "ghost",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmSX7TrAWfTgFiRZFo7RfHyLdnS7oRMPu6uhKLKuJdp7km",
    mcap: "$1.7k"
  },
  {
    buyer: "CP04eF",
    amount: "10.6470 SOL",
    coin: "snake",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmbDzDZ9vPNFwENo6fLQgdoHLB6XBcmvb5M6qw7KrxgiLp",
    mcap: "$4.6k"
  },
  {
    buyer: "NB55yU",
    amount: "11.3331 SOL",
    coin: "shark",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmQDJDe1o4UEP1wUj3qXvzoeKKePZ7kxQ7d6UkVkz96T9M",
    mcap: "$7.9k"
  },
  {
    buyer: "LG90kW",
    amount: "0.0095 SOL",
    coin: "star",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmPtctXwpwNdbY2nzdoMHYZvPyQvQheVEGcqhsoBiGCV9u",
    mcap: "$3.2k"
  },
  {
    buyer: "DFT",
    amount: "13.2109 SOL",
    coin: "dragon",
    coinImg: "https://pump.mypinata.cloud/ipfs/Qmdt2muhZSn1LqHqYQxB1bhSPQJm4EyaSpuYFxtPd8VQTy",
    mcap: "$12.7k"
  },
  {
    buyer: "UMXX",
    amount: "7.9838 SOL",
    coin: "monkey",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmbUhNXY2z4mZNBZQb2KfMiKj9CK5CBY78TxEDpqX5hq3d",
    mcap: "$6.0k"
  },
  {
    buyer: "458210MNO",
    amount: "1.6725 SOL",
    coin: "eagle",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmSnPVJYGVXxDYihqDRGJh8TxLKxL2ZcQfxCmACe9T4AjT",
    mcap: "$9.4k"
  },
  {
    buyer: "r0402ZKX",
    amount: "0.0571 SOL",
    coin: "giraffe",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmU8RgLhYk5H9mLmWh8aBgUsHa13R4ES4TwX7N9Xj9Uzj7",
    mcap: "$3.1k"
  },
  {
    buyer: "001ZETA",
    amount: "4.3202 SOL",
    coin: "rhino",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmbGZnHEUbZkhycd7S5LdU1nAPDKuDBHQnB1xr7xfosnQr",
    mcap: "$14.9k"
  },
  {
    buyer: "d888FTW",
    amount: "0.492 SOL",
    coin: "octopus",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmcM6AXFqjgbUpfwRcxEKnRer9Wy49NMUV68sApYbMA16P",
    mcap: "$5.8k"
  },
  {
    buyer: "a25WZ",
    amount: "2.800 SOL",
    coin: "panda",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmNjWaS4k1KmhBcP8KGV7x8UbLpkBQPhUB1mFuQ9BkwYV3",
    mcap: "$11.3k"
  },
  {
    buyer: "025GOL",
    amount: "121.0084 SOL",
    coin: "zebra",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmRXfMJkR9ytVvmcK7UgWdbK3oR2TBLv3Zbm6NBoXxycQn",
    mcap: "$7.2k"
  },
  {
    buyer: "ZZ990TL",
    amount: "4.3115 SOL",
    coin: "cow",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmTuJFnUos9gLVzQUhvcqvRwczbNZXXMEtH3AcZhPbLzTD",
    mcap: "$2.8k"
  },
  {
    buyer: "4521KPNQ",
    amount: "1.9001 SOL",
    coin: "falcon",
    coinImg: "https://pump.mypinata.cloud/ipfs/QmYZqGehPUACACja3L5n1vd5cqY1GnmsxNB2tXQ6Ac8bUq",
    mcap: "$8.6k"
  }
]

const getRandomType = () => (Math.random() < 0.5 ? "bought" : "sold")

export default function TickerComponent(){
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(1)

  const tickerLeftRef = useRef(null)
  const tickerRightRef = useRef(null)

    const updateTickerItems = (data, showMcap, type) => {
        return (
        <div className="ticker-slot flash-anim">
            <img 
            src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1"
            alt="buy-icon"
            />
            <span>{data.buyer}</span>&nbsp;
            <span>{`${type} ${data.amount} of`}</span>&nbsp;
            <span>{data.coin}</span>
            <img
            src={data.coinImg}
            alt={data.coin}
            />
            {showMcap && (
            <>
                <span className="hide-span">&nbsp; | &nbsp;</span>
                <span className="hide-span">mcap: {data.mcap}</span>
            </>
            )}
        </div>
        )
    }
    useEffect(()=>{
        const handleLeftAnimEnd = () => {
            const next = (leftIndex + 1) % mockTickerItems.length
            setLeftIndex(next)
        }

        const handleRightAnimEnd = () => {
            const next = (rightIndex + 1) % mockTickerItems.length
            setRightIndex(next)
        }

        const leftE1 = tickerLeftRef.current
        const rightE1 = tickerRightRef.current

        leftE1.addEventListener("animationend", handleLeftAnimEnd)
        rightE1.addEventListener("animationend", handleRightAnimEnd)

        return () => {
            leftE1?.removeEventListener("animationend", handleLeftAnimEnd)
            rightE1?.removeEventListener("animationend", handleRightAnimEnd)
        }
    }, [leftIndex, rightIndex])

    const leftType = getRandomType()
    const rightType = getRandomType()

    return (
      <div id="right-float" className="d-flex justify-content-between align-items-center">
        <div className="animation-div flex-grow-1">
          <div className="ticker-wrapper my-md-1">
            <div id="ticker-box" className="ticker-box d-flex">
              <div id="ticker-left" className="ticker-slot" ref={tickerLeftRef} key={`left-${leftIndex}-${leftType}`}>
                {updateTickerItems(mockTickerItems[leftIndex], true, leftType)}
              </div>
              <div id="ticker-right" className="ticker-slot" ref={tickerRightRef}>
                {updateTickerItems(mockTickerItems[rightIndex], false, rightType)}
              </div>
            </div>
          </div>
        </div>
        <div className="buttons-div d-flex gap-2">
          <span className="hiden me-auto">
            <img className="logo-image" src="https://i.ibb.co/Wvb8Js3W/logo.png" alt="Pump" loading="lazy" height="25" />
          </span>
          <button className="btn btn-color btn-color-2">
            <span>create coin</span>
          </button>
          <button className="btn btn-color btn-color-1 px-4">
            <span className="bold-font">log in</span>
          </button>
        </div>
      </div>
    )
}