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
    let sumOfEmployeeAnnualSalary = 0;   
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
     $('#employee-annualsalary').val();
     
     if (Number(newObj.sumOfEmployeeAnnualSalary) > 20000) {
        $('#total-monthly-cost').css('background-color', 'red');
     }
         $("#empInfo").append(
            `<tr class="${empRow}">
               <td>${newObj.firstName}</td>
               <td>${newObj.lastName}</td>
               <td>${newObj.idNumber}</td>
               <td>${newObj.jobTitle}</td>
               <td>${newObj.annualSalary}</td>
               <td><button id="#empInfo">Delete</button></td>
              </tr>
              `
              );

sumOfEmployeeAnnualSalary += Number(newObj.annualSalary.sumOfEmployeeAnnualSalary);
 $('#total-annualsalary').text(Number(sumOfEmployeeAnnualSalary));           
      
    }
    
function deleteEmployee(event) {
    /*let count = $(event.target).closest('tr').find('h3').text();
    sumOfEmployeeAnnualSalary -= Number(count);
    $('#total-annualsalary').text(Number(sumOfEmployeeAnnualSalary));
    */
    $(event.target).closest("tr").remove();
    }



