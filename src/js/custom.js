//Tabs

$(".tab").on("click", function (e) {
  e.preventDefault();
  $(".tab, .panel").removeClass("active");
  $(this)
    .add(
      "#" +
        $(this)
          .attr("id")
          .replace(/\s*tab\s*/, "panel")
    )
    .addClass("active");
  $(this).focus();
});
