import { Button, Heading, Stack } from "@chakra-ui/react";
import StrategicPartners from "./Partners";
import ProtocolPartners from "./ProtocolPartners";
import LatestInsights from "./LatestInsignt";

interface Main {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const Main = ({ onClick }: Main) => {
  return (
    <div className="css-ar50gd">
      <div className="w-full md:mt-[80px] mt-[80px] css-0">
        <div className="flex items-center md:justify-around justify-center flex-wrap gap-[35px] css-0">
          <div className="chakra-stack sm:w-auto w-full css-18e1wj0">
            <div className="font-[900] text-[2.7rem] css-1v0cd8t">$54.12M+</div>
            <div className="whitespace-nowrap text-sm text-green css-0">
              Total Value Locked
            </div>
          </div>
          <Stack className="chakra-stack sm:w-auto w-full css-18e1wj0">
            <div className="font-[900] text-[2.7rem] css-1v0cd8t">
              $783.71M+
            </div>
            <div className="whitespace-nowrap text-sm text-green css-0">
              Total Volume
            </div>
          </Stack>
        </div>
      </div>
      <div className="w-full md:mt-[120px] mt-[80px] css-0">
        <Stack className="chakra-stack css-1q7jsje">
          <Heading className="chakra-heading css-1lqzns3">
            <div className="md:text-[3rem] text-[2.2rem] text-center css-0">
              Discover SwapX
            </div>
          </Heading>
        </Stack>
        <Stack className="chakra-stack css-1q7jsje" direction="row">
          <div className="flex md:justify-around justify-center gap-5 md:mt-[50px] mt-[30px] max-w-[600px] w-[100%] css-0">
            <Button type="button" className="chakra-button css-bsnbek">
              <p className="chakra-text text-lg css-12w00pg">Trade</p>
            </Button>
            <Button type="button" className="chakra-button css-1f9bdzy">
              <p className="chakra-text text-lg css-12w00pg">Earn</p>
            </Button>
            <Button type="button" className="chakra-button css-1f9bdzy">
              <p className="chakra-text text-lg css-12w00pg">Vote</p>
            </Button>
          </div>
        </Stack>
        <div className="grid lg:grid-cols-2 gap-7 md:mt-[70px] mt-[50px] css-0">
          <div className="lg:order-1 order-2 flex flex-col justify-start lg:items-start items-center lg:max-w-[500px] css-0">
            <Heading className="chakra-heading md:block hidden css-kyd9id">
              Spot and Leverage Trading
            </Heading>
            <div className="md:hidden block text-[1.8rem] font-bold text-center css-0">
              Spot and Leverage Trading
            </div>
            <div className="text-lg lg:text-left text-center css-0">
              <p className="chakra-text mt-7 css-12w00pg">
                Instantly trade tokens with SwapX, where optimized liquidity and
                user-friendly design ensure smooth and highly effective
                transactions.
              </p>
            </div>
            <div className="mt-7 css-0">
              <Button
                type="button"
                className="chakra-button css-d98tzl"
                onClick={() => onClick(true)}
              >
                <div className="normal-case font-[500] text-lg css-0">
                  Swap Now
                </div>
                <div className="css-rquf5r">
                  <svg
                    viewBox="0 0 16 24"
                    focusable="false"
                    className="chakra-icon css-1hw19s6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.311 12.8491L1.65904 6.54914C1.55287 6.50063 1.43359 6.48872 1.31993 6.51533C1.20627 6.54193 1.10467 6.60552 1.03105 6.69611C0.957001 6.78646 0.915428 6.89909 0.91307 7.01588C0.910712 7.13267 0.947706 7.2469 1.01805 7.34016L5.50804 13.3261L1.01805 19.3121C0.959551 19.3901 0.923901 19.4829 0.915145 19.58C0.906389 19.6771 0.924826 19.7747 0.968429 19.8619C1.01203 19.9491 1.07909 20.0225 1.16203 20.0737C1.24497 20.125 1.34053 20.1521 1.43803 20.1521C1.514 20.1525 1.58909 20.1361 1.658 20.1041L15.31 13.8041C15.401 13.7621 15.478 13.6949 15.532 13.6104C15.5859 13.526 15.6146 13.4279 15.6146 13.3276C15.6146 13.2274 15.5859 13.1293 15.532 13.0449C15.478 12.9604 15.401 12.8932 15.31 12.8511L15.311 12.8491Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Button>
            </div>
          </div>
          <Stack className="chakra-stack lg:order-2 order-1 css-1q7jsje">
            <img
              src="https://swapx.fi/assets/discover-dark-trade-15230818.png"
              alt="discover"
              className="max-w-[600px] w-[100%]"
            />
          </Stack>
        </div>
      </div>
      <StrategicPartners />
      <ProtocolPartners />
      <LatestInsights />
    </div>
  );
};

export default Main;
