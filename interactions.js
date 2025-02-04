class NetfitInteractions {
    constructor() {
        // Add more sophisticated tracking
        this.dailyActivities = [];
        this.challengeProgress = {
            weekly: { completed: 0, target: 5 },
            monthly: { completed: 0, target: 20 }
        };
    }

    trackActivity(activityType) {
        const today = new Date().toISOString().split('T')[0];
        
        // Prevent duplicate activities
        const existingActivity = this.dailyActivities.find(
            activity => activity.date === today && 
            activity.type === activityType
        );

        if (!existingActivity) {
            const activityRewards = {
                'workout': { xp: 25, coins: 10 },
                'nutrition_log': { xp: 15, coins: 5 },
                'meditation': { xp: 10, coins: 3 }
            };

            const reward = activityRewards[activityType] || { xp: 5, coins: 2 };

            this.dailyActivities.push({
                date: today,
                type: activityType,
                xp: reward.xp,
                coins: reward.coins
            });

            // Update challenge progress
            this.updateChallengeProgress(activityType);

            // Trigger achievements
            this.checkAchievements();

            return reward;
        }

        return null;
    }

    updateChallengeProgress(activityType) {
        // Update weekly and monthly challenges
        if (activityType === 'workout') {
            this.challengeProgress.weekly.completed++;
            this.challengeProgress.monthly.completed++;
        }

        // Check if challenges are complete
        if (this.challengeProgress.weekly.completed >= this.challengeProgress.weekly.target) {
            this.completeWeeklyChallenge();
        }

        if (this.challengeProgress.monthly.completed >= this.challengeProgress.monthly.target) {
            this.completeMonthlyChallenge();
        }
    }

    completeWeeklyChallenge() {
        // Bonus rewards for completing weekly challenge
        this.xp += 100;
        this.neftCoins += 50;
        
        Modals.showAchievementModal({
            title: 'Weekly Challenge Complete!',
            description: 'You crushed your weekly fitness goals!'
        });
    }

    completeMonthlyChallenge() {
        // Major rewards for monthly challenge
        this.xp += 500;
        this.neftCoins += 250;
        
        Modals.showAchievementModal({
            title: 'Monthly Master!',
            description: 'Congratulations on completing the monthly fitness challenge!'
        });
    }
}

const netfitInteractions = new NetfitInteractions();
