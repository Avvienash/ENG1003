"use strict";
/*
* Name: main.js 
* Purpose: To create the main functions for index.html 
* Author: Avvienash A/L Jaganathan
* Last Modified: 29 April 2021
*/

//Task 8;
function view(index,queueIndex)
{
    /* 
    Name: view
    Purpose:  passing the data in the parameters provided to the view.html
    Parameters: inndex and queueIndex
    Return: (No return value)
    */
    localStorage.setItem(STUDENT_INDEX_KEY,JSON.stringify(index));
    localStorage.setItem(STUDENT_QUEUE_KEY,JSON.stringify(queueIndex));
    window.location.replace("view.html");
    return;
}


// Task 7:
function liveTime()
{
  /* 
  Name: liveTime
  Purpose: show the current time (time only, no date) on the HTML Web page
  Parameters: (No Parameters)
  Return: (No Return Value) Updates the current the time on the Web page
  */
  let liveTimeRef = document.getElementById("currentTime"); // create ref
  let today = new Date();
  let livetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); // get live time

  liveTimeRef.innerText = livetime; // update in span

}

// Task 10:
function display(data)
{
    /* 
    Name: display
    Purpose: display the current queue status to the user
    Parameters: data, which is the queue data
    Return: (No return value)
    */
    let outputref = document.getElementById("queueContent");
    outputref.innerHTML = "";
    let output = ``;

    for (let i = 0; i < 2; i++) 
    {
        output += `<ul class="mdl-list">
        <h4>Queue {i}</h4>`;
        
        for (let j = 0; j < data[i].length; j++) 
        {
            output += `<li class="mdl-list__item mdl-list__item--three-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons  mdl-list__item-avatar">person</i>
                                    <span>{data[i][j]._fullname}</span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" onclick="view({i},{j})"><i
                                            class="material-icons">info</i></a>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" onclick="markDone({i},{j})"><i
                                            class="material-icons">done</i></a>
                                </span>
                            </li>`;
            
        }

        output += `</ul>`;
    }
    outputref.innerHTML += output; // update inner html
    return;
}


// Task 9:
function markDone(index,queueIndex)
{
    /* 
    Name: markDone
    Purpose: mark a student as done
    Parameters: inndex and queueIndex
    Return: (No return value)
    */
    confirm("Are you sure you want mark this student as done:" + consultSession.student(index,queueIndex));
    consultSession.removeStudent(index,queueIndex);
    display(consultSession.queue);
    return;
}