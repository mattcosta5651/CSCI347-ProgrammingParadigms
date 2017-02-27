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
    rl.setPrompt("Enter an expression: ");
    
    //reads expression, executes command
    rl.on("line", function(line){
        //checks to exit
        if(!line.includes("exit")){
            if(checkCommand(line))
                executeCommand(line)();
            rl.prompt();
        }
        else
            rl.close();
    });
    
    //closes the readline
    rl.on("close", function(){
        console.log("Bye");
        process.exit();
    });
    
    rl.prompt();    
}

//parses command from line, executes accordingly
function executeCommand(line){
   //parses numbers
    var nums = [];
    var chars = line.split(" ");
    
    for(var i = 0; i < chars.length; i++){
        if(!isNaN(parseFloat(chars[i])))
            nums.push(parseFloat(chars[i]));
    }
    
    //add function
    function add(){
        var total = 0;
        for(var i = 0; i < nums.length; i++)
            total = total + nums[i];
        console.log(total);
    }
    
    //subtraction function
    function sub(){
        var total = nums[0];
        for(var i = 1; i < nums.length; i++)
            total = total - nums[i];
        console.log(total);
    }
    
    //multiply function
    function mult(){
        var total = nums[0];
        for(var i = 1; i < nums.length; i++)
            total = total * nums[i];
        console.log(total);
    }   
   
    var operations = {"+" : add, "-" : sub, "*" : mult };

    return operations[line.charAt(1)];

}

//prevents invalid commands
function checkCommand(line){
    if (line.includes("(") && line.includes(")") && line.length != 2)
        return true;
    else{
        console.log("Please enter a valid expression");
        return false;
    }
}