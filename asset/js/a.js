// Regular JavaScript test
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');
    
    // Create elements to test CSS
    const sassDiv = document.createElement('div');
    sassDiv.className = 'sass-test';
    sassDiv.textContent = 'This is styled with Sass';
    
    const lessDiv = document.createElement('div');
    lessDiv.className = 'less-test';
    lessDiv.textContent = 'This is styled with Less';
    
    document.body.prepend(lessDiv);
    document.body.prepend(sassDiv);
});