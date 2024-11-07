
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 100, // Number of particles
                    density: {
                        enable: true,
                        value_area: 800 // Area where particles can spawn
                    }
                },
                color: {
                    value: "#ffffff" // Particle color
                },
                shape: {
                    type: "circle", // Shape of particles
                    stroke: {
                        width: 0, // Particle border width
                        color: "#000000" // Border color
                    }
                },
                opacity: {
                    value: 0.5, // Particle opacity
                    random: true, // Random opacity for particles
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1
                    }
                },
                size: {
                    value: 3, // Size of particles
                    random: true, // Random size for particles
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.1
                    }
                },
                line_linked: {
                    enable: true, // Enable lines between particles
                    distance: 150, // Maximum distance between particles
                    color: "#ffffff", // Line color
                    opacity: 0.4, // Line opacity
                    width: 1 // Line width
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out" // How particles behave at the boundary
                }
            },
            interactivity: {
                detect_on: "canvas", // Trigger interactivity on canvas
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse" // Repulse effect on hover
                    },
                    onclick: {
                        enable: true,
                        mode: "push" // Add more particles on click
                    }
                }
            },
            retina_detect: true // Ensure particles scale on different screen resolutions
        });
