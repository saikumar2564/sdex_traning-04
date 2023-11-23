document.getElementById('sideBarBtn').addEventListener('click', function () {

    const arrowLeftBtn = document.querySelector('.arrowbtn').classList.contains('fa-arrow-left');
    const arrowRightBtn = document.querySelector('.arrowbtn').classList.contains('fa-arrow-right');

    if(arrowLeftBtn){
        const items = document.getElementsByClassName('item');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.contains('d-none') ? items[i].classList.remove('d-none') : items[i].classList.add('d-none');
    }
    

    const miniIcons = document.getElementsByClassName('sidenav-mini-icon');

    for (let i = 0; i < miniIcons.length; i++) {
        miniIcons[i].classList.remove('d-none');
    }

    const sidepanel = document.getElementById('sidepannel');
    sidepanel.style.width= "5%";
    const main = document.querySelector('.main');
    main.style.width='95%';
    main.style.marginLeft="5%";

    const arrowBtn = document.querySelector('.arrowbtn');

    if (arrowBtn.classList.contains('fa-arrow-left')) {
    arrowBtn.classList.remove('fa-arrow-left');
    arrowBtn.classList.add('fa-arrow-right');  
    }

    // const dropdownStyle = document.getElementById('hr-menu');
    // dropdownStyle.style.listStyle='none';


    // const dropdownStyle = document.getElementById('special-pages_menu');
    // dropdownStyle.style.listStyle='none';

    function setListStyle(elementId) {
        const dropdownStyle = document.getElementById(elementId);
        if (dropdownStyle) {
            dropdownStyle.style.listStyle = 'none';
        }
    }
    const elementIds = [
        'hr-menu',
        'special-pages_menu',
        'Authentication_menu',
        'Users_menu',
        'Utilities_menu',
        'Widget_menu',
        'Maps_menu',
        'Form_menu',
        'Table_menu',
        'Icons_menu'
    ];
    elementIds.forEach(setListStyle);
    

    const  sym= document.getElementsByClassName('symbols');
    for (let i = 0; i < sym.length; i++) {
    sym[i].style.display='block';
    sym[i].style.marginLeft="-25px";
    }
    }



    else if(arrowRightBtn){


        const items = document.getElementsByClassName('item');

        for (let i = 0; i < items.length; i++) {
            items[i].classList.contains('d-none') ? items[i].classList.remove('d-none') : items[i].classList.add('d-none');
        }
        
    
        const miniIcons = document.getElementsByClassName('sidenav-mini-icon');
    
        for (let i = 0; i < miniIcons.length; i++) {
            miniIcons[i].classList.remove('d-none');
        }
    
        const sidepanel = document.getElementById('sidepannel');
        sidepanel.style.width= "16%";
        const main = document.querySelector('.main');
        main.style.width='84%';
        main.style.marginLeft="16%";
        const arrowBtn = document.querySelector('.arrowbtn');

        if (arrowBtn.classList.contains('fa-arrow-right')) {
            arrowBtn.classList.remove('fa-arrow-right');
            arrowBtn.classList.add('fa-arrow-left');
        }

        
    // const dropdownStyle = document.getElementById('hr-menu');
    // dropdownStyle.style.listStyle='disc';

    function setListStyle(elementId) {
        const dropdownStyle = document.getElementById(elementId);
        if (dropdownStyle) {
            dropdownStyle.style.listStyle = 'disc';
        }
    }
    const elementIds = [
        'hr-menu',
        'special-pages_menu',
        'Authentication_menu',
        'Users_menu',
        'Utilities_menu',
        'Widget_menu',
        'Maps_menu',
        'Form_menu',
        'Table_menu',
        'Icons_menu'
    ];
    elementIds.forEach(setListStyle);

    const  sym= document.getElementsByClassName('symbols');
    for (let i = 0; i < sym.length; i++) {
    sym[i].style.display='none';
    sym[i].style.marginLeft="0px";
    }

    }
});


//Dark Mode Code
const themeButton = document.getElementById("themeButton");
let isDarkMode = false;
// const icon = document.getElementById("icon");
// const table=document.getElementById("dataTable")

themeButton.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

        if (isDarkMode) {
        document.body.style.backgroundColor = "#1c1b1b";
        document.body.style.color = "#fff";
        icon.className = "fa-regular fa-sun";

        const cardElements = document.querySelectorAll('.card');
        cardElements.forEach(function(card) {
        card.style.backgroundColor = '#403d3d';
        card.style.color = "#fff";

        });

    } 
    
        else {
        document.body.style.backgroundColor = "#f8f9fa";   
        document.body.style.color = "#000";
        icon.className = "fa-regular fa-moon";
        const cardElements = document.querySelectorAll('.card');
        cardElements.forEach(function(card) {
        card.style.backgroundColor = '#fff';
        card.style.color = "#000";
        });
       
    }
});
