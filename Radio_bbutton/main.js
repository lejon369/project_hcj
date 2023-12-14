const gorup = document.querySelector(".group");
 const outpout = document.querySelector(".outpout");


const sizes = ["xs", "sm", "md", "lg","xl", "xxl"];


gorup.innerHTML = sizes.map((size) =>
    `<div>
        <input type="radio" id="${size}" value="${size}" name="size">
        <label for="${size}">${size}</label>
      </div>`
).join(" ");	

const radioButton = document.querySelectorAll("input")

for(const radioBtn of radioButton){
    radioBtn.addEventListener("change", shoeOutput);
}

function shoeOutput(e) {
    console.log(e);
    if(this.checked) {
        document.querySelector(".outpout").innerHTML = `You selected ${this.value}`;
    }
}