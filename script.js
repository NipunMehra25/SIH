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
                this.setupScrollAnimations();
            }

            bindEvents() {
                // Navigation
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', this.handleNavigation.bind(this));
                });

                // CTA buttons
                document.getElementById('getStartedBtn')?.addEventListener('click', this.handleGetStarted.bind(this));
                document.getElementById('watchDemoBtn')?.addEventListener('click', this.handleWatchDemo.bind(this));
                document.getElementById('startReportingBtn')?.addEventListener('click', this.handleStartReporting.bind(this));

                // Tool buttons
                document.querySelectorAll('.tool-button').forEach(button => {
                    button.addEventListener('click', this.handleToolClick.bind(this));
                });

                // Social buttons
                document.querySelectorAll('.social-button').forEach(button => {
                    button.addEventListener('click', this.handleSocialClick.bind(this));
                });

                // Media buttons in report card
                document.querySelectorAll('.media-btn').forEach(button => {
                    button.addEventListener('click', this.handleMediaButton.bind(this));
                });

                // Feature cards hover animation
                document.querySelectorAll('.feature-card').forEach(card => {
                    card.addEventListener('mouseenter', this.handleFeatureHover.bind(this));
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

            handleStartReporting(event) {
                const button = event.target;
                const originalText = button.textContent;
                
                button.style.opacity = '0.8';
                button.textContent = 'Initializing...';
                
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.textContent = originalText;
                    console.log('Opening hazard reporting interface...');
                }, 1200);
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

            handleMediaButton(event) {
                const button = event.currentTarget;
                const mediaType = button.textContent.includes('Photo') ? 'Photo' : 'Video';
                
                button.style.transform = 'scale(0.95)';
                button.style.background = 'rgba(66, 133, 244, 0.1)';
                
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                    button.style.background = '';
                    console.log(`${mediaType} upload initiated...`);
                }, 200);
            }

            handleFeatureHover(event) {
                const icon = event.currentTarget.querySelector('.feature-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }, 300);
            }

            setupAccessibility() {
                // Add keyboard navigation support
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        document.activeElement?.blur();
                    }
                });
            }

            setupScrollAnimations() {
                // Intersection Observer for scroll animations
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, observerOptions);

                // Observe feature cards for staggered animation
                document.querySelectorAll('.feature-card').forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                    observer.observe(card);
                });

                // Observe report card
                const reportCard = document.querySelector('.report-card');
                if (reportCard) {
                    reportCard.style.opacity = '0';
                    reportCard.style.transform = 'translateY(30px)';
                    reportCard.style.transition = 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s';
                    observer.observe(reportCard);
                }
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