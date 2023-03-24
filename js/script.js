//  Ralph Godkin
//  COMP 690 - Module 7 Assignment
//  ===============================

// GET ADD EMPLOYEE FORM TABLE AND EMPLOYEE LIST TABLE FROM THE DOM

const addEmpTable = document.getElementById("addForm"); 
const empTable = document.getElementById("employees");

// GET THE VALUES FROM THE TEXT BOXES
    addEmpTable.addEventListener('submit', (e) => {                             // LISTENS FOR SUBMIT BUTTON TO BE CLICKED

// PREVENT FORM SUBMISSION
    e.preventDefault();                                                         // PREVENT BROWSER DEFAULT EVENTS

// CREATE A COUNT FUNCTION TO DISPLAY NEXT TO EMPLOYEES HEADER
function empCountFunction() {                                                   // FUNCTION TO KEEP RUNNING COUNT OF EMPLOYEES 
        let empCount = empTable.getElementsByTagName("tr").length;
        let n = document.getElementById("empCount");
        n.textContent = (empCount - 1);    
        }

// GET THE INFORMATION ENTERED INTO THE FORM BY THE USER
        let id = document.getElementById("id").value
        let empName = document.getElementById("name").value
        let ext = document.getElementById("extension").value
        let email = document.getElementById("email").value
        let department = document.getElementById("department").value
    
// CREATE A new tr AND A td FOR EACH ITEM WITHIN THE ROW
        let newRow = document.createElement('tr')
        let newCell1 = document.createElement('td')
        let newCell2 = document.createElement('td')    
        let newCell3 = document.createElement('td')
        let newCell4 = document.createElement('td')
        let newCell5 = document.createElement('td')
        let newCell6 = document.createElement('td')

// INSERT THE EMPLOYEE DETAILS INTO THE td's
        newCell1.textContent = id ;
        newCell2.textContent = empName ;
        newCell3.textContent = ext ;
        newCell4.textContent = email ;
        newCell5.textContent = department ;
  
// CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement('button')
// ADD BOOTSTRAP CLASSES FOR THE BUTTON
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
// CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
        let textDelete = document.createTextNode('X')
// APPEND TEXT NODE TO DELETE BUTTON
        deleteBtn.appendChild(textDelete)

// POPULATE THE NEWLY CREATED CELLS INTO THE NEW ROW
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
    newRow.appendChild(newCell5);
    newRow.appendChild(deleteBtn)
    
// INSERT THE NEW ROW AT THE BOTTOM OF THE EMPLOYEES TABLE
    empTable.appendChild(newRow);

// CALL THE FUNCTION TO DISPLAY THE NUMBER OF EMPLOYEES
    empCountFunction();                                                         // DISPLAY THE NUMBER OF EMPLOYEES

// DELETE THE ROW (EMPLOYEE) TO BE REMOVED 
        deleteBtn.addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete this employee?')) {        // USER CONFIRMS WHETHER OR NOT TO DELETE EMPLOYEE
            var getRow = deleteBtn.parentNode; 
            getRow.parentNode.removeChild(getRow); 
// UPDATE THE EMPLOYEE COUNT IN THE TABLE HEADER TO REFLECT A DELETED EMPLOYEE
            empCountFunction();                                                 // UPDATE THE NUMBER OF EMPLOYEES
          }
        })

// RESET THE FORM
     document.getElementById("addForm").reset();

// SET FOCUS BACK TO THE ID TEXT BOX
        document.getElementById("id").focus();

});   

// =================  END  =======================