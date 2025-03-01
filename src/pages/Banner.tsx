import { useRef, useState } from "react";

const Banner = () => {
  // Reference to the carousel track
  const carouselTrack = useRef<HTMLUListElement | null>(null);

  // State to track active index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to scroll left (one item)
  // const scrollLeft = () => {
  //   if (carouselTrack.current) {
  //     const itemWidth =
  //       carouselTrack.current.children[0].getBoundingClientRect().width; // Get width of one item
  //     carouselTrack.current.scrollBy({
  //       left: -itemWidth, // Scroll by one item's width
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // // Function to scroll right (one item)
  // const scrollRight = () => {
  //   if (carouselTrack.current) {
  //     const itemWidth =
  //       carouselTrack.current.children[0].getBoundingClientRect().width; // Get width of one item
  //     carouselTrack.current.scrollBy({
  //       left: itemWidth, // Scroll by one item's width
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // Function to handle dot click and navigate to the corresponding item
  const handleDotClick = (index: number) => {
    if (carouselTrack.current) {
      const itemWidth =
        carouselTrack.current.children[0].getBoundingClientRect().width;
      carouselTrack.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
    setActiveIndex(index); // Set active index
  };

  return (
    <div className="css-0">
      <div className="max-w-[900px] w-full mx-auto css-hbiw5v">
        <div
          className="react-multi-carousel-list relative"
          dir="ltr"
          style={{ overflow: "hidden" }}
        >
          <ul
            ref={carouselTrack}
            className="react-multi-carousel-track"
            style={{
              display: "flex",
              transition: "none",
              overflow: "hidden",
              padding: 0,
              margin: 0,
              width: "100%",
            }}
          >
            {/* Carousel items */}
            <li
              className="react-multi-carousel-item"
              style={{ flex: "0 0 auto", width: "100%" }}
            >
              <div className="md:rounded-[100px] rounded-[48px] md:max-w-[1000px] max-w-[450px] border-[3px] w-full p-[3px] mt-[20px] mb-[25px] mr-auto ml-auto border-[#CBD8D0]">
                <a
                  target="_blank"
                  rel="noopener"
                  className="chakra-link"
                  href="https://www.soniclabs.com/boom"
                >
                  <div className="md:rounded-[100px] rounded-[45px] relative overflow-hidden">
                    <img
                      src="https://swapx.fi/banners/sonic-boom-desktop.png"
                      alt="banner"
                      className="w-full h-full hidden lg:block"
                      draggable="false"
                    />
                    <img
                      alt="banner"
                      className="w-full h-full block lg:hidden"
                      draggable="false"
                      src="https://swapx.fi/banners/sonic-boom-mobile.png"
                    />
                  </div>
                </a>
              </div>
            </li>
            <li
              className="react-multi-carousel-item"
              style={{ flex: "0 0 auto", width: "100%" }}
            >
              <div className="md:rounded-[100px] rounded-[48px] md:max-w-[1000px] max-w-[450px] border-[3px] w-full p-[3px] mt-[20px] mb-[25px] mr-auto ml-auto border-[#CBD8D0]">
                <a
                  target="_blank"
                  rel="noopener"
                  className="chakra-link"
                  href="https://badbunny.meme/"
                >
                  <div className="md:rounded-[100px] rounded-[45px] relative overflow-hidden">
                    <img
                      src="https://swapx.fi/banners/bad-bunny-desktop.png"
                      alt="banner"
                      className="w-full h-full hidden lg:block"
                      draggable="false"
                    />
                    <img
                      alt="banner"
                      className="w-full h-full block lg:hidden"
                      draggable="false"
                      src="https://swapx.fi/banners/bad-bunny-mobile.png"
                    />
                  </div>
                </a>
              </div>
            </li>
            {/* Add more items as needed */}
          </ul>

          {/* Dot Indicators */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2"
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {Array.from({
              length: carouselTrack.current?.children.length || 0,
            }).map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)} // Navigate to the clicked dot
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  margin: "0 5px",
                  backgroundColor: index === activeIndex ? "#000" : "#ccc", // Active dot is black, others gray
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
