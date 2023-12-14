const btn = document.querySelector("#btn");



btn.addEventListener("click", (e) => {

    let chekckbox = document.querySelectorAll("input[name='color']:checked");
    let values = [];

    chekckbox.forEach((chekckbox) => {
        values.push(chekckbox.value);
        console.log(values);
    })
});
