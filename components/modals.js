const Modals = {
    // ... previous methods ...

    showProjectJoinModal(project) {
        const modalHTML = `
            <div class="modal project-join-modal">
                <div class="modal-content">
                    <h2>Project Joined: ${project.name}</h2>
                    <div class="project-rewards">
                        <h3>Rewards Earned:</h3>
                        <p>XP: ${project.xpReward}</p>
                        <p>Neft Coins: ${project.neftReward}</p>
                    </div>
                    <div class="project-next-steps">
                        <h3>Next Steps:</h3>
                        <ul>
                            ${project.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="close-modal" onclick="Modals.closeModal()">Close</button>
                </div>
            </div>
        `;

        this.showModal(modalHTML);
    },

    showModal(html) {
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = html;
        document.body.appendChild(modalContainer.firstChild);
    }
};
