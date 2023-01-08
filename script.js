$('document').ready(readyNow)

function readyNow(){
    appendDOM();
$('#submit-button').on("click", submitButton);
    
}

function appendDOM(){
    $("#empInfo").append(
        `<tr>
           <td>${firstName}</td>
           <td>${lastName}</td>
           <td>${idNumber}</td>
           <td>${jobTitle}</td>
           <td>${annualSalary}</td>
          </tr>`);
          }


function submitButton(){
    let firstName = $('#employee-firstname').val();
    let lastName = $('#employee-lastname').val();
    let idNumber = $('#employee-idnumber').val();
    let jobTitle = $('#employee-jobtitle').val();
    let annualSalary = $('#employee-annualsalary').val();
}

function addEmployeesInfo(firstName, lastName, idNumber, jobTitle, annualSalary){
    console.log(`Employee information ${firstName} ${lastName} ${idNumber}  ${jobTitle}  ${annualSalary}`);

}