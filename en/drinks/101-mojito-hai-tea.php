
<!doctype html>
<html lang="en">

  <head>
    
  <title>Hai Tea | Mojito Tea | Omleaf-OmLeaf</title>
  <?php include "../header.php" ?>
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
        var prestashop = {"cart":{"products":[],"totals":{"total":{"type":"total","label":"Total","amount":0,"value":"CA$0.00"},"total_including_tax":{"type":"total","label":"Total (tax incl.)","amount":0,"value":"CA$0.00"},"total_excluding_tax":{"type":"total","label":"Total (tax excl.)","amount":0,"value":"CA$0.00"}},"subtotals":{"products":{"type":"products","label":"Subtotal","amount":0,"value":"CA$0.00"},"discounts":null,"shipping":{"type":"shipping","label":"Shipping","amount":0,"value":"Free"},"tax":{"type":"tax","label":"Taxes","amount":0,"value":"CA$0.00"}},"products_count":0,"summary_string":"0 items","labels":{"tax_short":"(tax excl.)","tax_long":"(tax excluded)"},"id_address_delivery":0,"id_address_invoice":0,"is_virtual":false,"vouchers":{"allowed":0,"added":[]},"discounts":[],"minimalPurchase":0,"minimalPurchaseRequired":""},"currency":{"name":"Canadian Dollar","iso_code":"CAD","iso_code_num":"124","sign":"$"},"customer":{"lastname":null,"firstname":null,"email":null,"last_passwd_gen":null,"newsletter":null,"newsletter_date_add":null,"ip_registration_newsletter":null,"optin":null,"website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":0,"max_payment_days":0,"note":null,"is_guest":0,"id_shop":null,"id_shop_group":null,"id_default_group":1,"date_add":null,"date_upd":null,"reset_password_token":null,"reset_password_validity":null,"id":null,"is_logged":false,"gender":{"type":null,"name":null,"id":null},"risk":{"name":null,"color":null,"percent":null,"id":null},"addresses":[]},"language":{"name":"English (English)","iso_code":"en","locale":"en-US","language_code":"en-us","is_rtl":"0","date_format_lite":"m\/d\/Y","date_format_full":"m\/d\/Y H:i:s","id":1},"page":{"title":"","canonical":null,"meta":{"title":"Hai Tea | Mojito Tea | Omleaf","description":"Our Mojito tea is brewed to perfection with fresh lemon & lime, habanero oil, organic agave syrup, peppermint, and our special blend of herbal tea. This is the hai tea you want on a hot summer day.","keywords":"","robots":"index"},"page_name":"product","body_classes":{"lang-en":true,"lang-rtl":false,"country-CA":true,"currency-CAD":true,"layout-full-width":true,"page-product":true,"tax-display-disabled":true,"product-id-101":true,"product-MOJITO HAI TEA":true,"product-id-category-2":true,"product-id-manufacturer-0":true,"product-id-supplier-0":true,"product-available-for-order":true},"admin_notifications":[]},"shop":{"name":"Hai Tea Beverages","email":"admin@omleaf.com","registration_number":"","long":false,"lat":false,"logo":"\/img\/haiteabeveragescom-logo-16484762722.jpg","stores_icon":"\/img\/logo_stores.png","favicon":"\/img\/favicon.ico","favicon_update_time":"1648476272","address":{"formatted":"Hai Tea Beverages<br>Canada","address1":"","address2":"","postcode":"","city":"","state":null,"country":"Canada"},"phone":"","fax":""},"urls":{"base_url":"https:\/\/haiteabeverages.com\/","current_url":"https:\/\/haiteabeverages.com\/en\/drinks\/101-mojito-hai-tea.html?id_product_attribute=0","shop_domain_url":"https:\/\/haiteabeverages.com","img_ps_url":"https:\/\/haiteabeverages.com\/img\/","img_cat_url":"https:\/\/haiteabeverages.com\/img\/c\/","img_lang_url":"https:\/\/haiteabeverages.com\/img\/l\/","img_prod_url":"https:\/\/haiteabeverages.com\/img\/p\/","img_manu_url":"https:\/\/haiteabeverages.com\/img\/m\/","img_sup_url":"https:\/\/haiteabeverages.com\/img\/su\/","img_ship_url":"https:\/\/haiteabeverages.com\/img\/s\/","img_store_url":"https:\/\/haiteabeverages.com\/img\/st\/","img_col_url":"https:\/\/haiteabeverages.com\/img\/co\/","img_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/img\/","css_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/css\/","js_url":"https:\/\/haiteabeverages.com\/themes\/PRS018\/assets\/js\/","pic_url":"https:\/\/haiteabeverages.com\/upload\/","pages":{"address":"https:\/\/haiteabeverages.com\/en\/address","addresses":"https:\/\/haiteabeverages.com\/en\/addresses","authentication":"https:\/\/haiteabeverages.com\/en\/login","cart":"https:\/\/haiteabeverages.com\/en\/cart","category":"https:\/\/haiteabeverages.com\/en\/index.php?controller=category","cms":"https:\/\/haiteabeverages.com\/en\/index.php?controller=cms","contact":"https:\/\/haiteabeverages.com\/en\/contact-us","discount":"https:\/\/haiteabeverages.com\/en\/discount","guest_tracking":"https:\/\/haiteabeverages.com\/en\/guest-tracking","history":"https:\/\/haiteabeverages.com\/en\/order-history","identity":"https:\/\/haiteabeverages.com\/en\/identity","index":"https:\/\/haiteabeverages.com\/en\/","my_account":"https:\/\/haiteabeverages.com\/en\/my-account","order_confirmation":"https:\/\/haiteabeverages.com\/en\/order-confirmation","order_detail":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-detail","order_follow":"https:\/\/haiteabeverages.com\/en\/order-follow","order":"https:\/\/haiteabeverages.com\/en\/order","order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=order-return","order_slip":"https:\/\/haiteabeverages.com\/en\/credit-slip","pagenotfound":"https:\/\/haiteabeverages.com\/en\/page-not-found","password":"https:\/\/haiteabeverages.com\/en\/password-recovery","pdf_invoice":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-invoice","pdf_order_return":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-return","pdf_order_slip":"https:\/\/haiteabeverages.com\/en\/index.php?controller=pdf-order-slip","prices_drop":"https:\/\/haiteabeverages.com\/en\/prices-drop","product":"https:\/\/haiteabeverages.com\/en\/index.php?controller=product","search":"https:\/\/haiteabeverages.com\/en\/search","sitemap":"https:\/\/haiteabeverages.com\/en\/sitemap","stores":"https:\/\/haiteabeverages.com\/en\/stores","supplier":"https:\/\/haiteabeverages.com\/en\/supplier","register":"https:\/\/haiteabeverages.com\/en\/login?create_account=1","order_login":"https:\/\/haiteabeverages.com\/en\/order?login=1"},"theme_assets":"\/themes\/PRS018\/assets\/","actions":{"logout":"https:\/\/haiteabeverages.com\/en\/?mylogout="}},"configuration":{"display_taxes_label":false,"low_quantity_threshold":3,"is_b2b":false,"is_catalog":true,"show_prices":true,"opt_in":{"partner":false},"quantity_discount":{"type":"discount","label":"Discount"},"voucher_enabled":0,"return_enabled":0,"number_of_days_for_return":14},"field_required":[],"breadcrumb":{"links":[{"title":"Home","url":"https:\/\/haiteabeverages.com\/en\/"},{"title":"MOJITO HAI TEA","url":"https:\/\/haiteabeverages.com\/en\/drinks\/101-mojito-hai-tea.html?id_product_attribute=0"}],"count":2},"link":{"protocol_link":"https:\/\/","protocol_content":"https:\/\/"},"time":1704791967,"static_token":"fe9a97221cc91b5f6f65358cb957bf86","token":"3d867e33bd103fbb65711648167f9cd3"};
        var productcomment_added = "Thanks for your Review. Your comment has been added!";
        var productcomment_added_moderation = "Thanks for your Review. It will be available once approved by a moderator.";
        var productcomments_controller_url = "https:\/\/haiteabeverages.com\/en\/module\/tdproductcomments\/default";
        var productcomments_url_rewrite = "1";
        var secure_key = "af94335cef71c6ef3532be4598cc993d";
        var static_token = "fe9a97221cc91b5f6f65358cb957bf86";
        var wishlistProductsIds = "";
        var wishlistView = "Your Wishlist";
        var zoom_cursortype = "crosshair";
        var zoom_easing = "1";
        var zoom_fadein = "500";
        var zoom_fadeout = "500";
        var zoom_lenssize = "200";
        var zoom_lenstype = "round";
        var zoom_scroll = false;
        var zoom_tint = false;
        var zoom_tintcolor = "#2a2a2a";
        var zoom_tintopacity = "0.2";
        var zoom_type = "inner";
      </script>
    
  <meta property="og:type" content="product">
  <meta property="og:url" content="https://haiteabeverages.com/en/drinks/101-mojito-hai-tea.html?id_product_attribute=0">
  <meta property="og:title" content="Hai Tea | Mojito Tea | Omleaf">
  <meta property="og:site_name" content="Hai Tea Beverages">
  <meta property="og:description" content="Our Mojito tea is brewed to perfection with fresh lemon &amp; lime, habanero oil, organic agave syrup, peppermint, and our special blend of herbal tea. This is the hai tea you want on a hot summer day.">
  <meta property="og:image" content="../images/200-large_default/mojito-hai-tea.jpg">
  <meta property="product:pretax_price:amount" content="4.99">
  <meta property="product:pretax_price:currency" content="CAD">
  <meta property="product:price:amount" content="4.99">
  <meta property="product:price:currency" content="CAD">
  
  </head>

  <body id="product" class="lang-en country-ca currency-cad layout-full-width page-product tax-display-disabled product-id-101 product-mojito-hai-tea product-id-category-2 product-id-manufacturer-0 product-id-supplier-0 product-available-for-order  ">

    
      
    

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
      <?php include "../menu.php"; ?>
      <?php include "../logo.php"; ?>
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
    
    

  <section id="main" itemscope itemtype="https://schema.org/Product">
    <meta itemprop="url" content="https://haiteabeverages.com/en/drinks/101-mojito-hai-tea.html?id_product_attribute=0">

    <div class="row">
      <div class="col-md-5">
        
          <section class="page-content" id="content">
            
              
                <div class="images-container">
  
    <div class="product-cover">
      <img id="tdzoom" class="js-qv-product-cover" src="../images/200-large_default/mojito-hai-tea.jpg" alt="" title="" style="width:100%;" itemprop="image">
      <div class="layer hidden-sm-down" data-toggle="modal" data-target="#product-modal">
        <i class="fa fa-arrows-alt zoom-in"></i>
      </div>
      
        <ul class="product-flags">
                  </ul>
      
    </div>
  

  
    <div class="js-qv-mask mask">
      <ul id="td-gellery" class="product-images owl-carousel js-qv-product-images">
                  <li class="thumb-container">
            <a href="javascript:void(0);" data-image="../images/200-large_default/mojito-hai-tea.jpg" data-zoom-image="../images/200-large_default/mojito-hai-tea.jpg">
              <img
                class="thumb js-thumb  selected "
                data-image-medium-src="../images/200-medium_default/mojito-hai-tea.jpg"
                data-image-large-src="../images/200-large_default/mojito-hai-tea.jpg"
                src="../images/200-home_default/mojito-hai-tea.jpg"
                alt=""
                title=""
                width="100"
                itemprop="image"
              >
            </a>
          </li>
                  <li class="thumb-container">
            <a href="javascript:void(0);" data-image="../images/201-large_default/mojito-hai-tea.jpg" data-zoom-image="../images/201-large_default/mojito-hai-tea.jpg">
              <img
                class="thumb js-thumb "
                data-image-medium-src="../images/201-medium_default/mojito-hai-tea.jpg"
                data-image-large-src="../images/201-large_default/mojito-hai-tea.jpg"
                src="../images/201-home_default/mojito-hai-tea.jpg"
                alt=""
                title=""
                width="100"
                itemprop="image"
              >
            </a>
          </li>
              </ul>
    </div>
  
</div>

              
            
          </section>
        
      </div>
      <div class="col-md-7">
<!-- <ul class="productcats">
     <li><a href="https://haiteabeverages.com/en/drinks" title="Drinks">Drinks</a></li>
</ul> -->
        
          
            <h1 class="product_title h1" itemprop="name">MOJITO HAI TEA</h1>
          
        

        
                                    <div id="product_comments_block_extra" >
                <div class="comments_advices">
                                        <a class="open-comment-form" href="javascript:void(0);"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Write your review</a>
                    </div>
    </div>
<!--  /Module ProductComments -->
                  

        

        <div class="product-information">
          
            <div id="product-description-short-101" itemprop="description"><p>Created with all-natural organic ingredients, including freshly squeezed lime, lemon and mint, Mojito Hai Tea is the epitome of a refreshing alcohol-alternative. Each ingredient is specifically selected to awaken your taste buds and cure pangs of thirst. It is bright and fresh, sweet, and minty and always delightfully sparkling. This perfect drink is a great source of Vitamin C and antioxidants which help to maintain your body's energy and give your skin a beautiful glow by rejuvenating it from within.</p></div>
          

          
          <div class="product-actions">
            
              <form action="https://haiteabeverages.com/en/cart" method="post" id="add-to-cart-or-refresh">
                <input type="hidden" name="token" value="fe9a97221cc91b5f6f65358cb957bf86">
                <input type="hidden" name="id_product" value="101" id="product_page_product_id">
                <input type="hidden" name="id_customization" value="0" id="product_customization_id">

                
                  <div class="product-variants">
  </div>
                

                
                                  

                
                  <section class="product-discounts">
  </section>
                

                
                  <div class="product-add-to-cart">
  </div>
                

                
                    <div class="product-prices">
    
          

    
      <div
        class="product-price h5 "
        itemprop="offers"
        itemscope
        itemtype="https://schema.org/Offer"
      >
        <link itemprop="availability" href="https://schema.org/InStock"/>
        <meta itemprop="priceCurrency" content="CAD">

        <div class="current-price">
          <span itemprop="price" content="4.99">CA$4.99</span>

                  </div>

        
                  
      </div>
    

    
          

    
          

    
          

    

    <div class="tax-shipping-delivery-label">
            
      
    </div>
  </div>
                

                
                  <div class="product-additional-info">
  

      <div class="social-sharing">
      <span>Share</span>
      <ul>
                  <li class="facebook icon-gray">
            <a href="http://www.facebook.com/sharer.php?u=https://haiteabeverages.com/en/drinks/101-mojito-hai-tea.html?id_product_attribute=0" class="text-hide" title="Share" target="_blank">
              <span>Share</span>
            </a>
          </li>
                  <li class="twitter icon-gray">
            <a href="https://twitter.com/intent/tweet?text=MOJITO HAI TEA https://haiteabeverages.com/en/drinks/101-mojito-hai-tea.html?id_product_attribute=0" class="text-hide" title="Tweet" target="_blank">
              <span>Tweet</span>
            </a>
          </li>
                  <li class="pinterest icon-gray">
            <a href="http://www.pinterest.com/pin/create/button/?media=https://haiteabeverages.com/200/mojito-hai-tea.jpg&amp;url=https://haiteabeverages.com/en/drinks/101-mojito-hai-tea.html?id_product_attribute=0" class="text-hide" title="Pinterest" target="_blank">
              <span>Pinterest</span>
            </a>
          </li>
              </ul>
    </div>
  

<div class="js-mailalert" data-url="//haiteabeverages.com/en/module/ps_emailalerts/actions?process=add">
			<input type="email" placeholder="your@email.com"/><br />
	  <input type="hidden" value="101"/>
  <input type="hidden" value="0"/>
	<a href="#" rel="nofollow" onclick="return addNotification();">Notify me when available</a>
	<span style="display:none;"></span>
</div>

</div>
                

                
                  <input class="product-refresh ps-hidden-by-js" name="refresh" type="submit" value="Refresh">
                
              </form>
            

          </div>

          
            
          
        </div>
      </div>
    </div>
    
      <div class="tabs">
        <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#description" role="tab" aria-controls="description"  aria-selected="true">Description</a>
            </li>
                    <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#product-details" role="tab" aria-controls="product-details" >Product Details</a>
          </li>
                              
          
                                      <li class="nav-item">
    <a class="nav-link tdcommenttab" data-toggle="tab" href="#product-comment">Reviews</a>
</li>
                      
        </ul>

        <div class="tab-content" id="tab-content">
          <div class="tab-pane fade in active" id="description" role="tabpanel">
            
              <div class="product-description"><p>Mojito Hai Tea is particularly delicious and refreshing! This alcohol-alternative is made with crisp fresh mint with freshly squeezed lime and lemon. It combines the sweetness of agave syrup, bright citrus, and herbaceous mint with our proprietary herbal tea blend to create the perfect drink.</p>
<p>Let your senses be refreshed with Mojito Hai Tea! We've designed our delicious blends of botanical, organic ingredients to give you a mood-boosting alternative to alcohol. Whether you’re enjoying a relaxing day, or are out with friends, our healthy, tasty recipes are a great complement to any experience.</p>
<p>Drink Hai Tea on a night out, or after a workout, or really any time of day as an alcohol- alternative. You’ll enjoy a feel-good very refreshing beverage with an energizing buzz that will enhance your social interactions.</p></div>
            
          </div>

          
            <div class="tab-pane fade" id="product-details" data-product="{&quot;id_shop_default&quot;:&quot;1&quot;,&quot;id_manufacturer&quot;:&quot;0&quot;,&quot;id_supplier&quot;:&quot;0&quot;,&quot;reference&quot;:&quot;&quot;,&quot;is_virtual&quot;:&quot;0&quot;,&quot;delivery_in_stock&quot;:&quot;&quot;,&quot;delivery_out_stock&quot;:&quot;&quot;,&quot;id_category_default&quot;:&quot;2&quot;,&quot;on_sale&quot;:&quot;0&quot;,&quot;online_only&quot;:&quot;0&quot;,&quot;ecotax&quot;:0,&quot;minimal_quantity&quot;:&quot;1&quot;,&quot;low_stock_threshold&quot;:null,&quot;low_stock_alert&quot;:&quot;0&quot;,&quot;price&quot;:5.2395,&quot;unity&quot;:&quot;&quot;,&quot;unit_price_ratio&quot;:&quot;0.000000&quot;,&quot;additional_shipping_cost&quot;:&quot;0.00&quot;,&quot;customizable&quot;:&quot;0&quot;,&quot;text_fields&quot;:&quot;0&quot;,&quot;uploadable_files&quot;:&quot;0&quot;,&quot;redirect_type&quot;:&quot;404&quot;,&quot;id_type_redirected&quot;:&quot;0&quot;,&quot;available_for_order&quot;:&quot;1&quot;,&quot;available_date&quot;:&quot;0000-00-00&quot;,&quot;show_condition&quot;:&quot;0&quot;,&quot;condition&quot;:&quot;new&quot;,&quot;show_price&quot;:&quot;1&quot;,&quot;indexed&quot;:&quot;1&quot;,&quot;visibility&quot;:&quot;both&quot;,&quot;cache_default_attribute&quot;:&quot;0&quot;,&quot;advanced_stock_management&quot;:&quot;0&quot;,&quot;date_add&quot;:&quot;2019-07-18 01:48:58&quot;,&quot;date_upd&quot;:&quot;2022-08-29 16:45:49&quot;,&quot;pack_stock_type&quot;:&quot;3&quot;,&quot;meta_description&quot;:&quot;Our Mojito tea is brewed to perfection with fresh lemon &amp; lime, habanero oil, organic agave syrup, peppermint, and our special blend of herbal tea. This is the hai tea you want on a hot summer day.&quot;,&quot;meta_keywords&quot;:&quot;&quot;,&quot;meta_title&quot;:&quot;Hai Tea | Mojito Tea | Omleaf&quot;,&quot;link_rewrite&quot;:&quot;mojito-hai-tea&quot;,&quot;name&quot;:&quot;MOJITO HAI TEA&quot;,&quot;description&quot;:&quot;&lt;p&gt;Mojito Hai Tea is particularly delicious and refreshing! This alcohol-alternative is made with crisp fresh mint with freshly squeezed lime and lemon. It combines the sweetness of agave syrup, bright citrus, and herbaceous mint with our proprietary herbal tea blend to create the perfect drink.&lt;\/p&gt;\n&lt;p&gt;Let your senses be refreshed with Mojito Hai Tea! We&#039;ve designed our delicious blends of botanical, organic ingredients to give you a mood-boosting alternative to alcohol. Whether you\u2019re enjoying a relaxing day, or are out with friends, our healthy, tasty recipes are a great complement to any experience.&lt;\/p&gt;\n&lt;p&gt;Drink Hai Tea on a night out, or after a workout, or really any time of day as an alcohol- alternative. You\u2019ll enjoy a feel-good very refreshing beverage with an energizing buzz that will enhance your social interactions.&lt;\/p&gt;&quot;,&quot;description_short&quot;:&quot;&lt;p&gt;Created with all-natural organic ingredients, including freshly squeezed lime, lemon and mint, Mojito Hai Tea is the epitome of a refreshing alcohol-alternative. Each ingredient is specifically selected to awaken your taste buds and cure pangs of thirst. It is bright and fresh, sweet, and minty and always delightfully sparkling. This perfect drink is a great source of Vitamin C and antioxidants which help to maintain your body&#039;s energy and give your skin a beautiful glow by rejuvenating it from within.&lt;\/p&gt;&quot;,&quot;available_now&quot;:&quot;&quot;,&quot;available_later&quot;:&quot;&quot;,&quot;id&quot;:101,&quot;id_product&quot;:101,&quot;out_of_stock&quot;:2,&quot;new&quot;:0,&quot;id_product_attribute&quot;:&quot;0&quot;,&quot;quantity_wanted&quot;:1,&quot;extraContent&quot;:[],&quot;allow_oosp&quot;:0,&quot;category&quot;:&quot;drinks&quot;,&quot;category_name&quot;:&quot;Drinks&quot;,&quot;link&quot;:&quot;https:\/\/haiteabeverages.com\/en\/drinks\/101-mojito-hai-tea.html?id_product_attribute=0&quot;,&quot;attribute_price&quot;:0,&quot;price_tax_exc&quot;:4.99,&quot;price_without_reduction&quot;:4.99,&quot;reduction&quot;:0,&quot;specific_prices&quot;:[],&quot;quantity&quot;:0,&quot;quantity_all_versions&quot;:0,&quot;id_image&quot;:&quot;en-default&quot;,&quot;features&quot;:[],&quot;attachments&quot;:[],&quot;virtual&quot;:0,&quot;pack&quot;:0,&quot;packItems&quot;:[],&quot;nopackprice&quot;:0,&quot;customization_required&quot;:false,&quot;rate&quot;:5,&quot;tax_name&quot;:&quot;CA&quot;,&quot;ecotax_rate&quot;:5,&quot;unit_price&quot;:0,&quot;customizations&quot;:{&quot;fields&quot;:[]},&quot;id_customization&quot;:0,&quot;is_customizable&quot;:false,&quot;show_quantities&quot;:false,&quot;quantity_label&quot;:&quot;Item&quot;,&quot;quantity_discounts&quot;:[],&quot;customer_group_discount&quot;:0}" role="tabpanel">
  
            

    
          

    
          

    
          

    
      <div class="product-out-of-stock">
        
      </div>
    

    
          

    
    
          
	
	<div class="customdetails"><p><b>Mojito Hai Tea - Nutrition Facts</b></p>
<p><b>Per 1 can (355 mL)</b></p>
<p><b>Calories 60</b></p>
<p><b>Fat 0g</b></p>
<p><b>Carbohydrate 15g</b></p>
<p><b>Sugar 13g</b></p>
<p><b>Protein 0g</b></p>
<p><b>Potassium 75mg</b></p>
<p><b>Calcium 20mg</b></p></div>

</div>
          

          
                      

          
          
                                      <div class="tab-pane fade" id="product-comment">
    <div id="product_comments_block_tab">
                                    <p class="align_center">
                    <a id="new_comment_tab_btn" class="btn btn-primary open-comment-form" href="javascript:void(0);">
                        <span>Be the first to write your review!</span>
                    </a>
                </p>
                        </div> <!-- #product_comments_block_tab -->
</div>

                      

        </div>
      </div>
    
    
          

    
      
<section class="productcategory products_block clearfix">
  <div class="products_block_inner">
    <h2 class="productpage-heading">
              <!--2--> other products in the same category:
          </h2>

        
      <div class="block_content row">
        <div id="productscategory-carousel" class="owl-carousel products">
                      <div class="item product-miniature js-product-miniature" data-id-product="108" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
              <div class="product-container">
    <div class="thumbnail-container">
        <div class="thumbnail-inner">
            
                <a href="https://haiteabeverages.com/en/drinks/108-hibiscus-hai-tea-.html?id_product_attribute=0" class="thumbnail product-thumbnail">
                    <img src = "../images/225-home_default/hibiscus-hai-tea-.jpg" alt = "Hibiscus Hai Tea" data-full-size-image-url = "../images/225-large_default/hibiscus-hai-tea-.jpg" />
                                            <img class="replace-2x img_1 img-responsive" src = "../images/226-home_default/hibiscus-hai-tea-.jpg" alt = "Hibiscus Hai Tea" title="" />
                                    </a>
            
            <div class="button-container">
                
                
    <div class="wishlist">
        <a class="addToWishlist btn btn-primary wishlistProd_108" href="#"  data-dismiss="modal" data-rel="108" onclick="WishlistCart('wishlist_block_list', 'add', '108', '0', 1); return false;">
            <span>Add to Wishlist</span>
        </a>
    </div>

                <div class="compare">
	<a class="add_to_compare btn btn-primary" href="#" data-id-product="108" data-dismiss="modal" title="Add to Compare">
		<span>Add to Compare</span>
	</a>
</div>

                <div class="quick-view-wrapper">
                    <a href="#" class="quick-view btn btn-primary" data-link-action="quickview" >
                        <!-- <i class="fa fa-eye"></i> -->
                        <span class="lblquickview">Quick view</span>
                    </a>
                </div>
                
            </div>
            
                <ul class="product-flags">
                                    </ul>
            
        </div>
    </div>
    <div class="product-description">
        
            <h1 class="h3 product-title" itemprop="name"><a href="https://haiteabeverages.com/en/drinks/108-hibiscus-hai-tea-.html?id_product_attribute=0">Hibiscus Hai Tea</a></h1>
        

        
                            <div class="product-price-and-shipping">
                    
                    

                    <span class="sr-only">Price</span>
                    <span itemprop="price" class="price">CA$3.99</span>

                    

                    
                </div>
                    

        
                <div class="comments_note" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <div class="star_content clearfix">
                                                <div class="star"></div>
                                                                <div class="star"></div>
                                                                <div class="star"></div>
                                                                <div class="star"></div>
                                                                <div class="star"></div>
                                        <meta itemprop="worstRating" content = "0" />
            <meta itemprop="ratingValue" content = "0" />
            <meta itemprop="bestRating" content = "5" />
        </div>
            </div>

        
        
        
            <p class="product-desc" itemprop="description">
                The delicately tart notes of hibiscus shine through this sparkling blend of botanicals. A dry effervescence complements this sophisticated herbal drink reminiscent of champagne. This vegan cocktail is full of naturally-occurring anthocyanins associated with heart health benefits without the alcohol. If you&#039;re looking for the perfect social drink or...
            </p>
        

        <div class="highlighted-informations no-variants">
            
                            
        </div>
    </div>
</div>
            </div>
                      <div class="item product-miniature js-product-miniature" data-id-product="104" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
              <div class="product-container">
    <div class="thumbnail-container">
        <div class="thumbnail-inner">
            
                <a href="https://haiteabeverages.com/en/drinks/104-ginger-hai-tea.html?id_product_attribute=0" class="thumbnail product-thumbnail">
                    <img src = "../images/197-home_default/ginger-hai-tea.jpg" alt = "GINGER HAI TEA" data-full-size-image-url = "../images/197-large_default/ginger-hai-tea.jpg" />
                                            <img class="replace-2x img_1 img-responsive" src = "../images/187-home_default/ginger-hai-tea.jpg" alt = "GINGER HAI TEA" title="" />
                                    </a>
            
            <div class="button-container">
                
                
    <div class="wishlist">
        <a class="addToWishlist btn btn-primary wishlistProd_104" href="#"  data-dismiss="modal" data-rel="104" onclick="WishlistCart('wishlist_block_list', 'add', '104', '0', 1); return false;">
            <span>Add to Wishlist</span>
        </a>
    </div>

                <div class="compare">
	<a class="add_to_compare btn btn-primary" href="#" data-id-product="104" data-dismiss="modal" title="Add to Compare">
		<span>Add to Compare</span>
	</a>
</div>

                <div class="quick-view-wrapper">
                    <a href="#" class="quick-view btn btn-primary" data-link-action="quickview" >
                        <!-- <i class="fa fa-eye"></i> -->
                        <span class="lblquickview">Quick view</span>
                    </a>
                </div>
                
            </div>
            
                <ul class="product-flags">
                                    </ul>
            
        </div>
    </div>
    <div class="product-description">
        
            <h1 class="h3 product-title" itemprop="name"><a href="https://haiteabeverages.com/en/drinks/104-ginger-hai-tea.html?id_product_attribute=0">GINGER HAI TEA</a></h1>
        

        
                            <div class="product-price-and-shipping">
                    
                    

                    <span class="sr-only">Price</span>
                    <span itemprop="price" class="price">CA$4.99</span>

                    

                    
                </div>
                    

        
                <div class="comments_note" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <div class="star_content clearfix">
                                                <div class="star"></div>
                                                                <div class="star"></div>
                                                                <div class="star"></div>
                                                                <div class="star"></div>
                                                                <div class="star"></div>
                                        <meta itemprop="worstRating" content = "0" />
            <meta itemprop="ratingValue" content = "0" />
            <meta itemprop="bestRating" content = "5" />
        </div>
            </div>

        
        
        
            <p class="product-desc" itemprop="description">
                Packed with organic ginger, cloves and lemons, this refreshing drink is full of nutrients and bioactive compounds that have powerful benefits for your body and brain. Ginger Hai Tea combines a champagne-like effervescence for that uplifting, social feeling with a mellow, botanical flavour to relax and rejuvenate your senses. Making it the best alternative...
            </p>
        

        <div class="highlighted-informations no-variants">
            
                            
        </div>
    </div>
</div>
            </div>
                  </div>
      </div>
      </div>
</section>

				<script type="text/javascript">
					document.addEventListener('DOMContentLoaded', function() {
						var MBG = GoogleAnalyticEnhancedECommerce;
						MBG.setCurrency('CAD');
						MBG.addProductDetailView({"id":101,"name":"mojito-hai-tea","category":"drinks","brand":"","variant":false,"type":"typical","position":"0","quantity":1,"list":"product","url":"https%3A%2F%2Fhaiteabeverages.com%2Fen%2Fdrinks%2F101-mojito-hai-tea.html%3Fid_product_attribute%3D0","price":"CA$4.99"});
					});
				</script>
				<script type="text/javascript">
					jQuery(document).ready(function(){
						var MBG = GoogleAnalyticEnhancedECommerce;
						MBG.setCurrency('CAD');
						MBG.addProductDetailView({"id":101,"name":"\"MOJITO HAI TEA\"","category":"\"drinks\"","brand":"","variant":"null","type":"typical","position":"0","quantity":1,"list":"product","url":"https%3A%2F%2Fhaiteabeverages.com%2Fen%2Fdrinks%2F101-mojito-hai-tea.html%3Fid_product_attribute%3D0","price":null});
					});
				</script>
    

    
      <div class="modal fade js-product-images-modal" id="product-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
                <figure>
          <img class="js-modal-product-cover product-cover-modal" width="800" src="../images/200-large_default/mojito-hai-tea.jpg" alt="" title="" itemprop="image">
          <figcaption class="image-caption">
          
            <div id="product-description-short" itemprop="description"><p>Created with all-natural organic ingredients, including freshly squeezed lime, lemon and mint, Mojito Hai Tea is the epitome of a refreshing alcohol-alternative. Each ingredient is specifically selected to awaken your taste buds and cure pangs of thirst. It is bright and fresh, sweet, and minty and always delightfully sparkling. This perfect drink is a great source of Vitamin C and antioxidants which help to maintain your body's energy and give your skin a beautiful glow by rejuvenating it from within.</p></div>
          
        </figcaption>
        </figure>
        <aside id="thumbnails" class="thumbnails js-thumbnails text-xs-center">
          
            <div class="js-modal-mask mask  nomargin ">
              <ul class="product-images owl-carousel js-modal-product-images">
                                  <li class="thumb-container">
                    <img data-image-large-src="../images/200-large_default/mojito-hai-tea.jpg" class="thumb js-modal-thumb" src="../images/200-medium_default/mojito-hai-tea.jpg" alt="" title="" width="100" itemprop="image">
                  </li>
                                  <li class="thumb-container">
                    <img data-image-large-src="../images/201-large_default/mojito-hai-tea.jpg" class="thumb js-modal-thumb" src="../images/201-medium_default/mojito-hai-tea.jpg" alt="" title="" width="100" itemprop="image">
                  </li>
                              </ul>
            </div>
          
        </aside>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
    

    
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

      <?php include "../footer.php"; ?>

    </main>
    <a class="backtotop" href="#" title="Back to Top" style="display:none;">&nbsp;</a>
    
        <script type="text/javascript" src="bottom-220a28146.js" ></script>




    

    
      
<div id="tdcomment-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h2 class="modal-title">
                    Write a review
                </h2>
            </div>
            <div class="modal-body">
                <div class="row">
                                            <div class="product clearfix col-xs-12 col-sm-6">
                            <img src="../images/200-home_default/mojito-hai-tea.jpg" alt="MOJITO HAI TEA" />
                            <div class="product_desc">
                                <p class="product_name">
                                    <strong>MOJITO HAI TEA</strong>
                                </p>
                                <p>Created with all-natural organic ingredients, including freshly squeezed lime, lemon and mint, Mojito Hai Tea is the epitome of a refreshing alcohol-alternative. Each ingredient is specifically selected to awaken your taste buds and cure pangs of thirst. It is bright and fresh, sweet, and minty and always delightfully sparkling. This perfect drink is a great source of Vitamin C and antioxidants which help to maintain your body's energy and give your skin a beautiful glow by rejuvenating it from within.</p>
                            </div>
                        </div>
                                        <div class="new_comment_form_content col-xs-12 col-sm-6">
                        <form id="id_new_comment_form" action="#">
                                                            <ul id="criterions_list">
                                                                            <li>
                                            <label>Quality:</label>
                                            <div class="star_content">
                                                <input class="star" type="radio" name="criterion[1]" value="1" />
                                                <input class="star" type="radio" name="criterion[1]" value="2" />
                                                <input class="star" type="radio" name="criterion[1]" value="3" />
                                                <input class="star" type="radio" name="criterion[1]" value="4" />
                                                <input class="star" type="radio" name="criterion[1]" value="5" checked="checked" />
                                            </div>
                                            <div class="clearfix"></div>
                                        </li>
                                                                    </ul>
                                                        <div class="form-group">
                                <label class="form-control-label" for="comment_title">
                                    Title: <sup class="required">*</sup>
                                </label>
                                <input class="form-control" id="comment_title" name="title" type="text" value=""/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="content">
                                    Comment: <sup class="required">*</sup>
                                </label>
                                <textarea class="form-control" id="content" name="content" type="text"></textarea>
                            </div>
                                                            <div class="form-group">
                                    <label class="form-control-label" for="customer_name">
                                        Your name: <sup class="required">*</sup>
                                    </label>
                                    <input class="form-control" id="commentCustomerName" name="customer_name" type="text" value=""/>
                                </div>
                                                        <div class="form-group">
                                <label class="form-control-label">
                                    <sup class="required">*</sup> Required fields
                                </label>
                                <input id="id_product_comment_send" name="id_product" type="hidden" value='101' />
                            </div>
                        </form>
                        <div id="new_comment_form_error" class="error" style="display: none; padding: 15px 0px">
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="submitNewMessage" name="submitMessage" type="submit" class="btn btn-primary">
                    <span>Submit</span>
                </button>
            </div>
        </div>
    </div>
</div>
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