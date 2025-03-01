import { useRef } from "react";

const LatestInsights = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  // Array of articles data
  const articles = [
    {
      image: "https://swapx.fi/latest-insight/frax.webp",
      category: "Partnership",
      subcategory: "Frax Finance",
      title: "SwapX partners with Frax Finance",
      description:
        "In this article, the SwapX team presents a high-impact partnership for the Sonic ecosystem and SwapX users. Learn about FRAX, its successes, products, and the opportunities open for SwapX users!",
      date: "Dec, 2024",
      link: "https://medium.com/@swapxfi/swapx-partners-with-frax-finance-40d71b73552e?source=user_profile_page---------2-------------d08c95da6d4b---------------",
    },
    {
      image: "https://swapx.fi/latest-insight/tokenomics.png",
      category: "SWAPX",
      subcategory: "TOKENOMICS",
      title: "Looking behind the numbers!",
      description:
        "Dive into the mechanics of SwapX with a comprehensive breakdown of its tokenomics. In this article, we’ll highlight its core features, explore the benefits for users, and provide a full analysis of the numbers driving the ecosystem.",
      date: "Apr, 2024",
      link: "https://medium.com/@swapxfi/swapx-tokenomics-69b121264fbb?source=user_profile_page---------3-------------d08c95da6d4b---------------",
    },
    {
      image: "https://swapx.fi/latest-insight/launch.webp",
      category: "Launch",
      subcategory: "New Feature",
      title: "SwapX launches new feature for DeFi",
      description:
        "SwapX has rolled out a powerful new feature that enhances the user experience on the platform. This feature aims to provide users with more control and flexibility in their DeFi strategies.",
      date: "Feb, 2025",
      link: "https://medium.com/@swapxfi/swapx-launches-new-feature-for-defi-d4f2e63f5c3b?source=user_profile_page---------4-------------d08c95da6d4b---------------",
    },
  ];

  // Scroll functionality for left and right buttons
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400; // Adjust the scroll amount as per your preference
      if (direction === "left") {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="w-full md:mt-[120px] mt-[80px] css-0">
      <div className="chakra-stack items-center css-tl3ftk">
        <h2 className="chakra-heading css-1lqzns3">
          <div className="md:text-[3rem] text-[2.2rem] text-center css-0">
            Latest Insights
          </div>
        </h2>
        <div className="text-center mt-3 text-lg w-full max-w-[1200px] css-0">
          Catch the latest news on SwapX's innovative partnerships and
          developments. Stay informed and ahead in the DeFi space.
        </div>
      </div>

      <div className="md:mt-[80px] mt-[50px] sm:mx-[40px] css-l7km55 relative">
        {/* Left Arrow Button */}
        <button
          className="absolute rounded-full left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2"
          onClick={() => scrollSlider("left")}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Slider Content */}
        <div className="react-multi-carousel-list" dir="ltr">
          <ul
            ref={sliderRef}
            className="react-multi-carousel-track"
            style={{
              transition: "none",
              overflowX: "auto",
              listStyleType: "none",
              padding: 0,
              display: "flex",
            }}
          >
            {articles.map(
              ({
                category,
                date,
                description,
                image,
                link,
                subcategory,
                title,
              }) => (
                <li
                  className="react-multi-carousel-item react-multi-carousel-item--active"
                  style={{ flex: "0 0 auto", width: "391px" }}
                  key={title}
                >
                  <div className="sm:mx-3 mx-1 h-full max-w-[450px] css-0">
                    <div className="relative h-full pb-1 select-none css-0">
                      <div className="h-full css-c25mco">
                        <div className="chakra-stack h-full css-10uvkus">
                          <div className="css-0">
                            <img
                              src={image}
                              alt="thumbnail"
                              className="h-[auto] max-h-[100%] w-[auto]"
                              draggable="false"
                            />
                            <div className="pt-5 px-5 css-0">
                              <div className="chakra-stack css-1igwmid">
                                <div className="uppercase css-1s4d2bl">
                                  {category}
                                </div>
                                <div className="uppercase css-1s4d2bl">
                                  {subcategory}
                                </div>
                              </div>
                              <div className="text-[1.3rem] font-bold h-[1.8rem] mt-3 css-gbh5ji">
                                {title}
                              </div>
                              <div className="mt-[30px] break-all css-0">
                                {description}
                              </div>
                            </div>
                          </div>
                          <div className="mt-[30px] text-sm font-semibold pb-3 pl-5 css-1q2rfu6">
                            {date}
                          </div>
                        </div>
                      </div>
                      <div className="absolute css-s7dp54">
                        <a
                          href={link}
                          className="flex justify-center w-full h-full"
                        >
                          <div className="chakra-stack max-w-[235px] w-full h-full relative gap-2 px-[25px] css-1y3f6ad">
                            <div className="chakra-stack transition-opacity duration-500 opacity-100 css-1q7jsje">
                              <svg
                                viewBox="0 0 25 15"
                                focusable="false"
                                className="chakra-icon css-1iyfbu3"
                              >
                                <path
                                  d="M7.05087 0.432617C10.945 0.432617 14.1015 3.61119 14.1015 7.53188C14.1015 11.4526 10.9447 14.6309 7.05087 14.6309C3.15701 14.6309 0 11.4526 0 7.53188C0 3.61119 3.15677 0.432617 7.05087 0.432617ZM18.3106 0.848473C20.2577 0.848473 21.836 3.84043 21.836 7.53188H21.8363C21.8363 11.2224 20.2579 14.2153 18.3108 14.2153C16.3638 14.2153 14.7854 11.2224 14.7854 7.53188C14.7854 3.84139 16.3636 0.848473 18.3106 0.848473ZM23.7601 1.5446C24.4447 1.5446 25 4.22515 25 7.53188C25 10.8376 24.445 13.5192 23.7601 13.5192C23.0752 13.5192 22.5204 10.8384 22.5204 7.53188C22.5204 4.22539 23.0755 1.5446 23.7601 1.5446Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="md:text-[1.1rem] text-[1rem] absolute right-[25px] left-auto css-ak9r1k">
                              Read on Medium
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute rounded-full right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2"
          onClick={() => scrollSlider("right")}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestInsights;
