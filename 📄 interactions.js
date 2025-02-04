class NetfitInteractions {
    constructor() {
        this.streak = 0;
        this.xp = 0;
        this.neftCoins = 0;
        this.quests = [];
    }

    checkIn() {
        const today = new Date().toDateString();
        const lastCheckIn = localStorage.getItem('lastCheckIn');

        if (lastCheckIn !== today) {
            this.streak++;
            this.xp += 20;
            this.neftCoins += 10;
            
            localStorage.setItem('lastCheckIn', today);
            this.updateStreakUI();
            return true;
        }
        return false;
    }

    completeQuest(questId) {
        const quest = this.quests.find(q => q.id === questId);
        if (quest && !quest.completed) {
            this.xp += quest.xpReward;
            this.neftCoins += quest.coinReward;
            quest.completed = true;
            this.updateQuestUI();
            return true;
        }
        return false;
    }

    generateReferralCode() {
        return `NETFIT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    }

    updateStreakUI() {
        const streakElement = document.getElementById('streak-count');
        if (streakElement) {
            streakElement.textContent = this.streak;
        }
    }

    updateQuestUI() {
        // Implement quest tracking UI update
    }
}

const netfitInteractions = new NetfitInteractions();
