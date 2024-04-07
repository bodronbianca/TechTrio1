let clickCount = 0;
let colorTimeout;
const transitionTime = 3000; 

document.getElementById('snapchat').addEventListener('click', function() {
    clickCount++;

    if (clickCount  === 20) {
        alert("Snapchat has fallen");
        const colorDiv = document.getElementById('colorsnapchat');
        const currentColor = colorDiv.style.backgroundColor;

        switch (currentColor) {
            case 'red':
                colorDiv.style.backgroundColor = 'yellow';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'green';
                }, transitionTime);
                break;
            case 'yellow':
                colorDiv.style.backgroundColor = 'green';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'red';
                }, transitionTime);
                break;
            default:
                colorDiv.style.backgroundColor = 'red';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'yellow';
                }, transitionTime);
        }
    } else if (clickCount > 10) {
        clearTimeout(colorTimeout); 
        clickCount = 0;
    }
});