const btnElement = document.getElementById("btn");
const bdateElement = document.getElementById("b-date");
const resElement = document.getElementById("age-result");

function calculateAge() {
  const bdateValue = bdateElement.value;

  if (bdateValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(bdateValue);
    resElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

function getAge(bdateValue) {
  const currDate = new Date();
  const usersDate = new Date(bdateValue);

  const age = currDate.getFullYear() - usersDate.getFullYear();
  const month = currDate.getMonth() - usersDate.getMonth();

  if (month < 0 || (month === 0 && currDate.getDate() < usersDate.getDate())) {
    age--;
  }

  return age;
}
btnElement.addEventListener("click", calculateAge);
