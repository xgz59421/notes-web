$.fn.myAccordion = function () {
  // this.addClass("accordion");
  // this.children(":nth-child(2n+1)").addClass("title");
  // this.children(":nth-child(2n)").addClass("content fade");
  // this.children(":nth-child(2n)").first().addClass("in");

  this.addClass("accordion")
    .children(":nth-child(2n+1)")
    .addClass("title")
    .next()
    .addClass("content fade")
    .first()
    .addClass("in");

  $(".title").click(function () {
    var $next = $(this).next();
    var $others = $(this).siblings(".content");
    if ($next.hasClass("in")) {
      $next.removeClass("in");
    } else {
      $others.removeClass("in");
      $next.addClass("in");
    }
  })
}