class UserInteractions {
    constructor() {
        this.initEventListeners();
    }

    initEventListeners() {
        document.addEventListener('wallet-connected', this.handleWalletConnection.bind(this));
    }

    handleWalletConnection(event) {
        const { account, balance } = event.detail;
        this.updateWalletUI(account, balance);
    }

    updateWalletUI(account, balance) {
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = `
            <div class="wallet-info">
                <h2>Wallet Connected</h2>
                <p>Address: ${this.formatAddress(account)}</p>
                <p>Balance: ${balance} ETH</p>
            </div>
        `;
    }

    formatAddress(address) {
        return `${address.substring(0,6)}...${address.substring(address.length-4)}`;
    }
}

const userInteractions = new UserInteractions();
