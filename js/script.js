//  Ralph Godkin
//  COMP 690 - Module 7 Assignment
//  ===============================

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

const addEmpTable = document.getElementById("addForm");                           // Creates the variable myForm from the HTML form
const empTable = document.getElementById("employees");

// GET THE VALUES FROM THE TEXT BOXES
addEmpTable.addEventListener('submit', (e) => {                                  // JS listens for the Submit btn to be clicked

    // PREVENT FORM SUBMISSION
    e.preventDefault();    

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
        let empCount = empTable.getElementsByTagName("tr").length;
        console.log(`Number of TR's currently: ${empCount}`)
        let counter = document.getElementById("empCount");
        counter.textContent = empCount;    
        console.log("Row Count: " + empCount ) 


                                                       // Stop the submit from taking on browser default functions
        let id = document.getElementById("id").value                        // The arrow function dictates what to do with the form
        let empName = document.getElementById("name").value
        let ext = document.getElementById("extension").value                      // Retrieve the HTML for entries and assign them to variables
        let email = document.getElementById("email").value                  // variables are within the function
        let department = document.getElementById("department").value
    console.log("ID: " + id + "\nName: " + empName + "\nExtension: " + ext + "\nemail: " + email + "\nDepartment: " + department);
                                                                      // The retrieved HTML form contents are presented
    
    
// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let newRow = document.createElement('tr')
    newRow.setAttribute("rowCount", empCount);
    let newCell1 = document.createElement('td')
    let newCell2 = document.createElement('td')    
    let newCell3 = document.createElement('td')
    let newCell4 = document.createElement('td')
    let newCell5 = document.createElement('td')
    let newCell6 = document.createElement('td')

// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    newCell1.textContent = id ;
    newCell2.textContent = empName ;
    newCell3.textContent = ext ;
    newCell4.textContent = email ;
    newCell5.textContent = department ;
  
// CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
// ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
// CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')
// APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)

// POPULATE THE CELLS IN THE NEW ROW
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
    newRow.appendChild(newCell5);
    newRow.appendChild(deleteBtn)

    
// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    empTable.appendChild(newRow);

// REMOVE THE SELECTED TR 
        empTable.addEventListener('click', (e) => {
        console.log(`This is the row I'm in as I delete: ${empCount}`)
        empTable.deleteRow(empCount - 1);
         })

// RESET THE FORM
// document.getElementById("addForm").reset();

// SET FOCUS BACK TO THE ID TEXT BOX
document.getElementById("id").focus();

// UPDATE THE COUNTER
empCount = (empCount + 1);

});   