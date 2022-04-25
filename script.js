// GLOBAL
const iHeader = document.querySelector('#header')
const iFuncionamento = document.querySelector('#funcionamento')
const iTextoTarefa = document.querySelector('#texto-tarefa')
const iListaTarefas = document.querySelector('#lista-tarefas')
const iCriarTarefa = document.querySelector('#criar-tarefa')


// MAIN
iHeader.innerHTML = "Minha Lista de Tarefas"
iFuncionamento.innerHTML = "Clique duas vezes em um item para marcá-lo como completo"


// FUNCTIONS
function createItem()
{

  const child = document.createElement('li')
  
  iListaTarefas.appendChild(child)
  child.innerHTML = iTextoTarefa.value
  child.className = 'list-object'
  iTextoTarefa.value = null

  window.cObjetoLista = child
  window.cObjetoLista.addEventListener('click', changeItem) 
}

function changeItem(origin)
{

  const element = document.querySelectorAll('.list-object')

  for (let index = 0; index < element.length; index += 1)
  {

    element[index].className = 'list-object'
  }

  origin.target.className = 'list-object selected'

}


// EVENT LISTENERS
iCriarTarefa.addEventListener('click', createItem)

