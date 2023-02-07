const output = document.querySelector("#output");

for (let x = 0; x < 5; x++) {
  const el = document.createElement("div");
  output.append(el);

  const btn = document.createElement("button");
  btn.textContent = `Click Me ${x}`;
  el.append(btn);

  const div = document.createElement("div");
  div.style.transition = "opacity 1500ms";
  div.style.opacity = "1";
  div.textContent = `Counter ${x + 1}`;
  el.append(div);
  btn.addEventListener("click", () => {
    if (div.style.opacity === "1") {
      div.style.opacity = "0";
    } else {
      div.style.opacity = "1";
    }
  });
}
const fademe = document.querySelectorAll(".fader");
fademe.forEach((ele) => {
  ele.style.transition = "opacity 500ms";
  ele.style.opacity = "1";
  ele.addEventListener("click", (e) => {
    ele.style.opacity = "0";
  });
});
