class WalletManager {
    constructor() {
        this.web3 = null;
        this.account = null;
        this.networkId = null;
        this.balance = 0;
    }

    async connectMetaMask() {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });

                // Get network ID
                this.networkId = await window.ethereum.request({ 
                    method: 'net_version' 
                });

                this.account = accounts[0];
                this.web3 = new Web3(window.ethereum);

                // Fetch balance
                this.balance = await this.getBalance();

                // Enhanced UI Update
                this.updateWalletUI();

                // Trigger wallet connection event
                this.triggerWalletConnectEvent();

                return this.account;
            } catch (error) {
                console.error("Wallet Connection Error", error);
                Modals.showErrorModal("Wallet Connection Failed");
   
