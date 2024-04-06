let clickCount = 0;
let colorTimeout;

document.getElementById('snapchat').addEventListener('click', function() {
    clickCount++;

    if (clickCount % 10 === 0) {
        let colorDiv = document.getElementById('colorsnapchat');
        let currentColor = colorDiv.style.backgroundColor;

        switch (currentColor) {
            case 'red':
                colorDiv.style.backgroundColor = 'yellow';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'green';
                }, 30000);
                break;
            case 'yellow':
                colorDiv.style.backgroundColor = 'green';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'red';
                }, 30000);
                break;
            default:
                colorDiv.style.backgroundColor = 'red';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'yellow';
                }, 30000);
        }
    } else if (clickCount > 10) {
        clearTimeout(colorTimeout); 
    }
}); 