/* 
משימה ראשונה:
תבנו טיימר,
 מאוד דומה למה שאנחנו משתמשים בו של גוגל,

  היוזר מכניס מספר (נגיד 20)

   והמערכת סופרת שניות מ20 למטה 
   (ומעדכנת בכל שניה את הhtml) 

משימה שניה:
ליצור שני שדות אינפוט (שם וציון) וכפתור.--
בכל לחיצה על הכנס נוצר אובייקט של סטודנט לתוך מערך--
 שמוצג בUI--
בונוס: ליצור כפתור שמציג רק תלמידים עם ציון מעל 80--
בונוס אקסטרה: ליצור כפתור שמציג תלמידים מעל ציון שהיוזר מכניס--
*/

// משימה ראשונה

const startTimerBtn = document.querySelector('.startTimerBtn');

startTimerBtn.addEventListener('click', function() {
  let numberInput = document.querySelector('.numberInput');
  let timerOutput = document.querySelector('.timerOutput');
  let startingTimeVar = +numberInput.value;

  setInterval(() => {
    if (startingTimeVar >= 0) {
      timerOutput.innerText = startingTimeVar--;
    }
  }, 1000);
});

// משימה שניה

const addStudentDataBtn = document.querySelector('.addStudentDataBtn');
let studentDataArrayOfObjects = [];

addStudentDataBtn.addEventListener('click', function() {
  const nameOfStudent = document.querySelector('.nameOfStudent');
  const gradeOfStudent = document.querySelector('.gradeOfStudent');
  const dataOutput = document.querySelector('.dataOutput');
  const gradesAbove80Btn = document.querySelector('.gradesAbove80Btn');
  const gradeLimitByUserInput = document.querySelector('.gradeLimitByUserInput');
  const gradeLimitByUserBtn = document.querySelector('.gradeLimitByUserBtn');
  const studentDataObject = {
    name: nameOfStudent.value,
    grade: +gradeOfStudent.value,
  };

  studentDataArrayOfObjects.push(studentDataObject);

  dataOutput.innerText = '';
  for (let index = 0; index < studentDataArrayOfObjects.length; index++) {
    let listItem = document.createElement('li');
    listItem.innerText = `Name: ${studentDataArrayOfObjects[index].name}, Grade: ${studentDataArrayOfObjects[index].grade}`;
    dataOutput.appendChild(listItem);

    gradesAbove80Btn.addEventListener('click', function() {
    if (studentDataArrayOfObjects[index].grade <= 80) {
        listItem.innerText = '';
      }
    });
    
    gradeLimitByUserBtn.addEventListener('click', function() {
    if (studentDataArrayOfObjects[index].grade <= +gradeLimitByUserInput.value) {
        console.log(+gradeLimitByUserInput.value);
        listItem.innerText = '';
      }
    });
  }
});