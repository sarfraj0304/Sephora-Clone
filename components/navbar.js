const navbar = () => {
  return `<div class="logo_search_container">
      <div class="logo_div">
        <img src="https://i.ibb.co/JFZ53vq/sparkle-logo.png" alt="" />
      </div>
      <div class="search_div">
        <input type="text" name="" id="search_items" placeholder="search" />
      </div>
      <div class="stores_services_div">
        <img src="https://img.icons8.com/ios/50/null/grocery-store.png" />
        <a href="">Stores & Services</a>
      </div>
      <div class="community_div">
        <img src="https://img.icons8.com/ios/50/null/conference-call--v1.png" />
        <a href="">Community</a>
      </div>
      <div class="signin_div">
        <img src="./icons/icons8-login.gif" alt="" />
        <a href="">Sign In</a>
      </div>
      <div class="menu_icons_div">
        <img
          id="chat_icon_1"
          src="https://img.icons8.com/ios/50/null/speech-bubble--v1.png"
        />
        <img id="heart_icon" src="./icons/icons8-loading-heart.gif" />
        <img
          id="basket_icon"
          src="https://img.icons8.com/dotty/80/null/shopping-basket-2.png"
        />
      </div>
    </div>
    <div class="menubar_container">
      <nav>
        <ul>
          <li>
            <a href="" id="new_id">New</a>
            <div class="megamenu">
              <div class="megamenu_items" id="new_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Brands</a>
            <div class="megamenu">
              <div class="megamenu_items" id="brands_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Skincare</a>
            <div class="megamenu">
              <div class="megamenu_items" id="skincare_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Hair</a>
            <div class="megamenu">
              <div class="megamenu_items" id="hair_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Fragrance</a>
            <div class="megamenu">
              <div class="megamenu_items" id="fragrance_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Makeup</a>
            <div class="megamenu">
              <div class="megamenu_items" id="makeup_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Tools & Brushes</a>
            <div class="megamenu">
              <div class="megamenu_items" id="tools_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Bath & Body</a>
            <div class="megamenu">
              <div class="megamenu_items" id="bath_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Mini Size</a>
            <div class="megamenu">
              <div class="megamenu_items" id="mini_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Gifts</a>
            <div class="megamenu">
              <div class="megamenu_items" id="gifts_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Beauty Under $20</a>
            <div class="megamenu">
              <div class="megamenu_items" id="beauty_megamenu_items"></div>
            </div>
          </li>
          <li>
            <a href="">Sale & Offers</a>
            <div class="megamenu">
              <div class="megamenu_items" id="sale_megamenu_items"></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>`;
};

export { navbar };
