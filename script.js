// GLOBAL
const iHeader = document.querySelector('#header')
const iFuncionamento = document.querySelector('#funcionamento')
const iTextoTarefa = document.querySelector('#texto-tarefa')
const iListaTarefas = document.querySelector('#lista-tarefas')
const iCriarTarefa = document.querySelector('#criar-tarefa')
const iApagarTudo = document.querySelector('#apaga-tudo')
const iConcluir = document.querySelector('#remover-finalizados')
const iSalvar = document.querySelector('#salvar-tarefas')
const iRemover = document.querySelector('#remover-selecionado')
const iCima = document.querySelector('#mover-cima')
const iBaixo = document.querySelector('#mover-baixo')


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
  window.cObjetoLista.addEventListener('dblclick', finishItem)
}


function changeItem(origin)
{

  const element = document.querySelectorAll('.list-object')

  for (let index = 0; index < element.length; index += 1)
  {

    if (element[index].className.includes('selected'))
    {

      element[index].className = 'list-object'
    }
  }
  

  if (origin.target.className.includes('completed'))
  {

    origin.target.className = 'list-object selected completed'
  }
  else if (origin.target.className.includes('selected completed'))
  {

    origin.target.className = 'list-object completed'
  }
  else
  {

    origin.target.className = 'list-object selected'
  }
}


function finishItem(origin)
{

  origin.target.className = 'list-object completed'

  origin.target.removeEventListener('dblclick', finishItem)
  origin.target.addEventListener('dblclick', unfinishItem)
}


function unfinishItem(origin)
{

  origin.target.className = 'list-object'

  origin.target.removeEventListener('dblclick', unfinishItem)
  origin.target.addEventListener('dblclick', finishItem)
}

function deleteEverything()
{

  const element = document.querySelector('#lista-tarefas')

  while (element.lastChild)
  {

    element.removeChild(element.lastChild)
  }
}

function deleteFinished()
{

  const element = document.querySelectorAll('#lista-tarefas .completed')

  for (let index = 0; index < element.length; index += 1)
  {

    element[index].remove()
  }
}

function deleteSelected()
{

  const element = document.querySelectorAll('#lista-tarefas .selected')

  if (element)
  {

  element[0].remove()
  }
}

function saveEverything()
{

  const storage = localStorage
  const element = document.querySelector('#lista-tarefas').innerHTML


  storage.setItem('tarefas', element)
}



window.onload = iListaTarefas.innerHTML = localStorage.getItem('tarefas')


// EVENT LISTENERS
iCriarTarefa.addEventListener('click', createItem)
iApagarTudo.addEventListener('click', deleteEverything)
iConcluir.addEventListener('click', deleteFinished)
iSalvar.addEventListener('click', saveEverything)
iRemover.addEventListener('click', deleteSelected)
