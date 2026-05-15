// Swiperの設定
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // 画面幅に応じた設定
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  },

  loopAdditionalSlides: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// 商品ピックアップ
const productData = [
  { id: 1, category: "aksta", name: "アクリルキーホルダー", price: "1,200", img: "/img/CCFukuoka_63img/akkey/ak_ccf63_kuzuha.png" },
  { id: 2, category: "sticker", name: "ステッカー", price: "500", img: "/img/CCFukuoka_63img/sticker/stk_ccf63_tantei.png" },
  { id: 3, category: "3d", name: "3Dキーホルダー", price: "1,800", img: "/img/CCFukuoka_62img/keyring/key_ccf62_koogii8.jpg" },
  { id: 4, category: "badge", name: "缶バッジ", price: "600", img: "/img/CCFukuoka_63img/badge/bdg_ccf63_usanomito.png" },
  { id: 5, category: "aksta_stand", name: "アクリルスタンド", price: "1,500", img: "/img/CCFukuoka_63img/akusta/as_ccf63_runrun1.png" },
   { id: 1, category: "aksta", name: "アクリルキーホルダー", price: "1,200", img: "/img/CCFukuoka_63img/akkey/ak_ccf63_kuzuha.png" },
  { id: 2, category: "sticker", name: "ステッカー", price: "500", img: "/img/CCFukuoka_63img/sticker/stk_ccf63_tantei.png" },
  { id: 3, category: "3d", name: "3Dキーホルダー", price: "1,800", img: "/img/CCFukuoka_62img/keyring/key_ccf62_koogii8.jpg" },
  { id: 4, category: "badge", name: "缶バッジ", price: "600", img: "/img/CCFukuoka_63img/badge/bdg_ccf63_usanomito.png" },
  { id: 5, category: "aksta_stand", name: "アクリルスタンド", price: "1,500", img: "/img/CCFukuoka_63img/akusta/as_ccf63_runrun1.png" },
   { id: 1, category: "aksta", name: "アクリルキーホルダー", price: "1,200", img: "/img/CCFukuoka_63img/akkey/ak_ccf63_kuzuha.png" },
  { id: 2, category: "sticker", name: "ステッカー", price: "500", img: "/img/CCFukuoka_63img/sticker/stk_ccf63_tantei.png" },
  { id: 3, category: "3d", name: "3Dキーホルダー", price: "1,800", img: "/img/CCFukuoka_62img/keyring/key_ccf62_koogii8.jpg" },
  { id: 4, category: "badge", name: "缶バッジ", price: "600", img: "/img/CCFukuoka_63img/badge/bdg_ccf63_usanomito.png" },
  { id: 5, category: "aksta_stand", name: "アクリルスタンド", price: "1,500", img: "/img/CCFukuoka_63img/akusta/as_ccf63_runrun1.png" },
   { id: 1, category: "aksta", name: "アクリルキーホルダー", price: "1,200", img: "/img/CCFukuoka_63img/akkey/ak_ccf63_kuzuha.png" },
  { id: 2, category: "sticker", name: "ステッカー", price: "500", img: "/img/CCFukuoka_63img/sticker/stk_ccf63_tantei.png" },
  { id: 3, category: "3d", name: "3Dキーホルダー", price: "1,800", img: "/img/CCFukuoka_62img/keyring/key_ccf62_koogii8.jpg" },
  { id: 4, category: "badge", name: "缶バッジ", price: "600", img: "/img/CCFukuoka_63img/badge/bdg_ccf63_usanomito.png" },
  { id: 5, category: "aksta_stand", name: "アクリルスタンド", price: "1,500", img: "/img/CCFukuoka_63img/akusta/as_ccf63_runrun1.png" },
  

];

function renderZones() {
  const grids = {
    '3d': document.getElementById('grid_3d'),
    'aksta': document.getElementById('grid_aksta'),
    'sticker': document.getElementById('grid_sticker'),
    'badge': document.getElementById('grid_badge'),
    'aksta_stand': document.getElementById('grid_aksta_stand'),
  };

  Object.values(grids).forEach(g => { if(g) g.innerHTML = ''; });

  productData.forEach(item => {
    const targetGrid = grids[item.category];
    if (targetGrid) {
      const cardHtml = `
        <article class="asoviva_card">
          <div class="card_img_box">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="card_info">
            <h4 class="item_name">${item.name}</h4>
            <div class="price_tag"><small>¥</small>${item.price}</div>
          </div>
        </article>
      `;
      targetGrid.insertAdjacentHTML('beforeend', cardHtml);
    }
  });
}

document.addEventListener('DOMContentLoaded', renderZones);
// 商品のピックアップ