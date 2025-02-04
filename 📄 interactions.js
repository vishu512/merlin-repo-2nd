class NetfitInteractions {
    constructor() {
        this.streak = 0;
        this.xp = 0;
        this.neftCoins = 0;
        this.quests = this.generateQuests();
        this.achievements = [];
        this.referralCount = 0;
    }

    // Enhanced Quest Generation
    generateQuests() {
        return [
            {
                id: 'daily_workout',
                name: 'Complete Daily Workout',
                description: 'Finish a 30-minute workout',
                xpReward: 50,
                coinReward: 25,
                completed: false,
                difficulty: 'easy'
            },
            {
                id: 'nutrition_log',
                name: 'Log Nutrition',
                description: 'Track your meals for the day',
                xpReward: 75,
                coinReward: 40,
                completed: false,
                difficulty: 'medium'
            },
            {
                id: 'challenge_complete',
                name: 'Weekly Challenge',
                description: 'Complete 5 workouts this week',
                xpReward: 150,
                coinReward: 100,
                completed: false,
                difficulty: 'hard'
            }
        ];
    }

    // Advanced Check-in Method
    checkIn() {
        const today = new Date().toDateString();
        const lastCheckIn = localStorage.getItem('lastCheckIn');

        if (lastCheckIn !== today) {
            this.streak++;
            this.xp += 20;
            this.neftCoins += 10;

            // Bonus for consecutive streaks
            if (this.streak > 7) {
                this.xp += 50;
                this.neftCoins += 25;
                this.unlockAchievement('week_streak');
            }

            localStorage.setItem('lastCheckIn', today);
            this.updateStreakUI();
            return true;
        }
        return false;
    }

    // Advanced Quest Completion
    completeQuest(questId) {
        const quest = this.quests.find(q => q.id === questId);
        if (quest && !quest.completed) {
            this.xp += quest.xpReward;
            this.neftCoins += quest.coinReward;
            quest.completed = true;

            // Unlock special achievement for hard quests
            if (quest.difficulty === 'hard') {
                this.unlockAchievement('hard_quest_master');
            }

            this.updateQuestUI();
            return true;
        }
        return false;
    }

    // Referral System Enhancement
    generateReferralCode() {
        const code = `NETFIT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        return {
            code: code,
            rewards: {
                xp: 100,
                coins: 50
            }
        };
    }

    // Achievement System
    unlockAchievement(achievementId) {
        const achievements = {
            'week_streak': {
                name: '7-Day Warrior',
                description: 'Maintain a 7-day workout streak',
                icon: '🔥'
            },
            'hard_quest_master': {
                name: 'Challenge Champion',
                description: 'Complete a hard difficulty quest',
                icon: '🏆'
            }
        };

        if (achievements[achievementId] && 
            !this.achievements.some(a => a.id === achievementId)) {
            this.achievements.push({
                id: achievementId,
                ...achievements[achievementId]
            });
        }
    }

    // Leaderboard Simulation
    getLeaderboard() {
        // Simulated leaderboard data
        return [
            { username: 'FitNinja', xp: 5000, streak: 45 },
            { username: 'WorkoutWizard', xp: 4500, streak: 40 },
            { username: 'HealthHero', xp: 4000, streak: 35 }
        ];
    }

    // UI Update Methods
    updateStreakUI() {
        const elements = {
            streak: document.getElementById('streak-count'),
            xp: document.getElementById('xp-count'),
            neftCoins: document.getElementById('neft-count')
        };

        Object.entries(elements).forEach(([key, element]) => {
            if (element) {
                element.textContent = this[key];
            }
        });
    }

    updateQuestUI() {
        const questContainer = document.getElementById('quest-container');
        if (questContainer) {
            questContainer.innerHTML = this.quests.map(quest => `
                <div class="quest-item ${quest.completed ? 'completed' : ''}">
                    <h3>${quest.name}</h3>
                    <p>${quest.description}</p>
                    <div class="quest-rewards">
                        <span>XP: ${quest.xpReward}</span>
                        <span>Coins: ${quest.coinReward}</span>
                        <button 
                            onclick="netfitInteractions.completeQuest('${quest.id}')"
                            ${quest.completed ? 'disabled' : ''}
                        >
                            ${quest.completed ? 'Completed' : 'Complete Quest'}
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Initialize the interactions
const netfitInteractions = new NetfitInteractions();

