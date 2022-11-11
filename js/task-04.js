let counterValue = 0;

const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector("#value")
};

const onClickDecrement = () => {
    counterValue -= 1;
    changeCounterValue();
}

const onClickIncrement = () => {
    counterValue += 1;
    changeCounterValue();
}

const changeCounterValue = () => {
    refs.value.textContent = counterValue;
}


refs.btnDecrement.addEventListener("click", onClickDecrement);
refs.btnIncrement.addEventListener("click", onClickIncrement);



