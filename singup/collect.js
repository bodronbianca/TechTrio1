import {initClient} from '/Users/chesa/OneDrive/Documents/GitHub/TechTrio1/linktogoogle'


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
        name: formData.get("signUpName"),
        prenume: formData.get("lastname"),       
        email: formData.get("signupEmail"),
        username: formData.get("username"),
        birthdate: formData.get("birth"),
        age: formData.get("age"),
        password: formData.get("passw") 
    };
    appendDataToGoogleSheet(userData);
});

function appendDataToGoogleSheet(userData) {
    const params = {
       
        spreadsheetId: '16Vv2ecLhUJ8LPIYaDxRw2wKuAwKosf4Jt1H4L2LYCmg',
        range: 'Sheet1!A1', // Specify the range where you want to append data
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [[userData.username, userData.email, userData.password]]
        },
        key: 'AIzaSyBFhL82ecXdMFfPQnf1sOlxkvkZpgjJICQ'
    };

    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + params.spreadsheetId + '/values/' + params.range + ':append?key=' + params.key, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params.resource)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to append data to Google Sheet');
        }
        console.log('Data appended successfully');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
