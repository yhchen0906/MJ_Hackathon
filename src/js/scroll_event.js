import fastdom from 'fastdom';





/**** Detect page position for navbar ****/
let last_active_btn = '';
$(window).scroll(function(){

    let active_btn = '';

    fastdom.measure(() => {
        let page_offset_top = $(window).scrollTop();
        $('.selection').each((ith, elem) => {
            const target_selector_id = '#' + $(elem).data('target');
            const target_offset_top = $(target_selector_id).offset().top;
            if( target_offset_top - 500 < page_offset_top )
                active_btn = elem;
        });
    });

    fastdom.mutate(() => {
        if( active_btn !== last_active_btn ) {
            $('.selection').removeClass('active');
            if( active_btn )
                $(active_btn).addClass('active');

            last_active_btn = active_btn;
        }
    });

});


/*****************************************/

/**** Schedule gear ****/
$(window).scroll(() => {



    let deg_1 = 0;
    let deg_2 = 0;

    fastdom.measure(() => {
        deg_1 = $(window).scrollTop() / -10;
        deg_2 = $(window).scrollTop() / 3;
    });

    fastdom.mutate(() => {
        $('#sche_gear_1').css({
            transform: 'translate3d(-30%, 0, 0) rotate(' + deg_1 + 'deg)',
        });
        $('#sche_gear_2').css({
            transform: 'translate3d(30%, 0, 0) rotate(' + deg_2 + 'deg)',
        })
    });

});
/***********************/
