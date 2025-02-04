import { ConnectWallet } from "@thirdweb-dev/react";
import { FaSearch } from "react-icons/fa";

export const Header = ({ isLoggedIn }) => {
  return (
    <header className="bg-gradient-dark p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-accent text-2xl font-bold">NEFTIT</h1>
        
        <nav className="flex gap-6 text-primary">
          <button>Discover</button>
          <button><FaSearch /></button>
          {!isLoggedIn && <ConnectWallet />}
        </nav>
      </div>
    </header>
  );
};
