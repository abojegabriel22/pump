import { useEffect, useRef } from "react";
const MiddleAnimation = () => {
  const scrollContainerRef = useRef(null);
  const scrollLeftBtnRef = useRef(null);
  const scrollRightBtnRef = useRef(null);

  const updateScrollButtons = () => {
    const scrollContainer = scrollContainerRef.current;
    const scrollLeftBtn = scrollLeftBtnRef.current;
    const scrollRightBtn = scrollRightBtnRef.current;

    if (!scrollContainer || !scrollLeftBtn || !scrollRightBtn) return;

    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    // Disable left button if at the start
    if (scrollLeft <= 0) {
      scrollLeftBtn.classList.add("scroll-button-disabled");
    } else {
      scrollLeftBtn.classList.remove("scroll-button-disabled");
    }

    // Disable right button if at the end
    if (scrollLeft + clientWidth >= scrollWidth - 1) {
      scrollRightBtn.classList.add("scroll-button-disabled");
    } else {
      scrollRightBtn.classList.remove("scroll-button-disabled");
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    scrollContainer.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("load", updateScrollButtons);

    updateScrollButtons(); // initial check

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("load", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 400);
  };
  return (
    <section className="middle-animation mt-5 px-2">
      <div className="d-flex justify-content-between w-100 gap-5 align-items-start flex-nowrap" id="flex-no-wrap">

        {/* Left: Filter Box */}
        <div className="filter-box d-flex align-items-center gap-3 flex-wrap flex-shrink-0" style={{ minWidth: "280px" }}>
          <div className="dropdown">
            <button
              type="button"
              className="btn sort-bg sort-dropdown-full text-black d-flex justify-content-between align-items-center dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              sort: featured 🔥
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-chevron-down">
                <path fillRule="evenodd" d="M1.5 5.5L8 12l6.5-6.5-.7-.7L8 10.8 2.2 4.8l-.7.7z" />
              </svg>
            </button>
            <ul className="dropdown-menu sort-bg px-1">
              <li><a className="dropdown-item sort-bg-hover" href="#">sort: featured 🔥</a></li>
              <li><a className="dropdown-item sort-bg-hover" href="#">sort: last trade</a></li>
              <li><a className="dropdown-item sort-bg-hover" href="#">sort: creation time</a></li>
              <li><a className="dropdown-item sort-bg-hover" href="#">sort: last reply</a></li>
              <li><a className="dropdown-item sort-bg-hover" href="#">sort: currently live</a></li>
              <li><a className="dropdown-item sort-bg-hover" href="#">sort: market cap</a></li>
            </ul>
          </div>

          {/* Right Toggles */}
          <div className="d-flex flex-column gap-1 small-toggle-row">
            <div className="d-flex align-items-center gap-2 text-white small toggle-half">
              <span>show animations:</span>
              <div className="d-flex gap-1 width-auto">
                <span className="px-1 sort-bg text-black rounded text-size2 cursor-pointer">on</span>
                <span className="px-1 text-body-secondary1 body rounded text-size2 cursor-pointer">off</span>
              </div>
            </div>
            <div className="d-flex align-items-center text-white small gap-2 toggle-half">
              <span>include nsfw:</span>
              <div className="d-flex gap-1">
                <span className="px-1 sort-bg text-black rounded text-size2 cursor-pointer">on</span>
                <span className="px-1 body text-body-secondary1 rounded text-size2 cursor-pointer">off</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Scrollable Categories */}
        <div className="d-flex ms-auto align-items-center justify-content-end overflow-hidden custom-button-padding">
          <button
            className="carousel-control-prev position-static me-4 button-carousel-2 p-2"
            ref={scrollLeftBtnRef}
            onClick={() => handleScroll("left")}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <div
            className="scrolling-wrapper d-flex flex-nowrap gap-2 overflow-hidden"
            id="scrolling-category"
            ref={scrollContainerRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {[
              "🔥 Honda Solflare 🚗✨",
              "🔥 Gorbagana Universe 🦍🍌",
              "🔥 Elon Family 👶🚀",
              "🔥 Trash Culture 🗑️😂",
              "🔥 War Satire ⚔️🕊️",
              "🔥 AI Invasion 🤖🌌",
              "🔥 Baby Thoughts 👶💭",
              "🔥 Pump Parody 🥊🤣",
              "🔥 Pop Culture Cats 🐱🎬"
            ].map((label, i) => (
              <button
                key={i}
                className="btn text-nowrap px-2 py-2 rounded text-light text-size2 second-hover-effect"
                style={{ background: "#1F2937" }}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="carousel-control-next position-static ms-4 button-carousel-2 p-2"
            ref={scrollRightBtnRef}
            onClick={() => handleScroll("right")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
export default MiddleAnimation