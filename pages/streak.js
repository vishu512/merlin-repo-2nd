const StreakPage = {
    streakData: [],

    initializeStreak() {
        const today = new Date();
        this.streakData = [];

        // Generate last 7 days streak data
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            
            this.streakData.push({
                date: date.toDateString(),
                completed: Math.random() > 0.5 // Random completion for demo
            });
        }
    },

    render() {
        this.initializeStreak();

        const streakHTML = this.streakData.map(day => `
            <div class="streak-day ${day.completed ? 'completed' : 'missed'}">
                <span>${day.date}</span>
                <span>${day.completed ? '✓' : '✗'}</span>
            </div>
        `).join('');

        return `
            <div class="streak-page">
                <h1>Your Fitness Streak</h1>
                <div class="current-streak">
                    Current Streak: 
                    <span id="streak-count">
                        ${netfitInteractions.streak} Days
                    </span>
                </div>
                <div class="streak-calendar">
                    ${streakHTML}
                </div>
                <button onclick="netfitInteractions.checkIn()">
                    Check In Today
                </button>
            </div>
        `;
    }
};
