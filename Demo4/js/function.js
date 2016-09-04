/*设置元素铺满*/
    $('.m6-layout').css('height',window.innerHeight+'px');
/*设置元素铺满 end*/


/*点击切换咨询选择*/
    $('.sel').on('touchstart',function (e) {
        var target=e.target;
        if(target.nodeName.toLowerCase()=='i'){
            for(var i=0;i<3;i++){
                $('.sel i').eq(i).attr('class','nochecked');
            }
            target.className='checked';
        }
    });
/*点击切换咨询选择 end*/

