
/*******************move position box****************************/
function moveExperience(exp) {
    exp.insertBefore(".field2 .education");
}
function moveProfile(pro) {
    pro.removeClass('offset1');
    pro.addClass('offset0');
}
function moveEducation(edu) {
    edu.removeClass('offset1');
    edu.addClass('offset0');
}
function moveBlog(blog) {
    blog.insertAfter('.field2 .education');
    blog.removeClass('offset1');
    blog.addClass('offset0');
}
function moveContact(con) {
    con.removeClass('offset1');
    con.addClass('offset0');
}
function movePortfolio(por) {
    por.insertAfter('.field3 .contact');
    por.removeClass('offset1');
    por.addClass('offset0');
}
function showSlider(slider, menu, row_menu, status) {

    slider.show();
    status = false;
    menu.addClass('left_content_active');
    row_menu.addClass('info_active');

    return status;

}
/*******************return position box****************************/
function returnExperience(exp) {
    exp.insertAfter(".resume");
}
function returnProfile(pro) {
    pro.removeClass('offset0');
    pro.addClass('offset1');
}
function returnEducation(edu) {
    edu.removeClass('offset0');
    edu.addClass('offset1');
}
function returnBlog(blog) {
    blog.insertAfter('.field3 .social');
    blog.removeClass('offset0');
    blog.addClass('offset1');
}
function returnContact(con) {
    con.removeClass('offset0');
    con.addClass('offset1');
}
function returnPortfolio(por) {
    por.insertAfter('.field2 .education');
    por.removeClass('offset0');
    por.addClass('offset1');
}
function hideSlider(slider, menu, row_menu, status) {

    slider.hide();
    status = true;
    menu.removeClass('left_content_active');
    row_menu.removeClass('info_active');

    return status;

}
/**************move social box***************/
function moveSocialContact(con) {
    con.insertAfter('.field1 .profile');
    con.removeClass('offset1');
    con.addClass('offset0');
}
function moveSocialPortfolio(por) {
    por.insertAfter('.field1 .contact');
    por.removeClass('offset1');
    por.addClass('offset0');
}
function showSocialBox(box, menu, row_menu, status, content) {


    status = false;
    if(content.hasClass('home_one')){

        jQuery('.field3 .blog').addClass('social_hide');
        jQuery('.field3 .contact').addClass('social_hide');
        jQuery('.field3 .photo').addClass('social_hide');
        box.removeClass('social_hide');

    }
    if(content.hasClass('home_two')){
        jQuery('.field3 .contact').addClass('social_hide');
        jQuery('.field3 .portfolio').addClass('social_hide');
        box.removeClass('social_hide');
    }
    if(content.hasClass('home_tree')){
        jQuery('.field3 .blog').addClass('social_hide');
        box.removeClass('social_hide');

    }


    return status;

}

