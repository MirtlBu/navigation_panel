$(document).ready(function(){
    var foo = $(window);
    function update(){
        var pos = foo.scrollTop();
        $(".stufffar").css("top", (pos/4.5 + 230) + "px");
        $(".stuffclose").css("top", (pos/2 + 230) + "px");
        if(pos === 2572){
            $(".front").css("background-position", -215 + "px")
        }
        else{
            $(".front").css("background-position", 0 + "px")
        }
    }
    function remImportant(e){
        $("body").removeClass("fuckchrome");
        e.stopPropagation();
    }
    $(window).scroll(function(){
        update();
    });
    $("li").click(function(){
        remImportant();
    });

})
