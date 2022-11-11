const refs = {
    input: document.querySelector("#validation-input"),
}

const onValidateInput = (event) => {
    const input = event.currentTarget;
    const validLength = Number(input.dataset.length);

    const currentLength = input.value.length;

    if (currentLength === validLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

refs.input.addEventListener("blur", onValidateInput)