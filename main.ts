function averageScore(...scores : number[]) : number{
    let total = scores.reduce((sum, score)=>sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(40,60,70,30));

//function with optional parameter
function buildName(firstName : string, lastName? : string) : string{
if(lastName)
    return firstName + " " + lastName;
else
 return firstName
}
let result1 = buildName("noman");
let result2 = buildName("noman","ghaziani")
console.log(result1);
console.log(result2);