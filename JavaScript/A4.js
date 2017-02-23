main();

function main(){
    //initializes readline
    var readline = require('readline');
    var rl = readline.createInterface ({
        input:process.stdin,
        output:process.stdout,
        terminal:false
    });
    
    //sets propmt for user
    rl.setPrompt("Enter a number: ");
    
    var count = 0; //tracks number of greetings
    rl.on("line", function(line){
        var greetings = createGreetings();
        if(count < 4){ //imitates for loop, breaks after 5
            greetings[line].call();
            rl.prompt();
            count++;
        }
        else
            rl.close();
    });
    
    //closes the readline
    rl.on("close", function(){
        console.log("Bye");
    });
    
    rl.prompt();
}

//creates array of functions
function createGreetings(){
    var greetings = [
        function(){console.log("Hello!");},
        function(){console.log("Hola!")},
        function(){console.log("Guten Tag!")},
        function(){console.log("Bon Jour!")}
    ];
    
    return greetings;
}