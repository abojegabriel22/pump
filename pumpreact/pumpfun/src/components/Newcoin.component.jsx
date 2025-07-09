
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MiddleAnimation from "./Middleanimation.component";
import { LastCards } from "./Lastanimation.component";
import { Link } from "react-router-dom";

const trendingData = [
  {
	title: "Pumps Gone Crazy",
	symbol: "PGC",
	marketCap: "$793.3K",
	replies: 603,
	description: "60 Year Old Trencher Builds Community Around Daily Livestreams",
	img: "https://pump.mypinata.cloud/ipfs/bafkreif5d4q73hlnxrgm6a7xcvocmyile4kdhwaiu32cwu47muqdeg3ioy",
  },
  {
	title: "Saying Pumpfun 1MIL",
	symbol: "1MIL",
	marketCap: "$406.6K",
	replies: 1277,
	description: "Streamer Attempts to Say “Pump Fun” 1,000,000 Times",
	img: "https://prod-livestream-thumbnails-841162682567.s3.us-east-1.amazonaws.com/334752/1750867337009.jpeg?img-width=72&img-dpr=2&img-onerror=redirect",
	live: true,
  },
  {
	title: "Gorbagana",
	symbol: "GOR",
	marketCap: "$30.0M",
	replies: 1688,
	description: "Toly Questions if Blockchain Branding Really Matters, Birthing Gorbagana",
	img: "https://pump.mypinata.cloud/ipfs/QmQAtMVZPjsfaTJM9QErBdVqHi1bD9FCBZDr5uzGV96zhU",
  },
  {
	title: "Fartbook",
	symbol: "FB",
	marketCap: "$963.3K",
	replies: 753,
	description: "Fartbook Creates Their Own Fart-Inspired Degen Facebook Clone",
	img: "https://pump.mypinata.cloud/ipfs/QmUpi9Jiy2JbdwsLb1Fg31Zs4Gb9gGiPreDS6yKFJ6ehBi",
  },
  {
	title: "BASEDD House",
	symbol: "BASEDD",
	marketCap: "$2.6M",
	replies: 187,
	description: "Streamer Collective 'BASEDD House' Launches Token",
	img: "https://pump.mypinata.cloud/ipfs/bafkreiai55kltq5jbnnc3zt3yrenwwp4jiqucgm3kzf7m3c66vp4xrouwa",
  },
  {
	title: "rasmr",
	symbol: "rasmr",
	marketCap: "$4.3M",
	replies: 172,
	description: "Rasmr Launches Official Livestreaming Coin",
	img: "https://pump.mypinata.cloud/ipfs/bafybeih5pnn2jimqjdqy7575wzzkvplwquulzgfmfvzkgqnrzeiw3r2bzi",
  },
  {
	title: "Monitoring the Situation",
	symbol: "Monitor",
	marketCap: "$405.2K",
	replies: 228,
	description: "CT Monitoring the Situation from Sidelines After Recent Global Events",
	img: "https://pump.mypinata.cloud/ipfs/bafkreih6gmimch5ponaszypgqzffjf7nq5lp2szeanz75pg4ahheqffrem",
  },
  {
	title: "Xavier: Renegade Angel",
	symbol: "xavier",
	marketCap: "$8.9M",
	replies: 107,
	description: "Ansem Shills Xavier, a Retro Absurdist Shamanic Character",
	img: "https://pump.mypinata.cloud/ipfs/QmebA1sjK6DqbBByZZCKMfNRoLCKMKxSEzFWTTHSCtoMKy",
  },
  {
	title: "Trencher Broadcasting",
	symbol: "TBC",
	marketCap: "$1.4M",
	replies: 101,
	description: "AI Broadcast Company Shares Hyper Realistic News With a Humorous Take",
	img: "https://pump.mypinata.cloud/ipfs/bafybeibb32glxzhjol2qx6mjcthowsn42ifpxowr5rkgyxfoh7c4ocj4ja",
  },
  {
	title: "aura",
	symbol: "aura",
	marketCap: "$121.5M",
	replies: 447,
	description: "Aura Hits $100M Market Cap as CT Puzzled Over Sudden Surge",
	img: "https://pump.mypinata.cloud/ipfs/QmSBgFtpXnxLMeyU1Czs1PW5Zv7nFjy8ZXe5ZDhA8fyyPD",
  },
  {
	title: "catwifmask",
	symbol: "MASK",
	marketCap: "$9.2M",
	replies: 658,
	description: "Viral Masked Cat Claws Into CT in New Profile Picture Trend",
	img: "https://pump.mypinata.cloud/ipfs/bafkreibclbbbq7rhq2lto6kabse6l2vqx3xpu2nxnvpymmyu6krfvtr74a",
  },
];

