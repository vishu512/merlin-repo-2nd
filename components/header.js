const Header = {
    render() {
        return `
            <header class="main-header">
                <div class="logo">NetFit</div>
                <nav class="main-nav">
                    <ul>
                        <li onclick="loadPage('home')">Home</li>
                        <li onclick="loadPage('discover')">Discover</li>
                        <li onclick="loadPage('streak')">Streak</li>
                        <li onclick="loadPage('profile')">Profile</li>
                    </ul>
                </nav>
                <div class="wallet-section">
                    <button 
                        id="wallet-connect-btn" 
                        onclick="walletManager.connectMetaMask()">
                        Connect Wallet
                    </button>
                </div>
            </header>
        `;
    }
};

// Automatically inject header when page loads
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = Header.render();
    document.body.insertBefore(headerContainer.firstChild, document.body.firstChild);
});
