$('document').ready(readyNow)

function readyNow(){
    appendDOM();
$('#submit-button').on("click", submitButton);   
}
const employeeInfo = [];

function appendDOM(){
    $("#empInfo").empty()
    for (let i = 0; i < employeeInfo.length; i++) {
        let el = employeeInfo[i];
        
    $("#empInfo").append(
        `<tr>
           <td>${el.firstName}</td>
           <td>${el.lastName}</td>
           <td>${el.idNumber}</td>
           <td>${el.jobTitle}</td>
           <td>${el.annualSalary}</td>
          </tr>`);
          } }


function submitButton(){
   let firstName = $('#employee-firstname').val();
    let lastName = $('#employee-lastname').val();
    let idNumber = $('#employee-idnumber').val();
    let jobTitle = $('#employee-jobtitle').val();
    let annualSalary = $('#employee-annualsalary').val();

    addEmployeesInfo(firstName, lastName, idNumber, jobTitle, annualSalary)
    $('#employee-firstname').val();
    $('#employee-lastname').val();
    $('#employee-idnumber').val();
    $('#employee-jobtitle').val();
    $('#employee-annualsalary').val();
    appendDOM()
}

function addEmployeesInfo(firstName, lastName, idNumber, jobTitle, annualSalary){
    console.log(`Employee information ${firstName} ${lastName} ${idNumber}  ${jobTitle}  ${annualSalary}`);
const newObj = {
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    jobTitle: jobTitle,
    annualSalary: annualSalary
}
employeeInfo.push(newObj);
}
