/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 9/1/14
 * Time: 2:01 PM
 * To change this template use File | Settings | File Templates.
 */
var domain_name = "web.shanghai3fx.com";
function recordCookie(key, value){
    $.cookie(key, value, {expires:7, path:'/',domain:domain_name,secure:false});
}
