document.querySelector('.rightarrow').style.display = 'none';

document.querySelector('.leftarrow').addEventListener('click', function () {
    document.querySelectorAll('.hidden-items').forEach(item => {
        item.style.display = 'none';
    });


    let sidebar = document.getElementById('side-bar');
    sidebar.style.width = '5rem';

    document.querySelectorAll('.sidenav-mini-icon').forEach(miniIcon => {
        miniIcon.style.display = 'block';
        miniIcon.style.marginTop = '10px';
        miniIcon.style.marginLeft='-10px';
    })
        
    document.querySelector('.main-icon').style.marginLeft = '1px';
    document.querySelector('.home').style.marginLeft = '10px';
    document.querySelector('.pages').style.marginLeft = '10px';
    document.querySelector('.elements').style.marginLeft = '10px';

    document.querySelector('.rightarrow').style.display = 'block';
    document.getElementById('aside').style.height='600px'
    let main=document.getElementById('main');
    main.style.marginLeft='-150px';
    main.style.width='93%';
    let alpha=document.querySelectorAll('.d-none');
    
    alpha.forEach(alpha => {
        alpha.className = 'd-block';
        if(alpha.className!='d-none'){
            alpha.className='d-block'
        }
    });
    document.querySelectorAll('.alpha-icon').forEach(alpha=>{
        alpha.style.marginLeft='-30px';
        
    })
    document.querySelectorAll('.collapse').forEach(collapse=>{
        collapse.style.listStyle='none';
       
    })
    document.querySelectorAll('.gallery').forEach(gallery=>{
        gallery.style.height='70px'
    })

});
// left arrow end
document.querySelector('.rightarrow').addEventListener('click', function () {
    
    let sidebar = document.getElementById('side-bar');
    sidebar.style.width = '16.25rem'; 
    
    document.querySelectorAll('.sidenav-mini-icon').forEach(miniIcon => {
        miniIcon.style.display = 'block';
    });
    document.querySelectorAll('.hidden-items').forEach(item => {
        item.style.display = 'block';
        item.style.transform = 'none';
        item.style.margin = 'none !important';
    });
    document.querySelector('.rightarrow').style.display = 'none';
    let main=document.getElementById('main');
    main.style.marginLeft='35px';
    main.style.width='80%';
    let alpha=document.querySelectorAll('.d-block');
  
    alpha.forEach(alpha => {
        alpha.className = 'd-none';
        alpha.style.overflowX='hidden';
        // alpha.style.border='2px solid';   
    });
    document.querySelectorAll('.collapse').forEach(collapse=>{
        collapse.style.listStyle='disc';
       
    })
    document.querySelectorAll('.alpha-icon').forEach(element=>{
        element.style.marginLeft='0px';
    })
    document.querySelectorAll('.gallery').forEach(gallery=>{
        gallery.style.height='60px'
    })
});

// const navitem=document.querySelector(".nav-item") 
// navitem.addEventListener("click",(e)=>{
//     e.preventDefault()
//     if(navitem.innerText=="Activity"){
//         document.querySelector(".nav-item").style.color="red";
//         console.log("hi")
//     }
// })
