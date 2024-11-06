console.log('js');

document.addEventListener('DOMContentLoaded', function () {
  let addEmployee = [];
  let totalMonthlySalary = 0;

  document.querySelector('[data-testid="submitButton"]').addEventListener('click', function () {
    
    let objectToSend = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      Id: document.getElementById('employeeId').value,
      title: document.getElementById('title').value,
      annualSalary: document.getElementById('annualSalary').value,
    };

    let monthlySalary = objectToSend.annualSalary / 12;
    totalMonthlySalary += monthlySalary;


    addEmployee.push(objectToSend);
    console.log('Sending:', objectToSend);
    console.log('All Employees:', addEmployee);

   
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${objectToSend.firstName}</td>
      <td>${objectToSend.lastName}</td>
      <td>${objectToSend.Id}</td>
      <td>${objectToSend.title}</td>
      <td>$${objectToSend.annualSalary.toFixed(2)}</td>
    
    `;
    document.querySelector('#employeeTable tbody').appendChild(tableRow);

    
  

    axios.post('/employee', objectToSend)
      .then(function(response) {
        console.log('Back from POST:', response);
      })
   
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('employeeId').value = '';
    document.getElementById('title').value = '';
    document.getElementById('annualSalary').value = '';
  });
});
