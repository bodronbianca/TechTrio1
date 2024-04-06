let clickCountInstagram = 0;
let colorTimeoutInstagram;
let transitionTimeInstagram = 3000; 

document.getElementById('instagram').addEventListener('click', function() {
    clickCountInstagram++;

    if (clickCountInstagram  === 0) {
        let colorDiv = document.getElementById('colorinstagram');
        let currentColor = colorDiv.style.backgroundColor;

        switch (currentColor) {
            case 'red':
                colorDiv.style.backgroundColor = 'yellow';
                colorTimeoutInstagram = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'green';
                }, transitionTimeInstagram);
                break;
            case 'yellow':
                colorDiv.style.backgroundColor = 'green';
                colorTimeoutInstagram = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'red';
                }, transitionTimeInstagram);
                break;
            default:
                colorDiv.style.backgroundColor = 'red';
                colorTimeoutInstagram = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'yellow';
                }, transitionTimeInstagram);
        }
    } else if (clickCountInstagram > 10) {
        clearTimeout(colorTimeoutInstagram);
        clickCountInstagram = 0;
    }
});