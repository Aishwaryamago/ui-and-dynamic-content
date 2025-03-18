
document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("itemInput");
    const addItemButton = document.getElementById("addItemButton");
    const itemList = document.getElementById("itemList");
    const errorMessage = document.getElementById("errorMessage");

    addItemButton.addEventListener("click", function () {
        const itemText = itemInput.value.trim();

        if (itemText === "") {
            errorMessage.textContent = "Nothing entered!";
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = itemText;
            itemList.appendChild(listItem);

            errorMessage.textContent = ""; 
            itemInput.value = ""; 
            itemInput.focus(); 
        }
    });
});
