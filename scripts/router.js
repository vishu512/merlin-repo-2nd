const Router = {
    routes: {
        '/': HomePage,
        '/profile': ProfilePage,
        '/discover': DiscoverPage,
        '/challenges': ChallengesPage
    },

    init() {
        // Initial route handling
        this.navigate(window.location.pathname);

        // Handle browser navigation
        window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname);
        });
    },

    navigate(path) {
        // Default to home if path not found
        const route = this.routes[path] || this.routes['/'];

        // Render page content
        const appContainer = document.getElementById('app-container');
        appContainer.innerHTML = route.render();

        // Update browser history
        window.history.pushState({}, '', path);
    }
};
