
var quantities = ["Grams","KGs","MLs","Litres","Packets","Nos"];
var sliderLow = [0,0,0,0,0,0];
var sliderHigh = [1000,10,1000,10,10,10];
var sliderSteps = [50,1,100,1,1,1];

var totalItems  = {
    //vegetables
    "Artichoke": {
        id: 1,
        // image: "../img/vegetables/artichoke.jpg"
    },
    "Banana raw": {
        id: 1,
        // image: "../img/vegetables/bananaraw.jpg"
    },
    "Beetroot": {
        id: 1,
        // image: "../img/vegetables/beetroot.jpg"
    },
    "Bitter gourd": {
        id: 1,
        // image: "../img/vegetables/bittergourd.jpg"
    },
    "Bottle gourd": {
        id: 1,
        // image: "../img/vegetables/bottlegourd.jpg"
    },
    "Broccoli": {
        id: 1,
        // image: "../img/vegetables/broccoli.jpg"
    },
    "Celery": {
        id: 1,
        // image: "../img/vegetables/celery.jpg"
    },
    "Cluster beans": {
        id: 1,
        // image: "../img/vegetables/clusterbeans.jpg"
    },
    "Coconut": {
        id: 1,
        // image: "../img/vegetables/coconut.jpg"
    },
    "Cucumber": {
        id: 1,
        // image: "../img/vegetables/cucumber.jpg"
    },
    "Curry Leaves": {
        id: 1,
        // image: "../img/vegetables/curryleaves.jpg"
    },
    "Cabbage": {
        id: 1,
        // image: "../img/vegetables/cabbage.jpg"
    },
    "Carrot": {
        id: 1,
        // image: "../img/vegetables/carrot.jpg"
    },
    "Cauliflower": {
        id: 1,
        // image: "../img/vegetables/cauliflower.jpg"
    },
    "Coriander Leaves": {
        id: 1,
        // image: "../img/vegetables/corianderleaves.jpg"
    },
    "Corn": {
        id: 1,
        // image: "../img/vegetables/corn.jpg"
    },
    "Drum Stick": {
        id: 1,
        // image: "../img/vegetables/drumstick.jpg"
    },
    "Eggplant": {
        id: 1,
        // image: "../img/vegetables/eggplant"
    },
    "Fenugreek": {
        id: 1,
        // image: "../img/vegetables/fenugreek"
    },
    "Goose berry": {
        id: 1,
        // image: "../img/vegetables/gooseBerry"
    },
    "Green chili": {
        id: 1,
        // image: "../img/vegetables/greenChili"
    },
    "Green mustard": {
        id: 1,
        // image: "../img/vegetables/greenMustard"
    },
    "Garlic": {
        id: 1,
        // image: "../img/vegetables/garlic"
    },
    "Ginger": {
        id: 1,
        // image: "../img/vegetables/ginger"
    },
    "Bell pepper": {
        id: 1,
        // image: "../img/vegetables/bellPepper"
    },
    "Spring onions": {
        id: 1,
        // image: "../img/vegetables/springOnion"
    },
    "Green peas": {
        id: 1,
        // image: "../img/vegetables/greenPeas"
    },
    "Beans": {
        id: 1,
        // image: "../img/vegetables/beans"
    },
    "Ladies finger": {
        id: 1,
        // image: "../img/vegetables/ladiesFinger"
    },
    "Lettuce leave": {
        id: 1,
        // image: "../img/vegetables/lettuceLeaves"
    },
    "Long beans": {
        id: 1,
        // image: "../img/vegetables/longBeans"
    },
    "Lemon": {
        id: 1,
        // image: "../img/vegetables/lemon"
    },
    "Green Mango": {
        id: 1,
        // image: "../img/vegetables/mangoRaw"
    },
    "Maize": {
        id: 1,
        // image: "../img/vegetables/maize"
    },
    "Mint": {
        id: 1,
        // image: "../img/vegetables/mint"
    },
    "Onion": {
        id: 1,
        // image: "../img/vegetables/onion"
    },
    "Pumpkin": {
        id: 1,
        // image: "../img/vegetables/pumpkin"
    },
    "Purple yam": {
        id: 1,
        // image: "../img/vegetables/purpleYam"
    },
    "Potato": {
        id: 1,
        // image: "../img/vegetables/potato"
    },
    "Raddish": {
        id: 1,
        // image: "../img/vegetables/raddish"
    },
    "Ridged gourd": {
        id: 1,
        // image: "../img/vegetables/ridgedGourd"
    },
    "Sweet potato": {
        id: 1,
        // image: "../img/vegetables/sweetPtato"
    },
    "Spinach": {
        id: 1,
        // image: "../img/vegetables/spinach"
    },
    "Tapioca": {
        id: 1,
        // image: "../img/vegetables/tapioca"
    },
    "Turnip": {
        id: 1,
        // image: "../img/vegetables/turnip"
    },
    "Tamarind": {
        id: 1,
        // image: "../img/vegetables/tamarind"
    },
    "Tomato": {
        id: 1,
        // image: "../img/vegetables/tomato"
    },
    "Yam": {
        id: 1,
        // image: "../img/vegetables/yam"
    },



    //Fruits
    "Apple": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Apricot": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Avocado": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Banana": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Blackberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Blueberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Cherry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Chico fruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Cloudberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Coconut": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Cranberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Cucumber": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Custard apple": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Damson": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Date": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Dragon fruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Fig": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Goji berry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Gooseberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Grape": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Grapefruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Guava": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Jackfruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Kiwifruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Lemon": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Lime": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Mango": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Mangostan": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Watermelon": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Mulberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Olive": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Orange": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Papaya": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Passionfruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Peach": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Pear": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Plum": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Pineapple": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Pomegranate": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Raspberry": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Rambutan": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Star fruit": {
        id: 2,
        // image: "../img/fruits/"
    },
    "Strawberry": {
        id: 2,
        // image: "../img/fruits/"
    },
};

