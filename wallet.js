class WalletManager {
    constructor() {
        this.web3 = null;
        this.account = null;
        this.balance = 0;
    }

    async connectWallet() {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });

                this.account = accounts[0];
                this.web3 = new Web3(window.ethereum);

                // Get balance
                this.balance = await this.getBalance();

                // Trigger connection event
                this.notifyConnection();

                return this.account;
            } catch (error) {
                console.error("Wallet Connection Error", error);
                Modals.show({
                    type: 'error',
                    message: 'Wallet Connection Failed'
                });
                return null;
            }
        } else {
            Modals.show({
                type: 'warning',
                message: 'MetaMask not detected'
            });
            return null;
        }
    }

    async getBalance() {
        if (this.web3 && this.account) {
            const balanceWei = await this.web3.eth.getBalance(this.account);
            return this.web3.utils.fromWei(balanceWei, 'ether');
        }
        return 0;
    }

    notifyConnection() {
        // Dispatch custom event for wallet connection
        const event = new CustomEvent('wallet-connected', {
            detail: { 
                account: this.account, 
                balance: this.balance 
            }
        });
        window.dispatchEvent(event);
    }
}

const walletManager = new WalletManager();
