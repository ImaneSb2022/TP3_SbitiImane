const validateForm = () => {

    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const ville = document.getElementById('ville');
    const province = document.getElementById('province');
    const codepostal = document.getElementById('codepostal');

    console.log(prenom);
    console.log(nom);
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const villeValue = ville.value.trim();
    const provinceValue = province.value.trim();
    const codepostalValue = codepostal.value.trim();

    let noError = true;

    //Validation du prénom
    if(prenomValue === '') {
        setError(prenom, 'Le prénom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(prenom);
    }

    //Validation du nom
    if(nomValue === '') {
        setError(nom, 'Le nom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(nom);
    }

    //Validation de la ville
    if(villeValue === '') {
        setError(ville, 'La ville ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(ville);
    }


    //Validation de la province
    if(provinceValue === '') {
        setError(province, 'La province ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(province);
    }


    //Validation du nom
    if(nomValue === '') {
        setError(nom, 'Le nom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(nom);
    }

    //Validation du email
    if(villeValue === ''){
        setError(email,'Email ne peut être vide');
        noError = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,'Entrez une adresse courriel valide');
        noError = false;
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Mot de passe ne peut être vide');
        noError = false;
    }
    else if(passwordValue.length < 8){
        setError(password,'Mot de passe ne peut être plus petit que 8 caractères'); 
        noError = false;
    }
    else{
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Confirmez votre mot de passe');
        noError = false;
    } 
    else if (password2Value !== passwordValue) {
        setError(password2, "Les mots de passe ne sont pas conformes");
        noError = false;
    } 
    else {
        setSuccess(password2);
    }

    console.log(noError);
    return noError;
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
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

