// code your solution here

function saturdayFun(funAction = 'roller-skate') {

    let saturdayResponse;

    saturdayResponse = `This Saturday, I want to ${funAction}!`;
    return saturdayResponse;
}

const mondayWork = function (mondayActivity = 'go to the office') {

    let mondayStatement;
    mondayStatement = `This Monday, I will ${mondayActivity}.`;
    return mondayStatement;
}

// Replit:
//  mondayWork
// [Function: mondayWork]
//  mondayWork(blastoff)
// ReferenceError: blastoff is not defined
//  mondayWork("blastoff")
// 'This Monday, I will blastoff.'

// function wrapAdjective(wrapType = '*'){
//     //const wrappedAdjective;
//     return function(wrappedAdjective = 'special', wrapType){
//         const wrapResult = `You are ${wrapType}${wrappedAdjective}${wrapType}!`;

//         return wrapResult;
//     }
// }

function wrapAdjective(wrapType = '*'){
    //const wrappedAdjective;
    // const wrapTypeFunction = wrapAdjective("wrapType");
    // none of this, only one parameter should be passed to inner function
    return function(wrappedAdjective = 'special'){
        const wrapResult = `You are ${wrapType}${wrappedAdjective}${wrapType}!`;

        return wrapResult;
    }
}

// Hint: hit control+c anytime to enter REPL.
//  wrapAdjective("&&&")("a dedicated programmer")
// 'You are &&&a dedicated programmer&&&!'
//  