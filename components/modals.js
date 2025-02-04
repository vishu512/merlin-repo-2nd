const Modals = {
    showWalletConnectModal() {
        const modalHTML = `
            <div class="modal wallet-connect-modal">
                <div class="modal-content">
                    <h2>Connect Your Wallet</h2>
                    <div class="wallet-options">
                        <button onclick="walletManager.connectMetaMask()">MetaMask</button>
                        <button onclick="walletManager.connectWalletConnect()">WalletConnect</button>
                        <button onclick="walletManager.connectCoinbase()">Coinbase Wallet</button>
                    </div>
                    <button class="close-modal" onclick="Modals.closeModal()">Close</button>
                </div>
            </div>
        `;

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer.firstChild);
    },

    showReferralModal() {
        const referralCode = netfitInteractions.generateReferralCode();
        const modalHTML = `
            <div class="modal referral-modal">
                <div class="modal-content">
                    <h2>Refer a Friend</h2>
                    <p>Your Unique Referral Code:</p>
                    <input type="text" value="${referralCode}" readonly>
                    <button onclick="Modals.copyReferralCode('${referralCode}')">Copy Code</button>
                    <button class="close-modal" onclick="Modals.closeModal()">Close</button>
                </div>
            </div>
        `;

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer.firstChild);
    },

    closeModal() {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.remove();
        }
    },

    copyReferralCode(code) {
        navigator.clipboard.writeText(code).then(() => {
            alert('Referral Code Copied!');
        });
    }
};
