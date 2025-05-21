window.addEventListener('load', function() {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }, 100);
    }
});