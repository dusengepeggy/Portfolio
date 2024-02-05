const contactForm = document.querySelector('.contact-form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let subject=document.getElementById('subject');
let text=document.getElementById('text');

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // let formData ={
    //     name:name.value,
    //     email:email.value,
    //     subject:subject.value,
    //     text:text.value
    // }; 

    console.log("submit clicked");
}) 