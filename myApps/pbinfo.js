let clickCount = 0;
let colorTimeout;

document.getElementById('pbinfo').addEventListener('click', function() {
    clickCount++;

    if (clickCount   === 20) {
        alert("Pbinfo has fallen");
        let colorDiv = document.getElementById('colorpbinfo');
        let currentColor = colorDiv.style.backgroundColor;

        switch (currentColor) {
            case 'red':
                colorDiv.style.backgroundColor = 'yellow';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'green';
                }, 3000);
                break;
            case 'yellow':
                colorDiv.style.backgroundColor = 'green';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'red';
                }, 3000);
                break;
            default:
                colorDiv.style.backgroundColor = 'red';
                colorTimeout = setTimeout(function() {
                    colorDiv.style.backgroundColor = 'yellow';
                }, 3000);
        }
    } else if (clickCount > 10) {
        clearTimeout(colorTimeout); 
        clickCount = 0;
    }
}); 
