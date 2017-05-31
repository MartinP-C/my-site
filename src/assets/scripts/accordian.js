import $ from './lib/jquery-3.2.1';

$(document).ready(() => {
    let $accordians = $('.js-accordian');
    
    $accordians.each((index, element) => {
        const $element = $(element);
        
        $element.addClass('is-collapsed');

        $element.on('click touchend', function () {
            const $target = $(this);
            $target.toggleClass('is-collapsed');
        });
    });
});