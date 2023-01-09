$("document").ready(readyNow);
// Create an on ready function

function readyNow() {
  // set up click handlers
  $("#submit-button").on("click", submitButton);
  $("#empInfo").on("click", "button", deleteEmployee);
  // create a clear table button to clear employees data
  $("#clear").on("click", () => $("#empInfo").empty());
  sumOfEmployeeAnnualSalary = 0;
  $("#total-annualsalary").text(sumOfEmployeeAnnualSalary);
}

// create a global variable for the annual salary and assign it to 0
let sumOfEmployeeAnnualSalary = 0;

// Create a function for the submit button
function submitButton() {
  //create new object that takes in the values of the employees information
  const newObj = {
    firstName: $("#employee-firstname").val(),
    lastName: $("#employee-lastname").val(),
    idNumber: $("#employee-idnumber").val(),
    jobTitle: $("#employee-jobtitle").val(),
    annualSalary: $("#employee-annualsalary").val(),
  };

  console.log(newObj);
  // clear inputs
  $("#employee-firstname").val("");
  $("#employee-lastname").val("");
  $("#employee-idnumber").val("");
  $("#employee-jobtitle").val("");
  $("#employee-annualsalary").val("");

  // If statement that will be used to change the color
  // Of the Total Monthly salary if it goes over 20,000

  // Append Employee information onto the DOM
  $("#empInfo").append(
    `<tr class="${sumOfEmployeeAnnualSalary}">
               <td>${newObj.firstName}</td>
               <td>${newObj.lastName}</td>
               <td>${newObj.idNumber}</td>
               <td>${newObj.jobTitle}</td>
               <td class="salary">${newObj.annualSalary}</td>
               <td><button id="#empInfo">Delete</button></td>
              </tr>
              `
  );
  // Create a calculation of the employees annual salary and divide it by 12
  sumOfEmployeeAnnualSalary += Number(newObj.annualSalary) / 12;
  $("#total-annualsalary").text(Number(sumOfEmployeeAnnualSalary));
  if (Number(sumOfEmployeeAnnualSalary) > 20000) {
    $("#total-annualsalary").css("background-color", "red");
  }
}

// this function is used to delete the information on the DOM
function deleteEmployee(event) {
  let count = $(event.target).closest("tr").find(".salary").text();
  sumOfEmployeeAnnualSalary -= Number(count) / 12;
  $("#total-annualsalary").text(Number(sumOfEmployeeAnnualSalary));

  // Select the button that was clicked and find the row that it's in
  // then remove that row
  $(event.target).closest("tr").remove();
}
