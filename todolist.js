function addTask(){
     var taskInput=document.getElementById("taskinput").value
     var taskList=document.getElementById("tasklist")
     if(taskInput==""){
        alert("Please enter the task..")
        return
     }
     var listItems=document.createElement('li')
     listItems.innerHTML=taskInput
     taskList.appendChild(listItems)
     listItems.className="list"

    var buttonContainer= document.createElement('div')
    listItems.appendChild(buttonContainer)
    buttonContainer.className="task-button"

    var deleteButton= document.createElement('button')
    buttonContainer.appendChild(deleteButton)
    deleteButton.innerHTML="Delete"

     deleteButton.onclick=function(){
        taskList.removeChild(listItems)
     }


    var completeButton= document.createElement('button')
    buttonContainer.appendChild(completeButton)
    completeButton.innerHTML="Complete"
    completeButton.onclick=function(){
        listItems.classList.toggle('complete') 
        


        taskInput.value=""
    }

    

}