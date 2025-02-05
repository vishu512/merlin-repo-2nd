class MerlinApp {
    constructor() {
        this.initializeApplication();
    }

    async initializeApplication() {
        try {
            await this.checkEnvironment();
            this.renderInitialInterface();
            this.setupEventListeners();
        } catch (error) {
            this.handleInitializationError(error);
        }
    }

    async checkEnvironment() {
        // Check for Web3 provider
        if (typeof window.ethereum === 'undefined') {
            throw new Error('Web3 Provider Not Detected');
        }
    }

    renderInitialInterface() {
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = `
            <div class="initial-screen">
                <h1>Merlin Platform</h1>
                <button id="connectWalletBtn" class="btn">Connect Wallet</button>
            </div>
        `;
        this.hideLoadingScreen();
    }

    setupEventListeners() {
        const connectWalletBtn = document.getElementById('connectWalletBtn');
        connectWalletBtn.addEventListener('click', () => walletManager.connectWallet());
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }

    handleInitializationError(error) {
        console.error('Initialization Error:', error);
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = `
            <div class="error-screen">
                <h2>Initialization Failed</h2>
                <p>${error.message}</p>
                <button onclick="window.location.reload()" class="btn">Retry</button>
            </div>
        `;
        this.hideLoadingScreen();
    }
}

// Application Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    new MerlinApp();
});
