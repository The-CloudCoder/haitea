
<!doctype html>
<html lang="en">

  <head>
  <title>Non-Alcoholic Cocktails | Hai Tea Beverages</title>
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
        var prestashop = {"cart":{"products":[],"totals":{"total":{"type":"total","label":"Total","amount":0,"value":"CA$0.00"},"total_including_tax":{"type":"total","label":"Total (tax incl.)","amount":0,"value":"CA$0.00"},"total_excluding_tax":{"type":"total","label":"Total (tax excl.)","amount":0,"value":"CA$0.00"}},"subtotals":{"products":{"type":"products","label":"Subtotal","amount":0,"value":"CA$0.00"},"discounts":null,"shipping":{"type":"shipping","label":"Shipping","amount":0,"value":"Free"},"tax":{"type":"tax","label":"Taxes","amount":0,"value":"CA$0.00"}},"products_count":0,"summary_string":"0 items","labels":{"tax_short":"(tax excl.)","tax_long":"(tax excluded)"},"id_address_delivery":0,"id_address_invoice":0,"is_virtual":false,"vouchers":{"allowed":0,"added":[]},"discounts":[],"minimalPurchase":0,"minimalPurchaseRequired":""},"currency":{"name":"Canadian Dollar","iso_code":"CAD","iso_code_num":"124","sign":"$"},"customer":{"lastname":null,"firstname":null,"email":null,"last_passwd_gen":null,"newsletter":null,"newsletter_date_add":null,"ip_registration_newsletter":null,"optin":null,"website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":0,"max_payment_days":0,"note":null,"is_guest":0,"id_shop":null,"id_shop_group":null,"id_default_group":1,"date_add":null,"date_upd":null,"reset_password_token":null,"reset_password_validity":null,"id":null,"is_logged":false,"gender":{"type":null,"name":null,"id":null},"risk":{"name":null,"color":null,"percent":null,"id":null},"addresses":[]},"language":{"name":"English (English)","iso_code":"en","locale":"en-US","language_code":"en-us","is_rtl":"0","date_format_lite":"m\/d\/Y","date_format_full":"m\/d\/Y H:i:s","id":1},"page":{"title":"","canonical":null,"meta":{"title":" ","description":"Looking for creative alcohol alternative cocktails? From vodka, tequila, spritzers, and more, we've got the best cocktail alternatives for you. ","keywords":"","robots":"noindex"},"page_name":"cms","body_classes":{"lang-en":true,"lang-rtl":false,"country-CA":true,"currency-CAD":true,"layout-full-width":true,"page-cms":true,"tax-display-disabled":true,"cms-id-49":true},"admin_notifications":[]},"shop":{"name":"Hai Tea Beverages","email":"admin@omleaf.com","registration_number":"","long":false,"lat":false,"logo":"\/images\/haiteabeveragescom-logo-16484762722.jpg","stores_icon":"\/img\/logo_stores.png","favicon":"\/img\/favicon.ico","favicon_update_time":"1648476272","address":{"formatted":"Hai Tea Beverages<br>Canada","address1":"","address2":"","postcode":"","city":"","state":null,"country":"Canada"},"phone":"","fax":""},"urls":{"base_url":"https:\/\/haiteabeverages.com\/","current_url":"https:\/\/haiteabeverages.com\/en\/cocktail","shop_domain_url":"https:\/\/haiteabeverages.com","img_ps_url":"https:\/\/haiteabeverages.com\/img\/","img_cat_url":"https:\/\/haiteabeverages.com\/img\/c\/","img_lang_url":"https:\/\/haiteabeverages.com\/img\/l\/","img_prod_url":"https:\/\/haiteabeverages.com\/img\/p\/","img_manu_url":"https:\/\/haiteabeverages.com\/img\/m\/","img_sup_url":"https:\/\/haiteabeverages.com\/img\/su\/","img_ship_url":"https:\/\/haiteabeverages.com\/img\/s\/","img_store_url":"https:\/\/haiteabeverages.com\/img\/st\/","img_col_url":"https:\/\/haiteabeverages.com\/img\/co\/","img_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/img\/","css_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/css\/","js_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/js\/","pic_url":"https:\/\/haiteabeverages.com\/upload\/","pages":{"address":"https:\/\/haiteabeverages.com\/en\/address","addresses":"https:\/\/haiteabeverages.com\/en\/addresses","authentication":"https:\/\/haiteabeverages.com\/en\/login","cart":"https:\/\/haiteabeverages.com\/en\/cart","category":"https:\/\/haiteabeverages.com\/en\/index.php?controller=category","cms":"https:\/\/haiteabeverages.com\/en\/index.php?controller=cms","contact":"https:\/\/haiteabeverages.com\/en\/contact-us","discount":"https:\/\/haiteabeverages.com\/en\/discount","guest_tracking":"https:\/\/haiteabeverages.com\/en\/guest-tracking","history":"https:\/\/haiteabeverages.com\/en\/order-history","identity":"https:\/\/haiteabeverages.com\/en\/identity","index":"https:\/\/haiteabeverages.com\/en\/","my_account":"https:\/\/haiteabeverages.com\/en\/my-account","order_confirmation":"https:\/\/haiteabeverages.com\/en\/order-confirmation","order_detail":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-detail","order_follow":"https:\/\/haiteabeverages.com\/en\/order-follow","order":"https:\/\/haiteabeverages.com\/en\/order","order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-return","order_slip":"https:\/\/haiteabeverages.com\/en\/credit-slip","pagenotfound":"https:\/\/haiteabeverages.com\/en\/page-not-found","password":"https:\/\/haiteabeverages.com\/en\/password-recovery","pdf_invoice":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-invoice","pdf_order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-return","pdf_order_slip":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-slip","prices_drop":"https:\/\/haiteabeverages.com\/en\/prices-drop","product":"https:\/\/haiteabeverages.com\/en\/index.php?controller=product","search":"https:\/\/haiteabeverages.com\/en\/search","sitemap":"https:\/\/haiteabeverages.com\/en\/sitemap","stores":"https:\/\/haiteabeverages.com\/en\/stores","supplier":"https:\/\/haiteabeverages.com\/en\/supplier","register":"https:\/\/haiteabeverages.com\/en\/login?create_account=1","order_login":"https:\/\/haiteabeverages.com\/en\/order?login=1"},"theme_assets":"\/themes\/PRS018\/assets\/","actions":{"logout":"https:\/\/haiteabeverages.com\/en\/?mylogout="}},"configuration":{"display_taxes_label":false,"low_quantity_threshold":3,"is_b2b":false,"is_catalog":true,"show_prices":true,"opt_in":{"partner":false},"quantity_discount":{"type":"discount","label":"Discount"},"voucher_enabled":0,"return_enabled":0,"number_of_days_for_return":14},"field_required":[],"breadcrumb":{"links":[{"title":"Home","url":"https:\/\/haiteabeverages.com\/en\/"},{"title":" ","url":"https:\/\/haiteabeverages.com\/en\/cocktail"}],"count":2},"link":{"protocol_link":"https:\/\/","protocol_content":"https:\/\/"},"time":1704792740,"static_token":"fe9a97221cc91b5f6f65358cb957bf86","token":"3d867e33bd103fbb65711648167f9cd3"};
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

  <body id="cms" class="lang-en country-ca currency-cad layout-full-width page-cms tax-display-disabled cms-id-49  ">

    
      
    

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
        
        		 <div title="hai tea non alcoholic cocktail"  class="cms-banner-img" style="background-image: url('images/Cocktails-header.jpg');"><h1>NON-ALCOHOLIC COCKTAILS</h1></div>
	                <div title="girl holding a hai tea beverage"  class="contact-banner-img"><h1>Contact us</h1></div>
        <div class="container">
          
<!--<div class="pro-banner-img" style="background-image: url('https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg') !important;"><h2>DRINKS</h2></div>-->
<div class="pro-banner-img" title="hai tea social drink" style="background-image: url('images/Drinks-banner.jpg') !important;"><h1>An Elevated Beverage Experience</h1></div>
<!--<div class="pro-banner-img" style="background-image: url('https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg') !important;"><h2>DRINKS</h2></div>-->
<!--<div class="pro-banner-img" style="background-image: url('https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg') !important;"><h1>NON-ALCOHOLIC COCKTAILS</h1></div>-->
<!-- <a class="banner" href="https://haiteabeverages.com/en/" title="DRINKS">
      <img src="https://haiteabeverages.com/modules/ps_banner/img/a02af80b0662c995a10b18d3425561a7.jpg" alt="DRINKS" title="DRINKS" class="img-fluid">
  </a> -->

          <div class="row">
            

            
  <div id="content-wrapper" class="col-xs-12">
    
    
  
    
      <header class="page-header">
        <h1>
   
</h1>
      </header>
    
  
  <section id="main">

            
  <section id="content" class="page-content page-cms page-cms-49">

    
      <div class="row">
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">LEMONGRASS SAKE</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">SAKE COCKTAIL BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>1 oz honjozo sake</li>
<li>2 oz lemongrass &amp; mint syrup</li>
<li>1/2 oz lemon juice</li>
<li>Ginger Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Collins Glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;">Lemongrass spear &amp; mint sprig</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add sake, syrup and lemon juice to a cocktail shaker with ice</li>
<li>Shake and double strain into a hurricane glass</li>
<li>Fill glass with crushed ice</li>
<li>Top drink with Ginger Hai Tea and garnish</li>
</ul></div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2030.jpg" alt="SAKE COCKTAIL ALTERNATIVE" width="100%" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Cocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">3 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">4/10</p>
</div>
</div>
</div>
</div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2081.jpg" alt="TEQUILA COCKTAIL ALTERNATIVE" width="100%" height="484" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Cocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">3 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">4/10</p>
</div>
</div>
</div>
</div>
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">ANCHO TEQUILA</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">TEQUILA COCKTAIL BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>2 oz ancho chili infused tequila</li>
<li>1 oz cumin syrup</li>
<li>½ oz lime juice</li>
<li>6 leaves Thai basil</li>
<li>Hibiscus Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Collins Glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;">Basil and dehydrated lime wheel (sub fresh lime wheel) / salt rim</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add basil, syrup and lime juice to cocktail shaker and muddle</li>
<li>Add tequila and ice, shake</li>
<li>Double strain into a Collins glass</li>
<li>Fill glass with crushed ice</li>
<li>Top drink with Hibiscus Hai Tea and garnish</li>
</ul></div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">CALAMANSI VODKA</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">VODKA COCKTAIL BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>2 oz vodka</li>
<li>1 oz calamansi syrup</li>
<li>½ oz calamansi juice</li>
<li>Hibiscus Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Collins Glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;">Dehydrated calamansi wheel</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add vodka, syrup and calamansi juice to a cocktail shaker with ice</li>
<li>Shake and double strain into a Collins glass</li>
<li>Fill glass with crushed ice</li>
<li>Top drink with Hibiscus Hai Tea and garnish</li>
</ul></div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2116.jpg" alt="VODKA COCKTAIL ALTERNATIVE" width="100%" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Cocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">3 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">4/10</p>
</div>
</div>
</div>
</div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2062.jpg" alt="A NON-ALCOHOLIC SPRITZER" width="100%" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Cocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">2 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">3/10</p>
</div>
</div>
</div>
</div>
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">MONTENEGRO SPRITZ</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">A NON-ALCOHOLIC SPRITZER BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>2 oz Montenegro</li>
<li>6 drops Mount Fuji bitters</li>
<li>Ginger Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Coupe glass or flute</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;font-size: .875rem;">Lemon peel</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add Montenegro and bitters to mixing glass</li>
<li>Add ice and stir for 30 revolutions</li>
<li>Strain into glass and top with Ginger Hai Tea</li>
<li>Garnish</li>
</ul></div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">HABANERO MOJITO</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">MOJITO COCKTAIL  BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>2 oz white rum</li>
<li>½ oz habanero &amp; mint syrup</li>
<li>½ oz lime juice</li>
<li>½ oz pomegranate juice</li>
<li>8 leaves mint</li>
<li>Hibiscus Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Collins Glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;font-size: .875rem;">Lime wheel and mint</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add mint, syrup and juice to cocktail shaker and muddle</li>
<li>Add rum and ice, shake</li>
<li>Double strain into a Collins glass</li>
<li>Fill glass with crushed ice</li>
<li>Top drink with Hibiscus Hai Tea and garnish</li>
</ul></div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2237.jpg" alt="MOJITO COCKTAIL ALTERNATIVE" width="100%" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Cocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">5 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">4/10</p>
</div>
</div>
</div>
</div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2267.jpg" alt="ALCOHOL ALTERNATIVE COCKTAIL" width="100%" height="484" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Mocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">6 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">5/10</p>
</div>
</div>
</div>
</div>
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">OH HAI!</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">ALCOHOL COCKTAIL BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>1 oz Hibiscus Syrup</li>
<li>1 oz lemon juice</li>
<li>6 drops vegan cocktail foamer / aquafaba</li>
<li>Hibiscus Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Hurricane Glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;font-size: .875rem;">Mint sprig and dehydrated lemon wheel</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add syrup, lemon juice and foamer into shaker and dry shake</li>
<li>Add ice and shake again</li>
<li>Double strain into a Collins glass</li>
<li>Top glass with crushed ice</li>
<li>Top drink with Hibiscus Hai Tea and garnish</li>
</ul><p style="color:#112649;">Option: add dark rum to ingredients to shake, to make it boozy.</p>
</div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">GINGER MULE</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">ALCOHOL MULE BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>¾ oz falernum syrup</li>
<li>1 oz lime juice</li>
<li>Ginger Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Mule mug</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;font-size: .875rem;">Lime wedge or flowers</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Fill with ice</li>
<li>Add lime juice</li>
<li>Add syrup</li>
<li>Top with Ginger Hai Tea and garnish</li>
</ul><p style="color:#112649;">Option: add vodka as the first ingredient to make it boozy.</p>
</div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2170.jpg" alt="ALCOHOL ALTERNATIVE MULE" width="100%" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Mocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">2 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">2/10</p>
</div>
</div>
</div>
</div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2202.jpg" alt="ALCOHOL ALTERNATIVE MOJITO" width="100%" height="484" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Mocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">6 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">5/10</p>
</div>
</div>
</div>
</div>
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">LEMONGRASS MOJITO</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">ALCOHOL ALTERNATIVE MOJITO BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>8 leaves mint</li>
<li>1 oz lemongrass &amp; mint syrup</li>
<li>1 oz lime juice</li>
<li>6 drops vegan cocktail foamer / aquafaba</li>
<li>Ginger Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Coupe glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;font-size: .875rem;">Dehydrated lime wedge</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add mint leaves to shaker and muddle</li>
<li>Add in syrup, lime juice and foamer and dry shake</li>
<li>Add ice and shake again</li>
<li>Double strain into a coupe glass</li>
<li>Gently top with Ginger Hai Tea and garnish</li>
</ul><p style="color:#112649;">Option: add rum to ingredients to shake, to make it boozy.</p>
</div>
</div>
<div class="row divider" style="margin:30px;">
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4" style="background:#d4a134;height:2px;"></div>
<div class="col-md-4 col-xl-4 col-lg-4 col-xs-4"></div>
</div>
<div class="row">
<div class="col-md-12 col-xl-8 col-lg-8 col-xs-12">
<h2 style="margin:0px;">CALAMANSI SMASH</h2>
<div style="width:14%;background:#d4a134;height:7px;"></div>
<p style="color:#d5a134;font-weight:bold;line-height:0px;">ALCOHOL ALTERNATIVE BY HAI TEA</p>
<div class="row">
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">INGREDIENTS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>1 oz calamansi syrup</li>
<li>1 oz calamansi juice</li>
<li>6 leaves of Thai Basil</li>
<li>Hibiscus Hai Tea</li>
</ul></div>
<div class="col-md-6">
<p style="color:#112649;margin:0px;font-weight:bold;">GLASS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Rocks glass</li>
</ul></div>
</div>
<p style="color:#112649;margin:0px;font-weight:bold;">GARNISH OPTIONS</p>
<p style="color:#112649;margin:0px;font-size: .875rem;">Dehydrated calamansi wheels</p>
<p style="color:#112649;margin:0px;font-weight:bold;">METHODS</p>
<ul style="list-style-type:disc;margin-left:20px;color:#112649;"><li>Add basil, syrup and juice to shaker and muddle</li>
<li>Add ice and shake</li>
<li>Single strain into a rocks glass (serve smash style)</li>
<li>Fill glass with ice</li>
<li>Top with Hibiscus Hai Tea and garnish</li>
</ul><p style="color:#112649;">Option: add gin to ingredients to shake, to make it boozy.</p>
</div>
<div class="col-md-12 col-xl-4 col-lg-4 col-xs-12"><img src="images/DSCF2153.jpg" alt="ALCOHOL ALTERNATIVE" width="100%" style="margin:0px;" /><div style="width:100%;background-color:#112649;" class="image_bottom_content">
<div class="row" style="padding:20px;color:#ff0000;">
<div class="col-xs-6 col-sm-2">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">SERVES</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">1</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TYPE</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">Mocktail</p>
</div>
<div class="col-xs-6 col-sm-3">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">TIME</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">5 min</p>
</div>
<div class="col-xs-6 col-sm-4">
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">DIFFICULTY</p>
<p style="color:#d5a134;text-align:center;font-weight:bold;font-size:12px;">4/10</p>
</div>
</div>
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

     <?php include "footer.php" ?>

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