/*************return social boc****************/
function returnSocialContact(con) {
    con.insertAfter('.field3 .blog');
    con.removeClass('offset0');
    con.addClass('offset1');
}
function returnSocialPortfolio(por) {
    por.insertAfter('.field2 .education');
    por.removeClass('offset0');
    por.addClass('offset1');
}
function hideSocialBox(box, menu, row_menu, status ,content) {

    status = true;

    if(content.hasClass('home_one')){
        jQuery('.field3 .blog').removeClass('social_hide');
        jQuery('.field3 .contact').removeClass('social_hide');
        jQuery('.field3 .photo').removeClass('social_hide');
        box.addClass('social_hide');
    }
    if(content.hasClass('home_two')){
        jQuery('.field3 .contact').removeClass('social_hide');
        jQuery('.field3 .portfolio').removeClass('social_hide');
        box.addClass('social_hide');
    }
    if(content.hasClass('home_tree')){

        jQuery('.field3 .blog').removeClass('social_hide');
        box.addClass('social_hide');

    }

    return status;

}
jQuery(document).ready(function () {
    /*******************set elements****************************/
    var content = jQuery('#content');
    var exp = jQuery(".field1 .experience");
    var pro = jQuery(".field1 .profile");
    var edu = jQuery(".field2 .education");
    var blog = jQuery(".field3 .blog");
    var con = jQuery(".field3 .contact");
    var por = jQuery(".field2 .portfolio");
    var slider = jQuery(".wrap .right_content");
    var menu = jQuery(".wrap .left_content");
    var row_menu = jQuery(".left_content .info");
    var statusSlider = true;

    var box = jQuery(".field3 .social_box");
    var statusSocial = true;

    iniciarBinds(content,exp,pro,edu,blog,con,por,slider,menu,row_menu,statusSlider,box,statusSocial);

    var hash = window.location.hash.substr(1);
    var href = jQuery('header .content_menu .nav li a').each(function(){
        var href = jQuery(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            jQuery('#content').load(toLoad)
        }
    });

    jQuery('header .content_menu .nav li a').click(function(){

        var toLoad = jQuery(this).attr('href')+' #content';
        jQuery('#content').hide('fast',loadContent);
        jQuery('#load').remove();
        jQuery('#wrapper').append('<span id="load">LOADING...</span>');
        jQuery('#load').fadeIn('normal');
        window.location.hash = jQuery(this).attr('href').substr(0,jQuery(this).attr('href').length-5);
        function loadContent() {
            jQuery('#content').load(toLoad,'',function(){
                showNewContent();
                iniciarBinds(content,exp,pro,edu,blog,con,por,slider,menu,row_menu,statusSlider,box,statusSocial);
            })
        }
        function showNewContent() {
            jQuery('#content').show('normal',hideLoader());
        }
        function hideLoader() {
            jQuery('#load').fadeOut('normal');
        }
        return false;

    });



});

function iniciarBinds(content,exp,pro,edu,blog,con,por,slider,menu,row_menu,statusSlider,box,statusSocial) {

    /***********************active social buttons*************************/
    jQuery('.social ').click(function () {

        if (statusSocial) {

            statusSocial = showSocialBox(box, menu, row_menu, status, content);

        } else {

            statusSocial = hideSocialBox(box, menu, row_menu, status, content);

        }


        return false;
    });
    /***********************end active social buttons********************/

    /*******control sing plus in the tabs****************/
    jQuery(function () {
        jQuery('#myTab a:last').tab('show');
    });

    jQuery('.collapse').live('show', function(){

        jQuery(this).parent().find('a').addClass('open'); //add active state to button on open
        jQuery(this).parent().find('i').addClass('icon-minus'); //add active state to button on open
        jQuery(this).parent().find('i').removeClass('icon-plus');
    });

    jQuery('.collapse').live('hide', function(){

        jQuery(this).parent().find('a').removeClass('open'); //remove active state to button on close
        jQuery(this).parent().find('i').addClass('icon-plus');
        jQuery(this).parent().find('i').removeClass('icon-minus'); //remove active state to button on close
    });
    /*******end control sing plus in the tabs****************/

    /***********************run twitter*********************************/

            jQuery('#twitter').jtwt({

                username: "MustacheThemes",
                count: 2,
                image_size: 2

            });

    /******************end run twitter**********************************/

    /***************************portfolio filter******************************************/
        // clients filter scripts

    $clientsHolder = jQuery('#case_content'); // get original list
    $clientsClone = $clientsHolder.clone(); // clone it so it can be reverted back to

    jQuery('#menu_content a').click(function(e) {
        e.preventDefault(); // stop anchor tags from doing anything

        $filterClass = jQuery(this).attr('class'); // gets class from clicked anchor

        jQuery('#menu_content li').removeClass('active'); // remove active class from all filter links
        jQuery(this).parent().addClass('active'); // add active class to clicked link

        if($filterClass == 'all'){
            $filters = $clientsClone.find('li'); // get all li's from original cloned list and assign them to variable
        } else {
            $filters = $clientsClone.find('li[data-type~='+ $filterClass +']'); // get li's from ul.source with data-type containing $filterclass
        }

        $clientsHolder.quicksand($filters, {
            duration: 1000,
            adjustHeight: 'dynamic'
        }); // initiate quicksand fn
    });
    /***************************end portfolio filter***************************************/




}
