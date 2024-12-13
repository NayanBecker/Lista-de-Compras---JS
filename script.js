// document.addEventListener("DOMContentLoaded", function () {

const formulario = document.querySelector("form")

const subNewItem = document.getElementById("subNewItem")
const inItemName = document.getElementById("inItemName") 
const shoppingList = document.querySelector("#shoppingList")
const itemListShopping = []


formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  addItensInShoppingList()

  const itemName = inItemName.value.trim();
  
  
  if (itemName === ""){
    alert("Por favor, insira o nome do item.");
    return;
  }
  
  itemListShopping.push(itemName)
  addItensInShoppingList(itemName);
  formulario.reset();

})

function addItensInShoppingList(itemName) {

  const divItemList = document.createElement("div");
  divItemList.textContent = itemName;
  divItemList.classList.add("itensList");

    for (let index = 0; index < itemListShopping.length; index++) {
      const element = itemListShopping[index];
      console.log (element)
    }
}


   const deleteButton = document.createElement("span");
   deleteButton.innerHTML = `<img src="./Assets/Icons/delete-02-stroke-rounded.svg" alt="Deletar">`;
   deleteButton.classList.add("deleteButton");
   
   deleteButton.addEventListener("click", () => {
     itensList.removeChild(newItem);
     showModal();
   });

 function showModal() {
  deleteModal.style.display = "flex";
  setTimeout(() => {
    deleteModal.style.display = "none"; 
  }, 2000);
}

