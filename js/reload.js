window.addEventListener('load', function() {
    if (performance.navigation.type === 1) {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }, 100);
    }
});