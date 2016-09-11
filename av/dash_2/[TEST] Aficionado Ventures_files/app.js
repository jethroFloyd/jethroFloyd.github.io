var require = meteorInstall({"imports":{"ui":{"components":{"add-product.html":["./template.add-product.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/components/add-product.html                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.add-product.js");                                                              // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.add-product.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/components/template.add-product.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("marketplaceUser");                                                                            // 2
Template["marketplaceUser"] = new Template("Template.marketplaceUser", (function() {                                // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "container-fluid"                                                                                      // 6
  }, "\n  ", HTML.DIV({                                                                                             // 7
    "class": "row",                                                                                                 // 8
    id: "row-container"                                                                                             // 9
  }, "\n    ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-left"></div>'), "\n    \n    ", HTML.DIV({          // 10
    "class": "col-sm-7 col-md-7",                                                                                   // 11
    id: "col-mid"                                                                                                   // 12
  }, "\n      ", HTML.Raw('<div class="col-sm-2 col-md-2"></div>'), "\n      ", HTML.DIV({                          // 13
    "class": "col-sm-8 col-md-8"                                                                                    // 14
  }, "\n        ", Spacebars.include(view.lookupTemplate("newProduct")), "\n          ", HTML.SECTION({             // 15
    name: "product"                                                                                                 // 16
  }, "\n            ", Blaze.If(function() {                                                                        // 17
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                            // 18
  }, function() {                                                                                                   // 19
    return [ "\n              ", Blaze.Each(function() {                                                            // 20
      return Spacebars.call(view.lookup("products"));                                                               // 21
    }, function() {                                                                                                 // 22
      return [ "\n                ", Spacebars.include(view.lookupTemplate("Product")), "\n              " ];       // 23
    }), "\n            " ];                                                                                         // 24
  }, function() {                                                                                                   // 25
    return [ "\n              ", HTML.P("Loading"), "\n            " ];                                             // 26
  }), "\n          "), "\n      "), "\n      ", HTML.Raw('<div class="col-sm-2 col-md-2"></div>'), "      \n    "), "            \n    ", HTML.Raw('<div class="col-sm-3 col-md-3" id="col-right"></div>'), "\n  "), "\n");
}));                                                                                                                // 28
                                                                                                                    // 29
Template.__checkName("newProduct");                                                                                 // 30
Template["newProduct"] = new Template("Template.newProduct", (function() {                                          // 31
  var view = this;                                                                                                  // 32
  return Blaze._TemplateWith(function() {                                                                           // 33
    return {                                                                                                        // 34
      collection: Spacebars.call("Products"),                                                                       // 35
      id: Spacebars.call("insertProductForm"),                                                                      // 36
      type: Spacebars.call("insert"),                                                                               // 37
      "class": Spacebars.call("new-product-form")                                                                   // 38
    };                                                                                                              // 39
  }, function() {                                                                                                   // 40
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 41
  });                                                                                                               // 42
}));                                                                                                                // 43
                                                                                                                    // 44
Template.__checkName("Product");                                                                                    // 45
Template["Product"] = new Template("Template.Product", (function() {                                                // 46
  var view = this;                                                                                                  // 47
  return HTML.ARTICLE({                                                                                             // 48
    "class": "product"                                                                                              // 49
  }, "\n    ", HTML.SPAN("name = ", Blaze.View("lookup:name", function() {                                          // 50
    return Spacebars.mustache(view.lookup("name"));                                                                 // 51
  })), "\n    ", HTML.SPAN("age=", Blaze.View("lookup:age", function() {                                            // 52
    return Spacebars.mustache(view.lookup("age"));                                                                  // 53
  })), "\n    ", HTML.SPAN("size=", Blaze.View("lookup:size", function() {                                          // 54
    return Spacebars.mustache(view.lookup("size"));                                                                 // 55
  })), "\n    ", HTML.SPAN("price=", Blaze.View("lookup:price", function() {                                        // 56
    return Spacebars.mustache(view.lookup("price"));                                                                // 57
  })), "\n    ", HTML.SPAN("grade=", Blaze.View("lookup:grade", function() {                                        // 58
    return Spacebars.mustache(view.lookup("grade"));                                                                // 59
  })), "\n    ", HTML.SPAN("category=", Blaze.View("lookup:category", function() {                                  // 60
    return Spacebars.mustache(view.lookup("category"));                                                             // 61
  })), "\n  ");                                                                                                     // 62
}));                                                                                                                // 63
                                                                                                                    // 64
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navigation.html":["./template.navigation.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/components/navigation.html                                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.navigation.js");                                                               // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.navigation.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/components/template.navigation.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("navigation");                                                                                 // 2
Template["navigation"] = new Template("Template.navigation", (function() {                                          // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<!--  {{#if currentUser}}\n    <div class="jumbotron jumbotron-head">\n      <span style="float: left;"><a href="/" id="a-nav">Aficionado</a></span> \n      <span style="float: right;">\n        <ul>\n          <li style="display: inline;"><a href="{{pathFor route=\'search\'}}" id="a-nav">Search&emsp;</a></li>\n          <li style="display: inline;"><a href=# class="logout_control" id="a-nav">Logout &emsp;</a></li>\n          <span class="glyphicon glyphicon-user"></span>\n        </ul>\n      </span>      \n    </div>\n\n    <div class="jumbotron jumbotron-head3">\n      <span style="" id="jumbotron-register1">Make Restaurants Scalable!</span> \n        <span style="float: right; margin: 0px;">\n          <button type="button" class="btn btn-default btn-lg" style="border-radius: 39px; background-color: #ddefef;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); border: solid 1px #a5a2a2;">Notification <span class="badge" ></span></button>\n      </span>\n    </div>\n    \n  {{else}}\n    <div class="jumbotron jumbotron-head">\n      <span style="float: left;"><a href="/" id="a-nav">Aficionado</a></span> \n      <span style="float: right;">\n        <ul class="menu">\n          <li style="display: inline;"><a href="{{pathFor route=\'search\'}}" id="a-nav">Search&emsp;</a></li>\n          <li style="display: inline;"><a href="{{pathFor route=\'register\'}}" id="a-nav">Register&emsp;</a></li>\n          <li style="display: inline;"><a href="{{pathFor route=\'login\'}}" id="a-nav">Login&emsp;</a></li>\n          <span class="glyphicon glyphicon-user"></span>\n        </ul>\n      \n      </span>\n    </div>\n\n\n    <div class="jumbotron jumbotron-head2">\n      <span style="" id="jumbotron-register1">Make Restaurants Scalable</span> \n        \n    </div>\n\n    \n  {{/if}} -->');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components.js":["./navigation.html","./add-product.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/components/components.js                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.import('./navigation.html');                                                                                 // 1
module.import('./add-product.html');                                                                                // 2
                                                                                                                    //
// Meteor.subscribe('products');                                                                                    //
                                                                                                                    //
Template.marketplaceUser.onCreated(function () {                                                                    // 6
	var self = this;                                                                                                   // 7
	self.autorun(function () {                                                                                         // 8
		self.subscribe('products');                                                                                       // 9
	});                                                                                                                // 10
});                                                                                                                 // 11
                                                                                                                    //
Template.marketplaceUser.helpers({                                                                                  // 13
	products: function () {                                                                                            // 14
		function products() {                                                                                             // 14
			return Products.find({});                                                                                        // 15
		}                                                                                                                 // 16
                                                                                                                    //
		return products;                                                                                                  // 14
	}()                                                                                                                // 14
});                                                                                                                 // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"pages":{"cart.html":["./template.cart.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/cart.html                                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.cart.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.cart.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.cart.js                                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("cart");                                                                                       // 2
Template["cart"] = new Template("Template.cart", (function() {                                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="modal fade">\n    <div class="modal-dialog modal-md">\n\n  <div class="container-fluid" id="cart-container">\n    \n    <div row="" id="cart-head">\n      <p id="home-navigation-2-text">Cart</p>\n    </div>\n    <div row="" id="cart-head-content">\n      <div class="col-md-10">\n        <p id="cart-head-content-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prices shown include shipping and taxes</p>\n      </div>\n      <div class="col-md-2">\n        <button id="viewDetail" class="col-md-2 view-display-button" data-dismiss="modal">\n          <p id="product-specs-content">Close</p>\n        </button>\n      </div>\n    </div>\n      <div class="container-fliud" id="cart-product-display-container"> \n      <div class="row" id="cart-product-display-1">\n        <div class="col-md-3">\n          <img src="image/potatoes.png" id="cart-product-display-image">\n        </div>\n        <div class="col-md-4">\n          <p class="cart-product-specs">Price:</p>\n            <p class="cart-product-specs-content"> Rs. 6.50/kg</p>\n        </div>\n        <div class="col-md-3">\n          <p class="cart-product-specs">Quantity:</p>\n            <p class="cart-product-specs-content"> 30 kg</p>\n        </div>\n        <div class="col-md-2">\n          <p class="cart-product-specs">Total:</p>\n            <p class="cart-product-specs-content"> 78991</p>\n        </div>\n      </div>\n      <div class="row" id="cart-product-display-2">\n        <div class="col-md-3">\n        </div>\n        <div class="col-md-3">\n          <p class="cart-product-specs-2">SKU:\n            <span class="cart-product-specs-content-2"> Rs. 6.50/kg</span></p>\n        </div>\n        <div class="col-md-1"></div>\n        <div class="col-md-5">\n          <p class="cart-product-specs-2">Vendor:\n            <span class="cart-product-specs-content-2"> Nasik Potatoes Ltd.</span></p>\n        </div>\n      </div>\n      </div>\n\n       <div class="container-fliud" id="cart-product-display-container"> \n      <div class="row" id="cart-product-display-1">\n        <div class="col-md-3">\n          <img src="image/potatoes.png" id="cart-product-display-image"> \n        </div>\n        <div class="col-md-4">\n          <p class="cart-product-specs">Price:</p>\n            <p class="cart-product-specs-content"> Rs. 6.50/kg</p>\n        </div>\n        <div class="col-md-3">\n          <p class="cart-product-specs">Quantity:</p>\n            <p class="cart-product-specs-content"> 30 kg</p>\n        </div>\n        <div class="col-md-2">\n          <p class="cart-product-specs">Total:</p>\n            <p class="cart-product-specs-content"> 78991</p>\n        </div>\n      </div>\n      <div class="row" id="cart-product-display-2">\n        <div class="col-md-3">\n        </div>\n        <div class="col-md-3">\n          <p class="cart-product-specs-2">SKU:\n            <span class="cart-product-specs-content-2"> Rs. 6.50/kg</span></p>\n        </div>\n        <div class="col-md-1"></div>\n        <div class="col-md-5">\n          <p class="cart-product-specs-2">Vendor:\n            <span class="cart-product-specs-content-2"> Nasik Potatoes Ltd.</span></p>\n        </div>\n      </div>\n      </div>\n\n       <div class="container-fliud" id="cart-product-display-container"> \n      <div class="row" id="cart-product-display-1">\n        <div class="col-md-3">\n          <img src="image/potatoes.png" id="cart-product-display-image">\n        </div>\n        <div class="col-md-4">\n          <p class="cart-product-specs">Price:</p>\n            <p class="cart-product-specs-content"> Rs. 6.50/kg</p>\n        </div>\n        <div class="col-md-3">\n          <p class="cart-product-specs">Quantity:</p>\n            <p class="cart-product-specs-content"> 30 kg</p>\n        </div>\n        <div class="col-md-2">\n          <p class="cart-product-specs">Total:</p>\n            <p class="cart-product-specs-content"> 78991</p>\n        </div>\n      </div>\n      <div class="row" id="cart-product-display-2">\n        <div class="col-md-3">\n        </div>\n        <div class="col-md-3">\n          <p class="cart-product-specs-2">SKU:\n            <span class="cart-product-specs-content-2"> Rs. 6.50/kg</span></p>\n        </div>\n        <div class="col-md-1"></div>\n        <div class="col-md-5">\n          <p class="cart-product-specs-2">Vendor:\n            <span class="cart-product-specs-content-2"> Nasik Potatoes Ltd.</span></p>\n        </div>\n      </div>\n      </div>\n\n      <div class="row" id="cart-product-display-3">\n        <span class="cart-total-1">Total</span>\n        <span class="cart-total-2">Rs. 600.00</span>\n      </div>\n      <div class="row" id="cart-product-display-4">\n        <button class="col-md-2" id="Checkout-button">\n          <p class="Checkout-button-text">Checkout</p>\n      </button>\n      </div>    \n     \n      </div>\n    </div>\n  </div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard.html":["./template.dashboard.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/dashboard.html                                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.dashboard.js");                                                                // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.dashboard.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.dashboard.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("dashboard");                                                                                  // 2
Template["dashboard"] = new Template("Template.dashboard", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "container-fluid"                                                                                      // 6
  }, "\n  ", HTML.DIV({                                                                                             // 7
    "class": "row",                                                                                                 // 8
    id: "row-container"                                                                                             // 9
  }, "\n    ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-left"></div>'), "\n    \n    ", HTML.DIV({          // 10
    "class": "col-sm-7 col-md-7",                                                                                   // 11
    id: "col-mid"                                                                                                   // 12
  }, "\n      ", HTML.Raw('<div class="col-sm-2 col-md-2"></div>'), "\n      ", HTML.DIV({                          // 13
    "class": "col-sm-8 col-md-8"                                                                                    // 14
  }, "\n       \n  ", HTML.Raw("<br>"), "\n  ", Blaze.If(function() {                                               // 15
    return Spacebars.call(view.lookup("currentUser"));                                                              // 16
  }, function() {                                                                                                   // 17
    return [ "\n    ", HTML.H2("Hello ", Blaze.View("lookup:vendor_name", function() {                              // 18
      return Spacebars.mustache(view.lookup("vendor_name"));                                                        // 19
    }), "!"), "\n  " ];                                                                                             // 20
  }, function() {                                                                                                   // 21
    return [ "\n    ", HTML.H2("you need to be logged in!"), "\n    ", HTML.BR(), "\n    ", HTML.A({                // 22
      href: function() {                                                                                            // 23
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 24
          route: "login"                                                                                            // 25
        }));                                                                                                        // 26
      }                                                                                                             // 27
    }, "login"), "\n  " ];                                                                                          // 28
  }), "\n\n      ", HTML.A({                                                                                        // 29
    href: function() {                                                                                              // 30
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                              // 31
        route: "marketplaceUser"                                                                                    // 32
      }));                                                                                                          // 33
    }                                                                                                               // 34
  }, "Add Product"), "\n      ", HTML.Raw('<a id="view_my_added" href="#">view my added products</a>'), "\n\n", HTML.Raw('<!--       <h3>your products</h3>\n<div style="overflow: auto; height: 70vh;">\n      <ul>\n      {{#each prod in prods}}\n      <li>\n      {{#with prod}}\n        <span>name={{name}}</span>\n        <span>age={{age}}</span>\n        <span>size={{size}}</span>\n        <span>price={{price}}</span>\n        <span>grade={{grade}}</span>\n        <span>category={{category}}</span>\n        {{/with}}\n      </li>\n      {{/each}}\n      </ul>\n</div> -->'), "\n      "), "\n      ", HTML.Raw('<div class="col-sm-2 col-md-2"></div>'), "      \n    "), "            \n    ", HTML.Raw('<div class="col-sm-3 col-md-3" id="col-right"></div>'), "\n  "), "\n");
}));                                                                                                                // 36
                                                                                                                    // 37
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.html":["./template.home.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/home.html                                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.home.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.home.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.home.js                                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("home");                                                                                       // 2
Template["home"] = new Template("Template.home", (function() {                                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="jumbotron jumbotron-head-1">\n\n    <div class="col-sm-1 col-md-1"></div>\n    <div class="col-sm-2 col-md-2">\n      <span id="head-aficionado"><a style="text-decoration:none;" href="/">Aficionado</a></span> \n    </div>\n\n    <div class="col-sm-5 col-md-5">\n      <div class="col-sm-2 col-md-2"></div>\n      <div class="col-sm-6 col-md-6">\n        <span id="head-location"><a style="text-decoration:none;" href="#">Current City: New Delhi</a></span> \n      </div>\n      <div class="col-sm-4 col-md-4">\n        <span class="glyphicon glyphicon-earphone"></span>\n        <span id="head-contact-us"><a style="text-decoration:none;" href="#">Let us call you!</a></span>\n      </div>\n    </div>\n\n    <div class="col-sm-4 col-md-4">\n      <span id="head-left">\n        <ul>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">FAQs</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">Blog</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">Dashboard</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">My Account</a></li>\n        </ul>\n      </span>      \n    </div>\n  </div>\n\n  <div class="jumbotron jumbotron-head-2">\n    <div class="col-sm-4 col-md-4"></div>\n    <div class="col-sm-6 col-md-6">\n      <input type="text" class="form-control" id="search-bar" placeholder="Search products by SKU or name">\n    </div>\n    <div class="col-sm-2 col-md-2">\n      <button type="button" class="btn btn-warning btn-lg" id="head-cart-button">\n        <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;MY CART&nbsp; \n        <span class="badge"></span>\n      </button>\n    </div>\n  </div>\n\n  <div class="jumbotron jumbotron-navigation-1">\n    <div class="col-md-12" id="home-navigation-1">\n      <button class="col-md-4" id="home-navigation-1-button">\n        <p id="home-navigation-1-text"></p>\n      </button>\n      <button class="col-md-2" id="home-navigation-1-button">\n        <p id="home-navigation-1-text">Reverse Auction</p>\n      </button>\n      <button class="col-md-2" id="home-navigation-1-button">\n        <p id="home-navigation-1-text">Cart</p>\n      </button>\n      <button class="col-md-4" id="home-navigation-2-button">\n        <p>Browse</p>\n      </button>\n    </div>            \n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="row">\n      <div class="col-md-2" style=" background-color: #ffffff;"></div>\n      <div class="col-md-10">\n        <div class="col-md-2"></div>\n        <div class="col-md-10">\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n              </div>\n            </div>\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n            </div>\n            </div>\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-2" style=" background-color: #ffffff;"></div>\n      <div class="col-md-10">\n        <div class="col-md-2"></div>\n        <div class="col-md-10">\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n              </div>\n            </div>\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n            </div>\n            </div>\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-2" style=" background-color: #ffffff;"></div>\n      <div class="col-md-10">\n        <div class="col-md-2"></div>\n        <div class="col-md-10">\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n              </div>\n            </div>\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n            </div>\n            </div>\n          <div class="col-md-4" style="padding:25px;">\n            <div style="width: 260px; height: 206px; background-color: #ffffff; padding-left:35px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);" id="first">\n              <img src="image/chicken.png" style="width: 200px;  height: 150px;">\n              <p>Chicken and Meats</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n        \n  </div>\n\n    <div class="main_menu_bg" style="">\n      <p class="ALL-CATEGORIES" style="">ALL CATEGORIES</p>\n      <p class="categoryItems" style="padding-top: 30px;">PANEER</p>\n      <p class="sub-category">&nbsp;&nbsp;Fresh</p>\n      <p class="sub-category">&nbsp;&nbsp;Frozen</p>\n      <p class="sub-category">&nbsp;&nbsp;Processed</p>\n      <p class="categoryItems">FISH</p>\n      <p class="categoryItems">ONION</p>\n      <p class="categoryItems">TOMATO</p>\n      <p class="categoryItems">POTATO</p>\n      <p class="categoryItems">SPICES</p>\n      <p class="categoryItems">BRANDS</p>\n      <p class="categoryItems">OILS</p>\n    </div>\n\n\n\n\n<!--       <div class="jumbotron jumbotron-head">\n      <span style="float: left;"><a href="/" id="a-nav">Aficionado</a></span> \n      <span style="float: right;">\n        <ul>\n          <li style="display: inline;"><a href="{{pathFor route=\'search\'}}" id="a-nav">Search&emsp;</a></li>\n          <li style="display: inline;"><a href=# class="logout_control" id="a-nav">Logout &emsp;</a></li>\n          <span class="glyphicon glyphicon-user"></span>\n        </ul>\n      </span>      \n    </div>\n\n    <div class="jumbotron jumbotron-head3">\n      <span style="" id="jumbotron-register1">Make Restaurants Scalable!</span> \n        <span style="float: right; margin: 0px;">\n          <button type="button" class="btn btn-default btn-lg" style="border-radius: 39px; background-color: #ddefef;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); border: solid 1px #a5a2a2;">Notification <span class="badge" ></span></button>\n      </span>\n    </div>\n    \n \n    <div class="jumbotron jumbotron-head">\n      <span style="float: left;"><a href="/" id="a-nav">Aficionado</a></span> \n      <span style="float: right;">\n        <ul class="menu">\n          <li style="display: inline;"><a href="{{pathFor route=\'search\'}}" id="a-nav">Search&emsp;</a></li>\n          <li style="display: inline;"><a href="{{pathFor route=\'register\'}}" id="a-nav">Register&emsp;</a></li>\n          <li style="display: inline;"><a href="{{pathFor route=\'login\'}}" id="a-nav">Login&emsp;</a></li>\n          <span class="glyphicon glyphicon-user"></span>\n        </ul>\n      \n      </span>\n    </div>\n\n\n    <div class="jumbotron jumbotron-head2">\n      <span style="" id="jumbotron-register1">Make Restaurants Scalable</span> \n        \n    </div>\n -->\n\n\n\n    \n<!-- <div class="container-fluid">\n  <div class="row" id="row-container">\n    <div class="col-sm-2 col-md-2" id="col-left"></div>\n    \n    <div class="col-sm-7 col-md-7" id="col-mid">\n      <div class="col-sm-2 col-md-2"></div>\n      <div class="col-sm-8 col-md-8">\n          <h3><br></h3>\n      </div>\n      <div class="col-sm-2 col-md-2"></div>      \n    </div>            \n    <div class="col-sm-3 col-md-3" id="col-right"></div>\n  </div>\n</div> -->');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.html":["./template.login.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/login.html                                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.login.js");                                                                    // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.login.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.login.js                                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("login");                                                                                      // 2
Template["login"] = new Template("Template.login", (function() {                                                    // 3
  var view = this;                                                                                                  // 4
  return [ HTML.DIV({                                                                                               // 5
    "class": "container-fluid",                                                                                     // 6
    id: "container-login"                                                                                           // 7
  }, "\n    ", HTML.DIV({                                                                                           // 8
    "class": "row",                                                                                                 // 9
    id: "row-container-login"                                                                                       // 10
  }, "\n      ", HTML.Raw("<br>"), "\n      ", HTML.Raw('<h1 id="head-login">Aficionado</h1>'), "\n      ", HTML.Raw("<br>"), "\n\n      ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-left-login"></div>'), "      \n      ", HTML.DIV({
    "class": "col-sm-8 col-md-8",                                                                                   // 12
    id: "col-mid-login"                                                                                             // 13
  }, "\n        ", HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n        ", HTML.Raw('<h2 id="head2-login">Login</h2>'), "\n        ", HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n         ", HTML.FORM({
    "class": "login-input"                                                                                          // 15
  }, "\n            ", HTML.Raw('<div class="row">\n              <label class="control-label col-sm-5 col-md-5" for="username">Username</label>\n              <div class="col-sm-6 col-md-6">\n                <input type="username" id="login-input" name="username" placeholder="&nbsp;&nbsp;username" required="">\n              </div>\n            </div>'), "\n            \n            ", HTML.Raw('<div class="row">\n              <label class="control-label col-sm-5 col-md-5" for="email">Password</label>\n              <div class="col-sm-6 col-md-6">\n                <input type="password" id="login-input" name="password" placeholder="&nbsp;&nbsp;......" required="">\n              </div>\n            </div>'), "\n            \n            ", HTML.DIV({
    "class": "row"                                                                                                  // 17
  }, "\n              ", HTML.Raw('<label class="control-label col-sm-5 col-md-5" for="submit"></label>'), "\n              ", HTML.DIV({
    "class": "col-sm-6 col-md-6"                                                                                    // 19
  }, "\n                ", HTML.Raw('<input type="submit" class="btn btn-default" value="Submit">'), "\n                ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n                ", HTML.P({
    id: "login-forgot-password"                                                                                     // 21
  }, HTML.A({                                                                                                       // 22
    href: function() {                                                                                              // 23
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                              // 24
        route: "forgot"                                                                                             // 25
      }));                                                                                                          // 26
    }                                                                                                               // 27
  }, "Forgot Password")), "\n              "), "\n            "), "\n          "), "\n      "), "\n    \n      ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-right-login"></div>'), "\n      \n      ", HTML.Raw('<div class="container-fluid">\n        <div class="col-sm-3 col-md-3"></div>\n        <div class="col-sm-6 col-md-6">\n          <br><br>\n          <p id="register-contact-us"><a href=""> Need Help? Contact Us</a></p>\n        </div>\n      </div>'), "\n      \n    "), " \n  "), HTML.Raw('\n  \n\n\n\n\n\n\n\n\n\n<!--   <div class="container-fluid">\n    <div class="row" id="row-container">\n    <div class="col-sm-2 col-md-2" id="col-left"></div>\n    \n\n    <div class="col-sm-7 col-md-7" id="col-mid-login">\n <h2><br>&emsp;&emsp;&emsp;&emsp;Login<br><br></h2>\n<form class="login-input">\n\n    <div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="username">Username</label>\n  <div class="col-sm-5 col-md-5"><input type="username" name="username" placeholder="&nbsp;&nbsp;username" required="" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;"/></div>\n  </div>\n  \n   <div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="email">Password</label>\n  <div class="col-sm-5 col-md-5"><input type="password" name="password" placeholder="&nbsp;&nbsp;......" required="" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;"/></div>\n  </div>\n  \n  <div class="row">\n     <label class="control-label col-sm-3 col-md-3" for="submit"></label>\n  <div class="col-sm-6 col-md-6" ><input type="submit" class="btn btn-default" value="Submit"/>\n  </div>\n  </div>\n\n  </form>\n </div>\n    <li><a href="{{pathFor route=\'forgot\'}}">Forgot Password</a></li>\n    <li><a href="{{pathFor route=\'register\'}}"><h2>Register</h2></a></li>\n             \n    <div class="col-sm-2 col-md-2" id="col-right"></div>\n  </div>\n</div> -->') ];
}));                                                                                                                // 29
                                                                                                                    // 30
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"page-not-found.html":["./template.page-not-found.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/page-not-found.html                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.page-not-found.js");                                                           // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.page-not-found.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.page-not-found.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("notFound");                                                                                   // 2
Template["notFound"] = new Template("Template.notFound", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="container-fluid">\n  <div class="row" id="row-container">\n    <div class="col-sm-2 col-md-2" id="col-left"></div>\n    \n    <div class="col-sm-7 col-md-7" id="col-mid">\n      <div class="col-sm-2 col-md-2"></div>\n      <div class="col-sm-8 col-md-8">\n        <h3>Error 404</h3>\n        <p>Sorry, that page doesn\'t exist</p>\n       <a href="/">GO TO HOME</a>\n      </div>\n      <div class="col-sm-2 col-md-2"></div>      \n    </div>            \n    <div class="col-sm-3 col-md-3" id="col-right"></div>\n  </div>\n</div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"productDetail.html":["./template.productDetail.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/productDetail.html                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.productDetail.js");                                                            // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.productDetail.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.productDetail.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("productDetail");                                                                              // 2
Template["productDetail"] = new Template("Template.productDetail", (function() {                                    // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="modal fade">\n    <div class="modal-dialog modal-lg">\n\n\n  <div class="container-fliud">\n    \n  \n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n            <img src="image/potatoes.png" id="product-display-image">\n          \n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Best Rates:\n              <span class="product-specs-content"> Nasik Potatoes Ltd.</span></p>\n            <p class="product-specs-2">Rs:\n              <span class="product-specs-content-2"> 6.3/kg</span></p>\n            <p class="product-specs">Order:\n              <span class="product-quantity-input">\n                <input type="number" name="quantity" id="product-quantity-input-box" min="1"></span>\n              <span class="product-specs-content"> kg</span></p>\n            <button class="col-md-2" id="buy-now-button-1">\n              <p id="buy-now-button-text">Buy Now</p>\n            </button>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <button id="viewDetail" class="col-md-2 view-display-button" data-dismiss="modal">\n              <p id="product-specs-content">Close</p>\n            </button>\n            <p class="product-specs-3">Better Prices?</p>\n            <p class="product-specs-3">Long-Term Contracts?</p>\n            <p></p>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">Invite Bids</p>\n            </button>\n          </div>\n        </div>\n     \n\n      </div>\n    </div>\n  </div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"register.html":["./template.register.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/register.html                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.register.js");                                                                 // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.register.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.register.js                                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("register");                                                                                   // 2
Template["register"] = new Template("Template.register", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return [ HTML.DIV({                                                                                               // 5
    "class": "container-fluid",                                                                                     // 6
    id: "container-register"                                                                                        // 7
  }, "\n    ", HTML.DIV({                                                                                           // 8
    "class": "row",                                                                                                 // 9
    id: "row-container-register"                                                                                    // 10
  }, "\n      ", HTML.Raw("<br>"), "\n      ", HTML.Raw('<h1 id="head-register">Aficionado</h1>'), "\n      ", HTML.Raw("<br>"), "\n\n      ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-left-register"></div>'), "\n      ", HTML.DIV({
    "class": "col-sm-8 col-md-8",                                                                                   // 12
    id: "col-mid-register"                                                                                          // 13
  }, "\n        ", HTML.Raw("<br>"), "\n        ", HTML.Raw('<h2 id="head2-register">Register</h2>'), "\n        ", HTML.Raw("<br>"), "\n\n        ", HTML.FORM({
    "class": "email-input"                                                                                          // 15
  }, "\n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5 label-registration" for="name">Organisation</label>\n            <div class="col-sm-6 col-md-6">\n              <input type="text" id="register-input" name="name" class="form-control" placeholder="Organisation Name" required="">\n            </div>\n          </div>'), "\n\n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="username">Username</label>\n            <div class="col-sm-6 col-md-6">\n              <input type="username" id="register-input" name="username" class="form-control" placeholder="username" required="">\n            </div>\n          </div>'), "\n      \n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="email">Email</label>\n            <div class="col-sm-6 col-md-6">\n              <input type="email" id="register-input" name="email" class="form-control" placeholder="user@domain.com">\n            </div>\n          </div>'), "\n\n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="password">Password</label>\n            <div class="col-sm-6 col-md-6">\n              <input type="password" id="register-input" name="password" class="form-control" placeholder="......" required="">\n            </div>\n          </div>'), "\n\n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="role">You\'re a</label>\n            <div class="col-sm-6 col-md-6">\n              <select name="role">\n              <option value="horeca">HoReCa</option>\n              <option value="vendor">Vendor</option>\n            </select>\n            </div>\n          </div>'), "\n\n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="phone">Mobile</label>\n            <div class="col-sm-6 col-md-6">\n              <input type="text" id="register-input" name="phone" class="form-control" placeholder="Enter phone number">\n            </div>\n          </div>'), "\n         \n         ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="city">City</label>\n            <div class="col-sm-6 col-md-6">\n              <input type="text" id="register-input" name="city" class="form-control" placeholder="Enter city" required="">\n            </div>\n          </div>'), "\n\n          ", HTML.Raw('<div class="row">\n            <label class="control-label col-sm-5 col-md-5" for="state">State</label>\n            <div class="col-sm-6 col-md-6">\n              <select name="state">\n                <option value="andhra_pradesh">Andhra Pradesh</option>\n                <option value="arunachal_pradesh">Arunachal Pradesh</option>\n                <option value="assam">Assam</option>\n                <option value="bihar">Bihar</option>\n                <option value="chhattisgarh">Chhattisgarh</option>\n                <option value="delhi_ncr">Delhi and NCR region</option>\n                <option value="goa">Goa</option>\n                <option value="gujarat">Gujarat</option>\n                <option value="haryana">Haryana</option>\n                <option value="himachal_pradesh">Himachal Pradesh</option>\n                <option value="jammu_kashmir">Jammu &amp; Kashmir</option>\n                <option value="jharkhand">Jharkhand</option>\n                <option value="karnataka">Karnataka</option>\n                <option value="kerala">Kerala</option>\n                <option value="madhya_pradesh">Madhya Pradesh</option>\n                <option value="maharashtra">Maharashtra</option>\n                <option value="manipur">Manipur</option>\n                <option value="meghalaya">Meghalaya</option>\n                <option value="mizoram">Mizoram</option>\n                <option value="nagaland">Nagaland</option>\n                <option value="odisha_">Odisha</option>\n                <option value="punjab">Punjab</option>\n                <option value="rajasthan">Rajasthan</option>\n                <option value="sikkim">Sikkim</option>\n                <option value="tamil_nadu">Tamil Nadu</option>\n                <option value="telangana_">Telangana</option>\n                <option value="tripura">Tripura</option>\n                <option value="uttar_pradesh">Uttar Pradesh</option>\n                <option value="uttarakhand">Uttarakhand</option>\n                <option value="west_bengal">West Bengal</option>\n              </select>\n\n            </div>\n\n          </div>'), "\n\n         \n              ", Blaze._TemplateWith(function() {
    return {                                                                                                        // 17
      template: Spacebars.call(view.lookup("verification"))                                                         // 18
    };                                                                                                              // 19
  }, function() {                                                                                                   // 20
    return Spacebars.include(function() {                                                                           // 21
      return Spacebars.call(Template.__dynamic);                                                                    // 22
    });                                                                                                             // 23
  }), "\n\n              ", HTML.UL("\n              ", HTML.LI(Blaze.View("lookup:error_first_step", function() {  // 24
    return Spacebars.mustache(view.lookup("error_first_step"));                                                     // 25
  })), "\n              "), "\n\n              ", HTML.UL("\n              ", HTML.LI(Blaze.View("lookup:status_message", function() {
    return Spacebars.mustache(view.lookup("status_message"));                                                       // 27
  })), "\n              "), "\n\n\n                      ", HTML.Raw('<div class="row">\n          <center>\n            <label class="control-label" for="submit"></label>\n            <div class="">\n              <input type="submit" class="btn btn-default" value="Submit">\n            </div>\n            </center>\n          </div>'), "\n\n        "), "\n      "), "\n\n    ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-right-register"></div>'), "\n\n    ", HTML.Raw('<div class="container-fluid">\n        <div class="col-sm-3 col-md-3"></div>\n        <div class="col-sm-6 col-md-6">\n          <br><br>\n          <p id="register-contact-us"><a href=""> Need Help? Contact Us</a></p>\n        </div>\n      </div>'), "    \n    \n    "), "    \n  "), HTML.Raw(' \n\n\n <!--  <div class="container-fluid">\n  <div class="row" id="row-container">\n    <div class="col-sm-2 col-md-2" id="col-left"></div>\n\n  <div class="col-sm-7 col-md-7" id="col-mid">\n\n  <h2><br>&emsp;A Couple of details...<br><br></h2>\n  <form class="email-input">\n  <div class="row">\n    <label class="control-label col-sm-3 col-md-3 label-registration" for="name">Name</label>\n    <div class="col-sm-5 col-md-5" > <input type="text" name="name" class="form-control" placeholder="Enter name" required="" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;" /> </div>\n  </div>\n\n  <div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="username">Username</label>\n  <div class="col-sm-5 col-md-5" ><input type="username" name="username" class="form-control" placeholder="username" required="" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;" /></div>\n  </div>\n  \n  <div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="email">Email</label>\n  <div class="col-sm-5 col-md-5" ><input type="email" name="email" class="form-control" placeholder="user@domain.com" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;" /></div>\n  </div>\n\n<div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="password">Password</label>\n  <div class="col-sm-5 col-md-5" ><input type="password" name="password" class="form-control" placeholder="......" required="" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;" /></div>\n  </div>\n\n<div class="row">\n<label class="control-label col-sm-3 col-md-3" for="role">You\'re a</label>\n\n <div class="col-sm-5 col-md-5" ><select name="role">\n    <option value="horeca">HoReCa</option>\n    <option value="vendor">Vendor</option>\n  </select></div>\n  </div>\n\n<div class="row">\n<label class="control-label col-sm-3 col-md-3" for="phone">Mobile</label>\n\n <div class="col-sm-5 col-md-5" ><input type="text" name="phone" class="form-control" placeholder="Enter phone number" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;"/></div>\n  </div>\n \n <div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="city">City</label>\n  <div class="col-sm-5 col-md-5" ><input type="text" name="city" class="form-control" placeholder="Enter city" required="" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;"/></div>\n</div>\n\n<div class="row">\n    <label class="control-label col-sm-3 col-md-3" for="state">State</label>\n    <div class="col-sm-6 col-md-6" >\n   <select name="state">\n    <option value="andhra_pradesh">Andhra Pradesh</option>\n    <option value="arunachal_pradesh">Arunachal Pradesh</option>\n    <option value="assam">Assam</option>\n    <option value="bihar">Bihar</option>\n    <option value="chhattisgarh">Chhattisgarh</option>\n    <option value="delhi_ncr">Delhi and NCR region</option>\n    <option value="goa">Goa</option>\n    <option value="gujarat">Gujarat</option>\n    <option value="haryana">Haryana</option>\n    <option value="himachal_pradesh">Himachal Pradesh</option>\n    <option value="jammu_kashmir">Jammu &amp; Kashmir</option>\n    <option value="jharkhand">Jharkhand</option>\n    <option value="karnataka">Karnataka</option>\n    <option value="kerala">Kerala</option>\n    <option value="madhya_pradesh">Madhya Pradesh</option>\n    <option value="maharashtra">Maharashtra</option>\n    <option value="manipur">Manipur</option>\n    <option value="meghalaya">Meghalaya</option>\n    <option value="mizoram">Mizoram</option>\n    <option value="nagaland">Nagaland</option>\n    <option value="odisha_">Odisha</option>\n    <option value="punjab">Punjab</option>\n    <option value="rajasthan">Rajasthan</option>\n    <option value="sikkim">Sikkim</option>\n    <option value="tamil_nadu">Tamil Nadu</option>\n    <option value="telangana_">Telangana</option>\n    <option value="tripura">Tripura</option>\n    <option value="uttar_pradesh">Uttar Pradesh</option>\n    <option value="uttarakhand">Uttarakhand</option>\n    <option value="west_bengal">West Bengal</option>\n  </select>\n \n{{> Template.dynamic template=verification}}\n\n  <ul>\n  <li>{{error_first_step}}</li>\n  </ul>\n\n  <ul>\n  <li>{{status_message}}</li>\n  </ul>\n\n  </div>\n  </div>\n\n<div class="row">\n     <label class="control-label col-sm-3 col-md-3" for="submit"></label>\n  <div class="col-sm-6 col-md-6" ><input type="submit" class="btn btn-default" value="Submit"/>\n  {#if skip_allow}}\n    <input type="button" name="skip" value="Skip" />\n  {{/if}}</div>\n</div>\n</div>\n\n  \n  </form>\n  </div>\n  <div class="col-sm-2 col-md-2"></div>      \n            \n  <div class="col-sm-3 col-md-3" id="col-right"></div>\n  </div>\n  </div>   -->\n  <!--   <a href="{{pathFor route=\'phoneVerifRoute\'}}">Enter OTP</a> -->\n  <!--   <a href="{{pathFor route=\'reset\'}}">Reset Password</a>\n<a href="{{pathFor route=\'forgot\'}}">Forgot Password</a> -->') ];
}));                                                                                                                // 29
                                                                                                                    // 30
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reverseauction.html":["./template.reverseauction.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/reverseauction.html                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.reverseauction.js");                                                           // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.reverseauction.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.reverseauction.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("reverseAuction");                                                                             // 2
Template["reverseAuction"] = new Template("Template.reverseAuction", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return HTML.Raw('<div class="jumbotron jumbotron-head-1">\n\n    <div class="col-sm-1 col-md-1"></div>\n    <div class="col-sm-2 col-md-2">\n      <span id="head-aficionado"><a style="text-decoration:none;" href="/">Aficionado</a></span> \n    </div>\n\n    <div class="col-sm-5 col-md-5">\n      <div class="col-sm-2 col-md-2"></div>\n      <div class="col-sm-6 col-md-6">\n        <span id="head-location"><a style="text-decoration:none;" href="#">Current City: New Delhi</a></span> \n      </div>\n      <div class="col-sm-4 col-md-4">\n        <span class="glyphicon glyphicon-earphone"></span>\n        <span id="head-contact-us"><a style="text-decoration:none;" href="#">Let us call you!</a></span>\n      </div>\n    </div>\n\n    <div class="col-sm-4 col-md-4">\n      <span id="head-left">\n        <ul>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">FAQs</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">Blog</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">Dashboard</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">My Account</a></li>\n        </ul>\n      </span>      \n    </div>\n  </div>\n\n  <div class="jumbotron jumbotron-head-2">\n    <div class="col-sm-4 col-md-4"></div>\n    <div class="col-sm-6 col-md-6">\n      <input type="text" class="form-control" id="search-bar" placeholder="Search products by SKU or name">\n    </div>\n    <div class="col-sm-2 col-md-2">\n      <button type="button" class="btn btn-warning btn-lg" id="head-cart-button">\n        <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;MY CART&nbsp; \n        <span class="badge"></span>\n      </button>\n    </div>\n  </div>\n\n  <div class="jumbotron jumbotron-navigation-1">\n    <div class="col-md-12" id="home-navigation-1">\n      <button class="col-md-4" id="home-navigation-1-button">\n        <p id="home-navigation-1-text"></p>\n      </button>\n      <button class="col-md-2" id="home-navigation-1-button">\n        <p id="home-navigation-1-text">Reverse Auction</p>\n      </button>\n      <button class="col-md-2" id="home-navigation-1-button">\n        <p id="home-navigation-1-text">Cart</p>\n      </button>\n      <button class="col-md-4" id="home-navigation-2-button">\n        <p>Search Results</p>\n      </button>\n    </div>            \n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <div class="row" id="reverseauction-head-1">\n          <span class="search-filter-head">Current Auctions</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    \n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n          	<span class="product-specs-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fresh Potato</span>\n            <img src="image/potatoes.png" id="product-display-image">\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n            <p class="product-specs">Contract for:\n              <span class="product-specs-content"> 3 months</span></p>\n            <p class="product-specs">Base Price:\n              <span class="product-specs-content"> Rs.7.8/kg</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Number of Bids:\n              <span class="product-specs-content">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              	<a href="#">View all</a></span></p>\n            <p class="product-specs-2">Current Best Price Rs.:\n              <span class="product-specs-content-2"> 6.40/kg</span></p>\n            <p class="product-specs-2">Current Vendor:\n              <span class="product-specs-content-2"> Nasik Potatoes Ltd.</span></p>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br><br><br>\n            <p class="product-specs-3">Time Left:</p>\n            <p></p><br>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">0d:14h:36m</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n          	<span class="product-specs-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fresh Potato</span>\n            <img src="image/potatoes.png" id="product-display-image">\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n            <p class="product-specs">Contract for:\n              <span class="product-specs-content"> 3 months</span></p>\n            <p class="product-specs">Base Price:\n              <span class="product-specs-content"> Rs.7.8/kg</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Number of Bids:\n              <span class="product-specs-content">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              	<a href="#">View all</a></span></p>\n            <p class="product-specs-2">Current Best Price Rs.:\n              <span class="product-specs-content-2"> 6.40/kg</span></p>\n            <p class="product-specs-2">Current Vendor:\n              <span class="product-specs-content-2"> Nasik Potatoes Ltd.</span></p>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br><br><br>\n            <p class="product-specs-3">Time Left:</p>\n            <p></p><br>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">0d:14h:36m</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <div class="row" id="reverseauction-head-1">\n          <span class="search-filter-head"><br>Past Auctions</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n          	<span class="product-specs-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fresh Potato</span>\n            <img src="image/potatoes.png" id="product-display-image">\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n            <p class="product-specs">Contract for:\n              <span class="product-specs-content"> 3 months</span></p>\n            <p class="product-specs">Base Price:\n              <span class="product-specs-content"> Rs.7.8/kg</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Number of Bids:\n              <span class="product-specs-content">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              	<a href="#">View all</a></span></p>\n            <p class="product-specs-2">Current Best Price Rs.:\n              <span class="product-specs-content-2"> 6.40/kg</span></p>\n            <p class="product-specs-2">Current Vendor:\n              <span class="product-specs-content-2"> Nasik Potatoes Ltd.</span></p>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br><br><br><br>\n            <button class="col-md-2" id="buy-now-button-3">\n              <p id="buy-now-button-text">Manage Contract</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="main_menu_bg" style="">\n      <p class="ALL-CATEGORIES" style="">ALL CATEGORIES</p>\n      <p class="categoryItems" style="padding-top: 30px;">PANEER</p>\n      <p class="sub-category">&nbsp;&nbsp;Fresh</p>\n      <p class="sub-category">&nbsp;&nbsp;Frozen</p>\n      <p class="sub-category">&nbsp;&nbsp;Processed</p>\n      <p class="categoryItems">FISH</p>\n      <p class="categoryItems">ONION</p>\n      <p class="categoryItems">TOMATO</p>\n      <p class="categoryItems">POTATO</p>\n      <p class="categoryItems">SPICES</p>\n      <p class="categoryItems">BRANDS</p>\n      <p class="categoryItems">OILS</p>\n  </div>');
}));                                                                                                                // 6
                                                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.html":["./template.search.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/search.html                                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.search.js");                                                                   // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.search.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/template.search.js                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("search");                                                                                     // 2
