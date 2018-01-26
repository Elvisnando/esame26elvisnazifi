
const fetch = require('node-fetch')

function check(url, invocationParameters,  expectedResultData, expectedResultStatus) {

    url = url +"?"+"lato1="+invocationParameters.lato1+"&lato2="+invocationParameters.lato2+"="+expectedResultData;

    const checkResult = { // this is the object you need to set and return
        urlChecked: url,
        resultData: null,
        resultStatus: null,
        statusTestPassed: null,
        resultDataAsExpected: null
    }

    
return fetch(url)
  .then(response => {
    checkResult.resultStatus =  response.status;
    
    response.json().then(json => {
        checkResult.resultData = json;
       console.log( compareResults(expectedResultData, checkResult.resultData));
      
    });
  })
  .catch(error => {
    console.log(error);
  });







}


// funzione che confronta due oggetti semplici e verifica se actual contiene tutti gli attributi di expected, e se per
// questi ha gli stessi valori
function compareResults(expected, actual) {
    if (!expected) return true //always ok if there are no expectations
    if (!actual) return false
    for (let e of Object.keys(expected)) {
        if (actual[e]===undefined || expected[e]!=actual[e]  ) return false
    }
    return true
}

module.exports = check