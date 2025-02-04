// Wallet Connection Utility
const walletManager = {
    connectWallet: async function() {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                
                console.log("Connected Account:", accounts[0]);
                return accounts[0];
            } catch (error) {
                console.error("Wallet Connection Error:", error);
                return null;
            }
        } else {
            console.warn("MetaMask not detected");
            return null;
        }
    }
};
