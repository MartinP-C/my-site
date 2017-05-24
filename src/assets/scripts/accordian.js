import $ from './lib/jquery-3.2.1';

$(document).ready(()=>{
    let $accordians = $('.js-accordian');
    
    $accordians.each((ind, elem) => {
        const $elem = $(elem);
        
        $elem.addClass('is-collapsed');

        $elem.on('click', function () {
            const $target = $(this);
            $target.toggleClass('is-collapsed');
        })
    });
})