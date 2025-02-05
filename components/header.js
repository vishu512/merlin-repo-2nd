const Header = {
    render() {
        return `
            <header>
                <nav>
                    <div class="logo">Merlin Platform</div>
                    <ul>
                        <li><a href="#" id="homeLink">Home</a></li>
                        <li><a href="#" id="walletLink">Wallet</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
};

// Render Header on Load
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = Header.render();
    document.body.insertBefore(headerContainer.firstChild, document.body.firstChild);
});
