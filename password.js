const correctPassword = "open"; // Set your password here

// window.onload = function() {
    
// }

function logoAnimations() {

    // Add animations
    document.querySelectorAll('.letters').forEach((letter, index) => {
       letter.style.animation = `upAndDown 2s ${index * 0.1}s`;
   });
   
      document.querySelector('.x').style.animation = 'spinny 0.4s 2.2s 1 forwards';
      document.querySelector('.pata-logo').style.animation = 'grow 0.4s 2.5s 1 forwards';
      document.querySelector('.down-arrow').style.animation = 'jump 1.5s 3s ease-in-out 3';
};

if (document.cookie.includes("passwordSeen=true")) {
    // If the cookie is set, don't show the password prompt
    document.body.style.overflow = 'auto';
    hidePassword();
    logoAnimations();
  } else {
    document.body.style.overflow = 'hidden';
  }
  

document.querySelector('.password-btn').addEventListener('click' , checkPassword);
document.querySelector('#password-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword(event);
    }
});


function checkPassword() {
    const input = document.getElementById('password-input');
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');
    const overlayContent = document.querySelector('.overlay-content')

    

    if (input.value === correctPassword) {
        // Set a cookie to remember that the user has seen the password
        document.cookie = "passwordSeen=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

         hidePassword();
         logoAnimations();
        
        document.body.style.overflow = 'auto';
        overlayContent.classList.add('hide');
        setTimeout(function () {
            overlay.classList.add('hide');
          }, 200); // 1000 milliseconds = 1 second
          setTimeout(function () {
            overlay.style.display = 'none';
          }, 700);
        // content.style.display = 'block';
        
    } else {
        alert('Incorrect Password!');
    }
}

function hidePassword() {
    const overlay = document.getElementById('overlay');
    const overlayContent = document.querySelector('.overlay-content');
    overlay.style.display = 'none';
    
}


document.querySelector('.overlay').style.backgroundImage = `url(${client.heroImg})`
document.querySelector('.overlay').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;`


