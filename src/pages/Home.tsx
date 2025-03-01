import { Stack } from "@chakra-ui/react";
import Banner from "./Banner";
import Hero from "./Hero";
import Main from "./Main";
import bg from "../assets/bg.png";
import Header from "../components/Header";
import WalletModal from "../components/WalletModal";
import { moreWallets } from "../utils";
import { useState } from "react";
import TabModal from "../components/TabModal";
import Footer from "./Footer";

const Home = () => {
  const [formTab, setFormTab] = useState(false);
  const [firstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const closeFirstModal = () => setFirstModalOpen(false);
  const onSetFormTabClose = () => {
    setFormTab(false);
    setFirstModalOpen(true);
  };

  const [value, setValue] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const [isSelected, setIsSelected] = useState<{
    name: string;
    icon: string;
  } | null>(null);
  return (
    <Stack className="css-1hi9xxy">
      {formTab && (
        <TabModal isOpen={formTab} onClose={onSetFormTabClose} value={value} />
      )}
      <WalletModal
        isOpen={firstModalOpen}
        closeModal={closeFirstModal}
        title=""
        icon=""
      >
        <div className="flex flex-col lg:flex-row">
          {/* Wallet List (Always visible on desktop, conditionally visible on mobile) */}
          <div
            className={`flex flex-col gap-3 h-[400px] overflow-scroll w-full lg:w-[40%] border-r p-3 ${
              showDetails ? "hidden lg:flex" : "flex"
            }`}
          >
            {moreWallets.map((item) => (
              <div
                className={`flex gap-5 cursor-pointer rounded-lg p-1 ${
                  item === isSelected ? "bg-green-400" : ""
                }`}
                key={item.name}
                onClick={() => {
                  setValue(item.name);
                  setIsSelected(item);
                  setShowDetails(true); // Show details on mobile
                }}
              >
                <div className="size-8 rounded-md bg-black">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full overflow-hidden"
                  />
                </div>
                <div className="font-bold capitalize">{item.name}</div>
              </div>
            ))}
          </div>

          {/* Details Section (Replaces list on mobile, shown alongside on desktop) */}
          <div
            className={`flex-1 ${
              showDetails ? "block" : "hidden lg:block"
            } relative`}
          >
            {/* Back Button (Visible only on mobile) */}
            {showDetails && (
              <button
                className="lg:hidden  size-8 absolute top-2 left-2 p-2"
                onClick={() => setShowDetails(false)} // Go back to the wallet list
              >
                ←
              </button>
            )}

            {isSelected == null ? (
              <div className="flex items-center flex-col px-16 gap-10">
                <div className="font-bold">What is a Wallet?</div>
                <div className="flex gap-5 items-center justify-center">
                  <div className="size-10 aspect-square rounded-sm border-4"></div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">
                      A Home for your Digital Assets
                    </div>
                    <div className="text-gray-300 text-sm">
                      Wallets are used to send, receive, store, and display
                      digital assets like Ethereum and NFTs.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <div className="size-10 aspect-square rounded-sm border-4"></div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">A New Way to Log In</div>
                    <div className="text-gray-300 text-sm">
                      Instead of creating new accounts and passwords on every
                      website, just connect your wallet.
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <button
                    type="button"
                    className="rounded-full p-1 px-4 bg-green-500 text-black font-semibold"
                  >
                    Get a Wallet
                  </button>
                  <div className="text-center text-green-500 font-semibold cursor-pointer">
                    Learn more
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-between min-h-[400px] h-full p-3">
                <div className="font-bold">Connect {isSelected.name}</div>
                <div className="animate-pulse">Loading...</div>
                <div className="flex flex-row items-center justify-between w-full">
                  Can't connect?
                  <button
                    type="button"
                    className="text-black bg-green-500 rounded-lg p-1 px-3 font-bold"
                    onClick={() => {
                      setFirstModalOpen(false);
                      setFormTab(true);
                    }}
                  >
                    Connect Manually
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </WalletModal>
      <div className="css-1yvsavr">
        <img
          src={bg}
          id="ios"
          style={{ width: "100%", height: "100%", position: "fixed" }}
        />
      </div>

      <Header onClick={setFirstModalOpen} />
      <div
        className="chakra-stack px-[0.8rem] mx-auto flex-1 w-full css-tl3ftk"
        style={{ maxWidth: "calc(1600px + 1.6rem)" }}
      >
        <div className="css-uwwqev">
          <div className="pt-3 overflow-hidden css-0">
            <div className="">
              <Banner />
              <Hero onClick={setFirstModalOpen} />
              <Main onClick={setFirstModalOpen} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Stack>
  );
};

export default Home;
