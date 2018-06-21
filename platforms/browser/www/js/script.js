$('#select-category').hide();
$('.ab').hide();
$('#select-quantity').hide();

var isToggled = 0;

$('document').ready(function () {

    //To display category
    $('.create-button').on("click", function () {
        $('#front-page').hide();
        $('#select-category').show();
    });

    //To display corresponding category's items
    $('.category').on("click", function () {
        var categoryName = "." + this.name;
        $('#select-category').hide();
        $(categoryName).toggle();
    });

    //To update quantity badge
    var item;
    $('.lists').on("click", function(){
        var badgeSelect = $(this).attr('name');
        item = "#" + badgeSelect;
    });
    
    $('.update-badge').on("click", function(){
        var badgeName = $(this).attr('name');
        var badgeValue = $(this).attr('value');
        var complete = badgeValue + ' ' + badgeName;
        $(item).text(complete);
        $(item).addClass('change');
    });

    //To go to the front page
    $('.previous-frontPage').on("click", function () {
        $('#front-page').show();
        $('#select-category').hide();
    });






     //To display saved files
     $('.open-button').on("click", function () {
        $('#front-page').hide();
    });
    

    // $('.previous-selectCategory').on("click", function () {
    //     $('#select-category').show();
    //     $('#select-items').hide();
    // });

    // $('.submit-selectItems').on("click", function () {
    //     $('#select-category').hide();
    //     $('#select-items').show();
    // });

    // var catClick = [];
    // var name;
    // $('.select-cat-btn').on("click", function () {
    // var value = this.value;
    // name = this.name;
    // if (catClicks[value] == undefined) {
    //     catClicks[value] = 0;
    // }
    // if (catClicks[value] == 0) {
    //     catClicks[value] = 1;
    //     names[value] = this.name;
    // } else {
    //     catClicks[value] = 0;
    //     names[value] = 0;
    // }
    // console.log(name);
    // });

});