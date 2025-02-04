const Modals = {
    showAchievementModal(achievement) {
        const modalHTML = `
            <div class="achievement-modal">
                <div class="modal-content">
                    <h2>${achievement.title}</h2>
                    <p>${achievement.description}</p>
                    <div class="achievement-rewards">
                        <span>🏆 XP Bonus Earned</span>
                        <span>🔥 Neft Coins Bonus</span>
                    </div>
                    <button onclick="Modals.closeModal()">Close</button>
                </div>
            </div>
        `;
        
        this.showModal(modalHTML);
    },

    showErrorModal(message) {
        const modalHTML = `
            <div class="error-modal">
                <div class="modal-content">
                    <h2>⚠️ Error</h2>
                    <p>${message}</p>
                    <button onclick="Modals.closeModal()">Okay</button>
                </div>
            </div>
        `;
        
        this.showModal(modalHTML);
    },

    showWalletInstallModal() {
        const modalHTML = `
            <div class="wallet-install-modal">
                <div class="modal-content">
                    <h2>Wallet Not Found</h2>
                    <p>Please install MetaMask to continue</p>
                    <a href="https://metamask.io/download.html" target="_blank">
                        Install MetaMask
                    </a>
                    <button onclick="Modals.closeModal()">Close</button>
                </div>
            </div>
        `;
        
        this.showModal(modalHTML);
    }
};
