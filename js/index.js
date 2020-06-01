$(function(){
	//初始化fullPage组件
	$('.container').fullpage({//配置参数
		//设置背景色
		sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		//设置内容，默认垂直居中
		verticalCentered:false,
		//设置导航圆点
		navigation:true,
		afterLoad:function(link,index){
			$('.section').eq(index-1).addClass('current');
		},
		// 页面加载完毕或者页面渲染完毕后点击才生效
		afterRender:function(){
			// 点击更多,滑动到下一页
			//console.log($(this));发现当前没有moveSectionDown()
			//可以通过$.fn来追加一个方法，叫做插件方法
			$('.more').on('click',function(){
				$.fn.fullpage.moveSectionDown();
			});
			$('.screen04 .car').on('transitionend',function(){
				$('.screen04 .address').show().find('img:last').fadeIn(1000);
				$('.screen04 .text').addClass('show');
			});
			
			// 屏幕8功能
			// 1.手跟着鼠标动
			$('.screen08').on('mousemove',function(e){
				//将鼠标的位置给手
				$(this).find('.hand').css({
					left:e.clientX-300,
					top:e.clientY-150
				});
				//2.点击再来一次重置动画回到第一页
			}).find('.again').on('click',function(){
				//动画怎么来，1.加类current，leaved,show 
				$('.current,.leaved,.show').removeClass('current').removeClass('leaved').removeClass('show');
				//2.show() fadein()方法
				$('.content [style]').removeAttr('style');
				//跳回第一页
				$.fn.fullpage.moveTo(1,0);
			});
			
			
			
		},
		//离开2页面后到页面3要出发一个动画，沙发掉落
		onLeave:function(index,nextIndex){
			var currentSection=$('.section').eq(index-1);
			// 页面2到页面3
			if(index==2 && nextIndex==3){
				currentSection.addClass('leaved');
				// 页面3到页面4
			}else if(index==3 && nextIndex==4){
				currentSection.addClass('leaved');
			  // 页面5到页面6
			}else if(index==5 && nextIndex==6){
				currentSection.addClass('leaved');
				$('.screen06 .box').addClass('show');
			}//页面6到页面7
			else if(index==6 && nextIndex==7){
				$('.screen07 .star img').each(function(i,e){
					$(this).delay(i*0.5*1000).fadeIn();
				});
				$('.screen07 .good').addClass('show');
			}
		},
		//要使得沙发跟页面滚动速度一致，可以设置 scrollingSpeed  ，默认为700
		scrollingSpeed: 1000
	});
	

});