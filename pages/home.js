const HomePage = {
    render() {
        return `
            <div class="home-page">
                <h1>Welcome to NetFit Pro</h1>
                
                <div class="wallet-section">
                    <button id="connect-wallet-btn" class="btn">
                        Connect Wallet
                    </button>
                    <div id="wallet-info"></div>
                </div>

                <div class="quick-actions grid">
                    <div class="action-card">
                        <h3>Log Workout</h3>
                        <button class="btn">Start</button>
                    </div>
                    <div class="action-card">
                        <h3>Daily Challenge</h3>
                        <button class="btn">Join</button>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        const connectBtn = document.getElementById('connect-wallet-btn');
        connectBtn.addEventListener('click', async () => {
            const account = await walletManager.connectWallet();
            if (account) {
                this.updateWalletInfo(account);
            }
        });
    },

    updateWalletInfo(account) {
        const walletInfo = document.getElementById('wallet-info');
        walletInfo.innerHTML = `
            <p>Connected: ${account.substring(0,6)}...${account.substring(account.length-4)}</p>
            <p>Balance: ${walletManager.balance} ETH</p>
        `;
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/') {
        HomePage.init();
    }
});
