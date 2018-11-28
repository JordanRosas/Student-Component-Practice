const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

/*h1 Section and aside functions*/
 //const h1 = (title, style) =>{
    //return `<h1 class = "${style}">${title}</h1>`
// }
// const section = (title, style) =>{
//     return `<section class = "boredered dashed ${style}">${title}</section>`
// }
// const aside = (title, style) =>{
//     return `<aside class = "${style}">${title}</aside>`
// }

// const student = (name, className, info, colorClass) => `
//     <div id="student"> 
//         ${h1(name, `xx-large ${colorClass}`)}
//         ${section(className, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `

// const container = document.querySelector("#container")
// // container.innerHTML = student("Marcus Fulbright", "Algebra", "Not a bright student")

// /*Iterate through the students and apply styles if passing and or failing.*/
// for (person of students) {
//     console.log(person)
//     let studentComponent = ''
//     if (person.score >= 60) {
//         studentComponent = student(person.name, person.class, person.info, "passing")
//     } else {
//         studentComponent = student(person.name, person.class, person.info, "failing")
//     }
//     console.log(students)
//     container.innerHTML += studentComponent
// }

/*==============================using rest operators==============================================*/
/*h1 Section and aside functions*/
const h1 = (...props) =>{
    return `<h1 class = "${props[1]}">${props[0]}</h1>`
}
const section = (...props) =>{
    return `<section class = "boredered dashed ${props[1]}">${props[0]}</section>`
}
const aside = (...props) =>{
    return `<aside class = "${props[1]}">${props[0]}</aside>`
}

const student = (name, className, info, colorClass) => `
    <div id="student"> 
        ${h1(name, `xx-large ${colorClass}`)}
        ${section(className, 'section-padded')}
        ${aside(info, 'pushRight')}
    </div>
`

const container = document.querySelector("#container")

/*Iterate through the students and apply styles if passing and or failing.*/
for (person of students) {
    console.log(person)
    let studentComponent = ''
    if (person.score >= 60) {
        studentComponent = student(person.name, person.class, person.info, "passing")
    } else {
        studentComponent = student(person.name, person.class, person.info, "failing")
    }
    console.log(students)
    container.innerHTML += studentComponent
}

/*=======================Generic function pratice===========================*/
const element = (elName, text, classes ) =>{
    return `<${elName} class = '${classes}'>${text}</${elName}>`
}

const h1 = element("h1", "Generic Component Maker", "xx-large orange");