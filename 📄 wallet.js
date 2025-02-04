class WalletManager {
    constructor() {
        this.web3 = null;
        this.account = null;
    }

    async connectMetaMask() {
        if (window.ethereum) {
            this.web3 = new Web3(window.ethereum);
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                this.account = accounts[0];
                this.updateUI();
                return this.account;
            } catch (error) {
                console.error("Wallet Connection Error", error);
            }
        } else {
            alert('MetaMask not detected!');
        }
    }

    async getBalance() {
        if (this.web3 && this.account) {
            const balance = await this.web3.eth.getBalance(this.account);
            return this.web3.utils.fromWei(balance, 'ether');
        }
        return '0';
    }

    updateUI() {
        const walletBtn = document.getElementById('wallet-connect-btn');
        if (walletBtn) {
            walletBtn.textContent = this.account 
                ? `Connected: ${this.account.substring(0,6)}...` 
                : 'Connect Wallet';
        }
    }
}

const walletManager = new WalletManager();
