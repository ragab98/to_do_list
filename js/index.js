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
        
        //ICON CHECK
        let icon_check = document.createElement("i"),
        icon_check_class = document.createAttribute("class");
        icon_check_class.value = "far fas fa-check icon_check";
        // Create icon clear
    let icon_clear = document.createElement("i"),
        icon_clear_class = document.createAttribute("class");
        icon_clear_class.value = "fas fa-times icon_style";

        // start input field

    if (input_text.value == ""){
            
        alert("you cannot leave the field blank");
            
    } 

    else {
    
        // Add the value of the input field

        new_div.setAttributeNode(new_class);
        div_content.appendChild(new_div).innerHTML = input_text.value ;
        document.getElementById("input_text").value = "";

        icon_check.setAttributeNode(icon_check_class);
        new_div.appendChild(icon_check);
        new_div.onclick = function () {
            
            icon_check.style.display = "flex";
        }

        new_div.ondblclick = function () {
            
            icon_check.style.display = "none";
        }

        icon_clear.setAttributeNode(icon_clear_class);
        new_div.appendChild(icon_clear);
        icon_clear.onclick = function () {
            
            this.parentElement.style.display = 'none'; 
        }
    }
}