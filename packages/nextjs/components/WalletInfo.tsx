import TokenInfo from "./TokenInfo";
import WalletAction from "./WalletAction";
import WalletBalance from "./WalletBalance";
import { useAccount, useNetwork } from "wagmi";

function WalletInfo() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <div>
      {address ? (
        <>
          <p>Your account address is {address}</p>
          <p>Connected to the network {chain?.name}</p>
          <WalletAction></WalletAction>
          <WalletBalance address={address as `0x${string}`}></WalletBalance>
          <TokenInfo address={address as `0x${string}`} />
        </>
      ) : isConnecting ? (
        <p>Loading...</p>
      ) : isDisconnected ? (
        <p>Wallet disconnected. Connect wallet to continue</p>
      ) : (
        <p>Connect wallet to continue</p>
      )}
    </div>
  );
}

export default WalletInfo;
