const correctPassword = "x"; // Set your password here

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
    } else {
        alert('Incorrect Password!');
    }
}
