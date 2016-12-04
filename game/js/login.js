jQuery(document).ready(function($){

	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$main_nav = $('.main_nav');

	//µ¯³ö´°¿Ú
	$main_nav.on('click', function(event){

		if( $(event.target).is($main_nav) ) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('is-visible');
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('is-visible');
			//show modal layer
			$form_modal.addClass('is-visible');	
			//show the selected form
			( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
		}

	});

	//¹Ø±Õµ¯³ö´°¿Ú
	$('.cd-user-modal').on('click', function(event){
     // debugger
		// if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {

		// 	$form_modal.removeClass('is-visible');
		// }	
	});
	//Ê¹ÓÃEsc¼ü¹Ø±Õµ¯³ö´°¿Ú
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });

	//ÇÐ»»±íµ¥
	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
	});

	function login_selected(){
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}
 //  // 登录
 //  $('.loginBt').on('click',function(){
 //  	Bmob.initialize("a5dd39738049405356af8d49edc68db8", "da77db7c3cf743337e2b388d640c7104");
	//   var user = new Bmob.User();
 //  	Bmob.User.logIn($('#signin-username')[0].value, $('#signin-password')[0].value, {
	//   success: function(user) {
	//   	$.cookie('game_user', $('#signin-username')[0].value, { expires: 7, path: '/' })
	//   	$.cookie('game_user')
	//   	debugger
 //      setInterval(window.location.href='./index.html',1)
	//   },
	//   error: function(user, error) {
	//     alert("登录失败:"+error.message)
	//   }
	// });
 //  })
 //  // 注册
 //  $('.loginUpBt').on('click',function(){
 //  	Bmob.initialize("a5dd39738049405356af8d49edc68db8", "da77db7c3cf743337e2b388d640c7104");
	//   var user = new Bmob.User();
 //  	// 邮箱验证
 //  	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//  if (filter.test($('#signup-email')[0].value)) {
	//  	user.set("username", $('#signup-username')[0].value);
 //    user.set("email", $('#signup-email')[0].value);
 //    user.set("password", $('#signup-password')[0].value);
 //    user.signUp(null, {
 //      success: function(user) {
 //        alert('恭喜您！注册成功，开始游戏吧')
 //        // 设置cookie 7天失效
 //        $.cookie('game_user', $('#signup-username')[0].value, { expires: 7, path: '/' })
 //        setInterval(window.location.href='./index.html',1)
 //      },
 //      error: function(user, error) {
 //        alert("注册失败: " + error.code + " " + error.message);
 //      }
 //    });
	//  }
 //  })
});
