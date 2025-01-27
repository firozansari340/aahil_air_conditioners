        // GSAP Animations
        gsap.from(".animate-fade", { 
            opacity: 0, 
            y: -50, 
            duration: 1, 
            ease: "power2.out" 
        });

        gsap.from(".animate-slide-in", {
            opacity: 0,
            x: -100,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.3
        });

        gsap.utils.toArray(".hover\:shadow-2xl").forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { scale: 1.05, duration: 0.3 });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { scale: 1, duration: 0.3 });
            });
        });

        