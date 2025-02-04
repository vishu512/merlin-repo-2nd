const ProfilePage = {
    render() {
        return `
            <div class="profile-page">
                <h1>User Profile</h1>
                <div class="profile-stats">
                    <div class="stat-box">
                        <h3>XP: <span id="xp-count">0</span></h3>
                        <h3>Neft Coins: <span id="neft-count">0</span></h3>
                    </div>
                    <div class="referral-section">
                        <h2>Referral Code</h2>
                        <p id="referral-code">
                            ${netfitInteractions.generateReferralCode()}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
