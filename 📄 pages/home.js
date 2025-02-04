const HomePage = {
    render() {
        return `
            <div class="home-page">
                <h1>Welcome to NetFit Platform</h1>
                <div class="dashboard">
                    <button id="wallet-connect-btn" onclick="walletManager.connectMetaMask()">
                        Connect Wallet
                    </button>
                    <div class="streak-section">
                        <h2>Your Streak: <span id="streak-count">0</span></h2>
                        <button onclick="netfitInteractions.checkIn()">Daily Check-In</button>
                    </div>
                </div>
            </div>
        `;
    }
};
