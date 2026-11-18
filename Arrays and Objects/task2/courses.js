const courses = [
    { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
    { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
    { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
    { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
    { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 }
  ];
  
  const programmingCourses = courses.filter(
    (course) => course.category === "Programming"
  );
  
  const courseTitlesWithPrices = courses.map(
    (course) => `${course.title} — ${course.price} грн`
  );
  
  const courseWithId4 = courses.find((course) => course.id === 4);
  
  // Сортуємо копію, щоб не змінювати початковий масив.
  const coursesByStudentCount = [...courses].sort(
    (courseA, courseB) => courseB.students - courseA.students
  );
  
  function calculateAveragePrice(courseList) {
    if (courseList.length === 0) return 0;
  
    let totalPrice = 0;
  
    for (const course of courseList) {
      totalPrice += course.price;
    }
  
    return totalPrice / courseList.length;
  }
  
  console.log("Курси категорії Programming:", programmingCourses);
  console.log("Назви курсів і ціни:", courseTitlesWithPrices);
  console.log("Курс з id = 4:", courseWithId4);
  console.log("Курси за кількістю студентів:", coursesByStudentCount);
  console.log(`Середня ціна курсів: ${calculateAveragePrice(courses)} грн`);