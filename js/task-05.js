const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}

const onChangeOutput = (event) => {
    const value = event.currentTarget.value.trim();

    refs.output.textContent = value ? event.currentTarget.value : "Anonymous";
}

refs.input.addEventListener("input", onChangeOutput);