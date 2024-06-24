document.addEventListener('mousemove', function(e) {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
});
