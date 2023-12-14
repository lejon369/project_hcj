const lang = document.querySelector("#lang");
const btn = document.querySelector("#btn");

btn.onclick = (e) =>{
    e.preventDefault();
    const optionsValue = [].filter
    .call(lang.options, (option) => option.selected)
    .map((option) => option.text)
    alert(optionsValue);
}
