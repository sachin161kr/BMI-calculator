const height = document.querySelector(".height");
const weight = document.querySelector(".weight");

const result1 = document.querySelector(".result1");

const result2 = document.querySelector(".result2");

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("mouseover", () => {
  console.log("hey");
  btn.classList.add("redClass");
});

btn.addEventListener("mouseout", () => {
  btn.classList.remove("redClass");
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let h = height.value / 100;
  let w = weight.value;

  let bmi = w / (h * h);

  console.log(bmi);

  if (bmi < 18.5) {
    console.log("c1");
    output.style.color = "blue";
    output.innerHTML = `Your BMI is ${bmi.toFixed(
      2
    )} (underweight) , Normal BMI is between 18.5 to 24.9`;

    result1.innerHTML = `
        <div>
          <ul>
            <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
            <li>A decrease in immune function</li>
            <li>Growth and development issues, particularly in children and teenagers</li>
            <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
            <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
          </ul>
        </div>
      ;`;

    result1.classList.remove("hide");
    result2.classList.add("hide");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("c2");
    output.style.color = "green";
    output.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Normal)`;
    result1.classList.add("hide");
    result2.classList.add("hide");
  } else {
    console.log("c3");
    output.style.color = "red";
    output.innerHTML = `Your BMI is ${bmi.toFixed(
      2
    )} (overweight) , Normal BMI is between 18.5 to 24.9`;

    result2.innerHTML = `
        <div >
          <ul>
            <li>High blood pressure</li>
            <li>Type II diabetes</li>
            <li>Coronary heart disease</li>
            <li>Stroke</li>
            <li>Gallbladder disease</li>
            <li>
              Mental illnesses such as clinical depression, anxiety, and others
            </li>
          </ul>
        </div>
      ;`

    result1.classList.add("hide");
    result2.classList.remove("hide");
  }
});
