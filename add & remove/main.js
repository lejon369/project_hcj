let lang = document.querySelector("#lang");
let btnadd = document.querySelector("#btnAdd");
let list = document.querySelector("#list");
let btnremove = document.querySelector("#btnRemove");

btnadd.onclick = (e) => {
    e.preventDefault();
    if (lang.value === "") {
        console.log(("please enter a Name"));
    }
    const option = new Option(lang.value);
    list.add(option);
    lang.value = "";

}


let noArray = [];
for (let i = 0; i < list.Options.length; i++) {
    noArray[i] = list.Options[i].selected
}

btnremove.onclick = (e) => {
    e.preventDefault();
    let index = list.Options.length;
    while (index--) {
        if (noArray[index]) {
            list.remove(index);
        }
    }
};
