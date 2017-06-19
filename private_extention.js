$(document).ready(function() {

    var url = window.location.href;

    var plugin = {
        init: function() {

        },

        zhihu: function() {
            $(".name").eq(0).fadeTo('quick', 0);
            $('.QuestionHeader-title').eq(0).fadeTo('quick', 0);
            $('.AnswerAdd-header').find('.AuthorInfo-name').fadeTo('quick',0);
        },

        mozilla: function() {
            var $cn = $('#languages-menu-submenu').find('a[title="Chinese (Simplified)"]');
            if ($cn.length > 0) {
                $cn[0].click();
            }
        },




    };



    /**
     * for Zhihu hide Username
     */
    if (url.match('zhihu')) {
        plugin.zhihu();
    }

    /**
     * for Mozilla show Chinese Page
     */
    if (url.match('mozilla')) {
        plugin.mozilla();
    }






});
