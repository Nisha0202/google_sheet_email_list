//google create app script 

// var sheetName = 'Sheet1'  //name on the down-left of the google sheet page
// var scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   var lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     var sheet = doc.getSheetByName(sheetName)

//     var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     var nextRow = sheet.getLastRow() + 1

//     var newRow = headers.map(function(header) {
//       return header === 'timestamp' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }




//code
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRdPGVb6VrUY9r_pRw14YxP_Y-ghOs6fdm_X2OV9EgUZXmh9s427lKztpQ4SQG6XY/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
 e.preventDefault();

 Swal.fire({
    title: 'Submitting...',
    text: 'Your email is being submitted.',
    showConfirmButton: false
 });


 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => {
    Swal.fire({
        title: 'Thank you!',
        text: 'Your email has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

   
 } )

 .then(() => { 
    setTimeout(() => {
        window.location.reload();
    }, 3000); // Delay of 4 seconds
})

.catch(error => {
    console.error('Error!', error.message);
    Swal.fire({
        title: 'Submission Failed!',
        text: 'There was an error submitting your email. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
})


})


// form.addEventListener('submit', e => {
//     e.preventDefault();
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         let timerInterval;
//         Swal.fire({
//             title: 'Thank you!',
//             text: 'Your Email has been submitted successfully.',
//             icon: 'success',
//             timer: 2000, // Close the alert after 5000 ms
//             timerProgressBar: true,
//             willOpen: () => {
//                 Swal.showLoading();
//                 timerInterval = setInterval(() => {
//                     const content = Swal.getContent();
//                     if (content) {
//                         const b = content.querySelector('b');
//                         if (b) {
//                             b.textContent = Swal.getTimerLeft();
//                         }
//                     }
//                 }, 100);
//             },
//             willClose: () => {
//                 clearInterval(timerInterval);
//             }
//         });
//     });
// });
