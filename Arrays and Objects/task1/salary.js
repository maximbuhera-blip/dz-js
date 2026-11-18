const employees = [
    { name: "Олег", hours: 160, rate: 200 },
    { name: "Марія", hours: 145, rate: 250 },
    { name: "Іван", hours: 180, rate: 180 },
    { name: "Анна", hours: 170, rate: 220 }
  ];
  
  function calculateSalary(hours, rate) {
    const baseSalary = hours * rate;
    return hours > 160 ? baseSalary * 1.1 : baseSalary;
  }
  
  function calculatePayroll(employees) {
    let total = 0;
  
    for (const employee of employees) {
      total += calculateSalary(employee.hours, employee.rate);
    }
  
    return total;
  }
  
  for (const employee of employees) {
    const salary = calculateSalary(employee.hours, employee.rate);
    const bonusText = employee.hours > 160 ? " (з бонусом)" : "";
    console.log(`${employee.name}: ${salary} грн${bonusText}`);
  }
  
  console.log(`Загальні витрати: ${calculatePayroll(employees)} грн`);