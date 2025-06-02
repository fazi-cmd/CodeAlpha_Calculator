/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop - 150;
    let height=sec.offsetHeight;
    let id= sec.getAttribute('id');
 
    if(top >=offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']') .classList.add('active');
        });
    };
});

    /*==================== sticky navbar ====================*/
let header= document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


/*==================== scroll reveal ====================*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_r9e21ck', 'template_k6k0tgy', this)
         .then(function() {
            alert('✅ Message Sent Successfully!');
         }, function(error) {
            alert('❌ Failed to send message: ' + JSON.stringify(error));
         });
   });
/*==================== typed js ====================*/
/*==================== Resume Tab Persistence ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtns = document.querySelectorAll('.resume-btn');
    const resumeDetails = document.querySelectorAll('.resume-detail');

    // Default to "Experience" (index 0) if no sessionStorage value exists
    const activeTabIndex = sessionStorage.getItem('activeResumeTab') 
        ? parseInt(sessionStorage.getItem('activeResumeTab')) 
        : 0;

    // Apply active state on page load
    resumeBtns.forEach(btn => btn.classList.remove('active'));
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    resumeBtns[activeTabIndex]?.classList.add('active');
    resumeDetails[activeTabIndex]?.classList.add('active');

    // Tab switching logic
    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            // Remove active from all
            resumeBtns.forEach(btn => btn.classList.remove('active'));
            resumeDetails.forEach(detail => detail.classList.remove('active'));

            // Activate clicked tab
            btn.classList.add('active');
            resumeDetails[idx].classList.add('active');

            // Store in sessionStorage (resets when tab closes)
            sessionStorage.setItem('activeResumeTab', idx.toString());
        });
    });
});