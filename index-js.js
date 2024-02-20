const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "psmaan4444@gmail.com",
        Password : "4718EA177D97269D3604654F70A230CA833E",
        To : 'psmaan4444@gmail.com',
        From : "psmaan4444@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});