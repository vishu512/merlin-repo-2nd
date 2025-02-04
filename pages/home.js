const HomePage = {
    render() {
        return `
            <div class="home-page">
                <h1>Welcome to NetFit Platform</h1>
                <div class="dashboard">
                    <button 
                        id="wallet-connect-btn" 
                        class="btn" 
                        onclick="walletManager.connectMetaMask()">
                        Connect Wallet
                    </button>
                    
                    <div id="wallet-info" class="wallet-details"></div>

                    <div class="quick-actions">
                        <button 
                            class="btn" 
                            onclick="netfitInteractions.trackActivity('workout')">
                            Log Workout
                        </button>
                        <button 
                            class="btn" 
                            onclick="netfitInteractions.trackActivity('nutrition_log')">
                            Log Nutrition
                        </button>
                    </div>

                    <div class="user-stats">
                        <h2>Your Progress</h2>
                        <div class="stat-box">
                            <p>XP: <span id="xp-count">0</span></p>
                            <p>Neft Coins: <span id="neft-count">0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
