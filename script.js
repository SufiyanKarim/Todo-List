const inputBox = document.querySelector('#input-box')
const addBtn = document.querySelector('#btn-add')
const delBtn = document.querySelector('#dlt-btn')
const presentTask = document.querySelector('.task-present')


const createDiv = function(inputText){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('current-task');

    const inputContainer = document.createElement('input');
    inputContainer.setAttribute('type','checkbox');
    inputContainer.setAttribute('name','task');

    const label = document.createElement('label');
    label.textContent = inputText;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'x'

    taskContainer.appendChild(inputContainer);
    taskContainer.appendChild(label);
    taskContainer.appendChild(removeBtn);

    presentTask.appendChild(taskContainer);
}

addBtn.addEventListener('click',function(){
   const inputText = inputBox.value;
   createDiv(inputText);
   inputBox.value =  '';

   const removeButtons = document.querySelectorAll('.remove-btn');
   removeButtons.forEach(function(button){
     button.addEventListener('click',function(){
        const removeParent = button.parentElement;
        removeParent.remove();
     })
   })

   const checkBoxes = document.getElementsByName('task');

   delBtn.addEventListener('click',function(){
     checkBoxes.forEach(function(element){
       if(element.checked){
        const selectedParent = element.parentElement;
        selectedParent.remove();
       }
     });
   });
});


