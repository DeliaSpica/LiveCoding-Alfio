const btnData = document.getElementById("btn-get");

const tabData = document.getElementById("tabella-dati");

const URL = "https://jsonplaceholder.typicode.com/todos";

let btnState = 0;

btnData.addEventListener("click", async function (e) {
  e.preventDefault();
  const datiDellaTabella = await getData();

  if (btnState === 0) {
    btnState = 1;
    btnData.className = "btn-get-two";
    
  } else {
    btnData.className = "btn-get";
    btnState = 0;
   tabData.innerHTML="";
   return 100;  
}


  const markup = datiDellaTabella
    .map((el) => {
      return `
    <tr>
    <td>${el.id}</td>
    <td>${el.userId}</td>
    <td>${el.title}</td>
    </tr>
    `;
    })
    .join("");

  tabData.innerHTML = `<table>
  <tbody>
   ${markup}
  </tbody>
</table>`;
});

const getData = async function () {
  try {
    const res = await fetch(URL);
    const data = res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
