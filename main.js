
const loadUsers = async (id) => {
  let htmlCode = "";
  let request = await fetch("data.txt");
  let result = await request.json();
  let dataUser = result.filter(user => user.DOCUMEN == id);
  if (dataUser) {
    try {
      console.log(dataUser);
      htmlCode = `<tr>
      <th scope="row">1</th>
      <td>${dataUser[0].NOM1}</td>
      <td>${dataUser[0].APE1}</td>
      <td>POTENCIAL BENEFICIARIO</td>
  </tr>`;
    } catch (error) {
      htmlCode = `<tr>
      <th scope="row">1</th>
      <td>NO EXISTE</td>
      <td>NO EXISTE</td>
      <td>NO ERES BENEFICIARIO</td>
  </tr>`
    }
  }
  document.querySelector(".loadData").innerHTML = htmlCode;
  let clear = document.getElementById("inputDocument");
  clear.setAttribute('disabled', '');
}
let button = document.getElementById("sendId");
let buttonClear = document.getElementById("newRequest");
clear = () => {
  let clear = document.getElementById("inputDocument");
  clear.removeAttribute('disabled', '');
  document.querySelector(".loadData").innerHTML = "";
  clear.value="";
}
throwData = () => {
  let idUser = (document.getElementById("inputDocument").value).trim();
  parseInt(idUser);
  parseInt(idUser);
  if (idUser == "" || idUser == undefined || idUser == null) {
    alert("Debes ingresar un ID");
  }
  loadUsers(idUser);
};
button.addEventListener("click", throwData);
buttonClear.addEventListener("click", clear);