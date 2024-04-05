document.getElementById("add-note").addEventListener("click", alert1);
let input_feild = document.getElementById("input-text");
let button_val = 0;
let arr=[];

function alert1() {
  let note = document.getElementById("input-text").value;
  if (note == "") {
    alert("Please Enter Something");
  } else {
    // console.log(note);

    var newDiv = document.createElement("div");
    newDiv.className = "notes-div";

    let par1 = document.createElement("p");
    par1.className = "para1";
    par1.textContent = note;

    var button = document.createElement("Button");
    button.type = "button";
    button.className = "para2";
    button.textContent = "X";
    button.setAttribute("data-buttonval", button_val++);

    newDiv.appendChild(par1);
    newDiv.appendChild(button);

    let info = {
      data: `${note}`,
      buttonvalue: `${button_val}`,
    };
    arr.push(data);
    let arr1 = JSON.stringify(arr);
    localStorage.setItem("info", arr1);
    // arr[button_val]++;
    // let info1 = JSON.stringify(info);
    // console.log(info1);
    // localStorage.setItem("info", info1);

    let containerDiv = document.getElementById("notes-bodyid");
    containerDiv.appendChild(newDiv);
    input_feild.value = "";
  }
}
document.querySelector(".parent").addEventListener("click", function (e) {
  deleteTag(e);
});
function deleteTag(e) {
  if (e.target.className == "para2" ) {
    e.target.parentElement.remove();
  } else{
    console.log("no");
  }
}