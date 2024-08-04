document.addEventListener("DOMContentLoaded", () => {
    function animateProgressBar(barId, percentId, targetWidth, duration) {
        const bar = document.getElementById(barId);
        const percentage = document.getElementById(percentId);
        const startTime = performance.now();
        
        function updateProgress(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentWidth = progress * targetWidth;

            bar.innerHTML = `<div class="progress-fill" style="width: ${currentWidth}%"></div>`;

            if (progress < 1) {
                requestAnimationFrame(updateProgress);
            }
        }

        requestAnimationFrame(updateProgress);
    }
    animateProgressBar('bar1', 'percent1', 75, 2000);
    animateProgressBar('bar2', 'percent2', 10, 2000);
    animateProgressBar('bar3', 'percent3', 83, 2000);

    const progressContainer = document.querySelector('.progress-container');
    const container = document.querySelector('.container');
    const bgimg = document.querySelector('#bg-img');
    const desimg = document.querySelector('#description-img');
    const drink1=document.querySelector('#drink1');
    const drink2=document.querySelector('#drink2');
    const da=document.querySelector('.down-animation');
    const title1=document.querySelector('#main-title1');
    const socails=document.querySelector('.social-links');
    setTimeout(() => {
        progressContainer.style.opacity = 1;
        progressContainer.style.transform = 'translateY(0)';
        container.style.opacity = .2;
        container.style.transform = 'translateY(0)';
        bgimg.style.transform = 'translateY(0)';
        bgimg.style.opacity = 1;
        desimg.style.transform = 'translateY(0)';
        desimg.style.opacity = 1;
        drink1.style.transform = 'translateY(0)';
        drink1.style.opacity = 1;
        drink2.style.transform = 'translateY(0)';
        drink2.style.opacity = 1;
        da.style.transform = 'translateY(0)';
        da.style.opacity = 1;
        title1.style.transform = 'translateY(0)';
        title1.style.opacity = 1;
        socails.style.transform = 'translateY(0)';
        socails.style.opacity = 1;
    },100);
});
