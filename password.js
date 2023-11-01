const correctPassword = "open"; // Set your password here

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

    if (input.value === correctPassword) {
        overlay.style.display = 'none';
        content.style.display = 'block';
        
        // Add animations
        document.querySelectorAll('.letters').forEach((letter, index) => {
            letter.style.animation = `upAndDown 2s ${index * 0.1}s`;
        });
        
       // document.querySelector('.op-logo').style.animation = 'someAnimation 1s';  // Define someAnimation in your CSS
        
        document.querySelector('.x').style.animation = 'spinny 0.4s 2.2s 1 forwards';
        
        document.querySelector('.pata-logo').style.animation = 'grow 0.4s 2.5s 1 forwards';
        
        document.querySelector('.down-arrow').style.animation = 'jump 1.5s 3s ease-in-out 3';
        
    } else {
        alert('Incorrect Password!');
    }
}


document.querySelector('.overlay').style.backgroundImage = `url(${client.heroImg})`
document.querySelector('.overlay').style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;`
