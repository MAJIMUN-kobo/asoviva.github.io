// カテゴリ別の定義
const categories = [
  { id: 'keychain', name: 'ACRYLIC KEYCHAIN', icon: 'fa-camera', color: '#ff66aa' },
  { id: 'sticker', name: 'STICKER', icon: 'fa-note-sticky', color: '#66ccff' },
  { id: 'badge', name: 'BADGE', icon: 'fa-certificate', color: '#ffbb33' },
  { id: 'acrylic_stand', name: 'ACRYLIC STAND', icon: 'fa-chess-knight', color: '#44cc88' },
  {id: 'poster', name: 'POSTER CARD', icon: 'fa-list', color: '#999' },
  { id: 'other', name: 'OTHER GOODS', icon: 'fa-bag-shopping', color: '#b366ff' },
 
];

// 商品データ
const productsDB = [

   // アクリルキーホルダー↓
   {category: 'keychain', name: 'キーホルダーA', price: 500, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/akkey/ak_ccf63_hihachi1.png' },
   {category: 'keychain', name: 'キーホルダーB', price: 500, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/akkey/ak_ccf63_hachi1.png'},
   {category: 'keychain', name: 'キーホルダーC', price: 500, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/akkey/ak_ccf63_leaf1.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_kuzuha.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 300, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_hamfish1.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_ririmu1.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_runrun.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_sango1.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_sherin1.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63long_charm1.png'},
   // アクリルキーホルダー↑

   // ステッカー↓
   {category: 'sticker', name: 'ステッカーA', price: 100, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/sticker/stk_ccf63_hati.png'},
   {category: 'sticker', name: 'ステッカーB', price: 100, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/sticker/stk_ccf63_hihachi1.PNG'},
   {category: 'sticker', name: 'ステッカーC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/sticker/stk_ccf63_kuzuha1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_leaf1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_masiro1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_masiro2.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_masiro3.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito2.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito3.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito4.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_ririmu1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_ririmu2.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_runrun1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_runrun2.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_runrun3.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sango1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin1.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin2.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin3.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin4.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_tantei.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_tantei2.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/stk_ccf64_kagami02.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/stk_ccf64_tyaika02.png'},
   {category: 'sticker', name: 'ステッカーD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/stk_ccf64yasiro01.png'},

   // ステッカー↑
   // ステッカー↑


   // 缶バッジ↓
   {category: 'badge', name: '缶バッジA', price: 100, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/badge/bdg_ccf63_gaotti.png'},
   {category: 'badge', name: '缶バッジB', price: 100, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hachi1.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_harumottto1.png'},
   {category: 'badge', name: '缶バッジD', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hayatopusu.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hibati1.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hibati2.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hibati3.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_kanae1.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun2.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun3.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun4.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrunoukan1.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_usanomito.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63kuzuha1.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_kagami01.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_tyaika01.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_yasiro02.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/イッテツ.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ウェン.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/カゲツ.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/マナ.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ライ.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/リト.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ルべ.png'},
   {category: 'badge', name: '缶バッジC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ロウ.png'},
   
   // 缶バッジ↑


   // アクリルスタンド↓
   {category: 'acrylic_stand', name: 'アクリルスタンドA', price: 800, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/akusta/as_ccf63_runrun1.png'},
   {category: 'acrylic_stand', name: 'アクリルスタンドB', price: 800, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/akusta/as_ccf63_ririmu1.png'},
   // アクリルスタンド↑

   // ポスターカード
   {category: 'poster', name: 'ポスターカードA', price: 200, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_64img/poster/サニー・ブリスコー  ポストカード.png'},
   {category: 'poster', name: 'ポスターカードB', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/レン ゾット ポストカード.png'},
   {category: 'poster', name: 'ポスターカードB', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/不破湊 ポストカード.png'},
   {category: 'poster', name: 'ポスターカードB', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/家に来たよ🎶渡会雲雀 ポストカード.png'},
   {category: 'poster', name: 'ポスターカードB', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/渡会雲雀ポストカード.png'},
   {category: 'poster', name: 'ポスターカードB', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/雑キカード.jpg'},
   {category: 'poster', name: 'ポスターカードB', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/雑キ共通.jpg'},
   
   // ポスターカード


   // その他グッズ↓
   {category: 'other', name: 'グッズA', price: 0, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/setuna_img/game_setuna1.png'},
   {category: 'other', name: 'グッズB', price: 0, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/runrun_img/title_logo_img.png'},
   {category: 'other', name: 'グッズD', price: 500, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/runrun_img/game_runrun2.jpeg'},
   {category: 'other', name: 'グッズD', price: 500, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/setuna_img/game_setuna2.jpeg'},
   {category: 'other', name: 'グッズC', price: 1200, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_62img/sundry_goods/Conceptual_image.png'},
   {category: 'other', name: 'グッズD', price: 1200, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_62img/sundry_goods/smartphone_strap_omote.png'},
   {category: 'other', name: 'グッズD', price: 1200, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_62img/sundry_goods/smartphone_strap_ura.png'},
   // その他グッズ↑
];


const categoryListEl = document.getElementById('category_list');
const productsContainerEl = document.getElementById('products_container');

// サイドバーのカテゴリメニューを表示
function renderSidebar() {
   let html = `<div class="category_title"><i class="fa-solid fa-gem"></i> CATEGORY</div>`;

   categories.forEach(cat => {
      html +=`
            <div class="category_item" data-category="${cat.id}">
            <i class="fa-solid ${cat.icon}" style="color: ${cat.color}; width: 20px; text-align:center;"></i>
            ${cat.name}
            </div>
            `;
   });
      // すべての商品のボタン
      html +=`
             <div class="category_item" data-category="all">
             <i class="fa-solid fa-list" style="color: #999; width: 20px; text-align:center;"></i>
             すべての商品
             </div>
             `;
      categoryListEl.innerHTML = html;

      const items = categoryListEl.querySelectorAll('.category_item');
      items.forEach(item => {
         item.addEventListener('click', (e) => {
            items.forEach(i => i.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const selectedCat = e.currentTarget.getAttribute('data-category');
            renderProducts(selectedCat);
         });
      });
}

// 商品の一覧表示
function renderProducts(filterCategory = 'all') {
   let html = '';

   const targetCategories = filterCategory ==='all'
   ? categories
   : categories.filter(cat => cat.id === filterCategory);

   targetCategories.forEach(cat => {
     const catProducts = productsDB.filter(p => p.category === cat.id);

     // 商品が存在する場合のみ表示
      if(catProducts.length > 0) {

         html += `
            <section class="category_section" id="section_${cat.id}">
            <div class="section_header">
               <h2 class="section_title">
               <span class="section_title_icon" style="background-color: ${cat.color};">
               </span>
               ${cat.name}
               </h2>
               <a href="#" class="see_all_link">すべて見る<i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <div class="product_grid">
         `;


         catProducts.forEach(product => {
            html += `
               <div class="product_card">
                 <div class="product_img_wrap">
                   <img src="${product.image}" alt="${product.name}">
                 </div>
                 <div class="product_info">
                   <h3 class="product_name">${product.name}</h3>
                   <div class="product_price">¥${product.price} <span class="tax_text">(税込)</span></div>
                   <div class="product_creator">クリエイター：${product.creator}</div>
                   <div class="product_copyright">${product.copyright}</div>
                 </div>
               </div>
            `;
         });


         html += `
            </div>
            </section>
         `;
      }
   });

   productsContainerEl.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderProducts('all');
});

// カテゴリアイコン↓
// <i class="fa-solid ${cat.icon}"></i>