let input_text = document.getElementById("input_text"),
    div_content = document.getElementById("content"),
    action = document.getElementById("action");

action.onsubmit = function(e){
    e.preventDefault();
} 
     //create item that within div_content

function feild_test(){

     // create the child

    let new_div = document.createElement("div"),
        new_class = document.createAttribute("class");
        new_class.value = "content_child";

        // Create icon content

    let new_icon = document.createElement("i"),
        new_icon_class = document.createAttribute("class");
        new_icon_class.value = "fas fa-times icon_style";

        // start input field

    if (input_text.value == ""){
            
        alert("you cannot leave the field blank");
            
    } 

    else {
    
        // Add the value of the input field

        new_div.setAttributeNode(new_class);
        div_content.appendChild(new_div).innerHTML = input_text.value ;
        document.getElementById("input_text").value = "";

        new_icon.setAttributeNode(new_icon_class);
        new_div.appendChild(new_icon);
        new_icon.onclick = function () {
            
            this.parentElement.style.display = 'none'; 
        }
    }
}