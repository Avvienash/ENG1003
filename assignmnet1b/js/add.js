"use strict";
/*
* Name: add.js 
* Purpose: To create the function (addStudents) needed for add.html
* Author: Avvienash A/L Jaganathan
* Last Modified: 29 April 2021
*/

// Task 6:
function addStudent()
{
    /* 
    Name: addStudent
    Purpose:  adding a student based on the user input provided
    Parameters: (No Parameters)
    Return: (No return value)
    */

    // get user input for name
    let fullnameRef = document.getElementById("fullName");
    let fullname = fullnameRef.value;

    let Error = document.getElementById("fullName_msg");
    Error.innerText = "";

    if(fullname == "")
    {
        Error.innerText = "Name invalid";
        return;
    }

    // get user input for problem
    let problemRef = document.getElementById("problem");
    let problem = problemRef.value;

    let problemError = document.getElementById("problem_msg");
    problemError.innerText = "";

    if(problem == "")
    {
        problemError.innerText = "Problem is Invalid";
        return;
    }

    // get user input for studentID
    let studentIdRef = document.getElementById("studentId");
    let studentId = studentIdRef.value;
    const regex = /^[1-3]{1}[0-9]{7}$/;
    
    let studentIdError = document.getElementById("studentId_msg");
    studentIdError.innerText = "";

    if(studentId == "" || studentId.match(regex) == null)
    {
        studentIdError.innerText = "Student Id is Invalid";
        return;
    }

    consultSession.addStudent(fullname,studentId,problem);
    update(APP_DATA_KEY,consultSession);

    alert("student has been added");
    window.location.replace("index.html");
    return
}