gapi.load('client', initClient);

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBFhL82ecXdMFfPQnf1sOlxkvkZpgjJICQ',
        clientId: '670554946368-1earlne2fo2833p4fkpsk5uvg26hcics.apps.googleusercontent.com',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: 'https://www.googleapis.com/auth/spreadsheets'
    }).then(function () {
        readDataFromSheet();
    }, function(error) {
        console.error('Error loading the Google Sheets API client', error);
    });
}

function readDataFromSheet() {
    var spreadsheetId = '16Vv2ecLhUJ8LPIYaDxRw2wKuAwKosf4Jt1H4L2LYCmg';


    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    }).then(function(response) {
        var rangeValues = response.result.values;
        if (rangeValues.length > 0) {
            console.log('Data retrieved from Google Sheets:');
            rangeValues.forEach(function(row) {
                console.log(row);
            });
        } else {
            console.log('No data found.');
        }
    }, function(error) {
        console.error('Error reading data from Google Sheets:', error);
    });
}
