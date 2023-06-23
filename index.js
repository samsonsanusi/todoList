//Target html element
const userInput = document.getElementById('userInput');
const addTodo = document.getElementById('addTodo');
const ul = document.querySelector("ul")
const item = document.querySelector('li')
const response = document.querySelector(".response")
const mainContainer = document.getElementById('mainContainer')
const firstIntro = document.querySelector('.firstIntro');
const secondIntro = document.querySelector('secondIntro')


//check for the length of the value entered
const inputLength = () =>{
  return userInput.value.length;
}

//checks for the list of items
// const listLength = () =>{
//   return item.length;
// }

//create li in ul element 
const createLisElement = () =>{
  // preventDefault(e)
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(userInput.value))
  ul.appendChild(li)
  userInput.value = ''
  // strike through
  //it adds the done style once because it's in this function

  const crossOut = () => {
    li.classList.toggle('done')
  }
  li.addEventListener('click', crossOut)

  // Start add Delete Button
  let dBtn = document.createElement('button')
  dBtn.appendChild(document.createTextNode('X'))
  li.appendChild(dBtn)
  const deleteItem = () => {
    li.classList.add('delete')
  }
  dBtn.addEventListener('click', deleteItem)
  // End add Delete Button
}

const addListAfterClick = () =>{
  if (inputLength() > 0) {
     createLisElement();
  }else if (inputLength() === ""){
      alert("Enter valid Item")
  }
}
//this checks if you click the Enter button
const addListAfterKeyPress = (e) =>{
  if(inputLength() > 0 && e.which === 13){
    createLisElement();
  }
}

addTodo.addEventListener('click', addListAfterClick);

userInput.addEventListener('keypress', addListAfterKeyPress);

localStorage.setItem('keyName', inputLength)