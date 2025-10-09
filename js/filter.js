const filterButtons = document.querySelectorAll("#selections button");
const pencils = document.querySelectorAll(".features-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    /* Remove active from all buttons
    ilterButtons.forEach(btn => btn.classList.remove("active"));
    // Add active to clicked button
    button.classList.add("active"); */

    const filter = button.getAttribute("data-filter");
    pencils.forEach((item) => {
      if (filter === "all") {
        item.classList.remove("hide");
      } else {
        if (item.classList.contains(filter)) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      }
    });
  });
});
