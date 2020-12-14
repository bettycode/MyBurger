$(function(){
    $(".create-form").on("submit",function(event){
        event.preventDefault();

        var newB = {
            burger_name: $("#nb").val().trim(),
            devoured: 0
        }
        $.ajax("/api/burgers",{
            type: "POST",
            data: newB
        }).then(
            function(){
            console.log("Burger Added !");
            //relode the page
            location.reload();
        })
    })

    $(".eatB").on("click",function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var d = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: d
        }).then(function(){
            console.log("devoured!");
            location.reload();
        });
    });

    $("#dbtn").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(
            location.reload()
        );
    });
});