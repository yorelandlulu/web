var keyword = $.cookie('search');
//var keyword = "国";
search(keyword,1);
function gotolist(cid){
    recordCookie('categoryid',cid);
    window.location.href = "viewList.html";
}

function toggleLeft(id){
    $("#container .center_contect .left_news .left_menu .center ul li ul li").addClass("hidden");
    $("#menuli"+id).children("ul").children("li").removeClass("hidden");
}

function gotosearch(id){
    recordCookie('search',id);
    window.location.href = "searchList.html";
}

function search(cid, pageno){
    $.ajax({
        url:'../news/search.do',
        dataType : 'json',
        data : {keyword: cid, page: pageno, rows: 10},
        type : 'POST',
        success: function (data){
            $(".news_list ul").empty();
            for(var i in data.rows){
                $(".news_list ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+data.rows[i].title+"</a><span>"+data.rows[i].posttime+"</span></li>");
            }
            $(".pages span").empty();
            if(pageno>1)
                $(".btn_prev").attr("href","javascript:search('"+cid+"',"+(pageno-1)+")");
            if(pageno<(data.total/10-1))
                $(".btn_next").attr("href","javascript:search('"+cid+"',"+(pageno+1)+")");
            for(var i=0; i <data.total/10; i++ ){
                if(i==pageno-1){
                    $(".pages span").append("<a class='on' href=javascript:search('"+cid+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
                else{
                    $(".pages span").append("<a href=javascript:javascript:search('"+cid+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
            }
        }
    });
}