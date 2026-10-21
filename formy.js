(function () {
  var f = document.querySelector("form[target=result_frame]"),
      fr = document.getElementById("result_frame"),
      ok = document.getElementById("ok"),
      t = document.getElementById("ok_text"), sent = false;
  f.addEventListener("submit", function () { sent = true; });
  fr.addEventListener("load", function () {
    if (!sent) return;
    sent = false;
    t.textContent = f.getAttribute("data-ok");
    ok.hidden = false;
    ok.scrollIntoView({ behavior: "smooth" });
  });
})();
