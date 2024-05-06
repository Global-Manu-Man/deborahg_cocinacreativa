

// Validate email and message ok  
const $form = document.querySelector('form');
if ($form) {
    $form.addEventListener('submit', handleSubmit);
    console.log('mesagge' + $form);
    async function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'Application/json'
            }

        })
        if (response.ok) {
            this.reset();

        }

    }
}


// Validate email de web site
function validatemail(email) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var okvalide = expReg.test(email);
    if (okvalide == true) {

    } else {

    }

}

function convertirAMinusculas() {
    var elementoH4 = document.getElementById("miH4");
    var texto = elementoH4.textContent;
    elementoH4.textContent = texto.toLowerCase();
}

