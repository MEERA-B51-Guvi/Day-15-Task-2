const form=document.getElementById("form");
const table=document.getElementById("table");

form.addEventListener("submit", function(event){
    debugger;
event.preventDefault();
const firstname=document.getElementById("name").value;
const lastname=document.getElementById("lastname").value
const address=document.getElementById("address").value;
const gender=document.querySelector('input[name="gender"]:checked').value;
const country=document.getElementById("country").value;
const state=document.getElementById("state").value;
const pincode=document.getElementById("pincode").value;
const foodselect=document.querySelectorAll('input[name="food"]:checked');
const foodchoice=Array.from(foodselect).map(
    (checkbox)=>checkbox.value
);

if(foodchoice.length<2){
    alert("please choose at least two types of food items");
    return;
}

const newrow=table.insertRow();
const firstnamecol=newrow.insertCell();
const lastnamecol=newrow.insertCell();
const addresscol=newrow.insertCell();
const gendercol=newrow.insertCell();
const countrycoll=newrow.insertCell();
const stateco=newrow.insertCell();
const pincodecol=newrow.insertCell();
const foodselectcol=newrow.insertCell();

firstnamecol.textContent=firstname;
lastnamecol.textContent=lastname;
addresscol.textContent=address;
gendercol.textContent=gender;
countrycoll.textContent=country;
stateco.textContent=state;
pincodecol.textContent=pincode;
foodselectcol.textContent=foodchoice.join(", ");

form.reset();
})