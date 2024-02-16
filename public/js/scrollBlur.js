
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');

// custoom cursor
document.addEventListener('mousemove', (e) => {
    const el = document.createElement('div');
    el.setAttribute('cx', e.clientX);
    el.setAttribute('cy', e.clientY);
});
