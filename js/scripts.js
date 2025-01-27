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

        <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6797a20c825083258e0ba4e1/1iik521kf';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
