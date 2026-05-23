// カテゴリ別の定義
const categories = [
  { id: 'keychain', name: 'ACRYLIC KEYCHAIN', icon: 'fa-camera', color: '#ff66aa' },
  { id: 'sticker', name: 'STICKER', icon: 'fa-note-sticky', color: '#66ccff' },
  { id: 'badge', name: 'BADGE', icon: 'fa-certificate', color: '#ffbb33' },
  { id: 'acrylic_stand', name: 'ACRYLIC STAND', icon: 'fa-chess-knight', color: '#44cc88' },
  { id: 'other', name: 'OTHER GOODS', icon: 'fa-bag-shopping', color: '#b366ff' }
];

// 商品データ
const productsDB = [
   // アクリルキーホルダー
   {category: 'keychain', name: 'キーホルダーA', price: 0, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrunoukan1.png' },
   {category: 'keychain', name: 'キーホルダーB', price: 0, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrunoukan1.png'},
   {category: 'keychain', name: 'キーホルダーC', price: 0, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrunoukan1.png'},
   {category: 'keychain', name: 'キーホルダーD', price: 0, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrunoukan1.png'},

   // ステッカー
   {category: 'sticker', name: 'ステッカーA', price: 0, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun3.png'},
   {category: 'sticker', name: 'ステッカーB', price: 0, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun3.png'},
   {category: 'sticker', name: 'ステッカーC', price: 0, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun3.png'},
   {category: 'sticker', name: 'ステッカーD', price: 0, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun3.png'},

   // 缶バッジ
   {category: 'badge', name: '缶バッジA', price: 0, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun4.png'},
   {category: 'badge', name: '缶バッジB', price: 0, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun4.png'},
   {category: 'badge', name: '缶バッジC', price: 0, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun4.png'},
   {category: 'badge', name: '缶バッジD', price: 0, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun4.png'},

   // アクリルスタンド
   {category: 'acrylic_stand', name: 'アクリルスタンドA', price: 0, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun2.png'},
   {category: 'acrylic_stand', name: 'アクリルスタンドB', price: 0, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun2.png'},
   {category: 'acrylic_stand', name: 'アクリルスタンドC', price: 0, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun2.png'},
   {category: 'acrylic_stand', name: 'アクリルスタンドD', price: 0, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun2.png'},

   // その他グッズ
   {category: 'other', name: 'グッズA', price: 0, creator: 'カピムン', copyright: '© 2026 creator A', image: './img/game/setuna_img/game_setuna1.png'},
   {category: 'other', name: 'グッズB', price: 0, creator: 'カピムン', copyright: '© 2026 creator B', image: './img/game/runrun_img/title_logo_img.png'},
   {category: 'other', name: 'グッズC', price: 0, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_62img/sundry_goods/smartphone_strap_omote.png'},
   {category: 'other', name: 'グッズD', price: 0, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_62img/sundry_goods/Conceptual_image.png'}
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