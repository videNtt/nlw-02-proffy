// procurar o botão Novo Horário
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)


// executar uma ação
function cloneField() {
  // duplicar os campos
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

  // procurar os campos
  const fields = newFieldContainer.querySelectorAll("input")

  // limpar os campos
  fields.forEach(function(field) {
    field.value = ""
  })

  // colocar na página
  document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
  