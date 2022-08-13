// const counterPlusBtn = document.querySelector(".counter-plus");
// const counterMinusBtn = document.querySelector(".counter-minus");
// const counterResetBtn = document.querySelector(".counter-reset");
// let counterNumber = document.querySelector(".counter-number");
// let count = 0;

// const updateCounter = () => {
//     counterNumber.textContent = count;
// };

// counterPlusBtn.addEventListener("click", () => {
//     count++;
//     updateCounter();
// });

// counterMinusBtn.addEventListener("click", () => {
//     count--;
//     updateCounter();
// });

// counterResetBtn.addEventListener("click", () => {
//     count = 0;
//     updateCounter();
// });

// برنامه بالا به روش دیگر
const btns = document.querySelectorAll(".btn");
let counterNumber = document.querySelector(".counter-number");
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;
        // شامل المنتی است که رویداد رو به اون نسبت دادیم currentTarget
        if (style.contains("counter-plus")) {
            count++;
        } else if (style.contains("counter-minus")) {
            count--;
        } else {
            count = 0;
        }
        counterNumber.textContent = count;
    });
});
