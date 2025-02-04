const Footer = {
    render() {
        return `
            <footer class="main-footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>NetFit Platform</h3>
                        <p>Connect. Earn. Achieve.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#" onclick="loadPage('home')">Home</a></li>
                            <li><a href="#" onclick="loadPage('profile')">Profile</a></li>
                            <li><a href="#" onclick="loadPage('discover')">Discover</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Community</h4>
                        <div class="social-links">
                            <a href="#">Discord</a>
                            <a href="#">Twitter</a>
                            <a href="#">Telegram</a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    © 2025 NetFit Platform. All Rights Reserved.
                </div>
            </footer>
        `;
    }
};

// Automatically render footer when page loads
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = Footer.render();
    document.body.appendChild(footerContainer.firstChild);
});
