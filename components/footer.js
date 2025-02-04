const Footer = {
    socialLinks: [
        { name: 'Discord', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Telegram', url: '#' }
    ],

    render() {
        const linksHTML = this.socialLinks.map(link => `
            <a href="${link.url}" target="_blank">${link.name}</a>
        `).join(' | ');

        return `
            <footer class="main-footer">
                <div class="footer-content">
                    <div class="social-links">
                        ${linksHTML}
                    </div>
                    <div class="copyright">
                        © 2024 NetFi
