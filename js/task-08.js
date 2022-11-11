const refs = {
    form: document.querySelector(".login-form"),
}

function onSubmit(event)  {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value.trim()) {
        alert("Всі поля повинні бути заповнені");
        return;
    }

    // const formData = new FormData(event.currentTarget);

    const formData = {
        email: `${email.value}`,
        password: `${password.value}`,
    }
    
    console.log(formData);
    event.currentTarget.reset();
}

refs.form.addEventListener("submit", onSubmit);
