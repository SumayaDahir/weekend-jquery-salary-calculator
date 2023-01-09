$('document').ready(readyNow)

function readyNow(){
$('#submit-button').on("click", submitButton); 
$("#empInfo").on("click", "button", deleteEmployee);
$("#empInfo").on("click", () => $("#empInfo").empty());
sumOfEmployeeAnnualSalary = 0;
$('#total-annualsalary').text(sumOfEmployeeAnnualSalary);
}; 
let sumOfEmployeeAnnualSalary = 0;  

function submitButton( ){
     const newObj = {
         firstName : $('#employee-firstname').val(),
         lastName : $('#employee-lastname').val(),
         idNumber : $('#employee-idnumber').val(),
         jobTitle : $('#employee-jobtitle').val(),
         annualSalary : $('#employee-annualsalary').val()
     };

     console.log(newObj);
     $('#employee-firstname').val();
     $('#employee-lastname').val();
     $('#employee-idnumber').val();
     $('#employee-jobtitle').val();
     $('#employee-annualsalary').val('$' + $('#employee-annualsalary'));

     
     //let empRow = 'underTotal';
     if (Number(sumOfEmployeeAnnualSalary) > 20000) {
         //empRow = 'overTotal';
    $('#total-annualsalary').css('background-color', 'red');

     }
         $("#empInfo").append(
            `<tr class="${sumOfEmployeeAnnualSalary}">
               <td>${newObj.firstName}</td>
               <td>${newObj.lastName}</td>
               <td>${newObj.idNumber}</td>
               <td>${newObj.jobTitle}</td>
               <td>${newObj.annualSalary}</td>
               <td><button id="#empInfo">Delete</button></td>
              </tr>
              `
              );
  
sumOfEmployeeAnnualSalary += Number(newObj.annualSalary) 
let totalSalary = sumOfEmployeeAnnualSalary / 12
 $('#total-annualsalary').text(Number(totalSalary));           
    }
    
function deleteEmployee(event) {
    let count = $(event.target).closest('tr').find('.employeeFormInfo').text();
    sumOfEmployeeAnnualSalary -= Number(count);
 $('#total-annualsalary').text(Number(sumOfEmployeeAnnualSalary));

    $(event.target).closest("tr").remove();
    }


  
