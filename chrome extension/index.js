
let myLeads = [];

const inputEl = document.getElementById("input-el");
const buttonEL = document.getElementById("input-btn");
const ulEl = document.getElementById("ulEl")
const deleteEl = document.getElementById("delete-btn")
const tabButtonEl = document.getElementById("tab-btn")

buttonEL.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    console.log(localStorage.getItem("myLeads"))
})

deleteEl.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})


tabButtonEl.addEventListener("click", () => {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);

    })
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads);
}

function renderLeads(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


// Enchance method
// function renderLead() {
//     let listItem = "<li>" + inputEl.value + "</li>";
//     ulEl.innerHTML += listItem
// }






