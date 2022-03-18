function saturdayFun (activity = "roller-skate"){
    return "This Saturday, I want to "  + activity + "!";
}

function mondayWork(dayOfTheWeek = "go to the office"){
    return "This Monday, I will " + dayOfTheWeek + ".";
}

function wrapAdjective(adjective = "*" ){
    return function(msg = "a hard worker"){
        return (`${"You are"} ${adjective}${msg}${adjective}!`)
    };
}