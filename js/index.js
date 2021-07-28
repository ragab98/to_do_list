let input_text = document.getElementById("input_text"),
    content = document.getElementById("content"),
    action = document.getElementById("action");

action.onsubmit = function(e){
    e.preventDefault();
} 
    //create item content

function field_test(){

    // create parent content

    let new_div = document.createElement("div"),
        new_class = document.createAttribute("class");
        new_class.value = "content_Child";

    // Create icon content

    let new_i = document.createElement("i"),
        new_i_class = document.createAttribute("class");
        new_i_class.value = "fas fa-times i_style";

        new_I = document.createElement("i");
        new_I_class = document.createAttribute("class");
        new_I_class.value = "far fas fa-check i_style";

        // start input field

    if (input_text.value == ""){
        
        alert("you cannot leave the field blank");
        
    } else {
            
        // Add the value of the input field

        new_div.setAttributeNode(new_class);
        content.appendChild(new_div).innerHTML = input_text.value ;
        document.getElementById("input_text").value = "";

        new_i.setAttributeNode(new_i_class);
        new_div.appendChild(new_i);

        new_I.setAttributeNode(new_I_class);
        new_div.appendChild(new_I);
        new_I.style.display = "none"

        // Unwanted field removal function
        
        new_i.onclick = function () {
            this.parentElement.style.display = 'none'; 
        };

        new_div.onclick = function () {
            new_I.style.display = "inline-block";
        }

    }
}