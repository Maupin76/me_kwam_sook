document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('content');
    if (content.style.maxHeight === '410px' || content.style.maxHeight === '') {
        content.style.maxHeight = '100%'; // Show all content
        this.textContent = 'Show Less -';
    } else {
        content.style.maxHeight = '410px'; // Collapse to original height
        this.textContent = 'Show More +';
    }
});
