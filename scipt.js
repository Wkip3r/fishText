var dropList = $(".dropList");
dropList.hide();

  function showDropList() {
    dropList.show();
    dropList
        .mouseenter(function () {
          $(this).show();
        })
        .mouseleave(function () {
          $(this).hide();
        });
  }

