var logger = function(output){
    console.log(output)
}
var logger = (output) => {
    console.log(output)
}
export var appName = "ES6 Primer";


export const dummyFunction =() => {
    let feedback = "I am a dummy function"; //mutable variable 
    feedback = "I am still a dummy function"; //value changed
    return feedback;
}
export const genericFunction=()=>{
    const languages = ['Python','JavaScript','Java','C#','C++']; //declare 
    const[firstLang, secondLang] = languages;
    return `First language is ${firstLang} and the second is ${secondLang}`
}
export const genericFunction2=()=>{
    const languages = ['Python','JavaScript','Java','C#','C++']; //declare 
    const[firstLang, secondLang,...otherLanguages] = languages;
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`
}

export default logger;