const DiscoverPage = {
    projects: [
        {
            name: "Fitness Quest",
            description: "Blockchain-powered fitness challenges",
            xpReward: 50,
            neftReward: 25
        },
        {
            name: "Web3 Workout",
            description: "Earn while you exercise",
            xpReward: 75,
            neftReward: 40
        },
        {
            name: "Crypto Cardio",
            description: "NFT-based fitness tracking",
            xpReward: 100,
            neftReward: 60
        }
    ],

    render() {
        const projectsHTML = this.projects.map(project => `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-rewards">
                    <span>XP: ${project.xpReward}</span>
                    <span>Neft: ${project.neftReward}</span>
                    <button onclick="DiscoverPage.joinProject('${project.name}')">
                        Join Project
                    </button>
                </div>
            </div>
        `).join('');

        return `
            <div class="discover-page">
                <h1>Discover Projects</h1>
                <div class="projects-container">
                    ${projectsHTML}
                </div>
            </div>
        `;
    },

    joinProject(projectName) {
        const project = this.projects.find(p => p.name === projectName);
        if (project) {
            // Simulate project joining
            alert(`Joined ${projectName}! 
                Earned ${project.xpReward} XP 
                Earned ${project.neftReward} Neft Coins`);
            
            // Update user stats
            netfitInteractions.xp += project.xpReward;
            netfitInteractions.neftCoins += project.neftReward;
        }
    }
};
