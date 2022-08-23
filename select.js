let count = 0;

function addedPlayer(element) {
  count++;
  const playerName = element.parentNode.children[0].innerText;
 

  const mainContainer = document.getElementById("products-cart");
  const tableContainer = document.createElement("tr");
  element.disabled = true;
  if (count > 5) {
    alert("select only five player");
    return;
  }
  tableContainer.innerHTML = `
    <th scope="row text-white">${count}</th>
    <td class="text-white">${playerName}</td>
  `;
  mainContainer.appendChild(tableContainer);
  element.disabled = true;
}