// var diary = {
//     "Milk": "../img/"
//     "Ghee": "../img/"
//     "Curd": "../img/"
//     "Butter": "../img/"
//     "Paneer": "../img/"
//     "Flavoured milk": "../img/"
//     "Butter milk": "../img/"
//     "Cheese": "../img/"
// };

// var bakery_products = {
//     "bread": "../img/"
//     "cake": "../img/"
//     "rusk": "../img/"
//     "muffins": "../img/"
//     "ice creams": "../img/"
//     "chocolates": "../img/"
//     "donut": "../img/"
//     "pudding": "../img/"
//     "sweets": "../img/"
//     "cookies": "../img/"
//     "murukku": "../img/"
//     "mixture": "../img/"
// };

// var hygiene = {
//     "Soap": "../img/"
//     "Shampoo": "../img/"
//     "Hand sanitizer": "../img/"
//     "Toothpaste": "../img/"
//     "Toothbrushes": "../img/"
//     "Dental floss": "../img/"
//     "Sanitary pads": "../img/"
//     "Deodorants": "../img/"
//     "Shaving supplies": "../img/"
//     "Baby wipes": "../img/"
//     "Toilet paper": "../img/"
//     "Insect spray": "../img/"
//     "Sun screen": "../img/"
//     "Facewash": "../img/"
//     "Creams": "../img/"
//     "Gel": "../img/"
//     "Hairspray": "../img/"
//     "Oil": "../img/"
//     "Hair clips or bands": "../img/"
//     "Comb": "../img/"
//     "Beauty products": "../img/"
//     "Powder": "../img/"
//     "Lip balm": "../img/"
//     "Nail clippers or filer": "../img/"
//     "Razors": "../img/"
//     "Tweezers": "../img/"
//     "Diapers": "../img/"
//     "Trash bags": "../img/"
//     "Contraceptives": "../img/"
// };

// var spices = {
//     "Fennel seed": "../img/"
//     "Cardamom": "../img/"
//     "Pepper": "../img/"
//     "Black cumin": "../img/"
//     "Bay leaf": "../img/"
//     "Cinnamon": "../img/"
//     "Cloves": "../img/"
//     "Coriander": "../img/"
//     "Cumin seed": "../img/"
//     "Fenugreek": "../img/"
//     "Ginger": "../img/"
//     "Garlic": "../img/"
//     "Mint": "../img/"
//     "Mustard seed": "../img/"
//     "Nutmeg": "../img/"
//     "Basil": "../img/"
//     "Poppy seed": "../img/"
//     "Saffron": "../img/"
//     "Sesame seed": "../img/"
//     "Star anise": "../img/"
//     "Tamarind": "../img/"
//     "Turmeric": "../img/"
// };

// var stationery = {
//     "Papers": "../img/"
//     "Paper clips": "../img/"
//     "Scales": "../img/"
//     "Pencil": "../img/"
//     "Eraser": "../img/"
//     "Pen/sketches": "../img/"
//     "Box/pouches": "../img/"
//     "Thumb pins": "../img/"
//     "Paint": "../img/"
//     "Notepad": "../img/"
//     "Envelopes": "../img/"
//     "Glue": "../img/"
//     "Tape": "../img/"
//     "Sticky notes": "../img/"
//     "Paper weight": "../img/"
//     "Pen stand": "../img/"
//     "Highlighter": "../img/"
//     "Markers": "../img/"
//     "Stapler": "../img/"
//     "Punch machine": "../img/"
//     "Calculator": "../img/"
//     "Pen drives": "../img/"
// };

// var cleaning = {
//     "Dish washer": "../img/"
//     "Scrub pads": "../img/"
//     "Detergents": "../img/"
//     "Room freshener": "../img/"
//     "Fabric conditioner": "../img/"
//     "Mops": "../img/"
//     "Dust pans": "../img/"
//     "Cleaning Gloves": "../img/"
//     "Table wipe": "../img/"
//     "Garbage bag": "../img/"
//     "Vacuum cleaner": "../img/"
//     "Disinfectants": "../img/"
//     "Surface cleaners": "../img/"
//     "Toilet cleaner": "../img/"
//     "Toilet brush": "../img/"
//     "Squeegees": "../img/"
//     "Plunger": "../img/"
//     "Rake": "../img/"
// };

// var flour = {
//     "Rice": "../img/"
//     "Wheat": "../img/"
//     "Maize": "../img/"
//     "Maida": "../img/"
//     "Ragi": "../img/"
// };

// var masala = {
//     "Turmeric": "../img/"
//     "Chilli": "../img/"
//     "Garam": "../img/"
//     "Sambhar": "../img/"
//     "Chaat": "../img/"
//     "Rasam": "../img/"
//     "Chicken": "../img/"
//     "Chutney": "../img/"
//     "Dried mango": "../img/"
//     "Cumin": "../img/"
//     "Coriander": "../img/"
//     "Salt": "../img/"
//     "Sugar": "../img/"
// };

// var kitchen = {
//     "Foil": "../img/"
//     "Utensils": "../img/"
//     "Cutlery": "../img/"
//     "Napkins": "../img/"
//     "Oil cans": "../img/"
//     "Containers": "../img/"
//     "Bottles": "../img/"
//     "Table cloth": "../img/"
//     "Mittens": "../img/"
// };