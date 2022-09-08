

const theBody = document.getElementById("body8");




// Dark DropDown Menu For Profile Button
const btn_dark = document.querySelector("#menu"),
  dark_tooltip = document.querySelector(".btn-dark .tooltip"),
  dark_menu_wrapper = document.querySelector(".btn-dark .wrapper"),
  dark_menu_bar = document.querySelector(".btn-dark .menu-bar"),
  dark_setting_drop = document.querySelector(".btn-dark .setting-drop"),
  dark_help_drop = document.querySelector(".btn-dark .help-drop"),
  dark_theme_drop = document.querySelector(".btn-dark .theme-drop"),
  // dark_setting_item = document.querySelector(".btn-dark .setting-item"),
  dark_theme_item = document.querySelector(".btn-dark .theme-item"),
  dark_help_item = document.querySelector(".btn-dark .help-item"),
  dark_setting_btn = document.querySelector(".btn-dark .back-setting-btn"),
  dark_theme_btn = document.querySelector(".btn-dark .back-theme-btn"),
  dark_help_btn = document.querySelector(".btn-dark .back-help-btn");
 




btn_dark.addEventListener('mouseover', function(){

  dark_menu_wrapper.classList.add("show");
  dark_tooltip.classList.add("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }

  

});
dark_tooltip.addEventListener('mouseover', function(){

  dark_menu_wrapper.classList.add("show");
  dark_tooltip.classList.add("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }

 
});
dark_menu_wrapper.addEventListener('mouseover', function(){

  dark_menu_wrapper.classList.add("show");
  dark_tooltip.classList.add("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }


  

});

btn_dark.addEventListener('mouseout', function(){

  dark_menu_wrapper.classList.remove("show");
  dark_tooltip.classList.remove("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }


});
dark_tooltip.addEventListener('mouseout', function(){

  dark_menu_wrapper.classList.remove("show");
  dark_tooltip.classList.remove("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }


});
dark_menu_wrapper.addEventListener('mouseout', function(){

  dark_menu_wrapper.classList.remove("show");
  dark_tooltip.classList.remove("show");
  if (!$(dark_menu_wrapper).is(":visible")) {
    dark_menu_bar.style.marginLeft = "0px";
    dark_setting_drop.style.display = "none";
    dark_help_drop.style.display = "none";
    dark_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    dark_menu_wrapper.style.height = "385px";
  }


});



// Settings Button
// dark_setting_item.onclick = () => {
//   dark_menu_bar.style.marginLeft = "-350px";
//   dark_menu_wrapper.style.height = "350px";
//   setTimeout(() => {
//     dark_setting_drop.style.display = "block";
//   }, 100);
// };
// dark_setting_btn.onclick = () => {
//   dark_menu_bar.style.marginLeft = "0px";
//   dark_setting_drop.style.display = "none";
//   dark_menu_wrapper.style.height = "385px";
// };

// Help Button
// dark_help_item.onclick = () => {
//   dark_menu_bar.style.marginLeft = "-350px";
//   dark_menu_wrapper.style.height = "300px";
//   setTimeout(() => {
//     dark_help_drop.style.display = "block";
//   }, 100);
// };
// dark_help_btn.onclick = () => {
//   dark_help_drop.style.display = "none";
//   dark_menu_bar.style.marginLeft = "0px";
//   dark_menu_wrapper.style.height = "385px";
// };

// Theme Button
dark_theme_item.onclick = () => {
  dark_menu_bar.style.marginLeft = "-350px";
  dark_menu_wrapper.style.height = "200px";
  setTimeout(() => {
    dark_theme_drop.style.display = "block";
  }, 100);
};
dark_theme_btn.onclick = () => {
  dark_menu_bar.style.marginLeft = "0px";
  dark_theme_drop.style.display = "none";
  dark_menu_wrapper.style.height = "385px";
};
// -------------------- End DOcument ----------------- >

// Dark DropDown Menu For Profile Button
const btn_light = document.querySelector(".btn-light .drop-btn"),
  light_tooltip = document.querySelector(".btn-light .tooltip"),
  light_menu_wrapper = document.querySelector(".btn-light .wrapper"),
  light_menu_bar = document.querySelector(".btn-light .menu-bar"),
  light_setting_drop = document.querySelector(".btn-light .setting-drop"),
  light_help_drop = document.querySelector(".btn-light .help-drop"),
  light_theme_drop = document.querySelector(".btn-light .theme-drop"),
  light_setting_item = document.querySelector(".btn-light .setting-item"),
  light_theme_item = document.querySelector(".btn-light .theme-item"),
  light_help_item = document.querySelector(".btn-light .help-item"),
  light_setting_btn = document.querySelector(".btn-light .back-setting-btn"),
  light_theme_btn = document.querySelector(".btn-light .back-theme-btn"),
  light_help_btn = document.querySelector(".btn-light .back-help-btn");

btn_light.onclick = () => {
  light_menu_wrapper.classList.toggle("show");
  light_tooltip.classList.toggle("show");
  if (!$(light_menu_wrapper).is(":visible")) {
    light_menu_bar.style.marginLeft = "0px";
    light_setting_drop.style.display = "none";
    light_help_drop.style.display = "none";
    light_theme_drop.style.display = "none";
    // menu_wrapper.style.height   = "435px";
    light_menu_wrapper.style.height = "385px";
  }
};

// Settings Button
light_setting_item.onclick = () => {
  light_menu_bar.style.marginLeft = "-350px";
  light_menu_wrapper.style.height = "350px";
  setTimeout(() => {
    light_setting_drop.style.display = "block";
  }, 100);
};
light_setting_btn.onclick = () => {
  light_menu_bar.style.marginLeft = "0px";
  light_setting_drop.style.display = "none";
  light_menu_wrapper.style.height = "385px";
};

// Help Button
light_help_item.onclick = () => {
  light_menu_bar.style.marginLeft = "-350px";
  light_menu_wrapper.style.height = "300px";
  setTimeout(() => {
    light_help_drop.style.display = "block";
  }, 100);
};
light_help_btn.onclick = () => {
  light_help_drop.style.display = "none";
  light_menu_bar.style.marginLeft = "0px";
  light_menu_wrapper.style.height = "385px";
};

// Theme Button
light_theme_item.onclick = () => {
  light_menu_bar.style.marginLeft = "-350px";
  light_menu_wrapper.style.height = "200px";
  setTimeout(() => {
    light_theme_drop.style.display = "block";
  }, 100);
};
light_theme_btn.onclick = () => {
  light_menu_bar.style.marginLeft = "0px";
  light_theme_drop.style.display = "none";
  light_menu_wrapper.style.height = "385px";
};
// -------------------- End DOcument ----------------- >
