//Before and After slider
document.querySelectorAll('.image-slider').forEach(slider => {
    const before = slider.querySelector('.before');
    const handle = slider.querySelector('.slider-handle');

    let isDragging = false;

    const updateSlider = (clientX) => {
        const rect = slider.getBoundingClientRect();
        let x = clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const percent = (x / rect.width) * 100;
        before.style.width = percent + '%';
        handle.style.left = percent + '%';
    };

    const startDrag = (e) => {
        isDragging = true;
        handle.classList.add('dragging');
        // For mouse events, e.clientX, for touch, e.touches[0].clientX
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        updateSlider(clientX);
        e.preventDefault(); // prevent text selection and scrolling
    };

    const drag = (e) => {
        if (!isDragging) return;
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        updateSlider(clientX);
        e.preventDefault();
    };

    const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        handle.classList.remove('dragging');
        e.preventDefault();
    };

    // Start dragging on handle or anywhere in slider container
    handle.addEventListener('mousedown', startDrag);
    slider.addEventListener('mousedown', startDrag);
    handle.addEventListener('touchstart', startDrag);
    slider.addEventListener('touchstart', startDrag);

    // Listen for move on document (to follow cursor outside slider)
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });

    // Listen for mouseup/touchend anywhere to stop dragging
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
});

