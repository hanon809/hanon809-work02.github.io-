/*ハンバーガーボタンのアイコン.hamburger-btn*をクリックするたびに.menu-listと.hamburger-btn-lineにクラス名openを付けたり、無くしたりできるようにjsで命令を書いています*/
$(function () {
  $(".hamburger-btn").on("click", function () {
    // .hamburger-btnクラスをクリックすると、
    $(".menu-list , .hamburger-btn-line").toggleClass("open"); // メニューとハンバーガーボタンの線に.openを付与したり、消したりする（.toggleClass('クラス名')で）
  });
});

// フェードイン
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".fadein");
  const triggerHeight = window.innerHeight * 0.8; // ウィンドウの80%の高さで発火

  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;

    if (imageTop < triggerHeight) {
      image.style.opacity = 1;
      image.style.transform = "translateY(0)";
    }
  });
});