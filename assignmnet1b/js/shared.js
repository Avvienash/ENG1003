"use strict";
/*
* Name: shared.js 
* Purpose: To create classes for students and sessions and related functions
* Author: Avvienash A/L Jaganathan
* Last Modified: 29 April 2021
*/
console.log("The script shared.js has been run");

// Keys for localStorage
const STUDENT_INDEX_KEY = "studentIndex";
const STUDENT_QUEUE_KEY = "queueIndex";
const APP_DATA_KEY = "consultationAppData";

// TASK 1 :

// Create a student class
class student
{
    constructor(name,id,problem)
    {
        this._fullName = name;
        this._studentId = id;
        this._problem = problem;
    }

    get fullName() // returns the student's fullname
    {
        return this._fullName;
    }

    get studentId() // returns the students's ID 
    {
        return this._studentId;
    }

    get problem() // returns the students's problem description
    {
        return this._problem;
    }

    fromData(data) //restoring data state retrieved from local storage
    {
        this._fullName = data._fullName;
        this._studentId = data._studentId;
        this._problem = data._problem;
    }

}

// create a Session's class
class session
{
    constructor()
    {
        this._startTime = new Date();
        this._queue = [];
    }

    get startTime() // returns current time as a string
    {
        return this._startTime.toLocaleTimeString() + " " + this._startTime.toLocaleDateString();
    }

    get queue() // returns the queue array
    {
        return this._queue;
    }

    addSubQueue() // creates a subqueue in the array
    {
        this._queue.push([]);
        return;
    }

    addStudent(name,id,problem) // adding a new student to the shortest queue for the session
    {
        let min = 0;
        for (let i = 0; i < this._queue.length; i++)
        {
            if (this._queue[i].length < this._queue[min].length)
            {
                min = i;
            }
        }
        this._queue[min].push(student(name,id,problem));
        return;
    }

    removeStudent(sIndex,qIndex) // remove student based on Queue Index and Subqueue Index
    {
        this._queue[qIndex].splice(sIndex,1);
        return;
    }

    getStudent(sIndex,qIndex,) // returns students based on Queue Index and Subqueue Index
    {
        return
        {
            _fullName : this._queue[qIndex][sIndex]._fullName;
            _studentId : this._queue[qIndex][sIndex]._studentId;
            _problem : this._queue[qIndex][sIndex]._problem;        
        }
    }

    fromData(data) //restoring data state retrieved from local storage
    {
        this._startTime = data._startTime;
        this._queue = data._queue;        
    }
}

// Task 2:
function check(key)
{
    /* 
    Name: Check
    Purpose:  check if data exists in localStorage
    Parameters: Key for item in localStorage
    Return: true if there is data, and false if there is no data
    */
    if (localStorage.getItem(key))
    {
        return false;
    } else {
        return true;
    }
}

// Task 3 :
function update(key,data)
{
    /* 
    Name: Update
    Purpose: update data into localStorage
    Parameters: Key and data to be stored
    Return: (No return value)
    */
    localStorage.setItem(key,JSON.stringify(data));
    return
}

// Task 4:
function retrive(key)
{
    /* 
    Name: Retrive
    Purpose: retrieve data from localStorage
    Parameters: Key for item in localStorage
    Return: the data(Object) from localStorage
    */
    let data = localStorage.getItem(key);
    try
    {
      data = JSON.parse(data);
    }
    catch (e)
    {
      console.log(e);
    }
    finally
    {
      return data;
    }
}

// Task 5:

let consultSession = new session(); // create a new session
console.log("The Session has been created");
if (check(APP_DATA_KEY))
{
    consultSession.fromData(retrive(APP_DATA_KEY));    
} else {
    consultSession.addSubQueue();
    consultSession.addSubQueue();
    update(APP_DATA_KEY,consultSession);
}