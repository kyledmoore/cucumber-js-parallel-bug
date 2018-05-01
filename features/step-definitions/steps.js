const {Given, When, Then} = require('cucumber');

Given('something', function(cb){
    setTimeout(cb, 1000);
});
When('someone gives me a parallel CL argument', function(){});
Then('I run in parallel', function(){});
