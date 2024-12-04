
<!doctype html>
<html lang="en">

  <head>
  <title>Contact Us | Hai Tea Beverages</title>
  <?php include "header.php"; ?> 
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
        var prestashop = {"cart":{"products":[],"totals":{"total":{"type":"total","label":"Total","amount":0,"value":"CA$0.00"},"total_including_tax":{"type":"total","label":"Total (tax incl.)","amount":0,"value":"CA$0.00"},"total_excluding_tax":{"type":"total","label":"Total (tax excl.)","amount":0,"value":"CA$0.00"}},"subtotals":{"products":{"type":"products","label":"Subtotal","amount":0,"value":"CA$0.00"},"discounts":null,"shipping":{"type":"shipping","label":"Shipping","amount":0,"value":"Free"},"tax":{"type":"tax","label":"Taxes","amount":0,"value":"CA$0.00"}},"products_count":0,"summary_string":"0 items","labels":{"tax_short":"(tax excl.)","tax_long":"(tax excluded)"},"id_address_delivery":0,"id_address_invoice":0,"is_virtual":false,"vouchers":{"allowed":0,"added":[]},"discounts":[],"minimalPurchase":0,"minimalPurchaseRequired":""},"currency":{"name":"Canadian Dollar","iso_code":"CAD","iso_code_num":"124","sign":"$"},"customer":{"lastname":null,"firstname":null,"email":null,"last_passwd_gen":null,"newsletter":null,"newsletter_date_add":null,"ip_registration_newsletter":null,"optin":null,"website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":0,"max_payment_days":0,"note":null,"is_guest":0,"id_shop":null,"id_shop_group":null,"id_default_group":1,"date_add":null,"date_upd":null,"reset_password_token":null,"reset_password_validity":null,"id":null,"is_logged":false,"gender":{"type":null,"name":null,"id":null},"risk":{"name":null,"color":null,"percent":null,"id":null},"addresses":[]},"language":{"name":"English (English)","iso_code":"en","locale":"en-US","language_code":"en-us","is_rtl":"0","date_format_lite":"m\/d\/Y","date_format_full":"m\/d\/Y H:i:s","id":1},"page":{"title":"","canonical":null,"meta":{"title":"Contact | Omleaf | The Number One Social Beverage Company","description":"Curious about the number one social drink Omleaf? Use our Contact form to get in touch for any questions or comments. Don\u2019t forget to take a look at our FAQs page where your answer could be waiting.","keywords":"","robots":"index"},"page_name":"contact","body_classes":{"lang-en":true,"lang-rtl":false,"country-CA":true,"currency-CAD":true,"layout-left-column":true,"page-contact":true,"tax-display-disabled":true},"admin_notifications":[]},"shop":{"name":"Hai Tea Beverages","email":"admin@omleaf.com","registration_number":"","long":false,"lat":false,"logo":"images\/haiteabeveragescom-logo-16484762722.jpg","stores_icon":"\/img\/logo_stores.png","favicon":"\/img\/favicon.ico","favicon_update_time":"1648476272","address":{"formatted":"Hai Tea Beverages<br>Canada","address1":"","address2":"","postcode":"","city":"","state":null,"country":"Canada"},"phone":"","fax":""},"urls":{"base_url":"https:\/\/haiteabeverages.com\/","current_url":"https:\/\/haiteabeverages.com\/en\/contact-us","shop_domain_url":"https:\/\/haiteabeverages.com","img_ps_url":"https:\/\/haiteabeverages.com\/img\/","img_cat_url":"https:\/\/haiteabeverages.com\/img\/c\/","img_lang_url":"https:\/\/haiteabeverages.com\/img\/l\/","img_prod_url":"https:\/\/haiteabeverages.com\/img\/p\/","img_manu_url":"https:\/\/haiteabeverages.com\/img\/m\/","img_sup_url":"https:\/\/haiteabeverages.com\/img\/su\/","img_ship_url":"https:\/\/haiteabeverages.com\/img\/s\/","img_store_url":"https:\/\/haiteabeverages.com\/img\/st\/","img_col_url":"https:\/\/haiteabeverages.com\/img\/co\/","img_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/img\/","css_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/css\/","js_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/js\/","pic_url":"https:\/\/haiteabeverages.com\/upload\/","pages":{"address":"https:\/\/haiteabeverages.com\/en\/address","addresses":"https:\/\/haiteabeverages.com\/en\/addresses","authentication":"https:\/\/haiteabeverages.com\/en\/login","cart":"https:\/\/haiteabeverages.com\/en\/cart","category":"https:\/\/haiteabeverages.com\/en\/index.php?controller=category","cms":"https:\/\/haiteabeverages.com\/en\/index.php?controller=cms","contact":"https:\/\/haiteabeverages.com\/en\/contact-us","discount":"https:\/\/haiteabeverages.com\/en\/discount","guest_tracking":"https:\/\/haiteabeverages.com\/en\/guest-tracking","history":"https:\/\/haiteabeverages.com\/en\/order-history","identity":"https:\/\/haiteabeverages.com\/en\/identity","index":"https:\/\/haiteabeverages.com\/en\/","my_account":"https:\/\/haiteabeverages.com\/en\/my-account","order_confirmation":"https:\/\/haiteabeverages.com\/en\/order-confirmation","order_detail":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-detail","order_follow":"https:\/\/haiteabeverages.com\/en\/order-follow","order":"https:\/\/haiteabeverages.com\/en\/order","order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-return","order_slip":"https:\/\/haiteabeverages.com\/en\/credit-slip","pagenotfound":"https:\/\/haiteabeverages.com\/en\/page-not-found","password":"https:\/\/haiteabeverages.com\/en\/password-recovery","pdf_invoice":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-invoice","pdf_order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-return","pdf_order_slip":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-slip","prices_drop":"https:\/\/haiteabeverages.com\/en\/prices-drop","product":"https:\/\/haiteabeverages.com\/en\/index.php?controller=product","search":"https:\/\/haiteabeverages.com\/en\/search","sitemap":"https:\/\/haiteabeverages.com\/en\/sitemap","stores":"https:\/\/haiteabeverages.com\/en\/stores","supplier":"https:\/\/haiteabeverages.com\/en\/supplier","register":"https:\/\/haiteabeverages.com\/en\/login?create_account=1","order_login":"https:\/\/haiteabeverages.com\/en\/order?login=1"},"theme_assets":"\/themes\/PRS018\/assets\/","actions":{"logout":"https:\/\/haiteabeverages.com\/en\/?mylogout="}},"configuration":{"display_taxes_label":false,"low_quantity_threshold":3,"is_b2b":false,"is_catalog":true,"show_prices":true,"opt_in":{"partner":false},"quantity_discount":{"type":"discount","label":"Discount"},"voucher_enabled":0,"return_enabled":0,"number_of_days_for_return":14},"field_required":[],"breadcrumb":{"links":[{"title":"Home","url":"https:\/\/haiteabeverages.com\/en\/"}],"count":1},"link":{"protocol_link":"https:\/\/","protocol_content":"https:\/\/"},"time":1704800700,"static_token":"fe9a97221cc91b5f6f65358cb957bf86","token":"3d867e33bd103fbb65711648167f9cd3"};
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

  <body id="contact" class="lang-en country-ca currency-cad layout-left-column page-contact tax-display-disabled  ">

    
      
    

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
      

            
            
      
        
  
    
 
<style>
#wrapper{
    background: url(images/CONTACT-US-min.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: 179px;
}
.card{
  background: transparent;
    border: 0px;
}
}
</style>
 
<div class="tdbreadcrumb"  style="display: none">
<img src="https://haiteabeverages.com/themes/PRS018/assets/img/CONTACT-US-min.png" alt="contact Us">
</div>
      

      <section id="wrapper">
        
                <div title="girl holding a hai tea beverage"  class="contact-banner-img"><h1>Contact us</h1></div>
        <div class="container">
          
          <div class="row">
            
  <div id="left-column" class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
    
<div class="contact-rich">
  <h4>Store information</h4>
  <div class="block">
    <div class="icon"><i class="material-icons">&#xE55F;</i></div>
    <div class="data">Hai Tea Beverages<br />Canada</div>
  </div>
        <hr/>
  <div class="block">
    <div class="icon"><i class="material-icons">&#xE158;</i></div>
    <div class="data email">
      Email us:<br/>
    </div>
    <a href="mailto:admin@omleaf.com">admin@omleaf.com</a>
  </div>
  </div>

  </div>


            
  <div id="content-wrapper" class="left-column col-xs-12 col-sm-12 col-md-12 col-lg-12">
    
    
  
  <section id="main">

            
          <section id="content" class="page-content card card-block">
            
            
 <!-- <img src="https://haiteabeverages.com/themes/PRS018/assets/img/CONTACT-US-min.png" alt="contact Us">  -->
  
    <script src='https://www.google.com/recaptcha/api.js'></script>

<div class="col-centered col-md-9">
<!--<h2>CUSTOMER SUPPORT</h2>-->
<!--<p>Customer satisfaction is very important to us. If you have any questions, please visit our
FAQs here or reach out to us below.</p>-->
<p>Customer satisfaction is very important to us. If you have any questions, please visit <a href="/faqs">our FAQs</a> or reach out to us below.</p>
<p>get in touch with us at drink@haiteabeverages.com</p>
<!--<h2>GET IN TOUCH</h2>-->

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