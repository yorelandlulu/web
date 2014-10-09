/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 9/1/14
 * Time: 2:01 PM
 * To change this template use File | Settings | File Templates.
 */
//var domain_name = "web.shanghai3fx.com";
var domain_name = "221.133.227.242";
function recordCookie(key, value){
    $.cookie(key, value, {expires:7, path:'/',domain:domain_name,secure:false});
}
function redirect(cid){
    $.ajax({
        url: 'newscategory/redirect.do',
        data: {cid: cid},
        dataType: 'json',
        async: false,
        type: 'POST',
        success: function (d) {
            if (d.viewarticle == 1){
                var isRedirectByView = $.cookie('isRedirectByView');
                if(isRedirectByView!=null && isRedirectByView==1){
                    recordCookie('oldnewsid', $.cookie('newsid'));
                }else{
                    recordCookie('oldnewsid', null);
                }
                recordCookie('newsid', d.articleid);
                window.location.href = "viewArticle.html";
            }
            else {
                recordCookie('oldnewsid', null);
                recordCookie('categoryid', d.id);
                window.location.href = "viewList.html";
            }
        }
    });
}