Template["search"] = new Template("Template.search", (function() {                                                  // 3
  var view = this;                                                                                                  // 4
  return [ HTML.Raw('<div class="jumbotron jumbotron-head-1">\n\n    <div class="col-sm-1 col-md-1"></div>\n    <div class="col-sm-2 col-md-2">\n      <span id="head-aficionado"><a style="text-decoration:none;" href="/">Aficionado</a></span> \n    </div>\n\n    <div class="col-sm-5 col-md-5">\n      <div class="col-sm-2 col-md-2"></div>\n      <div class="col-sm-6 col-md-6">\n        <span id="head-location"><a style="text-decoration:none;" href="#">Current City: New Delhi</a></span> \n      </div>\n      <div class="col-sm-4 col-md-4">\n        <span class="glyphicon glyphicon-earphone"></span>\n        <span id="head-contact-us"><a style="text-decoration:none;" href="#">Let us call you!</a></span>\n      </div>\n    </div>\n\n    <div class="col-sm-4 col-md-4">\n      <span id="head-left">\n        <ul>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">FAQs</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">Blog</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">Dashboard</a>&emsp;</li>\n          <li id="head-list-left"><a href="#" style="text-decoration:none;">My Account</a></li>\n        </ul>\n      </span>\n    </div>\n  </div>\n\n  <div class="jumbotron jumbotron-head-2">\n    <div class="col-sm-4 col-md-4"></div>\n    <div class="col-sm-6 col-md-6">\n    <form class="search_input">\n      <div class="input-group">\n        <input type="text" class="form-control" id="search-bar" name="name_query" placeholder="Search products by SKU or name">\n        <span class="input-group-btn">\n          <button class="btn btn-secondary btn-lg" type="submit" value="Submit" name="submit_btn">\n            <span class="glyphicon glyphicon-search"></span>    \n          </button>\n        </span>\n      </div>\n      </form>\n    </div>\n    <div class="col-sm-2 col-md-2">\n      <button id="head-cart-button" class="btn btn-warning btn-lg">\n        <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;MY CART&nbsp; \n        <span class="badge"></span>\n      </button>\n    </div>\n  </div>\n\n<!-- {{#if search_done}}\n  <div class="jumbotron jumbotron-navigation-1">\n    <div class="col-md-12" id="home-navigation-1">\n      <button class="col-md-4" id="home-navigation-1-button">\n        <p id="home-navigation-1-text"></p>\n      </button>\n      <button class="col-md-2" id="home-navigation-1-button">\n        <p id="home-navigation-1-text">Reverse Auction</p>\n      </button>\n      <button class="col-md-2" id="home-navigation-1-button">\n        <p id="home-navigation-1-text">Cart</p>\n      </button>\n      <button class="col-md-4" id="home-navigation-2-button">\n        <p>Search Results</p>\n      </button>\n    </div>            \n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n            <img src="image/potatoes.png" id="product-display-image">\n            <button id="viewDetail" class="col-md-2 view-display-button">\n              <p id="product-specs-content">View Details</p>\n            </button>\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Best Rates:\n              <span class="product-specs-content"> Nasik Potatoes Ltd.</span></p>\n            <p class="product-specs-2">Rs:\n              <span class="product-specs-content-2"> 6.3/kg</span></p>\n            <p class="product-specs">Order:\n              <span class="product-quantity-input">\n                <input type="number" name="quantity" id="product-quantity-input-box" min="1"></span>\n              <span class="product-specs-content"> kg</span></p>\n            <button class="col-md-2" id="buy-now-button-1">\n              <p id="buy-now-button-text">Buy Now</p>\n            </button>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br>\n            <p class="product-specs-3">Better Prices?</p>\n            <p class="product-specs-3">Long-Term Contracts?</p>\n            <p></p>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">Invite Bids</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n            <img src="image/potatoes.png" id="product-display-image">\n            <button id="viewDetail" class="col-md-2 view-display-button">\n              <p id="product-specs-content">View Details</p>\n            </button>\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Best Rates:\n              <span class="product-specs-content"> Nasik Potatoes Ltd.</span></p>\n            <p class="product-specs-2">Rs:\n              <span class="product-specs-content-2"> 6.3/kg</span></p>\n            <p class="product-specs">Order:\n              <span class="product-quantity-input">\n                <input type="number" name="quantity" id="product-quantity-input-box" min="1"></span>\n              <span class="product-specs-content"> kg</span></p>\n            <button class="col-md-2" id="buy-now-button-1">\n              <p id="buy-now-button-text">Buy Now</p>\n            </button>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br>\n            <p class="product-specs-3">Better Prices?</p>\n            <p class="product-specs-3">Long-Term Contracts?</p>\n            <p></p>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">Invite Bids</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n            <img src="image/potatoes.png" id="product-display-image">\n            <button id="viewDetail" class="col-md-2 view-display-button">\n              <p id="product-specs-content">View Details</p>\n            </button>\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Best Rates:\n              <span class="product-specs-content"> Nasik Potatoes Ltd.</span></p>\n            <p class="product-specs-2">Rs:\n              <span class="product-specs-content-2"> 6.3/kg</span></p>\n            <p class="product-specs">Order:\n              <span class="product-quantity-input">\n                <input type="number" name="quantity" id="product-quantity-input-box" min="1"></span>\n              <span class="product-specs-content"> kg</span></p>\n            <button class="col-md-2" id="buy-now-button-1">\n              <p id="buy-now-button-text">Buy Now</p>\n            </button>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br>\n            <p class="product-specs-3">Better Prices?</p>\n            <p class="product-specs-3">Long-Term Contracts?</p>\n            <p></p>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">Invite Bids</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n{{/if}} -->\n<div class="container-fliud">\n    \n    <div class="col-md-2"></div>\n    <div class="col-md-10">\n      <div class="col-md-2"></div>\n      <div class="col-md-10">\n        <br>\n        <div class="row" id="search-product-display">\n          <div class="col-md-3">\n            <img src="image/potatoes.png" id="product-display-image">\n            <button id="viewDetail" class="col-md-2 view-display-button">\n              <p id="product-specs-content">View Details</p>\n            </button>\n          </div>\n          <div class="col-md-3">\n            <br>\n            <p class="product-specs">Origin:\n              <span class="product-specs-content"> Nasik</span></p>\n            <p class="product-specs">Starch:\n              <span class="product-specs-content"> 63%</span></p>\n            <p class="product-specs">Age:\n              <span class="product-specs-content"> 6 days</span></p>\n            <p class="product-specs">Diameter:\n              <span class="product-specs-content"> 5cm</span></p>\n            <p class="product-specs">Delivery within:\n              <span class="product-specs-content"> 5 days</span></p>\n          </div>\n          <div class="col-md-4">\n            <br>\n            <p class="product-specs">Best Rates:\n              <span class="product-specs-content"> Nasik Potatoes Ltd.</span></p>\n            <p class="product-specs-2">Rs:\n              <span class="product-specs-content-2"> 6.3/kg</span></p>\n            <p class="product-specs">Order:\n              <span class="product-quantity-input">\n                <input type="number" name="quantity" id="product-quantity-input-box" min="1"></span>\n              <span class="product-specs-content"> kg</span></p>\n            <button class="col-md-2" id="buy-now-button-1">\n              <p id="buy-now-button-text">Buy Now</p>\n            </button>\n          </div>\n          <div class="col-md-2" id="product-display-box-4">\n            <br>\n            <p class="product-specs-3">Better Prices?</p>\n            <p class="product-specs-3">Long-Term Contracts?</p>\n            <p></p>\n            <button class="col-md-2" id="buy-now-button-2">\n              <p id="buy-now-button-text">Invite Bids</p>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="main_menu_bg" style="">\n      <p class="ALL-CATEGORIES" style="">ALL CATEGORIES</p>\n      <p class="categoryItems" style="padding-top: 30px;">PANEER</p>\n      <p class="sub-category">&nbsp;&nbsp;Fresh</p>\n      <p class="sub-category">&nbsp;&nbsp;Frozen</p>\n      <p class="sub-category">&nbsp;&nbsp;Processed</p>\n      <p class="categoryItems">FISH</p>\n      <p class="categoryItems">ONION</p>\n      <p class="categoryItems">TOMATO</p>\n      <p class="categoryItems">POTATO</p>\n      <p class="categoryItems">SPICES</p>\n      <p class="categoryItems">BRANDS</p>\n      <p class="categoryItems">OILS</p>\n  </div>\n\n\n\n\n        <!-- <form class="search_input">\n\n          <div class="row">\n              <label class="control-label col-sm-3 col-md-3" for="password"></label>\n            <div class="col-sm-5 col-md-5" ><input type="text" name="name_query" placeholder="Search" class="form-control" required="" style="border-radius: 8px; height: 25px;\n            background-color: #a7fcd7;\n            box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n            border: solid 1px #979797;" /></div>\n            </div> -->\n\n<!--             {{#if search_complete}}\n          <div class="row">\n                <label class="control-label col-sm-3 col-md-3"></label>\n              <div class="col-sm-5 col-md-5" >\n            <p> sort by:\n                <select id="sort_param">\n                  <option value=size>size</option>\n                  <option value=price>price</option>\n                  <option value=age>age</option>\n                </select>\n            </p>\n\n\n            <p> order\n                <select id="order">\n                  <option value=ascending>ascending</option>\n                  <option value=descending>descending</option>\n                </select>\n            </p>\n            </div>\n          </div>\n\n            <p> grade</p>\n            <p><input type="checkbox" name="grade_checkbox_a1" value="a1" />a1</p>\n                  <p><input type="checkbox" name="grade_checkbox_a2" value="a2" />a2</p>\n          \n\n\n          {{#if to_filter_age}}\n          <div class="row">\n              <label class="control-label col-sm-3 col-md-3"></label>\n            <div class="col-sm-5 col-md-5" ><input type="text" name="age_query" placeholder="Age" class="form-control" style="border-radius: 8px; height: 25px;\n            background-color: #a7fcd7;\n            box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n            border: solid 1px #979797;" /></div>\n            </div>\n            <p>lower age limit={{lower_age_limit}}</p>\n            <p>upper age limit={{upper_age_lmimt}}</p>\n          {{/if}}\n\n            <div class="row">\n                 <label class="control-label col-sm-3 col-md-3"></label>\n              <div class="col-sm-6 col-md-6" ><button type="button" class="btn btn-default" id="filter_btn" value="Filter">Filter</button>\n            </div>\n          </div>\n\n          {{/if}} -->\n\n<!--           <div class="row">\n                 <label class="control-label col-sm-3 col-md-3" for="submit"></label>\n              <div class="col-sm-6 col-md-6" ><input type="submit" class="btn btn-default" value="Submit" name="submit_btn"/>\n            </div>\n          </div>\n        </form> -->\n\n\n        '), HTML.DIV({
    "class": "container"                                                                                            // 6
  }, "\n          ", HTML.DIV({                                                                                     // 7
    id: "products",                                                                                                 // 8
    "class": "row list-group"                                                                                       // 9
  }, "\n              ", Blaze.If(function() {                                                                      // 10
    return Spacebars.call(view.lookup("search_complete"));                                                          // 11
  }, function() {                                                                                                   // 12
    return [ "\n\n              ", HTML.DIV({                                                                       // 13
      "class": "container-fliud"                                                                                    // 14
    }, "    \n                ", HTML.DIV({                                                                         // 15
      "class": "col-md-2"                                                                                           // 16
    }), "\n                ", HTML.DIV({                                                                            // 17
      "class": "col-md-10"                                                                                          // 18
    }, "\n                  ", HTML.DIV({                                                                           // 19
      "class": "col-md-2"                                                                                           // 20
    }), "\n                  ", HTML.DIV({                                                                          // 21
      "class": "col-md-10"                                                                                          // 22
    }, "\n                    ", HTML.DIV({                                                                         // 23
      "class": "row",                                                                                               // 24
      id: "search-filters-1"                                                                                        // 25
    }, "\n                      ", HTML.SPAN({                                                                      // 26
      "class": "search-filter-head"                                                                                 // 27
    }, Blaze.View("lookup:results_number", function() {                                                             // 28
      return Spacebars.mustache(view.lookup("results_number"));                                                     // 29
    })), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n\n\n              ", Blaze.Each(function() {
      return {                                                                                                      // 31
        _sequence: Spacebars.call(view.lookup("results")),                                                          // 32
        _variable: "result"                                                                                         // 33
      };                                                                                                            // 34
    }, function() {                                                                                                 // 35
      return [ "\n              ", Spacebars.With(function() {                                                      // 36
        return Spacebars.call(view.lookup("result"));                                                               // 37
      }, function() {                                                                                               // 38
        return [ "\n                ", HTML.Comment(' <div class="item  col-xs-6 col-lg-6 col-md-6">\n                    <div class="thumbnail">\n                        <img class="group list-group-image" src="http://placehold.it/300x200" alt="" />\n                        <div class="caption">\n                            <h4 class="group inner list-group-item-heading">\n                                name = {{name}}</h4>\n                            <p class="group inner list-group-item-text">\n                                <span>grade = {{grade}}</span>\n                                \n                                {{#each map in price_map}}\n                                {{#with map}}\n                                <p><span>{{quantity}} kg : Rs. {{price}}</span></p>\n                                {{/with}}\n                                {{/each}}\n                                {{#if age}}\n                                <span>age = {{age}} month</span>\n                                {{/if}}\n                                </p>\n                            <div class="row">\n                                <div class="col-xs-12 col-md-6">\n                                    <p class="lead">\n                                        price = {{price}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> '), "\n\n              ", HTML.DIV({
          "class": "container-fliud"                                                                                // 40
        }, "\n                \n                ", HTML.DIV({                                                       // 41
          "class": "col-md-2"                                                                                       // 42
        }), "\n                ", HTML.DIV({                                                                        // 43
          "class": "col-md-10"                                                                                      // 44
        }, "\n                  ", HTML.DIV({                                                                       // 45
          "class": "col-md-2"                                                                                       // 46
        }), "\n                  ", HTML.DIV({                                                                      // 47
          "class": "col-md-10"                                                                                      // 48
        }, "\n                    ", HTML.BR(), "\n                    ", HTML.DIV({                                // 49
          "class": "row",                                                                                           // 50
          id: "search-product-display"                                                                              // 51
        }, "\n                      ", HTML.DIV({                                                                   // 52
          "class": "col-md-3"                                                                                       // 53
        }, "\n                        ", HTML.IMG({                                                                 // 54
          src: function() {                                                                                         // 55
            return Spacebars.mustache(view.lookup("img"));                                                          // 56
          },                                                                                                        // 57
          id: "product-display-image",                                                                              // 58
          style: "max-height : 100%; max-width : 100%;"                                                             // 59
        }), "\n                        ", HTML.BUTTON({                                                             // 60
          id: "viewDetail",                                                                                         // 61
          "class": "col-md-2 view-display-button"                                                                   // 62
        }, "\n                          ", HTML.P({                                                                 // 63
          id: "product-specs-content"                                                                               // 64
        }, "View Details"), "\n                        "), "\n                      "), "\n                      ", HTML.DIV({
          "class": "col-md-3"                                                                                       // 66
        }, "\n                        ", HTML.DIV({                                                                 // 67
          "class": "row",                                                                                           // 68
          id: "search-filters-1"                                                                                    // 69
        }, "\n                          ", HTML.SPAN({                                                              // 70
          "class": "search-filter-head"                                                                             // 71
        }, Blaze.View("lookup:name", function() {                                                                   // 72
          return Spacebars.mustache(view.lookup("name"));                                                           // 73
        })), "\n                        "), "\n                        ", HTML.BR(), "\n                        ", HTML.P({
          "class": "product-specs"                                                                                  // 75
        }, "Brand:\n                          ", HTML.SPAN({                                                        // 76
          "class": "product-specs-content"                                                                          // 77
        }, " ", Blaze.View("lookup:brand", function() {                                                             // 78
          return Spacebars.mustache(view.lookup("brand"));                                                          // 79
        }))), "\n                        ", HTML.P({                                                                // 80
          "class": "product-specs"                                                                                  // 81
        }, "Category:\n                          ", HTML.SPAN({                                                     // 82
          "class": "product-specs-content"                                                                          // 83
        }, " ", Blaze.View("lookup:category", function() {                                                          // 84
          return Spacebars.mustache(view.lookup("category"));                                                       // 85
        }))), "\n                        ", HTML.P({                                                                // 86
          "class": "product-specs"                                                                                  // 87
        }, "Packaging:\n                          ", HTML.SPAN({                                                    // 88
          "class": "product-specs-content"                                                                          // 89
        }, " ", Blaze.View("lookup:packaging", function() {                                                         // 90
          return Spacebars.mustache(view.lookup("packaging"));                                                      // 91
        }))), "\n                        ", HTML.P({                                                                // 92
          "class": "product-specs"                                                                                  // 93
        }, "Origin:\n                          ", HTML.SPAN({                                                       // 94
          "class": "product-specs-content"                                                                          // 95
        }, " ", Blaze.View("lookup:origin", function() {                                                            // 96
          return Spacebars.mustache(view.lookup("origin"));                                                         // 97
        }))), "\n                        ", HTML.P({                                                                // 98
          "class": "product-specs"                                                                                  // 99
        }, "Delivery within:\n                          ", HTML.SPAN({                                              // 100
          "class": "product-specs-content"                                                                          // 101
        }, " 5 days")), "\n                      "), "\n                      ", HTML.DIV({                         // 102
          "class": "col-md-4"                                                                                       // 103
        }, "\n                        ", HTML.BR(), "\n                        ", HTML.P({                          // 104
          "class": "product-specs"                                                                                  // 105
        }, "Best Rates:\n                          ", HTML.SPAN({                                                   // 106
          "class": "product-specs-content"                                                                          // 107
        }, " ", Blaze.View("lookup:vendor", function() {                                                            // 108
          return Spacebars.mustache(view.lookup("vendor"));                                                         // 109
        }))), "\n                        ", HTML.P({                                                                // 110
          "class": "product-specs-2"                                                                                // 111
        }, "Rs:\n                          ", HTML.SPAN({                                                           // 112
          "class": "product-specs-content-2"                                                                        // 113
        }, " ", Blaze.View("lookup:price", function() {                                                             // 114
          return Spacebars.mustache(view.lookup("price"));                                                          // 115
        }), " / unit")), "\n                        ", HTML.P({                                                     // 116
          "class": "product-specs"                                                                                  // 117
        }, "Order:\n                          ", HTML.SPAN({                                                        // 118
          "class": "product-quantity-input"                                                                         // 119
        }, "\n                            ", HTML.INPUT({                                                           // 120
          type: "number",                                                                                           // 121
          name: "quantity",                                                                                         // 122
          id: "product-quantity-input-box",                                                                         // 123
          min: "1"                                                                                                  // 124
        })), "\n                          ", HTML.SPAN({                                                            // 125
          "class": "product-specs-content"                                                                          // 126
        }, " kg")), "\n                        ", HTML.BUTTON({                                                     // 127
          "class": "col-md-2",                                                                                      // 128
          id: "buy-now-button-1"                                                                                    // 129
        }, "\n                          ", HTML.P({                                                                 // 130
          id: "buy-now-button-text"                                                                                 // 131
        }, "Buy Now"), "\n                        "), "\n                      "), "\n                      ", HTML.Comment(' <div class="col-md-2" id="product-display-box-4">\n                        <br>\n                        <p class="product-specs-3">Better Prices?</p>\n                        <p class="product-specs-3">Long-Term Contracts?</p>\n                        <p></p>\n                        <button class="col-md-2" id="buy-now-button-2">\n                          <p id="buy-now-button-text">Invite Bids</p>\n                        </button>\n                      </div> '), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            " ];
      }), "  \n            " ];                                                                                     // 133
    }), "      \n            " ];                                                                                   // 134
  }), "\n          "), "\n        "), HTML.Raw('\n\n      \n\n      \n<!-- <div class="col-sm-12 col-md-12 column productbox" style="margin:0px; border: 0px; padding: 0px; display: block; height: 10vh;">\n    {{#if search_complete}}\n      {{#each result in results}}\n      <div class="col-md-6 column productbox">\n        {{#with result}}\n        \n          <img src="/placeholder/coming-soon1.jpg" class="img-responsive" style="margin:0px; border:0px; padding: 0px;  ">\n            <span>name = {{name}}</span>\n            <span>category = {{category}}</span>\n            <span>grade = {{grade}}</span>\n            <span>price = {{price}}</span>\n            <span>age = {{age}}</span>\n            <span>size = {{size}}</span>\n        {{/with}}\n         </div>\n       \n      {{/each}}\n      \n    {{/if}}\n</div> -->\n    \n\n<!-- \n<div style="overflow: auto; height: 50vh;">\n    {{#if search_complete}}\n      <ul>\n      {{#each result in results}}\n      <li>\n        {{#with result}}\n        <span>name = {{name}}</span>\n        <span>category = {{category}}</span>\n        <span>grade = {{grade}}</span>\n        <span>price = {{price}}</span>\n        <span>age = {{age}}</span>\n        <span>size = {{size}}</span>\n        {{/with}}\n        </li>\n      {{/each}}\n      </ul>\n    {{/if}}\n</div>\n -->\n\n  \n\n  <!-- {{> DynamicTemplate template=getResults data=getData}} -->') ];
}));                                                                                                                // 136
                                                                                                                    // 137
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cart.css":["meteor/modules",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/cart.css                                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  " #cart-container {\n \tbackground-color: white;\n \tpadding:0%;\n }\n\n #cart-head {\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #6364d8;\n  border: none; \n  background-color: #f8cb00;\n  width: 100%;\n  margin:0px;\n  padding:0px;\n}\n\n#cart-head-content {\n  background-color: white;\n  margin: 0px;\n  padding: 0px;\n  width:100%;\n}\n\n#cart-head-content-text {\n  font-family: CircularStd;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #9b9b9b;\n  text-align: center;\n}\n\n#cart-product-display-container {\n  background-color: #ffffff;\n  padding: 0%;\n  margin: 2%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  display: inline-grid;\n}\n\n#cart-product-display-image {\n  height: 15vh;\n  width: 10vw;\n  align-content: center;\n}\n\n.cart-product-specs {\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8;\n}\n\n.cart-product-specs-content {\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #9b9b9b;\n}\n\n.cart-product-specs-2 {\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #9b9b9b;\n}\n\n.cart-product-specs-content-2 {\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8;\n}\n\n#cart-product-display-3 {\n  background-color: #f8cb00;\n  width: 100%;\n  margin: 0px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n\n}\n\n.cart-total-1 {\n  font-family: CircularStd;\n  font-size: 30px;\n  font-weight: bold\n  font-style: normal;\n  font-stretch: normal;\n  color: #ffffff;\n  padding-left: 30vw;\n}\n\n.cart-total-2 {\n  font-family: CircularStd;\n  font-size: 30px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #f56823;\n  float: right;\n  padding-right: 2vw;\n}\n\n#cart-product-display-4 {\n  margin: 0px;\n}\n\n#Checkout-button {\n  background-color: #f5a623;\n  width: 100%;\n}\n\n.Checkout-button-text {\n  font-family: CircularStd;\n  font-size: 30px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #ffffff;\n  float: right;\n  padding-right: 2vw;\n}"
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"dashboard.css":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/dashboard.css                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  ""                                                                                                                // 2
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.css":["meteor/modules",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/home.css                                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  ".jumbotron-head-1{\n  margin:0px;\n  width: 100%;\n  height: 10vh;\n  background-color: #f8cb00;\n  padding: 2%;\n}\n\n.jumbotron-head-2{\n  margin:0px;\n  padding-top: 1%;\n  padding-bottom: 5%;\n  width: 100%;\n  height: 10vh;\n  background-color: #f8cb00;\n}\n\n#head-aficionado {\n  font-family: CircularStd-Book;\n  font-size: 26px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8; \n  float: left\n}\n\n#head-left {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  text-align: left;\n  float: left;\n  color: #2d2d2d;\n}\n\n#head-list-left {\n  display: inline;\n}\n\n#head-location {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  color: #131313;\n}\n\n.Current-City-New-De .text-style-1 {\n  color: #6364d8;\n}\n\n#head-contact-us {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  color: #2d2d2d;\n}\n\n#search-bar {\n  height: 7vh;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n#head-cart-button {\n  border-radius: 4px;\n  background-color: #f5a623;\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.21;\n  color: #ffffff;\n}\n\n.jumbotron-navigation-1 {\n  padding: 0%;\n  border: 0px:;\n\n}\n\n#home-navigation-1 {\n  background-color: #fcea99;\n  margin:0px;\n  padding: 0%;\n  border: 0px:;\n}\n\n#home-navigation-1-button {\n  border: none;\n  background-color: #fcea99;\n}\n\n\n#home-navigation-1-text {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  padding-top: 5%;\n  color: #9b9b9b;\n}\n\n#home-navigation-2-button {\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #6364d8;\n  border: none; \n  background-color: #f8cb00;\n}\n\n#first{\n  width: 216px;\n  height: 30px;\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #f56823;\n}\n\n.main_menu_bg {\n  width: 285px;\n  height: 580px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);\n}\n\n.categoryItems {\n  padding-left: 21px;\n  padding-top: 13.7px;\n  width: 67px;\n  height: 19px;\n  font-family: CircularStd;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #171717;\n}\n\n.main_menu_bg {\n  position:absolute;\n  left:106px;\n  top:101px;\n  width: 285px;\n  height: 580px;\n  z-index:10;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);\n}\n\n.ALL-CATEGORIES {\n  padding-left:21px;\n  padding-top:21px;\n  height: 14px;\n  font-size: 11px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #a3a3a3;\n}\n\n.sub-category {\n  padding-left:21px;\n  padding-top:21px;\n  height: 14px;\n  font-size: 11px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #a3a3a3;\n}\n\nbody,html{\n  overflow-x:hidden;\n}\n"
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"login.css":["meteor/modules",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/login.css                                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  "#row-container-login{\n  background-color: #fffaf0;\n  height: 100vh;;\n}\n\n#head-login{\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #6364d8;\n}\n\n#head2-login{\n  text-align: center;\n}\n\n#col-mid-login{\n  height: 67vh;\n  border-radius: 4px;\n  background-color: #f8cb00;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);  \n}\n\n#login-forgot-password {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n    color: #585858;\n}\n\n#login-input {\n  height: 3.5vh; \n  width: 20vw; \n  background-color: #ffffff;  \n  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.5); \n  border: solid 1px #979797;\n}\n\n#login-contact-us {\n  font-family: CircularStd-Book;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.88;\n  text-align: center;\n  color: #585858;\n}"
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"pages.js":["./dashboard.html","./home.html","./login.html","./page-not-found.html","./register.html","./search.html","./reverseauction.html","./productDetail.html","./cart.html","./home.css","./login.css","./dashboard.css","./register.css","./search.css","./reverseauction.css","./cart.css",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/pages.js                                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.import('./dashboard.html');                                                                                  // 1
module.import('./home.html');                                                                                       // 2
module.import('./login.html');                                                                                      // 3
module.import('./page-not-found.html');                                                                             // 4
module.import('./register.html');                                                                                   // 5
module.import('./search.html');                                                                                     // 6
module.import('./reverseauction.html');                                                                             // 7
module.import('./productDetail.html');                                                                              // 8
module.import('./cart.html');                                                                                       // 9
                                                                                                                    //
module.import('./home.css');                                                                                        // 11
module.import('./login.css');                                                                                       // 12
module.import('./dashboard.css');                                                                                   // 13
module.import('./register.css');                                                                                    // 14
module.import('./search.css');                                                                                      // 15
module.import('./reverseauction.css');                                                                              // 16
module.import('./cart.css');                                                                                        // 17
                                                                                                                    //
Template.search.events({                                                                                            // 20
  'click #viewDetail': function () {                                                                                // 21
    function clickViewDetail(e) {                                                                                   // 21
      e.preventDefault();                                                                                           // 22
                                                                                                                    //
      Modal.show('productDetail');                                                                                  // 24
    }                                                                                                               // 25
                                                                                                                    //
    return clickViewDetail;                                                                                         // 21
  }()                                                                                                               // 21
});                                                                                                                 // 20
                                                                                                                    //
Template.search.events({                                                                                            // 28
  'click #head-cart-button': function () {                                                                          // 29
    function clickHeadCartButton(e) {                                                                               // 29
      e.preventDefault();                                                                                           // 30
                                                                                                                    //
      Modal.show('cart');                                                                                           // 32
    }                                                                                                               // 33
                                                                                                                    //
    return clickHeadCartButton;                                                                                     // 29
  }()                                                                                                               // 29
});                                                                                                                 // 28
                                                                                                                    //
Template.cart.events({                                                                                              // 36
  'click #buy-now-button-2': function () {                                                                          // 37
    function clickBuyNowButton2(e) {                                                                                // 37
      e.preventDefault();                                                                                           // 38
                                                                                                                    //
      Modal.show('productDetail');                                                                                  // 40
    }                                                                                                               // 41
                                                                                                                    //
    return clickBuyNowButton2;                                                                                      // 37
  }()                                                                                                               // 37
});                                                                                                                 // 36
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"register.css":["meteor/modules",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/register.css                                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  "#row-container-register{\n  background-color: #fffaf0;\n  height: 100vh;;\n}\n\n#head-register{\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #6364d8;\n}\n\n#head2-register{\n  text-align: center;\n}\n\n#col-mid-register{\n  height: 67vh;\n  border-radius: 4px;\n  background-color: #f8cb00;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);  \n}\n\n#register-input {\n  height: 3.5vh; \n  width: 20vw; \n  background-color: #ffffff;  \n  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.5); \n  border: solid 1px #979797;\n}\n\n#register-contact-us {\n  font-family: CircularStd-Book;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.88;\n  text-align: center;\n  color: #585858;\n}"
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"reverseauction.css":["meteor/modules",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/reverseauction.css                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  ".jumbotron-head-1{\n  margin:0px;\n  width: 100%;\n  height: 10vh;\n  background-color: #f8cb00;\n  padding: 2%;\n}\n\n.jumbotron-head-2{\n  margin:0px;\n  padding-top: 1%;\n  padding-bottom: 5%;\n  width: 100%;\n  height: 10vh;\n  background-color: #f8cb00;\n}\n\n#head-aficionado {\n  font-family: CircularStd-Book;\n  font-size: 26px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8; \n  float: left\n}\n\n#head-left {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  text-align: left;\n  float: left;\n  color: #2d2d2d;\n}\n\n#head-list-left {\n  display: inline;\n}\n\n#head-location {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  color: #131313;\n}\n\n.Current-City-New-De .text-style-1 {\n  color: #6364d8;\n}\n\n#head-contact-us {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  color: #2d2d2d;\n}\n\n#search-bar {\n  height: 7vh;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n#head-cart-button {\n  border-radius: 4px;\n  background-color: #f5a623;\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.21;\n  color: #ffffff;\n}\n\n.jumbotron-navigation-1 {\n  padding: 0%;\n  border: 0px:;\n\n}\n\n#home-navigation-1 {\n  background-color: #fcea99;\n  margin:0px;\n  padding: 0%;\n  border: 0px:;\n}\n\n#home-navigation-1-button {\n  border: none;\n  background-color: #fcea99;\n}\n\n\n#home-navigation-1-text {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  padding-top: 5%;\n  color: #9b9b9b;\n}\n\n#home-navigation-2-button {\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #6364d8;\n  border: none; \n  background-color: #f8cb00;\n}\n\n.main_menu_bg {\n  width: 285px;\n  height: 580px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);\n}\n\n.categoryItems {\n  padding-left: 21px;\n  padding-top: 13.7px;\n  width: 67px;\n  height: 19px;\n  font-family: CircularStd;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #171717;\n}\n\n.main_menu_bg {\n  position:absolute;\n  left:106px;\n  top:101px;\n  width: 285px;\n  height: 580px;\n  z-index:10;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);\n}\n\n.ALL-CATEGORIES {\n  padding-left:21px;\n  padding-top:21px;\n  height: 14px;\n  font-size: 11px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #a3a3a3;\n}\n\n.sub-category {\n  padding-left:21px;\n  padding-top:21px;\n  height: 14px;\n  font-size: 11px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #a3a3a3;\n}\n\nbody,html{\n  overflow-x:hidden;\n}\n\n#reverse-auction-head-1 {\n  background-color: #ffffff;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 3%;\n}\n\n.search-filter-head {\n  font-family: CircularStd-Book;\n  font-size: 27px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: left;\n  color: #2d2d2d;\n}\n\n#search-product-display {\n  height: 40vh;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 4px 14px 7px rgba(121, 121, 121, 0.05);\n  border: solid 1px #e4e4e4;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 3%;\n}\n\n#product-display-image {\n  height: 25vh;\n  width: 15vw;\n  padding-top: 10%;\n}\n\n.product-specs{\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #8f8f8f;\n}\n\n.product-specs-content {\n  color: #6364d8;\n}\n\n.product-specs-2 {\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #8f8f8f;\n}\n\n.product-specs-content-2 {\n  color: #6364d8;;\n}\n\n.product-specs-3 {\n  font-family: CircularStd;\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #f56823;\n  margin-bottom: 12%;\n}\n\n.product-quantity-input {\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8;\n}\n\n#product-quantity-input-box {\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  width: 20%;\n}\n\n\n#buy-now-button-2 {\n  height: 7vh;\n  width: 100%;\n  background-color: rgba(248, 203, 0, 0.5);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n}\n\n#buy-now-button-3 {\n  height: 11vh;\n  width: 100%;\n  background-color: rgba(248, 203, 0, 0.5);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n}\n\n#buy-now-button-text {\n  font-family: CircularStd;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #f56823;\n}\n\n#product-display-box-4 {\n  background-color: rgba(248, 203, 0, 0.4);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  padding: 0%;\n  margin: 0px;\n  height: 100%;\n}"
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"search.css":["meteor/modules",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/pages/search.css                                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("meteor/modules").addStyles(                                                               // 1
  ".jumbotron-head-1{\n  margin:0px;\n  width: 100%;\n  height: 10vh;\n  background-color: #f8cb00;\n  padding: 2%;\n}\n\n.jumbotron-head-2{\n  margin:0px;\n  padding-top: 1%;\n  padding-bottom: 5%;\n  width: 100%;\n  height: 10vh;\n  background-color: #f8cb00;\n}\n\n#head-aficionado {\n  font-family: CircularStd-Book;\n  font-size: 26px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8; \n  float: left\n}\n\n#head-left {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  text-align: left;\n  float: left;\n  color: #2d2d2d;\n}\n\n#head-list-left {\n  display: inline;\n}\n\n#head-location {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  color: #131313;\n}\n\n.Current-City-New-De .text-style-1 {\n  color: #6364d8;\n}\n\n#head-contact-us {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.94;\n  color: #2d2d2d;\n}\n\n#search-bar {\n  height: 7vh;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n#head-cart-button {\n  border-radius: 4px;\n  background-color: #f5a623;\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.21;\n  color: #ffffff;\n}\n\n.jumbotron-navigation-1 {\n  padding: 0%;\n  border: 0px:;\n\n}\n\n#home-navigation-1 {\n  background-color: #fcea99;\n  margin:0px;\n  padding: 0%;\n  border: 0px:;\n}\n\n#home-navigation-1-button {\n  border: none;\n  background-color: #fcea99;\n}\n\n\n#home-navigation-1-text {\n  font-family: CircularStd-Book;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  padding-top: 5%;\n  color: #9b9b9b;\n}\n\n#home-navigation-2-button {\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #6364d8;\n  border: none; \n  background-color: #f8cb00;\n}\n\n.main_menu_bg {\n  width: 285px;\n  height: 580px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);\n}\n\n.categoryItems {\n  padding-left: 21px;\n  padding-top: 13.7px;\n  width: 67px;\n  height: 19px;\n  font-family: CircularStd;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #171717;\n}\n\n.main_menu_bg {\n  position:absolute;\n  left:106px;\n  top:101px;\n  width: 285px;\n  height: 580px;\n  z-index:10;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);\n}\n\n.ALL-CATEGORIES {\n  padding-left:21px;\n  padding-top:21px;\n  height: 14px;\n  font-size: 11px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #a3a3a3;\n}\n\n.sub-category {\n  padding-left:21px;\n  padding-top:21px;\n  height: 14px;\n  font-size: 11px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #a3a3a3;\n}\n\nbody,html{\n  overflow-x:hidden;\n}\n\n#search-filters-1 {\n  background-color: #ffffff;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 3%;\n}\n\n#search-filters-2 {\n  background-color: #ffffff;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 0%;\n}\n\n.search-filter-head {\n  font-family: CircularStd-Book;\n  font-size: 27px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: left;\n  color: #2d2d2d;\n}\n\n.search-pagination-head {\n  font-family: CircularStd-Book;\n  font-size: 15px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  color: #7b7b7b;\n  padding-left: 24vw;\n}\n\n.search-pagination {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  float: right;\n}\n\n.search-pagination li {display: inline;}\n\n.search-pagination li a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n}\n\n.search-pagination li a.active {\n    background-color: #8f8f8f;\n    color: white;\n}\n\n.search-pagination  li a:hover:not(.active) {background-color: #ddd;}\n\n#search-filters-2 {\n  background-color: #ffffff;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 1%;\n}\n\n.product-specs-filter {\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #8f8f8f;\n}\n\n.product-specs-filter-content {\n  color: #6364d8;\n}\n\n#search-product-display {\n  height: 30vh;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 4px 14px 7px rgba(121, 121, 121, 0.05);\n  border: solid 1px #e4e4e4;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 3%;\n}\n\n#product-display-image {\n  height: 25vh;\n  width: 15vw;\n  padding-top: 10%;\n}\n\n.view-display-button {\n  width: 100%;\n  background-color: white;\n  color: #6364d8;\n  border: 0px;\n  font-size: 14px\n}\n\n.product-specs{\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #8f8f8f;\n}\n\n.product-specs-content {\n  color: #6364d8;\n}\n\n.product-specs-2 {\n  font-family: CircularStd;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #8f8f8f;\n}\n\n.product-specs-content-2 {\n  color: #6364d8;;\n}\n\n.product-specs-3 {\n  font-family: CircularStd;\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #f56823;\n  margin-bottom: 12%;\n}\n\n.product-quantity-input {\n  font-family: CircularStd;\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  color: #6364d8;\n}\n\n#product-quantity-input-box {\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  width: 20%;\n}\n\n#buy-now-button-1 {\n  height: 7vh;\n  width: 70%;\n  background-color: rgba(248, 203, 0, 0.5);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n}\n\n#buy-now-button-2 {\n  height: 7vh;\n  width: 100%;\n  background-color: rgba(248, 203, 0, 0.5);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n}\n\n#buy-now-button-text {\n  font-family: CircularStd;\n  font-size: 22px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  text-align: center;\n  color: #f56823;\n}\n\n#product-display-box-4 {\n  background-color: rgba(248, 203, 0, 0.4);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  padding: 0%;\n  margin: 0px;\n  height: 100%;\n}"
);                                                                                                                  // 3
                                                                                                                    // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"body.html":["./template.body.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/body.html                                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.body.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.body.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/template.body.js                                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("main");                                                                                       // 2
Template["main"] = new Template("Template.main", (function() {                                                      // 3
  var view = this;                                                                                                  // 4
  return [ Spacebars.include(view.lookupTemplate("navigation")), "\n    \n    ", Spacebars.include(view.lookupTemplate("yield")), HTML.Raw('\n\n<div class="container-fluid">\n  <div class="row" id="row-container">\n    <div class="col-sm-2 col-md-2" style="background-color: #f4f5aa;"></div>\n    \n    <div class="col-sm-7 col-md-7">\n<!--       {{> footer}} -->\n    </div>\n    <div class="col-sm-3 col-md-3" style="background-color: #f4f5aa;"></div>\n  </div>\n</div>') ];
}));                                                                                                                // 6
                                                                                                                    // 7
Template.__checkName("upload");                                                                                     // 8
Template["upload"] = new Template("Template.upload", (function() {                                                  // 9
  var view = this;                                                                                                  // 10
  return [ HTML.Raw("<h2>Upload Document</h2>\n  "), HTML.FORM({                                                    // 11
    "class": "upload-document"                                                                                      // 12
  }, "\n    ", HTML.getTag("ui")("\n      ", HTML.LABEL({                                                           // 13
    "for": "product-details1"                                                                                       // 14
  }, "Product Specification1"), "\n      ", HTML.INPUT({                                                            // 15
    type: "text",                                                                                                   // 16
    name: "product-detials1",                                                                                       // 17
    placeholder: ""                                                                                                 // 18
  }), HTML.BR(), "\n      ", HTML.LABEL({                                                                           // 19
    "for": "product-details2"                                                                                       // 20
  }, "Product Specification2"), "\n      ", HTML.INPUT({                                                            // 21
    type: "text",                                                                                                   // 22
    name: "product-detials2",                                                                                       // 23
    placeholder: ""                                                                                                 // 24
  }), HTML.BR(), "\n      ", HTML.LABEL({                                                                           // 25
    "for": "product-details3"                                                                                       // 26
  }, "Product Specification3"), "\n      ", HTML.INPUT({                                                            // 27
    type: "text",                                                                                                   // 28
    name: "product-detials3",                                                                                       // 29
    placeholder: ""                                                                                                 // 30
  }), HTML.BR(), "\n    "), "\n    ", HTML.Raw('<p><input type="file" accept="image/*">Upload image</p>'), "\n    ", HTML.Raw('<p><input type="file" accept=".pdf">Upload pdf document</p>'), "\n    ", HTML.Raw('<p><input type="file" accept=".doc, docx">Upload word document</p>'), "\n    ", HTML.Raw('<input type="submit" value="Submit">'), "\n  ") ];
}));                                                                                                                // 32
                                                                                                                    // 33
Template.__checkName("verification");                                                                               // 34
Template["verification"] = new Template("Template.verification", (function() {                                      // 35
  var view = this;                                                                                                  // 36
  return HTML.Raw('<div class="row">\n     <label class="control-label col-sm-3 col-md-3" for="submit">OTP</label>\n  <div class="col-sm-5 col-md-5"><input type="text" name="otp_value" placeholder="Enter OTP" style="border-radius: 8px; height: 25px;\n  background-color: #a7fcd7;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border: solid 1px #979797;">\n  \n</div>\n</div>');
}));                                                                                                                // 38
                                                                                                                    // 39
Template.__checkName("forgotPass");                                                                                 // 40
Template["forgotPass"] = new Template("Template.forgotPass", (function() {                                          // 41
  var view = this;                                                                                                  // 42
  return HTML.Raw('<h2>Forgot Password</h2>\n  <form class="forgot-password">\n    <input type="email" name="email" placeholder="Enter email address" required="">\n    <input type="text" name="phone" placeholder="Enter phone number" required="">\n    <input type="submit" value="Submit">\n  </form>');
}));                                                                                                                // 44
                                                                                                                    // 45
Template.__checkName("resetPass");                                                                                  // 46
Template["resetPass"] = new Template("Template.resetPass", (function() {                                            // 47
  var view = this;                                                                                                  // 48
  return HTML.Raw('<h2>Reset Password</h2>\n  <form class="email-input">\n    <input type="password" name="password" placeholder="Enter old password" required="">\n    <input type="password" name="password" placeholder="Enter new password" required="">\n    <input type="password" name="password" placeholder="Renter new password" required="">\n    <input type="submit" value="Submit">\n  </form>');
}));                                                                                                                // 50
                                                                                                                    // 51
Template.__checkName("phoneVerif");                                                                                 // 52
Template["phoneVerif"] = new Template("Template.phoneVerif", (function() {                                          // 53
  var view = this;                                                                                                  // 54
  return HTML.Raw('<h3>Phone Verification</h3>\n  <form class="phone-input">\n    <input type="number" name="inputOtp" placeholder="Enter OTP" required="">\n    <input type="submit" value="Submit">\n  </form>');
}));                                                                                                                // 56
                                                                                                                    // 57
Template.__checkName("productViewUser");                                                                            // 58
Template["productViewUser"] = new Template("Template.productViewUser", (function() {                                // 59
  var view = this;                                                                                                  // 60
  return HTML.DIV({                                                                                                 // 61
    "class": "container-fluid"                                                                                      // 62
  }, "\n  ", HTML.DIV({                                                                                             // 63
    "class": "row",                                                                                                 // 64
    id: "row-container"                                                                                             // 65
  }, "\n    ", HTML.Raw('<div class="col-sm-2 col-md-2" id="col-left"></div>'), "\n    \n    ", HTML.DIV({          // 66
    "class": "col-sm-7 col-md-7",                                                                                   // 67
    id: "col-mid"                                                                                                   // 68
  }, "\n      ", HTML.Raw('<div class="col-sm-2 col-md-2"></div>'), "\n      ", HTML.DIV({                          // 69
    "class": "col-sm-8 col-md-8"                                                                                    // 70
  }, "\n        ", HTML.SECTION({                                                                                   // 71
    "class": "products"                                                                                             // 72
  }, "\n          ", Blaze.Each(function() {                                                                        // 73
    return Spacebars.call(view.lookup("products"));                                                                 // 74
  }, function() {                                                                                                   // 75
    return [ "\n            ", Spacebars.include(view.lookupTemplate("productView")), "\n          " ];             // 76
  }), "\n    "), "\n      "), "\n      ", HTML.Raw('<div class="col-sm-2 col-md-2"></div>'), "      \n    "), "            \n    ", HTML.Raw('<div class="col-sm-3 col-md-3" id="col-right"></div>'), "\n  "), "\n");
}));                                                                                                                // 78
                                                                                                                    // 79
Template.__checkName("productView");                                                                                // 80
Template["productView"] = new Template("Template.productView", (function() {                                        // 81
  var view = this;                                                                                                  // 82
  return HTML.ARTICLE({                                                                                             // 83
    "class": "productViewArticle"                                                                                   // 84
  }, "\n    ", HTML.H3(Blaze.View("lookup:name", function() {                                                       // 85
    return Spacebars.mustache(view.lookup("name"));                                                                 // 86
  })), "\n    ", HTML.P(Blaze.View("lookup:category", function() {                                                  // 87
    return Spacebars.mustache(view.lookup("category"));                                                             // 88
  })), "\n    ", HTML.P(Blaze.View("lookup:grade", function() {                                                     // 89
    return Spacebars.mustache(view.lookup("grade"));                                                                // 90
  })), "\n    ", HTML.P(Blaze.View("lookup:size", function() {                                                      // 91
    return Spacebars.mustache(view.lookup("size"));                                                                 // 92
  })), "\n    ", HTML.P(Blaze.View("lookup:age", function() {                                                       // 93
    return Spacebars.mustache(view.lookup("age"));                                                                  // 94
  })), "\n  ");                                                                                                     // 95
}));                                                                                                                // 96
                                                                                                                    // 97
Template.__checkName("footer");                                                                                     // 98
Template["footer"] = new Template("Template.footer", (function() {                                                  // 99
  var view = this;                                                                                                  // 100
  return HTML.Raw("<footer>\n      <p>Copyright &copy; Aficionado Ventures Pvt. Ltd., 2016.</p>\n  </footer>");     // 101
}));                                                                                                                // 102
                                                                                                                    // 103
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":["./body.html","./pages/search.html","./pages/pages.js","./components/components.js","meteor/meteor","meteor/templating","../api/userdata.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/body.js                                                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.import('./body.html');                                                                                       // 1
module.import('./pages/search.html');                                                                               // 2
module.import('./pages/pages.js');                                                                                  // 3
module.import('./components/components.js');                                                                        // 4
                                                                                                                    //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                                         // 6
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});                               // 7
var Products;module.import('../api/userdata.js',{"Products":function(v){Products=v}});                              // 8
                                                                                                                    //
Template.register.onCreated(function () {                                                                           // 10
    function bodyOnCreated() {                                                                                      // 10
        console.log('register created');                                                                            // 11
    }                                                                                                               // 12
                                                                                                                    //
    return bodyOnCreated;                                                                                           // 10
}());                                                                                                               // 10
                                                                                                                    //
Template.upload.events({                                                                                            // 14
    'change input': function () {                                                                                   // 15
        function changeInput(event, template) {                                                                     // 15
            var file = event.target.files[0]; //assuming 1 file only                                                // 16
            if (!file) return;                                                                                      // 17
                                                                                                                    //
            var reader = new FileReader(); //create a reader according to HTML5 File API                            // 19
                                                                                                                    //
            reader.onload = function (event) {                                                                      // 21
                var buffer = new Uint8Array(reader.result); // convert to binary                                    // 22
                Meteor.call('saveFile', buffer);                                                                    // 23
            };                                                                                                      // 24
                                                                                                                    //
            reader.readAsArrayBuffer(file); //read the file as arraybuffer                                          // 26
        }                                                                                                           // 27
                                                                                                                    //
        return changeInput;                                                                                         // 15
    }()                                                                                                             // 15
});                                                                                                                 // 14
                                                                                                                    //
Template.search.onCreated(function () {                                                                             // 30
    var template = Template.instance();                                                                             // 31
    // template.results = [{name : 'dum', category : 'dum', grade : 'duma', price : 'dum'}];                        //
    template.results = new ReactiveVar([]);                                                                         // 33
    template.search_done = new ReactiveVar(false);                                                                  // 34
    template.filter_age = new ReactiveVar(false);                                                                   // 35
    template.min_age = new ReactiveVar(0);                                                                          // 36
    template.max_age = new ReactiveVar(1);                                                                          // 37
    template.number_results = new ReactiveVar(0);                                                                   // 38
});                                                                                                                 // 39
                                                                                                                    //
Template.search.helpers({                                                                                           // 41
    vendor_name: function () {                                                                                      // 42
        function vendor_name() {                                                                                    // 42
            return Meteor.user().name;                                                                              // 43
        }                                                                                                           // 44
                                                                                                                    //
        return vendor_name;                                                                                         // 42
    }(),                                                                                                            // 42
    currentUser: function () {                                                                                      // 45
        function currentUser() {                                                                                    // 45
            return Meteor.userId();                                                                                 // 46
        }                                                                                                           // 47
                                                                                                                    //
        return currentUser;                                                                                         // 45
    }(),                                                                                                            // 45
    search_complete: function () {                                                                                  // 48
        function search_complete() {                                                                                // 48
            return Template.instance().search_done.get();                                                           // 49
        }                                                                                                           // 50
                                                                                                                    //
        return search_complete;                                                                                     // 48
    }(),                                                                                                            // 48
    results: function () {                                                                                          // 51
        function results() {                                                                                        // 51
            return Template.instance().results.get();                                                               // 52
        }                                                                                                           // 53
                                                                                                                    //
        return results;                                                                                             // 51
    }(),                                                                                                            // 51
    to_filter_age: function () {                                                                                    // 54
        function to_filter_age() {                                                                                  // 54
            return Template.instance().filter_age.get();                                                            // 55
        }                                                                                                           // 56
                                                                                                                    //
        return to_filter_age;                                                                                       // 54
    }(),                                                                                                            // 54
    lower_age_limit: function () {                                                                                  // 57
        function lower_age_limit() {                                                                                // 57
            return Template.instance().min_age.get();                                                               // 58
        }                                                                                                           // 59
                                                                                                                    //
        return lower_age_limit;                                                                                     // 57
    }(),                                                                                                            // 57
    upper_age_limit: function () {                                                                                  // 60
        function upper_age_limit() {                                                                                // 60
            return Template.instance().max_age.get();                                                               // 61
        }                                                                                                           // 62
                                                                                                                    //
        return upper_age_limit;                                                                                     // 60
    }(),                                                                                                            // 60
    results_number: function () {                                                                                   // 63
        function results_number() {                                                                                 // 63
            var num = Template.instance().number_results.get();                                                     // 64
            if (num == 0) {                                                                                         // 65
                return "No results found in the database";                                                          // 66
            } else {                                                                                                // 67
                return "Found " + num + " results in the database";                                                 // 68
            }                                                                                                       // 69
        }                                                                                                           // 70
                                                                                                                    //
        return results_number;                                                                                      // 63
    }()                                                                                                             // 63
});                                                                                                                 // 41
                                                                                                                    //
Template.search.events({                                                                                            // 73
    'submit .search_input': function () {                                                                           // 74
        function submitSearch_input(event, template) {                                                              // 74
            event.preventDefault();                                                                                 // 75
                                                                                                                    //
            var name_query = $('[name="name_query"]').val();                                                        // 77
                                                                                                                    //
            Meteor.call('search_name', { name: name_query }, { returnStubValue: true }, function (error, results) {
                template.search_done.set(true);                                                                     // 81
                template.results.set(results);                                                                      // 82
                template.number_results.set(results.length);                                                        // 83
                // for (i = 0; i < results.length; i++) {                                                           //
                //     results[i].grade = results[i].params['grade'];                                               //
                //     if (results[i].params['age']) {                                                              //
                //         template.filter_age.set(true);                                                           //
                //         results[i].age = results[i].params['age'];                                               //
                //         if (results[i].params['age'] <= template.min_age.get()) {                                //
                //             template.min_age.set(results[i].params['age']);                                      //
                //         }                                                                                        //
                //         if (results[i].params['age'] >= template.max_age.get()) {                                //
                //             template.max_age.set(results[i].params['age']);                                      //
                //         }                                                                                        //
                //     }                                                                                            //
                // }                                                                                                //
            });                                                                                                     // 97
        }                                                                                                           // 98
                                                                                                                    //
        return submitSearch_input;                                                                                  // 74
    }()                                                                                                             // 74
});                                                                                                                 // 73
                                                                                                                    //
// 'onclick #filter_btn' : function(event, template) {                                                              //
//     event.preventDefault();                                                                                      //
//     console.log("hello");                                                                                        //
//     console.log(template.find('[name="grade_checkbox_a1"]').value);                                              //
// }                                                                                                                //
Template.login.events({                                                                                             // 106
    'submit .login-input': function () {                                                                            // 107
        function submitLoginInput(event, template) {                                                                // 107
            event.preventDefault();                                                                                 // 108
                                                                                                                    //
            var user = {                                                                                            // 110
                username: $('[name=username]').val()                                                                // 111
            };                                                                                                      // 110
            var password = $('[name=password]').val();                                                              // 113
            Meteor.loginWithPassword(user, password, function (error) {                                             // 114
                if (error) {                                                                                        // 115
                    console.log(error.reason);                                                                      // 116
                } else {                                                                                            // 117
                    Router.go('/dashboard');                                                                        // 118
                }                                                                                                   // 119
            });                                                                                                     // 120
        }                                                                                                           // 121
                                                                                                                    //
        return submitLoginInput;                                                                                    // 107
    }()                                                                                                             // 107
});                                                                                                                 // 106
                                                                                                                    //
// Template.dashboard.onCreated(function() {                                                                        //
//     let tmpl = Template.instance();                                                                              //
//     tmpl.prod_lists = new ReactiveVar([]);                                                                       //
//     tmpl.name_vendor = new ReactiveVar("");                                                                      //
                                                                                                                    //
// });                                                                                                              //
                                                                                                                    //
// Template.dashboard.events({                                                                                      //
//     'click #view_my_added' : function(event, template) {                                                         //
//         event.preventDefault();                                                                                  //
//         Meteor.call('list_prods', Meteor.userId(), {returnStubValue: true}, (error, results) => {                //
//             template.prod_lists.set(results);                                                                    //
//         });                                                                                                      //
//     },                                                                                                           //
// });                                                                                                              //
                                                                                                                    //
// Template.dashboard.helpers({                                                                                     //
//     vendor_name : function() {                                                                                   //
//         return Template.instance().name_vendor.get();                                                            //
//     },                                                                                                           //
//     currentUser : function() {                                                                                   //
//         Meteor.call('get_vendor_name', Meteor.userId(), {returnStubValue: true}, (error, results) => {           //
//             template.name_vendor.set(results);                                                                   //
//         });                                                                                                      //
//         return Meteor.userId();                                                                                  //
//     },                                                                                                           //
//     prods : function() {                                                                                         //
//         return Template.instance().prod_lists.get();                                                             //
//     }                                                                                                            //
// });                                                                                                              //
                                                                                                                    //
Template.navigation.events({                                                                                        // 155
    'click .logout_control': function () {                                                                          // 156
        function clickLogout_control(event) {                                                                       // 156
            event.preventDefault();                                                                                 // 157
            Meteor.logout();                                                                                        // 158
            Router.go('http://aficionadoventures.com');                                                             // 159
        }                                                                                                           // 160
                                                                                                                    //
        return clickLogout_control;                                                                                 // 156
    }()                                                                                                             // 156
});                                                                                                                 // 155
                                                                                                                    //
Template.navigation.helpers({                                                                                       // 163
    currentUser: function () {                                                                                      // 164
        function currentUser() {                                                                                    // 164
            return Meteor.userId();                                                                                 // 165
        }                                                                                                           // 166
                                                                                                                    //
        return currentUser;                                                                                         // 164
    }()                                                                                                             // 164
});                                                                                                                 // 163
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"register.js":["meteor/meteor","meteor/templating","meteor/accounts-base","./body.html","./pages/pages.js","./components/components.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/register.js                                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                                         // 1
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});                               // 2
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                            // 3
                                                                                                                    //
module.import('./body.html');                                                                                       // 5
module.import('./pages/pages.js');                                                                                  // 6
module.import('./components/components.js');                                                                        // 7
                                                                                                                    //
Template.register.onCreated(function () {                                                                           // 9
    var template = Template.instance();                                                                             // 10
    template.first_step_done = new ReactiveVar(false);                                                              // 11
    template.error_reg = new ReactiveVar("");                                                                       // 12
    template.skip_allowed = new ReactiveVar(false);                                                                 // 13
    template.status_message = new ReactiveVar("");                                                                  // 14
});                                                                                                                 // 15
                                                                                                                    //
Template.register.events({                                                                                          // 17
    'submit form': function () {                                                                                    // 18
        function submitForm(event, template) {                                                                      // 18
            event.preventDefault();                                                                                 // 19
                                                                                                                    //
            if (!template.first_step_done.get()) {                                                                  // 21
                var user = {                                                                                        // 22
                    name: template.find('[name="name"]').value,                                                     // 23
                    username: template.find('[name="username"]').value,                                             // 24
                                                                                                                    //
                    password: template.find('[name="password"]').value,                                             // 26
                    role: template.find('[name="role"]').value,                                                     // 27
                                                                                                                    //
                    city: template.find('[name="city"]').value,                                                     // 29
                    state: template.find('[name="state"]').value                                                    // 30
                };                                                                                                  // 22
                                                                                                                    //
                email = template.find('[name="email"]').value;                                                      // 33
                if (email) {                                                                                        // 34
                    user.email = email;                                                                             // 35
                }                                                                                                   // 36
                                                                                                                    //
                phone = template.find('[name="phone"]').value;                                                      // 38
                if (phone) {                                                                                        // 39
                    user.phone = phone;                                                                             // 40
                }                                                                                                   // 41
                                                                                                                    //
                Accounts.createUser(user, function (error) {                                                        // 43
                    if (error) {                                                                                    // 44
                        template.error_reg.set('Error occurred: ' + error.reason);                                  // 45
                    } else {                                                                                        // 46
                        if (email && phone) {                                                                       // 47
                            Meteor.call('sendVerificationLink', function (error, response) {                        // 48
                                if (!error) {                                                                       // 49
                                    Meteor.call('sendOTP', function (error) {                                       // 50
                                        template.status_message.set("Enter OTP sent to your number.");              // 51
                                        template.skip_allowed.set(true);                                            // 52
                                        template.first_step_done.set(true);                                         // 53
                                        $('[name="name"]').attr('disabled', '');                                    // 54
                                        $('[name="email"]').attr('disabled', '');                                   // 55
                                        $('[name="password"]').attr('disabled', '');                                // 56
                                        $('[name="role"]').attr('disabled', '');                                    // 57
                                        $('[name="phone"]').attr('disabled', '');                                   // 58
                                        $('[name="city"]').attr('disabled', '');                                    // 59
                                        $('[name="state"]').attr('disabled', '');                                   // 60
                                    });                                                                             // 61
                                }                                                                                   // 62
                            });                                                                                     // 63
                        } else if (email && !phone) {                                                               // 64
                            Meteor.call('sendVerificationLink', function (error, response) {                        // 65
                                if (!error) {                                                                       // 66
                                    template.status_message.set("Phone not specified.");                            // 67
                                    template.status_message.set("");                                                // 68
                                    Router.go('/dashboard');                                                        // 69
                                }                                                                                   // 70
                            });                                                                                     // 71
                        } else if (!email && phone) {                                                               // 72
                            Meteor.call('sendOTP', function (error) {                                               // 73
                                template.status_message.set("Enter OTP sent to your number.");                      // 74
                                template.skip_allowed.set(true);                                                    // 75
                                template.first_step_done.set(true);                                                 // 76
                                $('[name="name"]').attr('disabled', '');                                            // 77
                                $('[name="email"]').attr('disabled', '');                                           // 78
                                $('[name="password"]').attr('disabled', '');                                        // 79
                                $('[name="role"]').attr('disabled', '');                                            // 80
                                $('[name="phone"]').attr('disabled', '');                                           // 81
                                $('[name="city"]').attr('disabled', '');                                            // 82
                                $('[name="state"]').attr('disabled', '');                                           // 83
                            });                                                                                     // 84
                        } else {                                                                                    // 85
                            template.status_message.set("");                                                        // 86
                            Router.go('/dashboard');                                                                // 87
                        }                                                                                           // 88
                    }                                                                                               // 89
                });                                                                                                 // 90
                template.status_message.set("Storing your details safely...");                                      // 91
            } else {                                                                                                // 92
                var input_otp = template.find('[name="otp_value"]').value;                                          // 93
                Meteor.call('verifyOTP', Meteor.userId(), input_otp, function (error, response) {                   // 94
                    if (error) {                                                                                    // 95
                        template.error_reg.set("Error occurred: " + error.reason);                                  // 96
                    } else {                                                                                        // 97
                        template.status_message.set("");                                                            // 98
                        Router.go('/dashboard');                                                                    // 99
                    }                                                                                               // 100
                });                                                                                                 // 101
            }                                                                                                       // 102
        }                                                                                                           // 103
                                                                                                                    //
        return submitForm;                                                                                          // 18
    }(),                                                                                                            // 18
    'click #skip': function () {                                                                                    // 104
        function clickSkip(event, template) {                                                                       // 104
            event.preventDefault();                                                                                 // 105
            template.status_message.set("");                                                                        // 106
            Router.go('/dashboard');                                                                                // 107
        }                                                                                                           // 108
                                                                                                                    //
        return clickSkip;                                                                                           // 104
    }()                                                                                                             // 104
});                                                                                                                 // 17
                                                                                                                    //
Template.register.helpers({                                                                                         // 111
    error_first_step: function () {                                                                                 // 112
        function error_first_step() {                                                                               // 112
            return Template.instance().error_reg.get();                                                             // 113
        }                                                                                                           // 114
                                                                                                                    //
        return error_first_step;                                                                                    // 112
    }(),                                                                                                            // 112
    verification: function () {                                                                                     // 115
        function verification() {                                                                                   // 115
            if (Template.instance().first_step_done.get()) {                                                        // 116
                return "verification";                                                                              // 117
            }                                                                                                       // 118
        }                                                                                                           // 119
                                                                                                                    //
        return verification;                                                                                        // 115
    }(),                                                                                                            // 115
    status_message: function () {                                                                                   // 120
        function status_message() {                                                                                 // 120
            return Template.instance().status_message.get();                                                        // 121
        }                                                                                                           // 122
                                                                                                                    //
        return status_message;                                                                                      // 120
    }(),                                                                                                            // 120
    skip_allow: function () {                                                                                       // 123
        function skip_allow() {                                                                                     // 123
            return Template.instance().skip_allowed.get();                                                          // 124
        }                                                                                                           // 125
                                                                                                                    //
        return skip_allow;                                                                                          // 123
    }()                                                                                                             // 123
});                                                                                                                 // 111
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"api":{"userdata.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/api/userdata.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Products = new Mongo.Collection('products');                                                                        // 1
                                                                                                                    //
module.export("Products",function(){return Products});                                                              // 3
                                                                                                                    //
Products.allow({                                                                                                    // 5
    insert: function () {                                                                                           // 6
        function insert(userId, doc) {                                                                              // 6
            return !!userId;                                                                                        // 7
        }                                                                                                           // 8
                                                                                                                    //
        return insert;                                                                                              // 6
    }()                                                                                                             // 6
});                                                                                                                 // 5
                                                                                                                    //
ProductSchema = new SimpleSchema({                                                                                  // 11
    name: {                                                                                                         // 12
        type: String,                                                                                               // 13
        label: "Name"                                                                                               // 14
    },                                                                                                              // 12
                                                                                                                    //
    category: {                                                                                                     // 17
        type: String,                                                                                               // 18
        label: "category"                                                                                           // 19
    },                                                                                                              // 17
                                                                                                                    //
    vendor: {                                                                                                       // 22
        type: String,                                                                                               // 23
        label: "Vendor",                                                                                            // 24
        autoValue: function () {                                                                                    // 25
            function autoValue() {                                                                                  // 25
                return this.userId;                                                                                 // 26
            }                                                                                                       // 27
                                                                                                                    //
            return autoValue;                                                                                       // 25
        }(),                                                                                                        // 25
        autoform: {                                                                                                 // 28
            type: "hidden"                                                                                          // 29
        }                                                                                                           // 28
    },                                                                                                              // 22
                                                                                                                    //
    createdAt: {                                                                                                    // 33
        type: Date,                                                                                                 // 34
        label: "Created At",                                                                                        // 35
        autoValue: function () {                                                                                    // 36
            function autoValue() {                                                                                  // 36
                return new Date();                                                                                  // 37
            }                                                                                                       // 38
                                                                                                                    //
            return autoValue;                                                                                       // 36
        }(),                                                                                                        // 36
        autoform: {                                                                                                 // 39
            type: "hidden"                                                                                          // 40
        }                                                                                                           // 39
    },                                                                                                              // 33
                                                                                                                    //
    grade: {                                                                                                        // 44
        type: String,                                                                                               // 45
        label: "Grade"                                                                                              // 46
    },                                                                                                              // 44
                                                                                                                    //
    price: {                                                                                                        // 49
        type: Number,                                                                                               // 50
        label: "Price"                                                                                              // 51
    },                                                                                                              // 49
                                                                                                                    //
    size: {                                                                                                         // 54
        type: String,                                                                                               // 55
        label: "Size",                                                                                              // 56
        optional: true                                                                                              // 57
    },                                                                                                              // 54
                                                                                                                    //
    age: {                                                                                                          // 60
        type: Number,                                                                                               // 61
        label: "Age",                                                                                               // 62
        optional: true                                                                                              // 63
    }                                                                                                               // 60
                                                                                                                    //
});                                                                                                                 // 11
                                                                                                                    //
// document: {                                                                                                      //
//  type: Array,                                                                                                    //
//  label: "Upload Documents",                                                                                      //
//  optional: true                                                                                                  //
// },                                                                                                               //
                                                                                                                    //
Products.attachSchema(ProductSchema);                                                                               // 74
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"route":{"route.js":["meteor/accounts-base",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/route/route.js                                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                            // 1
                                                                                                                    //
Router.route('/', function () {                                                                                     // 3
    this.render('home');                                                                                            // 4
    name: 'home';                                                                                                   // 5
});                                                                                                                 // 6
                                                                                                                    //
Router.route('/register', function () {                                                                             // 8
    this.render('register');                                                                                        // 9
}, {                                                                                                                // 10
    name: 'register'                                                                                                // 11
});                                                                                                                 // 10
                                                                                                                    //
Router.route('/login', function () {                                                                                // 14
    this.render('login');                                                                                           // 15
}, {                                                                                                                // 16
    name: 'login'                                                                                                   // 17
});                                                                                                                 // 16
                                                                                                                    //
Router.route('/search', function () {                                                                               // 20
    this.render('search');                                                                                          // 21
}, {                                                                                                                // 22
    name: 'search'                                                                                                  // 23
});                                                                                                                 // 22
                                                                                                                    //
Router.route('/dashboard', function () {                                                                            // 26
    this.render('dashboard');                                                                                       // 27
}, {                                                                                                                // 28
    name: 'dashboard'                                                                                               // 29
});                                                                                                                 // 28
                                                                                                                    //
Router.route('/upload', function () {                                                                               // 32
    this.render('upload');                                                                                          // 33
}, {                                                                                                                // 34
    name: 'upload'                                                                                                  // 35
});                                                                                                                 // 34
                                                                                                                    //
Router.configure({                                                                                                  // 38
    layoutTemplate: 'main'                                                                                          // 39
}, {                                                                                                                // 38
    name: 'main'                                                                                                    // 41
});                                                                                                                 // 40
                                                                                                                    //
Router.configure({                                                                                                  // 44
    notFoundTemplate: 'notFound'                                                                                    // 45
});                                                                                                                 // 44
                                                                                                                    //
Router.route('/reset', function () {                                                                                // 48
    this.render('resetPass');                                                                                       // 49
}, {                                                                                                                // 50
    name: 'reset'                                                                                                   // 51
});                                                                                                                 // 50
                                                                                                                    //
Router.route('/forgot', function () {                                                                               // 54
    this.render('forgotPass');                                                                                      // 55
}, {                                                                                                                // 56
    name: 'forgot'                                                                                                  // 57
});                                                                                                                 // 56
                                                                                                                    //
Router.route('/verify-email/:token', function () {                                                                  // 60
    var token = this.params.token;                                                                                  // 61
    console.log(token);                                                                                             // 62
    Accounts.verifyEmail(token, function (error) {                                                                  // 63
        if (error) {                                                                                                // 64
            console.log('Error in verifying email');                                                                // 65
        } else {                                                                                                    // 66
            console.log('Email verified');                                                                          // 67
        }                                                                                                           // 68
    });                                                                                                             // 69
});                                                                                                                 // 70
                                                                                                                    //
Router.route('/verify-phone', function () {                                                                         // 72
    this.render('phoneVerif');                                                                                      // 73
}, {                                                                                                                // 74
    name: 'phoneVerifRoute'                                                                                         // 75
});                                                                                                                 // 74
                                                                                                                    //
Router.route('/marketplaceUser', function () {                                                                      // 78
    this.render('marketplaceUser');                                                                                 // 79
}, {                                                                                                                // 80
    name: 'marketplaceUser'                                                                                         // 81
});                                                                                                                 // 80
                                                                                                                    //
Router.route('/productViewUser', function () {                                                                      // 85
    this.render('productViewUser');                                                                                 // 86
}, {                                                                                                                // 87
    name: 'productViewUser'                                                                                         // 88
});                                                                                                                 // 87
                                                                                                                    //
// FlowRouter.route('/product/:id', {                                                                               //
//     name: 'product-view',                                                                                        //
//     action() {                                                                                                   //
//         Blazelayout.render('Mainlayout', {main: 'productView'});                                                 //
//     }                                                                                                            //
// });                                                                                                              //
                                                                                                                    //
Router.route('/reverseauction', function () {                                                                       // 98
    this.render('reverseAuction');                                                                                  // 99
}, {                                                                                                                // 100
    name: 'reverseAuction'                                                                                          // 101
});                                                                                                                 // 100
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.main.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return [ HTML.SCRIPT({                                                                                            // 4
    src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"                                        // 5
  }), HTML.Raw("\n<!-- Latest compiled and minified JavaScript -->\n"), HTML.SCRIPT({                               // 6
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js",                                     // 7
    integrity: "sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS",                           // 8
    crossorigin: "anonymous"                                                                                        // 9
  }) ];                                                                                                             // 10
}));                                                                                                                // 11
Meteor.startup(Template.body.renderToDocument);                                                                     // 12
                                                                                                                    // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"product.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/product.js                                                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor","meteor/templating","../imports/route/route.js","../imports/ui/body.js","../imports/ui/register.js","../imports/api/userdata.js","./product.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                                         // 1
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});                               // 2
                                                                                                                    //
module.import('../imports/route/route.js');                                                                         // 4
module.import('../imports/ui/body.js');                                                                             // 5
module.import('../imports/ui/register.js');                                                                         // 6
module.import('../imports/api/userdata.js');                                                                        // 7
                                                                                                                    //
module.import('./product.js');                                                                                      // 9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/product.js");
require("./client/main.js");