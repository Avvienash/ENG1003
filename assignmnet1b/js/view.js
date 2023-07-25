"use strict";

/*
* Name: view.js 
* Purpose: To create the main functions for view.html 
* Author: Avvienash A/L Jaganathan
* Last Modified: 29 April 2021
*/

// Task 12:

let index = retrive(STUDENT_INDEX_KEY);
let queueIndex = retrive(STUDENT_QUEUE_KEY);

let student = consultSession.getStudent(index,queueIndex);

document.getElementById("viewName").innerText = student._fullName;
document.getElementById("viewId").innerText = student._studentId;
document.getElementById("viewProblem").innerText = student._problem;