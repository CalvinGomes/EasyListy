// Hide all the other sections initially
$('#select-category').hide();
$('#select-items').hide();
$('#filesPresent').hide();
$('#itemsPresent').hide();

// Load JS when the document is ready
$('document').ready(function () {

    /* MAINTAIN PAGES TO DISPLAY */

    // Display selection page from frontPage
    $('.create-button').on("click", function () {
        $('#front-page').removeClass("animated fadeInLeft");
        $('#select-items').addClass("animated fadeInRight");
        $('#front-page').hide();
        $('#select-items').show();
    });

    // Go back to the front page from selection page
    $('.previous-frontPage').on("click", function () {
        $('#front-page').addClass("animated fadeInLeft");
        $('#front-page').show();
        $('#select-items').hide();
    });

    // Go back to the front page from files present page    
    $('.previous-firstPage').on("click", function () {
        $('#front-page').addClass("animated fadeInLeft");
        $('#front-page').show();
        $('#filesPresent').hide();
    });

    // Go back to the files present page from items present page    
    $('.previous-filesPage').on("click", function () {
        $('#filesPresent').removeClass("animated fadeInRight");
        $('#filesPresent').addClass("animated fadeInLeft");
        $('#filesPresent').show();
        $('#itemsPresent').hide();
    });

    /* ITEM SELECTION */

    // Variables needed to be global
    var item;
    var together;
    var complete;
    var products = [];
    var tempProducts = [];
    var documentFragment = $(document.createDocumentFragment());

    // Autocomplete part
    $('input.autocomplete').autocomplete({
        data: totalItems,
        limit: 4,
        onAutocomplete: function selectQuantity(data) {

            // Variables to maintain data and slider values from "data.js"
            var temp = data;
            var quantityTypeId = identity - 1;
            var quantityType = quantities[quantityTypeId];
            var minimum = sliderLow[quantityTypeId];
            var maximum = sliderHigh[quantityTypeId];
            var steps = sliderSteps[quantityTypeId];
            var flag;

            // Prevent reselection of items
            for (var i = 0; i < tempProducts.length; i++) {
                if (temp == tempProducts[i]) {
                    flag = 0;
                    break;
                } else {
                    flag = 1;
                }
            }

            // Display "Already Present" Message
            if (flag == 0) {
                $('#info1').click(function () {
                    $('#info1').removeClass("hide");
                    $('#info1').addClass("show");
                    setTimeout(function () {
                        $('#info1').removeClass("show");
                        $('#info1').addClass("hide");
                    }, 3000);
                });
                $('#info1').trigger("click");
            }
            else {

                // Add items to the screen
                var card =
                    $(
                        "<li id=\"" +
                        temp +
                        "s" +
                        "\">" +
                        "<div name=\"" +
                        temp +
                        "\" class= \"lists btn collapsible-header waves-effect waves-light\">" +
                        "<div class= \"names\">" +
                        temp +
                        "</div>" +
                        "<span id=\"" +
                        temp +
                        "\" class=\"badge\"></span>" +
                        "</div>" +
                        "<div class=\"collapsible-body\">" +
                        "<form class=\"" +
                        temp +
                        "\">" +
                        "<div class=\"range-field\">" +
                        quantityType +
                        "<input name=\"" +
                        quantityType +
                        "\" class=\"update-badge\" type=\"range\" id=\"slider\" min=\"" +
                        minimum +
                        "\" max=\"" +
                        maximum +
                        "\" step=\"" +
                        steps +
                        "\" />" +
                        "</div>" +
                        "</form>" +
                        "</div>" +
                        "</li>"
                    );
                documentFragment.append(card);
                $('#toBuyList').append(documentFragment);
                tempProducts.push(temp);

                // Disable the "Save (enter name)" button because quantity for this item is not selected
                $('#getName').addClass("disabled");
            }

            /* QUANTITY SELECTION */

            // Select id of item to display badge (to show selected quantity) 
            $('.lists').off("click").on("click", function () {
                var badgeSelect = $(this).attr('name');
                item = "#" + badgeSelect;
            });

            // Update badge value (quantity selected)
            $('.update-badge').off("change").on("change", function (e) {
                var badgeName = $(this).attr('name');
                var badgeValue = $(this).val();

                // If the quantity is selected as zero...
                if (badgeValue == 0) {

                    // 1. Remove the item from the screen                    
                    var removeItem = $(this).parent().parent().attr('class');
                    $(this).closest('li').remove();

                    // 2. Remove the item from the items toBuy array
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].indexOf(removeItem) > -1) {
                            products[i] = removeItem;
                            products.splice(i, 1);
                            break;
                        }
                    }

                    // 3. Remove the item from the items displayed on the screen array
                    for (var i = 0; i < tempProducts.length; i++) {
                        if (tempProducts[i].indexOf(removeItem) > -1) {
                            tempProducts[i] = removeItem;
                            tempProducts.splice(i, 1);
                            break;
                        }
                    }

                }
                // If the quantity is not selected as zero...                
                else {

                    // Display the badge on the screen
                    complete = badgeValue + ' ' + badgeName;
                    $(this).parent().parent().parent().parent().children().children().closest('span').addClass("change");
                    $(this).parent().parent().parent().parent().children().children().closest('span').text(complete);

                    var items = $(this).parent().parent().attr('class');
                    var itemQuantity = $(this).val();
                    together = items + " " + complete;

                    // Check if item already present in toBuy array to update it
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].indexOf(items) > -1) {
                            products.splice(i, 1);
                            break;
                        }
                    }
                    products.push(together);
                }
            });
        }
    });

    /* SAVE THE SELECTED ITEMS (EXTERNAL) */
    
    // Variables needed to be global 
    var prod;
    var fileName;

    // Enable the "Save (enter name)" button only if the quantity of all the items are selected
    $('#select-items').on("change", function () {
        if (products.length > 0 && tempProducts.length > 0 && products.length == tempProducts.length) {
            $('#getName').removeClass("disabled");
        } else {
            $('#getName').addClass("disabled");
        }
    });

    // Trigger modal (to get the file name) while clicking the "Save (enter name)" button
    $('.modal').modal();

    // Check if filename is entered to enable the "Save (Final save)" button
    $('#file').on("keyup", function () {
        fileName = $('#file').val();
        if (fileName != '') {
            $('#save').removeClass("disabled");
        } else {
            $('#save').addClass("disabled");
        }
    });

    /* SAVE THE SELECTED ITEMS (INTERNAL) */

    var flags = 0;
    $('#save').on("click", function (e) {

        var filesPresent = JSON.parse(localStorage.getItem("listOne"));
        console.log(filesPresent);
        for (var i = 0; i<filesPresent.length; i++) {
            if (fileName == filesPresent[i]){
                flags = 1;
                break;
            }
        }

        if (flags == 0) {

            $('#save').addClass("disabled");
            $('#getName').addClass("disabled");
            var tempArray = JSON.parse(localStorage.getItem("listOne"));

            // Check if lists are already created
            if (tempArray == null) {
                tempArray = [];
                tempArray.push(fileName);

            } else {
                tempArray.push(fileName);
            }

            // Converting the array into string (to store in localStorage)
            var files = JSON.stringify(tempArray);
            var prod = JSON.stringify(products);

            // Check if there is localStorage support
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("listOne", files);
                localStorage.setItem(fileName, prod);
                products = [];
                tempProducts = [];

                // Display "File Saved" message
                $('#info2').click(function () {
                    $('#info2').removeClass("hide");
                    $('#info2').addClass("show");
                    setTimeout(function () {
                        $('#info2').removeClass("show");
                        $('#info2').addClass("hide");
                    }, 3000);
                });
                $('#info2').trigger("click");

            } else {
                window.alert("No support !!!");
            }

            // Remove the selected items from the screen
            $('#toBuyList').empty();
        }
        else if (flags == 1){
            // Display "No file present" message
            $('#info3').click(function () {
                $('#info4').removeClass("hide");
                $('#info4').addClass("show");
                setTimeout(function () {
                    $('#info4').removeClass("show");
                    $('#info4').addClass("hide");
                }, 3000);
            });
            $('#info4').trigger("click");
        }
    });




    var fileList = [];
    var toPop;
    $('.open-button').on("click", function () {

        fileList = JSON.parse(localStorage.getItem("listOne"));
        if (fileList != 0) {
            $('#filesPresent').addClass("animated fadeInRight");
            $('#front-page').hide();
            $('#filesPresent').show();

            console.log(fileList);
            $('#toSelect').empty();
            for (var i = 0; i < fileList.length; i++) {
                var listButton = $(
                    "<div id=\"" +
                    fileList[i] +
                    "\"" +
                    "class=" +
                    "\"btn lists collapsible-header waves-effect waves-light openList\"" +
                    ">" +
                    fileList[i] +
                    "</div>"
                );
                documentFragment.append(listButton);
                $('#toSelect').append(documentFragment);
            }
        } else {

            // Display "No file present" message
            $('#info3').click(function () {
                $('#info3').removeClass("hide");
                $('#info3').addClass("show");
                setTimeout(function () {
                    $('#info3').removeClass("show");
                    $('#info3').addClass("hide");
                }, 3000);
            });
            $('#info3').trigger("click");
        }

        $('.openList').off("click").on("click", function () {
            $('#itemsPresent').addClass("animated fadeInRight");
            $('#filesPresent').hide();
            $('#itemsPresent').show();

            $('#toBuy').empty();

            var qu = [];
            var it = [];
            var tempFile = $(this).attr('id');
            toPop = tempFile;
            var cookieRes = JSON.parse(localStorage.getItem(tempFile));
            console.log(cookieRes);

            for (var i = 0; i < cookieRes.length; i++) {
                var res = cookieRes[i].split(" ");

                if (res.length == 5) {
                    var itTemp = toTitleCase(res[0]) + " " + toTitleCase(res[1]) + " " + toTitleCase(res[2]);
                    var quTemp = res[3] + " " + res[4];

                } else if (res.length == 4) {
                    var itTemp = toTitleCase(res[0]) + " " + toTitleCase(res[1]);
                    var quTemp = res[2] + " " + res[3];

                } else if (res.length == 3) {
                    var itTemp = toTitleCase(res[0]);
                    var quTemp = res[1] + " " + res[2];
                }

                it.push(itTemp);
                qu.push(quTemp);
            }
            console.log(it);
            console.log(qu);

            for (var i = 0; i < it.length; i++) {
                var itemsToBuy = $(
                    "<div class=" +
                    "\"btn smaller lists collapsible-header waves-effect waves-light\"" +
                    ">" +
                    it[i] +
                    "<span class=" +
                    "\"badge change\"" +
                    ">" +
                    qu[i] +
                    "</span>" +
                    "</div>"
                );
                documentFragment.append(itemsToBuy);
                $('#toBuy').append(documentFragment);
            }
        });
    });



    $('.delete').on("click", function () {
        $('#filesPresent').removeClass("animated fadeInRight");
        $('#filesPresent').addClass("animated fadeInLeft");

        console.log(toPop);
        fileList.splice(fileList.indexOf(toPop), 1);
        console.log(fileList);

        var updated = JSON.stringify(fileList);
        localStorage.setItem("listOne", updated)

        $('#itemsPresent').hide();
        if (fileList == 0) {
            $('#front-page').addClass("animated fadeInLeft");
            $('#front-page').show();
        } else {
            $('.open-button').trigger("click");
            $('#filesPresent').show();
        }
    });

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function (match) {
            return match.toUpperCase();
        });
    }
});




// <form class="col s6">
//         <div class="input-field col s6">
//           <input placeholder="0" id="first_name" type="text" class="validate">
//           <label for="first_name">Quantity</label>
//     </div>
// </form>

// <div class="input-field col s6">
//     <select>
//       <option value="1">Option 1</option>
//       <option value="2">Option 2</option>
//       <option value="3">Option 3</option>
//     </select>
//     <label>Units</label>
//   </div>


//                         <li id= "temps"> 
//                             <div name= "temp" 
//                          class= lists btn collapsible-header waves-effect waves-light> 
//                         <div class= names> 
//                         temp 
//                         </div> 
//                         <span id= 
//                         temp 
//                          class=badge></span> 
//                         </div> 
//                         <div class=collapsible-body> 
//                         <form class= 
//                         temp 
//                         > 
//                         <div class=range-field> 
//                         quantityType 
//                         <input name= 
//                         quantityType 
//                          class=update-badge type=range id=slider min= 
//                         minimum 
//                          max= 
//                         maximum 
//                          step= 
//                         steps 
//                          /> 
//                         </div> 
//                         </form> 
//                         </div> 
//                         </li>