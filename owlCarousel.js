$('.owl-carousel').owlCarousel({
    items: 3, // 一次顯示三張卡片
    loop: true, // 無限循環
    margin: 10, // 卡片間距
    nav: true, // 顯示導航箭頭
    dots: true, // 顯示導航點
    slideBy: 1, // 每次滑動一張
    responsive: {
        0: { items: 1 }, // 行動裝置顯示一張
        768: { items: 2 }, // 平板顯示兩張
        992: { items: 3 } // 桌面顯示三張
    }
});