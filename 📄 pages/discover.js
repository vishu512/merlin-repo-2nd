const DiscoverPage = {
    projects: [
        // Previous projects...
        {
            name: "Blockchain Fitness",
            description: "Revolutionary fitness tracking on blockchain",
            xpReward: 100,
            neftReward: 50,
            difficulty: 'advanced',
            requirements: ['Web3 Wallet', 'Fitness Tracker']
        }
    ],
    
    render() {
        const projectsHTML = this.projects.map(project => `
            <div class="project-card advanced-project">
                <div class="project-header">
                    <h3>${project.name}</h3>
                    <span class="project-difficulty">${project.difficulty}</span>
                </div>
                <p>${project.description}</p>
                <div class="project-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                        ${project.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-rewards">
                    <div class="reward-item">
                        <span>XP: ${project.xpReward}</span>
                        <span>Neft: ${project.neftReward}</span>
                    </div>
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
                <div class="project-stats">
                    <h2>Available Projects: ${this.projects.length}</h2>
                    <div id="project-leaderboard">
                        ${this.renderLeaderboard()}
                    </div>
                </div>
            </div>
        `;
    },

    renderLeaderboard() {
        const leaderboard = netfitInteractions.getLeaderboard();
        return `
            <h3>Project Leaderboard</h3>
            <table class="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>XP</th>
                        <th>Streak</th>
                    </tr>
                </thead>
                <tbody>
                    ${leaderboard.map((user, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${user.username}</td>
                            <td>${user.xp}</td>
                            <td>${user.streak}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    },

    joinProject(projectName) {
        const project = this.projects.find(p => p.name === projectName);
        if (project) {
            netfitInteractions.xp += project.xpReward;
            netfitInteractions.neftCoins += project.neftReward;
            
            // Show modal with project joining details
            Modals.showProjectJoinModal(project);
        }
    }
};
