let tableBody = document.getElementById("tablebody");
const url = "https://mock-api-template-rh6s.onrender.com/userlist";
let table = document.getElementById("user-list-table");

window.addEventListener("load", () => {
    fetchdata();
});

function fetchdata() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            getData(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function getData(data) {
    tableBody.innerHTML = "";
    data.forEach(element => {
        const newRow = document.createElement("tr");


        const addProfile = document.createElement("td");
        addProfile.style.padding='10px 10px';
        const image = document.createElement("img");
        image.src = element.profile;
        image.alt = "Profile Image";
        image.style.width = "40px";
        addProfile.appendChild(image);
        addProfile.setAttribute("class", "profile-cell");


        const addName = createTableCell(element.name);
        const addContact = createTableCell(element.contact);
        const addEmail = createTableCell(element.email);
        const addCountry = createTableCell(element.country);
       
        const addStatus = document.createElement("td");
        const button = document.createElement("button");
        addStatus.setAttribute("class", "statusbutton");
        addStatus.appendChild(button);
        button.textContent = element.status;
        button.style.borderRadius='3px'
        button.style.color="white"
        button.style.fontSize="12px"
        button.style.border="none"

        if (button.innerText === "active") {
            button.style.backgroundColor = "blue";
            
        } else if (button.innerText === 'inactive') {
            button.style.backgroundColor = 'red';
        } else if (button.innerText === "pending") {
            button.style.backgroundColor = 'orange';
        } else if ( button.innerText === "hold") {
            button.style.backgroundColor = 'gray';
        } else if ( button.innerText === "complete") {
            button.style.backgroundColor = 'green';
        }
        const addCompany = createTableCell(element.company);
        const addJoinDate = createTableCell(element.joinDate);
        const addAction = createTableCell(element.action)
        addAction.style.display="flex";
        // addAction.style.marginTop="13px";

        addAction.style.paddingTop="22px";
        addAction.style.paddingBottom="24px";


        let actionbtn1 =document.createElement("button")
        let actionbtn2=document.createElement("button")
        let actionbtn3=document.createElement("button")

        actionbtn1.className="fas fa-edit";
        actionbtn2.className="fas fa-trash";
        actionbtn3.className="fa-solid fa-user-plus"
        actionbtn1.style.backgroundColor = "green";
        actionbtn1.style.padding = "5px";
        actionbtn1.style.borderRadius = "5px"
        actionbtn2.style.marginLeft="5px";
        actionbtn1.style.marginLeft="5px";
    
        
        actionbtn2.style.backgroundColor = "red";
        actionbtn2.style.padding = "5px"
        actionbtn2.style.borderRadius= "5px"
        actionbtn3.style.backgroundColor = "orange"; 
        actionbtn3.style.padding = "5px"
        actionbtn3.style.borderRadius= "5px"
        actionbtn3.style.marginLeft="5px";
        
        addAction.append(actionbtn1,actionbtn2,actionbtn3)
        newRow.append(addProfile, addName, addContact, addEmail, addCountry, addStatus, addCompany, addJoinDate, addAction);
        tableBody.appendChild(newRow);
    });
}

function createTableCell(text) {
    const td = document.createElement("td");
    td.textContent = text;
    return td;
}
