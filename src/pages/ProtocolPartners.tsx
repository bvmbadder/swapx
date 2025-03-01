import { Stack } from "@chakra-ui/react";
import React from "react";

const ProtocolPartners: React.FC = () => {
  return (
    <div className="w-full md:mt-[120px] mt-[80px] css-0">
      <Stack
        direction="column"
        className="chakra-stack items-center css-tl3ftk"
      >
        <h2 className="chakra-heading css-1lqzns3">
          <div className="md:text-[3rem] text-[2.2rem] text-center css-0">
            Protocol Partners
          </div>
        </h2>
        <div className="text-center mt-3 text-lg md:block hidden w-full max-w-[1200px] css-0">
          At SwapX, we host partner liquidity and offer a robust infrastructure
          for their projects to thrive. By providing a strong foundation, we
          enable protocols to build, scale, and succeed within our ecosystem,
          ensuring mutual growth and innovation.
        </div>
      </Stack>
      <div className="md:mt-[80px] mt-[40px] css-0 overflow-hidden whitespace-nowrap relative">
        <div className="slider-container inline-flex animate-marquee">
          {/* Duplicate the items to ensure a seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="rfm-child mx-[10px] md:mx-[15px]">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <div className="chakra-stack py-[10px] px-7 rounded-[30px] my-1 select-none css-1ysrkno">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="h-[35px] w-auto max-w-[200px]"
                    draggable="false"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="slider-container inline-flex animate-marquee-reverse mt-2">
          {/* Duplicate the items to ensure a seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="rfm-child mx-[10px] md:mx-[15px]">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <div className="chakra-stack py-[10px] px-7 rounded-[30px] my-1 select-none css-1ysrkno">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="h-[35px] w-auto max-w-[200px]"
                    draggable="false"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-lg md:mt-[80px] mt-[40px] md:hidden block css-0">
        These collaborations enable us to integrate innovative plugins and
        advanced security measures, ensuring a robust and dynamic DeFi
        environment for all users.
      </div>
    </div>
  );
};

const partners = [
  {
    link: "https://bailsec.io/",
    image: "https://swapx.fi/protocol-partners/bailsec-dark.png",
    alt: "bailsec",
  },
  {
    link: "https://app.rhino.fi/bridge/?refId=DeFi_SwapX&chain=BINANCE&token=USDC&chainOut=SONIC",
    image: "https://swapx.fi/protocol-partners/rhinofi-dark.png",
    alt: "rhinofi",
  },
  {
    link: "https://www.avalonfinance.xyz/",
    image: "https://swapx.fi/protocol-partners/avalon-dark.png",
    alt: "avalon",
  },
  {
    link: "https://www.lynex.fi/",
    image: "https://swapx.fi/protocol-partners/lynex-dark.png",
    alt: "lynex",
  },
  {
    link: "https://openocean.finance/",
    image: "https://swapx.fi/protocol-partners/openocean-dark.png",
    alt: "openocean",
  },
  {
    link: "https://www.odos.xyz/",
    image: "https://swapx.fi/protocol-partners/odos.png",
    alt: "odos",
  },
  {
    link: "https://paintswap.finance/",
    image: "https://swapx.fi/protocol-partners/paintswap-dark.png",
    alt: "paintswap",
  },
  {
    link: "https://www.magpiefi.xyz/",
    image: "https://swapx.fi/protocol-partners/magpie-dark.png",
    alt: "magpie",
  },
  {
    link: "https://rings.money/",
    image: "https://swapx.fi/protocol-partners/rings-dark.png",
    alt: "rings",
  },
  {
    link: "https://www.stablejack.xyz/",
    image: "https://swapx.fi/protocol-partners/stablejack-dark.png",
    alt: "stablejack",
  },
  {
    link: "https://www.stryke.xyz",
    image: "https://swapx.fi/protocol-partners/stryke-dark.png",
    alt: "stryke",
  },
  {
    link: "https://sacra.game/",
    image: "https://swapx.fi/protocol-partners/sacra-dark.png",
    alt: "sacra",
  },
];

export default ProtocolPartners;
