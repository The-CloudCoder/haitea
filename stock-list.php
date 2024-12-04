
<!doctype html>
<html lang="en">

  <head>
  <title>Our Stockist | Where to Find Our Non Alcoholic Beverages | Hai Tea</title>
  <?php include "header.php" ?>
  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>  
      
  <script type="text/javascript">
        var added_to_wishlist = "The product was successfully added to your wishlist.";
        var baseDir = "https:\/\/haiteabeverages.com\/";
        var comparator_max_item = 3;
        var compareAdd = "The product has been added to product comparison";
        var compareRemove = "The product has been removed from the product comparison.";
        var compareUrl = "https:\/\/haiteabeverages.com\/en\/module\/tdcompare\/compare";
        var compareView = "Compare";
        var comparedProductsIds = [];
        var compared_products = [];
        var disable_comment = "Criterion is not exists for this product.";
        var isLogged = 0;
        var isLoggedWishlist = false;
        var loggin_required = "You must be logged in to manage your wishlist.";
        var loginLabel = "Login";
        var login_url = "https:\/\/haiteabeverages.com\/en\/my-account";
        var max_item = "You cannot add more than 3 product(s) to the product comparison";
        var moderation_active = 1;
        var mywishlist_url = "https:\/\/haiteabeverages.com\/en\/module\/tdproductwishlist\/mywishlist";
        var prestashop = {"cart":{"products":[],"totals":{"total":{"type":"total","label":"Total","amount":0,"value":"CA$0.00"},"total_including_tax":{"type":"total","label":"Total (tax incl.)","amount":0,"value":"CA$0.00"},"total_excluding_tax":{"type":"total","label":"Total (tax excl.)","amount":0,"value":"CA$0.00"}},"subtotals":{"products":{"type":"products","label":"Subtotal","amount":0,"value":"CA$0.00"},"discounts":null,"shipping":{"type":"shipping","label":"Shipping","amount":0,"value":"Free"},"tax":{"type":"tax","label":"Taxes","amount":0,"value":"CA$0.00"}},"products_count":0,"summary_string":"0 items","labels":{"tax_short":"(tax excl.)","tax_long":"(tax excluded)"},"id_address_delivery":0,"id_address_invoice":0,"is_virtual":false,"vouchers":{"allowed":0,"added":[]},"discounts":[],"minimalPurchase":0,"minimalPurchaseRequired":""},"currency":{"name":"Canadian Dollar","iso_code":"CAD","iso_code_num":"124","sign":"$"},"customer":{"lastname":null,"firstname":null,"email":null,"last_passwd_gen":null,"newsletter":null,"newsletter_date_add":null,"ip_registration_newsletter":null,"optin":null,"website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":0,"max_payment_days":0,"note":null,"is_guest":0,"id_shop":null,"id_shop_group":null,"id_default_group":1,"date_add":null,"date_upd":null,"reset_password_token":null,"reset_password_validity":null,"id":null,"is_logged":false,"gender":{"type":null,"name":null,"id":null},"risk":{"name":null,"color":null,"percent":null,"id":null},"addresses":[]},"language":{"name":"English (English)","iso_code":"en","locale":"en-US","language_code":"en-us","is_rtl":"0","date_format_lite":"m\/d\/Y","date_format_full":"m\/d\/Y H:i:s","id":1},"page":{"title":"","canonical":null,"meta":{"title":"Our Stockists","description":"Wondering where you can find our thirst-quenching alcohol alternative beverages? Here is our full stockist of locations you can find here in Canada. ","keywords":"","robots":"noindex"},"page_name":"cms","body_classes":{"lang-en":true,"lang-rtl":false,"country-CA":true,"currency-CAD":true,"layout-full-width":true,"page-cms":true,"tax-display-disabled":true,"cms-id-47":true},"admin_notifications":[]},"shop":{"name":"Hai Tea Beverages","email":"admin@omleaf.com","registration_number":"","long":false,"lat":false,"logo":"\/images\/haiteabeveragescom-logo-16484762722.jpg","stores_icon":"\/img\/logo_stores.png","favicon":"\/img\/favicon.ico","favicon_update_time":"1648476272","address":{"formatted":"Hai Tea Beverages<br>Canada","address1":"","address2":"","postcode":"","city":"","state":null,"country":"Canada"},"phone":"","fax":""},"urls":{"base_url":"https:\/\/haiteabeverages.com\/","current_url":"https:\/\/haiteabeverages.com\/en\/stock-list","shop_domain_url":"https:\/\/haiteabeverages.com","img_ps_url":"https:\/\/haiteabeverages.com\/img\/","img_cat_url":"https:\/\/haiteabeverages.com\/img\/c\/","img_lang_url":"https:\/\/haiteabeverages.com\/img\/l\/","img_prod_url":"https:\/\/haiteabeverages.com\/img\/p\/","img_manu_url":"https:\/\/haiteabeverages.com\/img\/m\/","img_sup_url":"https:\/\/haiteabeverages.com\/img\/su\/","img_ship_url":"https:\/\/haiteabeverages.com\/img\/s\/","img_store_url":"https:\/\/haiteabeverages.com\/img\/st\/","img_col_url":"https:\/\/haiteabeverages.com\/img\/co\/","img_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/img\/","css_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/css\/","js_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/js\/","pic_url":"https:\/\/haiteabeverages.com\/upload\/","pages":{"address":"https:\/\/haiteabeverages.com\/en\/address","addresses":"https:\/\/haiteabeverages.com\/en\/addresses","authentication":"https:\/\/haiteabeverages.com\/en\/login","cart":"https:\/\/haiteabeverages.com\/en\/cart","category":"https:\/\/haiteabeverages.com\/en\/index.php?controller=category","cms":"https:\/\/haiteabeverages.com\/en\/index.php?controller=cms","contact":"https:\/\/haiteabeverages.com\/en\/contact-us","discount":"https:\/\/haiteabeverages.com\/en\/discount","guest_tracking":"https:\/\/haiteabeverages.com\/en\/guest-tracking","history":"https:\/\/haiteabeverages.com\/en\/order-history","identity":"https:\/\/haiteabeverages.com\/en\/identity","index":"https:\/\/haiteabeverages.com\/en\/","my_account":"https:\/\/haiteabeverages.com\/en\/my-account","order_confirmation":"https:\/\/haiteabeverages.com\/en\/order-confirmation","order_detail":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-detail","order_follow":"https:\/\/haiteabeverages.com\/en\/order-follow","order":"https:\/\/haiteabeverages.com\/en\/order","order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-return","order_slip":"https:\/\/haiteabeverages.com\/en\/credit-slip","pagenotfound":"https:\/\/haiteabeverages.com\/en\/page-not-found","password":"https:\/\/haiteabeverages.com\/en\/password-recovery","pdf_invoice":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-invoice","pdf_order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-return","pdf_order_slip":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-slip","prices_drop":"https:\/\/haiteabeverages.com\/en\/prices-drop","product":"https:\/\/haiteabeverages.com\/en\/index.php?controller=product","search":"https:\/\/haiteabeverages.com\/en\/search","sitemap":"https:\/\/haiteabeverages.com\/en\/sitemap","stores":"https:\/\/haiteabeverages.com\/en\/stores","supplier":"https:\/\/haiteabeverages.com\/en\/supplier","register":"https:\/\/haiteabeverages.com\/en\/login?create_account=1","order_login":"https:\/\/haiteabeverages.com\/en\/order?login=1"},"theme_assets":"\/themes\/PRS018\/assets\/","actions":{"logout":"https:\/\/haiteabeverages.com\/en\/?mylogout="}},"configuration":{"display_taxes_label":false,"low_quantity_threshold":3,"is_b2b":false,"is_catalog":true,"show_prices":true,"opt_in":{"partner":false},"quantity_discount":{"type":"discount","label":"Discount"},"voucher_enabled":0,"return_enabled":0,"number_of_days_for_return":14},"field_required":[],"breadcrumb":{"links":[{"title":"Home","url":"https:\/\/haiteabeverages.com\/en\/"},{"title":"Our Stockists","url":"https:\/\/haiteabeverages.com\/en\/stock-list"}],"count":2},"link":{"protocol_link":"https:\/\/","protocol_content":"https:\/\/"},"time":1704794172,"static_token":"fe9a97221cc91b5f6f65358cb957bf86","token":"3d867e33bd103fbb65711648167f9cd3"};
        var productcomment_added = "Thanks for your Review. Your comment has been added!";
        var productcomment_added_moderation = "Thanks for your Review. It will be available once approved by a moderator.";
        var productcomments_controller_url = "https:\/\/haiteabeverages.com\/en\/module\/tdproductcomments\/default";
        var productcomments_url_rewrite = "1";
        var secure_key = "af94335cef71c6ef3532be4598cc993d";
        var static_token = "fe9a97221cc91b5f6f65358cb957bf86";
        var wishlistProductsIds = "";
        var wishlistView = "Your Wishlist";
      </script>
    
  </head>

  <body id="cms" class="lang-en country-ca currency-cad layout-full-width page-cms tax-display-disabled cms-id-47  ">

    
      
    

    <main>
      
              

      <header id="header">
        
          
  <div class="header-banner">
    
  </div>



  <nav class="header-nav">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-xs-6 left-nav">
          
        </div>
        <div class="col-md-7 col-xs-6 right-nav">
          
        </div>
      </div>
    </div>
  </nav>
  <div class="header-top">
    <?php include "menu.php"; ?>
    <?php include "logo.php"; ?>
  </div>
  <div class="nav-full-width">
    <div class="container">
      <div class="row">
        
        <div class="hidden-lg-up text-xs-center mobile">
          <div class="menu-icon">
            <div class="cat-title">Categories</div>
          </div>
          <div id="_mobile_cart" class=""></div>
          <div id="_mobile_search" class=""></div>
          <div id="_mobile_user_info" class=""></div>
          <div class="clearfix"></div>
        </div>
        <div id="menuCanvas" class="tdclose"></div>
        <div id="mobile_top_menu_wrapper" class="hidden-lg-up">
          <div class="menu-icon tdclose">
            <div class="cat-title">Categories</div>
          </div>
          <div class="js-top-menu mobile" id="_mobile_top_menu"></div>
        </div>
      </div>
    </div>
  </div>

        
      </header>

      
        
<aside id="notifications">
  <div class="container">
    
    
    
      </div>
</aside>
      

            
            
      
        
  
    
         

      <section id="wrapper">
        
        		          <div title="pouring a social beverage" class="cms-banner-img" style="background-image: url(images/ourstock.jpeg);"><h2></h2></div>
                <div title="girl holding a hai tea beverage"  class="contact-banner-img"><h1>Contact us</h1></div>
        <div class="container">
          
<!--<div class="pro-banner-img" style="background-image: url('https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg') !important;"><h2>DRINKS</h2></div>-->
<div class="pro-banner-img" title="hai tea social drink" style="background-image: url('https://haiteabeverages.com/img/cms/Drinks-banner.jpg') !important;"><h1>An Elevated Beverage Experience</h1></div>
<!--<div class="pro-banner-img" style="background-image: url('https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg') !important;"><h2>DRINKS</h2></div>-->
<!--<div class="pro-banner-img" style="background-image: url('https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg') !important;"><h1>NON-ALCOHOLIC COCKTAILS</h1></div>-->
<!-- <a class="banner" href="https://haiteabeverages.com/en/" title="DRINKS">
      <img src="https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg" alt="DRINKS" title="DRINKS" class="img-fluid">
  </a> -->

          <div class="row">
            

            
  <div id="content-wrapper" class="col-xs-12">
    
    
  
    
      <header class="page-header">
        <h1>
  Our Stockists
</h1>
      </header>
    
  
  <section id="main">

            
  <section id="content" class="page-content page-cms page-cms-47">

    
      <div class="row">
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12 stocklist" style="border-right:2px solid #d5a235;">
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Ajisai </b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2087 W 42 Ave Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Anh and Chi</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3388 Main St, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Bean Around the World</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2975 Granville Stn Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Bearfoot Bistro</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4121 Village Green, Whistler, BC V8E 1H2</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Beaute on Main</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4262 Main St, Vancouver, BC V5V 3P9</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Beere Brewing Co</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">312 Esplanade E, North Vancouver, BC V7L 1A4</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Bella Crusta Foods</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">902 6th Avenue Canmore AB</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Beyond Bread Artisan Bakery</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3686 W 4th Ave Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Birds and the Beets</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">55 Powell St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Blue Water Café</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1095 Hamilton St, Vancouver, BC V6B 5T4</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>C|Prime Modern Italian Steak and Wine</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1015 Burrard St, Vancouver, BC V6Z 1Y5</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Cafe de L'Orangerie</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">406-8915 Hudson St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Cafe Orso</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4316 Gallant Avenue North Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Deacons Corner</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3189 W Broadway, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>East Vancouver Brewing</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1675 Venables St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Electric Bicycle Brewing Inc</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">20 E 4 Ave Vancouver BC V5T 1E8</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Elmelles Westdide Kitchen</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">177 W 7th Ave, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Everything Wine Inc</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">8570 River District Crossing, Vancouver, BC V7X 1L3</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Four winds Brewing Co</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4-7355 72 St, Delta, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Frankie's Italian Bar and Jazz Club</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">755 Beatty St, Vancouver, BC V6B 2M4</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Giving Gifts</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4570 Main St, Vancouver, BC V5V 3R5</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Good Dogs Plant Based</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1331 Robson St, Vancouver, BC</div>
</div>
</div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12 stocklist" style="border-right:2px solid #d5a235;">
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Home on the Range Organics</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">235 E Broadway Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>HooRaw Vegan Market</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">5523 Wharf Ave, Sechelt, BC V0N 3A0</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Jamjar (Commercial)</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2290 Commercial Dr, Vancouver, BC V5N 4B5</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Jamjar (North Vancouver)</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">125 Victory Ship Way #122, North Vancouver, BC V7L 0B2</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Jess Restaurant</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2179 W 41 Ave Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Kin Kao</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">903 Commercial Dr, Vancouver, BC V5L 2H2</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Kitsilano Natural Foods</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2200 York Ave Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Kokomo Foods Inc</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3270 Edgemont Blvd North Vancouver</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Kranky Café</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">216 E 4th Ave, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Lao Wei</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">251 E Georgia St, Vancouver, BC V6A 1Z6</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Liberty Bakery &amp; Café</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3699 Main St, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Los Corvus</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">603 Kingsway, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Lunch Lady</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1046 Commercial Drive Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Main Street Brewing</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">261 E 7 Ave Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Minami Restaurant Ltd</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1118 Mainland St, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Muirfield Lakes Golf Club</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">612 Muirfield Cres, Lyalta, AB </div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>North Point Brewing Co</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">261 1st Street East North Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Odd Society Spirits</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1725 Powell St, Vancouver, BC V5L 1H6</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Parq Vancouver </b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">39 Smithe Street Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Pizza Carano</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4241 Fraser St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Pizza Rubato</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">561 W Broadway, Vancouver, BC V5Z 1E6</div>
</div>
</div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12">
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Pomme Natural Market (NANAIMO)</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">6560 Metral Dr, Nanaimo, BC V9T 2L9</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Pomme Natural Market (POCO)</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2755 Lougheed Hwy. #9, Port Coquitlam, BC V3B 5Y9</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Provisions Market</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">20018 83A Ave A-120, Langley Twp, BC V2Y 3R4</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Queensdale Market</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3030 Lonsdale Ave North Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Sai Woo</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">158 E Pender Avenue Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Shaugnessy Golf &amp; Country Club</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">300 SW Marine Dr, Vancouver, BC V6N 4A6</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Sobr Market</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">15 Jean Louis Rd, Winnipeg, MB R2N 4A9</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Softer Drink Specialty Drink Co</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1030 Meares St, Victoria, BC V8V 5A5</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Sorry Coffee </b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;"> 4342 Gallant Ave, North Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Stong's Market</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4221 Dunbar St, Vancouver, BC V6S 2G1</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Terminal City Brewing</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1616 Clark Drive Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>The Arbor Restaurant Ltd</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3941 Main St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>The Drive Canteen</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">1111 Commercial Dr, Vancouver, BC V5L 3X3</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>The Juice Truck </b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">4236 Main St, Vancouver, BC </div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>The Modern Pantry </b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2055 Old Dollarton Rd, North Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>The Ramen Butcher</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">223 E Georgia St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>The Workshop Vegetarian Cafe Ltd</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">296 Pemberton Ave North Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Tocador</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">2610 Main St, Vancouver, BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Welks General Store</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3511 Main St Vancouver BC</div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Westin Wall Centre</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3099 Corvette Way, Richmond, BC </div>
</div>
<div class="row stock" style="margin-bottom:50px;">
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6"><b>Wolf And Hound</b></div>
<div class="col-md-6 col-xl-6 col-lg-6 col-xs-6" style="border-left:2px solid #ddd;">3617 W Broadway, Vancouver, BC</div>
</div>
</div>
</div>
    

    
      
    

    
      
    

  </section>

        
    
      <footer class="page-footer">
        
          <!-- Footer content -->
        
      </footer>
    
  </section>


    
  </div>


            
          </div>
        </div>
        
      </section>

      
      <div class="container">
        <div id="_mobile_left_column"></div>
        <div id="_mobile_right_column"></div>
        <div class="clearfix"></div>
      </div>

      <?php include "footer.php"; ?>
    </main>
    <a class="backtotop" href="#" title="Back to Top" style="display:none;">&nbsp;</a>
    
        <script type="text/javascript" src="bottom-68d04f146.js" ></script>




    

    
      <div class="modal fade" id="st_reg_modal">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <button type="button" class="st_modal_close close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="js-modal-content general_border p-2"></div>
  </div>
</div>
</div>
    
  </body>

</html>