export default function NewcoinComponent() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	// const [swiperReady, setSwiperReady] = useState(false);
	const [swiperInstance, setSwiperInstance] = useState(null);

	useEffect(() => {
  if (swiperInstance && prevRef.current && nextRef.current) {
	swiperInstance.params.navigation.prevEl = prevRef.current;
	swiperInstance.params.navigation.nextEl = nextRef.current;
	swiperInstance.navigation.destroy(); // cleanup first
	swiperInstance.navigation.init();    // then re-init
	swiperInstance.navigation.update();  // finally update
  }
}, [swiperInstance]);

	return(
		<div className="col-lg-10 new-coin-h4-div my-4 ms-lg-auto me-lg-4">
			<div className="w-100 text-center start-new-coin">
				<Link className="text-light new-coin-h4" data-bs-toggle="modal" data-bs-target="#exampleModal"><h4>[start a new coin]</h4></Link>
			</div>
			<div className="input-div col-xl-5 col-md-6 mx-auto mt-5 mb-4 pt-1">
				<div className="input-group mb-3">
					<input type="text" className="form-control py-2 input-background no-border rounded" placeholder="search for token" aria-label="Recipient’s username" aria-describedby="button-addon2" />
					<button className="btn ms-2 rounded input-button" type="button" id="button-addon2" data-bs-toggle="modal" data-bs-target="#exampleModal">search</button>
				</div>
			</div>
				{/* ---------------------- carousels -------------------- */}
			<div className="ma px-lg-2">
				<section className="coin-display">
					<div className="coins-animate-slide">
						{/* <!-- Top row: trending text and arrows --> */}
						{swiperInstance && (
							<div className="d-flex justify-content-between align-items-center mb-2 overflow-hidden trending-div">
								<p className="text-light trending-now-p mb-0">now trending</p>
								<div className="row">
								<button ref={prevRef} className="carousel-control-prev position-static me-2 button-carousel p-2 swiper-button-prev-custom">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button ref={nextRef} className="carousel-control-next position-static button-carousel me-3 p-2 swiper-button-next-custom">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</button>
								</div>
							</div>
						)}
            {/* --------- swiper carousel  -----  */}
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 100000, disableOnInteraction: false }}
              onSwiper={setSwiperInstance}
              speed={700}
              spaceBetween={20}
              slidesPerView={4.3}
              slidesPerGroup={1}
              navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
              // Ensure refs are assigned before swiper initializes
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
              320: { slidesPerView: 1.2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.7, slidesOffsetAfter: 240 },
              1100: { slidesPerView: 4.3 },
              }}
            >
              {trendingData.map((item, idx) => (
                <SwiperSlide className="swiper-slide media-break" key={idx}>
                  <div className="card-wrapper" style={{ width: "280px", maxWidth: "280px" }}>
                    <Link draggable="false" className="d-block w-100 text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <div className={`card mb-0 shadow-sm p-3 rounded card-hover ${idx === 1 ? "border-red" : ""}`} style={{ backgroundColor: "#1C2530" }}>
                        <div className="d-flex">
                          <div className="me-3 flex-shrink-0 position-relative" style={{ width: "72px", height: "72px" }}>
                            <img
                              src={item.img}
                              alt={item.title}
                              className="img-fluid rounded"
                              width="72"
                              height="72"
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            {item.live && (
                              <span className="position-absolute alignment-1 px-2 rounded">LIVE</span>
                            )}
                          </div>
                          <div className="flex-grow-1 d-flex flex-column justify-content-between text-size">
                            <div>
                              <span className="fonts d-block fw-bold text-light">{item.title}</span>
                              <span className="fonts d-block fw-bold text-light">({item.symbol})</span>
                            </div>
                            <div className="green-text mt-1">
                              <span className="font-medium">market cap: {item.marketCap}</span>
                            </div>
                            <div>
                              <small className="text-body-secondary1">replies: {item.replies}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 description-line px-1 text-light">
                        {item.description}
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                ))}
            </Swiper>
					</div>
				</section>
        <MiddleAnimation />
        <LastCards />
			</div>
		</div>
	)


}