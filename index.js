var password = "${process.env.PASSWORD}"; // test password: foobar

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert("WP, TA.");
        return false;
    }
}

document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        alert('Not allowed');
        return false;
    } else {
        return true;
    }
};