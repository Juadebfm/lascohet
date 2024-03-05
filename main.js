document.addEventListener("DOMContentLoaded", () => {
  const menu_toggle = document.getElementById("menu_toggle");
  menu_toggle.addEventListener("click", () => {
    const mobile_nav = document.getElementById("sm_ul");
    console.log("clicked");
    mobile_nav.classList.toggle("show_menu");
  });
});
