//Use RegEx to validate form
document.getElementById("submit").addEventListener("click", function(){
    var inputFields = document.getElementsByTagName ("input");
    
    for(var i=0; i< inputFields.length; i++){
        var userInput = inputFields [i]. value;
        
// create a pattern to test an email address
        var myPattern = new RegExp (inputFields[i].pattern);
        var formTest = myPattern.test(userInput);
        
// return a boolean result
        if (formTest === false){
            console.log("The " + inputFields[i].name + " input is not valid");
        }
    }
})
