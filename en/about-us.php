
<!doctype html>
<html lang="en">

  <head>
  <title>About Us | Hai Tea | A Social Beverage Company</title> 
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
        var prestashop = {"cart":{"products":[],"totals":{"total":{"type":"total","label":"Total","amount":0,"value":"CA$0.00"},"total_including_tax":{"type":"total","label":"Total (tax incl.)","amount":0,"value":"CA$0.00"},"total_excluding_tax":{"type":"total","label":"Total (tax excl.)","amount":0,"value":"CA$0.00"}},"subtotals":{"products":{"type":"products","label":"Subtotal","amount":0,"value":"CA$0.00"},"discounts":null,"shipping":{"type":"shipping","label":"Shipping","amount":0,"value":"Free"},"tax":{"type":"tax","label":"Taxes","amount":0,"value":"CA$0.00"}},"products_count":0,"summary_string":"0 items","labels":{"tax_short":"(tax excl.)","tax_long":"(tax excluded)"},"id_address_delivery":0,"id_address_invoice":0,"is_virtual":false,"vouchers":{"allowed":0,"added":[]},"discounts":[],"minimalPurchase":0,"minimalPurchaseRequired":""},"currency":{"name":"Canadian Dollar","iso_code":"CAD","iso_code_num":"124","sign":"$"},"customer":{"lastname":null,"firstname":null,"email":null,"last_passwd_gen":null,"newsletter":null,"newsletter_date_add":null,"ip_registration_newsletter":null,"optin":null,"website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":0,"max_payment_days":0,"note":null,"is_guest":0,"id_shop":null,"id_shop_group":null,"id_default_group":1,"date_add":null,"date_upd":null,"reset_password_token":null,"reset_password_validity":null,"id":null,"is_logged":false,"gender":{"type":null,"name":null,"id":null},"risk":{"name":null,"color":null,"percent":null,"id":null},"addresses":[]},"language":{"name":"English (English)","iso_code":"en","locale":"en-US","language_code":"en-us","is_rtl":"0","date_format_lite":"m\/d\/Y","date_format_full":"m\/d\/Y H:i:s","id":1},"page":{"title":"","canonical":null,"meta":{"title":"An Energizing Organic Social Beverage for a More Social You","description":"Hai Tea is a local social beverage company in Canada. We offer the best alcohol alternatives through healthy, carbonated, and organic tea. Learn More Here. ","keywords":"social beverage,haitea,organic tea","robots":"index"},"page_name":"cms","body_classes":{"lang-en":true,"lang-rtl":false,"country-CA":true,"currency-CAD":true,"layout-full-width":true,"page-cms":true,"tax-display-disabled":true,"cms-id-41":true},"admin_notifications":[]},"shop":{"name":"Hai Tea Beverages","email":"admin@omleaf.com","registration_number":"","long":false,"lat":false,"logo":"\/images\/haiteabeveragescom-logo-16484762722.jpg","stores_icon":"\/img\/logo_stores.png","favicon":"\/img\/favicon.ico","favicon_update_time":"1648476272","address":{"formatted":"Hai Tea Beverages<br>Canada","address1":"","address2":"","postcode":"","city":"","state":null,"country":"Canada"},"phone":"","fax":""},"urls":{"base_url":"https:\/\/haiteabeverages.com\/","current_url":"https:\/\/haiteabeverages.com\/en\/about-us","shop_domain_url":"https:\/\/haiteabeverages.com","img_ps_url":"https:\/\/haiteabeverages.com\/img\/","img_cat_url":"https:\/\/haiteabeverages.com\/img\/c\/","img_lang_url":"https:\/\/haiteabeverages.com\/img\/l\/","img_prod_url":"https:\/\/haiteabeverages.com\/img\/p\/","img_manu_url":"https:\/\/haiteabeverages.com\/img\/m\/","img_sup_url":"https:\/\/haiteabeverages.com\/img\/su\/","img_ship_url":"https:\/\/haiteabeverages.com\/img\/s\/","img_store_url":"https:\/\/haiteabeverages.com\/img\/st\/","img_col_url":"https:\/\/haiteabeverages.com\/img\/co\/","img_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/img\/","css_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/css\/","js_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/js\/","pic_url":"https:\/\/haiteabeverages.com\/upload\/","pages":{"address":"https:\/\/haiteabeverages.com\/en\/address","addresses":"https:\/\/haiteabeverages.com\/en\/addresses","authentication":"https:\/\/haiteabeverages.com\/en\/login","cart":"https:\/\/haiteabeverages.com\/en\/cart","category":"https:\/\/haiteabeverages.com\/en\/index.php?controller=category","cms":"https:\/\/haiteabeverages.com\/en\/index.php?controller=cms","contact":"https:\/\/haiteabeverages.com\/en\/contact-us","discount":"https:\/\/haiteabeverages.com\/en\/discount","guest_tracking":"https:\/\/haiteabeverages.com\/en\/guest-tracking","history":"https:\/\/haiteabeverages.com\/en\/order-history","identity":"https:\/\/haiteabeverages.com\/en\/identity","index":"https:\/\/haiteabeverages.com\/en\/","my_account":"https:\/\/haiteabeverages.com\/en\/my-account","order_confirmation":"https:\/\/haiteabeverages.com\/en\/order-confirmation","order_detail":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-detail","order_follow":"https:\/\/haiteabeverages.com\/en\/order-follow","order":"https:\/\/haiteabeverages.com\/en\/order","order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-return","order_slip":"https:\/\/haiteabeverages.com\/en\/credit-slip","pagenotfound":"https:\/\/haiteabeverages.com\/en\/page-not-found","password":"https:\/\/haiteabeverages.com\/en\/password-recovery","pdf_invoice":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-invoice","pdf_order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-return","pdf_order_slip":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-slip","prices_drop":"https:\/\/haiteabeverages.com\/en\/prices-drop","product":"https:\/\/haiteabeverages.com\/en\/index.php?controller=product","search":"https:\/\/haiteabeverages.com\/en\/search","sitemap":"https:\/\/haiteabeverages.com\/en\/sitemap","stores":"https:\/\/haiteabeverages.com\/en\/stores","supplier":"https:\/\/haiteabeverages.com\/en\/supplier","register":"https:\/\/haiteabeverages.com\/en\/login?create_account=1","order_login":"https:\/\/haiteabeverages.com\/en\/order?login=1"},"theme_assets":"\/themes\/PRS018\/assets\/","actions":{"logout":"https:\/\/haiteabeverages.com\/en\/?mylogout="}},"configuration":{"display_taxes_label":false,"low_quantity_threshold":3,"is_b2b":false,"is_catalog":true,"show_prices":true,"opt_in":{"partner":false},"quantity_discount":{"type":"discount","label":"Discount"},"voucher_enabled":0,"return_enabled":0,"number_of_days_for_return":14},"field_required":[],"breadcrumb":{"links":[{"title":"Home","url":"https:\/\/haiteabeverages.com\/en\/"},{"title":"An Energizing Organic Social Beverage for a More Social You","url":"https:\/\/haiteabeverages.com\/en\/about-us"}],"count":2},"link":{"protocol_link":"https:\/\/","protocol_content":"https:\/\/"},"time":1704793685,"static_token":"fe9a97221cc91b5f6f65358cb957bf86","token":"3d867e33bd103fbb65711648167f9cd3"};
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

  <body id="cms" class="lang-en country-ca currency-cad layout-full-width page-cms tax-display-disabled cms-id-41  ">

    
      
    

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
        
        		          <div title="pouring a social beverage" class="cms-banner-img" style="background-image: url(images/Om-Leaf-About-Banner-Top.jpg);"><h2>More Fun, Richer Experiences </h2></div>
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
  An Energizing Organic Social Beverage for a More Social You
</h1>
      </header>
    
  
  <section id="main">

          <div class="story-section">
        <div class="container">
          <div class="row">
            
  <section id="content" class="page-content page-cms page-cms-41">

    
      <div class="about-page" style="text-align:center;">
<h1 style="text-align:center;"></h1>
<p style="text-align:center;">Happiness, a zest for life and a passion for richer social experiences are at the heart of Hai Tea. We packed vegan, gluten free and organic ingredients into our alcohol-free and caffeine-free recipes for an authentic feel-good experience.</p>
<p style="text-align:center;"> Quality ingredients = quality social experiences.</p>
<div class="cta-about">
<h2>HAI TEA</h2>
<a href="https://haiteabeverages.com/en/drinks" class="btn btn-default drinks-btn">DRINKS</a></div>
<h2 style="text-align:center;">ABOUT HAI TEA</h2>
<p style="text-align:center;">Hai Tea is a balanced blend of organic herbs and flavors, brewed to boost wellness, lift you up, and deliver a feel-good experience. It makes a great alcohol alternative when socially drinking. A family recipe, with no artificial flavor's or preservatives, Hai Tea brings together thirst-quenching satisfaction, enticing aromas, and bliss-inducing endorphins – all in an easy-to-drink sleek can.</p>
<div class="about-bottom-banner">
<div class="inner-about-bottom-banner">
<h2 style="text-align:center;">Feel Good World, Feel Good You</h2>
<p style="text-align:center;">Protecting the Earth's biodiversity and ecosystems are at the core of our beliefs. While sipping your Hai Tea, you are helping look after the natural world around you.</p>
<p style="text-align:center;">We are proud to use regenerative farming methods for our organic tea, which continually restore the soil and environment. All ingredients contain no pesticides and are derived from 100% certified organic agriculture.</p>
<p style="text-align:center;">Each sip of Hai Tea supports physical and mental health by offering an energizing and delicious alternative to alcohol. It is our vision to build a thriving community of individuals and local businesses that have common ethics and values.</p>
</div>
</div>
</div>
    

    
      
    

    
      
    

  </section>

          </div>
        </div>
      </div>
      <div class="meet-creators">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>MEET THE CREATORS</h2>
            </div>
            <div class="col-md-6">
              <img src="">
              <h2></h2>
              <p></p>
            </div>
            <div class="col-md-6">
              <img src="">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="tdstoryblock-outer container">
          <div class="vertical-align">
            <div class="left-block-hm col-sm-8">
              <div class="tdbanner-img">
                <a href="">
                  <img src="" alt="">
                </a>
                <div class="overlay">
                  <h2></h2>
                  <a href=""></a>
                </div>
              </div>
            </div>
          </div>
      </div>
        
    
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