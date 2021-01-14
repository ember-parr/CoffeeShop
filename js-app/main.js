const url = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee";
const addVarietyUrl = "https://localhost:5001/api/beanvariety/";

const eventHub = document.getElementsByClassName("main-block");

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    GetAllCoffee()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function GetAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}

const addNewVarietyBtn = document.querySelector(".add-variety-btn");

eventHub.addEventListener("click", event => {
    if (event.target.id == "add-variety-btn") {

        S
    }
});


const addNewBeanVariety = (variety) => {
    return fetch(addVarietyUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(variety)
    })
}