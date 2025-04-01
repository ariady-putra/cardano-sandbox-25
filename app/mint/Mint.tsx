import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@heroui/link";
import { ToastContainer } from "react-toastify";

import { useWallet } from "@/components/contexts/wallet/WalletContext";
import { title } from "@/components/primitives";
import TokenMinter from "@/components/pages/mint/TokenMinter";
import DisconnectButton from "@/components/pages/DisconnectButton";

import "react-toastify/dist/ReactToastify.css";

export default function Mint() {
  const router = useRouter();
  const [{ address }] = useWallet();

  let isPushed = false;

  useEffect(() => {
    if (!address && !isPushed) {
      router.push("/");
      isPushed = true;
    }
  }, [address]);
  if (!address) return <></>;

  return (
    <>
      {/* Title */}
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          {"CS'25 NFT"}&nbsp;
          <span className={title({ color: "violet" })}>Minter</span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-4 mt-4">
        <TokenMinter />
        <Link href="/">&laquo; Go Back</Link>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
      <DisconnectButton />
    </>
  );
}
