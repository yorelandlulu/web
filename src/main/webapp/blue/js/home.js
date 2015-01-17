
function gotosearch(id){
    recordCookie('search',id);
    window.location.href = "searchList.html";
}
loadcontent();
function trimtitle(str){
    if(str!=null && str.length>19)
        return str.substring(0,18)+"...";
    else
        return str;
}
function loadcontent(){
//校园动态 232
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: 232, page: 1, rows: 6},
        type : 'POST',
        success: function (data){
            $(".campus ul").empty();
            for(var i in data.rows){
                $(".campus ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+trimtitle(data.rows[i].title)+"</a><span>"+data.rows[i].posttime+"</span></li>");
            }
        }
    });
//主体班次 47
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: 47, page: 1, rows: 10},
        type : 'POST',
        success: function (data){
            $(".classes #fragment-1 ul").empty();
            for(var i in data.rows){
                $(".classes #fragment-1 ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+trimtitle(data.rows[i].title)+"</a></li>");
            }
        }
    });
//特色培训 48
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: 48, page: 1, rows: 10},
        type : 'POST',
        success: function (data){
            $(".classes #fragment-2 ul").empty();
            for(var i in data.rows){
                $(".classes #fragment-2 ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+trimtitle(data.rows[i].title)+"</a></li>");
            }
        }
    });
//通知公告 12
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: 12, page: 1, rows: 5},
        type : 'POST',
        success: function (data){
            $("#newslist ul").empty();
            for(var i in data.rows){
                $("#newslist ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+trimtitle(data.rows[i].title)+"</a></li>");
            }
        }
    });
//要闻回放 31
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: 31, page: 1, rows: 10},
        type : 'POST',
        success: function (data){
            $("#recall ul").empty();
            for(var i in data.rows){
                $("#recall ul").append("<li><a target='_blank'' href='javascript:gotoview("+data.rows[i].id+")'>"+trimtitle(data.rows[i].title)+"</a></li>");
            }
        }
    });
}


function gotolist(cid) {
    recordCookie('categoryid', cid);
    window.location.href = "viewList.html";
}
function gotoview(nid) {
    recordCookie('newsid', nid);
    window.location.href = "viewArticle.html";
}