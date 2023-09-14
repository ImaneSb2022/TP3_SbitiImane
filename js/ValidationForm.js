const validateForm = () => {

    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const ville = document.getElementById('ville');
    const province = document.getElementById('province');
    const codepostal = document.getElementById('codepostal');
    const email = document.getElementById('email');
    const telephone = document.getElementById('telephone');
    const message = document.getElementById('message');

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const villeValue = ville.value.trim();
    const provinceValue = province.value.trim();
    const codepostalValue = codepostal.value.trim();
    const emailValue = email.value.trim();
    const telephoneValue = telephone.value.trim();
    const messageValue = message.value.trim();

    let noError = true;

    //Validation du prenom
    if(prenomValue === '') {
        setError(prenom, 'Prénom vide !');
        noError = false;
    } else {
        setSuccess(prenom);
    }

    //Validation du nom
    if(nomValue === '') {
        setError(nom, 'Nom vide !');
        noError = false;
    } else {
        setSuccess(nom);
    }

    //Validation de la ville
    if(villeValue === '') {
        setError(ville, 'Ville vide !');
        noError = false;
    } else {
        setSuccess(ville);
    }

    //Validation de la province
    if(provinceValue === '') {
        setError(province, 'Province vide !');
        noError = false;
    } else {
        setSuccess(province);
    }

    //Validation du code postal
    if(codepostalValue === '') {
        setError(codepostal, 'Code postal vide !');
        noError = false;
    }
    else if(!validateCodepostal(codepostalValue)){
        setError(codepostal,'Code invalide, exp : G4R 9K9');
        noError = false;
    }
    else {
        setSuccess(codepostal);
    }

    //Validation du email
    if(emailValue === ''){
        setError(email,'Email vide !');
        noError = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,'Email non valide !');
        noError = false;
    }
    else{
        setSuccess(email);
    }

    //Validation du telephone
    if(telephoneValue === '') {
        setError(telephone, 'Téléphone vide !');
        noError = false;
    } 
    else if(!validatetelephone(telephoneValue)){
        setError(telephone,'Téléphone invalide : 514 333 4040 ');
        noError = false;
    }
    else {
        setSuccess(telephone);
    }
    /*regex Pour
    123-456-7890
    (123) 456-7890
    123 456 7890
    123.456.7890
    +91 (123) 456-7890
    */

    //Validation du message
    if(messageValue === '') {
        setError(message, 'Message vide !');
        noError = false;
    } else {
        setSuccess(message);
    }

    console.log(noError);
    return noError;
}

function validateCodepostal(codepostal) {
    /*const rep = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;*/
    const rep = /^([a-zA-Z]\d[a-zA-Z])\ {0,1}(\d[a-zA-Z]\d)$/;
    return rep.test(String(codepostal).toLowerCase());
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatetelephone(telephone) {
    const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return reg.test(String(telephone).toLowerCase());
}

const setError = (element,message) => { 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

