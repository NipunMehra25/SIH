          setInterval(() => {
            const viewer = document.querySelector('spline-viewer');
            if (viewer && viewer.shadowRoot) {
                const logo = viewer.shadowRoot.querySelector('#logo');
                if (logo) logo.remove();
            }
            }, 50); // every 50ms is enough
        // Professional application initialization
        class NeerVerseApp {
            constructor() {
                this.isLoaded = false;
                this.init();
            }

            init() {
                this.bindEvents();
                this.handleLoading();
                this.setupAccessibility();
            }

            bindEvents() {
                // Navigation
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', this.handleNavigation.bind(this));
                });

                // CTA buttons
                document.getElementById('getStartedBtn')?.addEventListener('click', this.handleGetStarted.bind(this));
                document.getElementById('watchDemoBtn')?.addEventListener('click', this.handleWatchDemo.bind(this));

                // Tool buttons
                document.querySelectorAll('.tool-button').forEach(button => {
                    button.addEventListener('click', this.handleToolClick.bind(this));
                });

                // Social buttons
                document.querySelectorAll('.social-button').forEach(button => {
                    button.addEventListener('click', this.handleSocialClick.bind(this));
                });
            }

            handleLoading() {
                // Simulate loading time and hide overlay
                setTimeout(() => {
                    const overlay = document.getElementById('loadingOverlay');
                    if (overlay) {
                        overlay.classList.add('hidden');
                        setTimeout(() => {
                            overlay.remove();
                        }, 500);
                    }
                    this.isLoaded = true;
                }, 2000);
            }

            handleNavigation(event) {
                event.preventDefault();
                const target = event.target.getAttribute('href');
                console.log(`Navigating to: ${target}`);
                
                // Add active state animation
                event.target.style.color = '#4285f4';
                setTimeout(() => {
                    event.target.style.color = '';
                }, 200);
            }

            handleGetStarted(event) {
                const button = event.target;
                const originalText = button.textContent;
                
                button.style.opacity = '0.8';
                button.textContent = 'Loading...';
                
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.textContent = originalText;
                    console.log('Redirecting to onboarding...');
                }, 1500);
            }

            handleWatchDemo(event) {
                const button = event.target;
                button.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                    console.log('Opening demo modal...');
                }, 150);
            }

            handleToolClick(event) {
                // Remove active state from all tools
                document.querySelectorAll('.tool-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active state to clicked tool
                event.currentTarget.classList.add('active');
                
                // Animation feedback
                event.currentTarget.style.transform = 'translateY(-2px) scale(0.95)';
                setTimeout(() => {
                    event.currentTarget.style.transform = 'translateY(-2px) scale(1)';
                }, 150);
            }

            handleSocialClick(event) {
                const button = event.currentTarget;
                const platform = button.getAttribute('aria-label');
                
                button.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                    console.log(`Opening ${platform}...`);
                }, 150);
            }

            setupAccessibility() {
                // Add keyboard navigation support
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        document.activeElement?.blur();
                    }
                });
            }
        }

        // Initialize application when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            new NeerVerseApp();
        });

        // Handle Spline viewer events
        document.addEventListener('spline-viewer-load', () => {
            console.log('Spline viewer loaded successfully');
        });