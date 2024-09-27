const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/groceryStore")
  .then(() => {
    console.log("Mongoose Connection Open");
  })
  .catch((e) => {
    console.log("Mongoose Connection Error");
    console.log(e);
  });

const populate = async function () {
   await Product.deleteMany();


    await Product.insertMany([
    {
      name: "Lettuce, Iceberg",
      price: 2.47,
      category: "vegetable",
      img: "https://i5.walmartimages.ca/images/Enlarge/272/297/6000191272297.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      des: "Iceberg lettuce, a classic and crisp delight, brings a refreshing crunch to your meals. With its tightly packed, pale green leaves and mild taste, it offers a versatile base for salads, wraps, and sandwiches. The firm texture holds up well, even when dressed with your favourite sauces or dressings. Enjoyed for its hydrating qualities, iceberg lettuce is a perfect choice for light and refreshing summer dishes. While it may have a milder flavour than other lettuce varieties, its refreshing nature adds a cool and satisfying element to culinary creations. Embrace the classic appeal of iceberg lettuce and add a crisp and wholesome touch to your everyday meals.",
    },
    {
      name: "Carrot, 3lb Bag",
      price: 2.47,
      category: "vegetable",
      img: "https://i5.walmartimages.ca/images/Enlarge/632/713/6000203632713.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      des: "Carrots, vibrant and crisp, are nature's delightful gems that add a burst of colour and flavour to your dishes. Their bright orange hue showcases the abundance of beta-carotene, a powerful antioxidant. These root vegetables thrive during the cooler months, with a local growing season of August to March. Whether enjoyed raw as a crunchy snack, roasted to perfection, or blended into soups, carrots offer a versatile addition to various dishes. Packed with essential vitamins A, C, and K, as well as minerals like potassium, they contribute to a well-balanced and nutritious diet. Embrace the sweet and earthy charm of carrots, elevating your culinary creations with their vibrant presence and reaping the benefits of their goodness.",
    },
    {
      name: "Broccoli Crowns",
      price: 2.27,
      category: "vegetable",
      img: "https://i5.walmartimages.ca/images/Enlarge/000/014/874178000014.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      name: "Red Onions",
      price: 4.97,
      category: "vegetable",
      img: "https://i5.walmartimages.ca/images/Enlarge/996/702/6000207996702.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      name: "Cauliflower",
      price: 3.47,
      category: "vegetable",
      img: "https://i5.walmartimages.ca/images/Enlarge/994/883/6000206994883.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      des: "Cauliflower, a member of the cruciferous vegetable family, is a versatile and nutritious powerhouse that has gained even more popularity in recent years, as it can be substituted for starchy food like rice and even pizza dough. With its distinct white florets tightly packed in a compact head, cauliflower offers a mild and slightly nutty flavour. Cauliflower’s local growing season starts in July and goes to October. Jammed packed with essential nutrients such as vitamin C and folate, cauliflower can be transformed into countless delicious dishes, making it a go-to for creative and healthy cooking.",
    },
    {
        "name": "Banana",
        "price": 0.30,
        "category": "fruit",
        "img": "https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Bananas, nature's convenient energy boosters, are a wholesome delight with a naturally sweet touch. With their vibrant yellow peel and creamy texture, they offer a satisfying and nourishing snack. These potassium-rich fruits are perfect for on-the-go munching, blending into smoothies, or topping your morning cereal. Packed with essential vitamins and dietary fibre, bananas provide a nourishing addition to your diet. Whether enjoyed as a quick bite or incorporated into various recipes, their natural sweetness and versatility shine. Embrace the reliable charm of bananas, savouring their creamy goodness and letting their energy-boosting essence fuel your day."
    },
    {
        "name": "Strawberries",
        "price": 4.97,
        "category": "fruit",
        "img": "https://i5.walmartimages.ca/images/Enlarge/005/102/812049005102.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Strawberries, nature's little bursts of joy, bring a symphony of flavours to your palate. With their bright red hue and luscious texture, they offer a refreshing and delightful treat. These berries are perfect for snacking on lazy afternoons, adding a vibrant pop to salads, or crowning desserts with elegance. Bursting with vitamin C and powerful antioxidants, strawberries provide a nourishing boost to your diet, supporting your overall well-being. Whether enjoyed fresh and plump, blended into velvety smoothies, or dipped in chocolate for a touch of decadence, their versatility is truly remarkable. Embrace the irresistible allure of strawberries, savouring their juicy goodness and letting their sweet, natural essence infuse magic into your culinary creations."
    },
    {
        "name": "Clementine, 2 lb",
        "price": 5.97,
        "category": "fruit",
        "img": "https://i5.walmartimages.ca/images/Enlarge/208/925/6000202208925.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Clementines, small and citrusy treasures, bring a burst of sunshine to your taste buds. With their vibrant orange hue and easy-to-peel skin, they offer a convenient and refreshing snack. These sweet and tangy fruits are perfect for on-the-go munching, adding zest to salads, or incorporating them into desserts. Bursting with vitamin C and essential nutrients, clementines provide a nourishing boost to your diet. Whether enjoyed solo or shared, their bright flavour invigorates your senses. Embrace the delightful charm of clementines, savouring their juicy goodness and letting their citrusy essence brighten up your moments."
    },
    {
        "name": "Apple, Gala",
        "price": 0.79,
        "category": "fruit",
        "img": "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Gala apples, a crisp and sweet delight, bring a burst of juicy flavour to your taste buds. With their beautiful, bright red and yellow skin, they are visually appealing and appetizing. Whether enjoyed fresh as a healthy snack, sliced into salads, or transformed into a delectable apple crisp, Gala apples offer a delightful addition to countless recipes. Their sweet and slightly tart taste pleases both kids and adults alike. Packed with vitamins, fiber, and antioxidants, Gala apples not only satisfy your sweet cravings but also contribute to your overall well-being. Embrace the delicious allure of Gala apples, elevating your culinary creations with their refreshing and delightful essence."
    },
    {
        "name": "Grapes, Red Seedless",
        "price": 6.55,
        "category": "fruit",
        "img": "https://i5.walmartimages.ca/images/Enlarge/042/489/6000201042489.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
        "name": "Great Value White Bread",
        "price": 1.97,
        "category": "baked",
        "img": "https://i5.walmartimages.ca/images/Enlarge/096/854/6000207096854.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Level up your lunch game with Great Value White Bread! Enjoy a soft and delicious slices, freezer-friendly convenience, and the confidence of serving your loved ones quality. Ideal for packed lunches, it's your top choice for great taste on the go."
    },
    {
        "name": "Great Value Italian Style Bread",
        "price": 2.97,
        "category": "baked",
        "img": "https://i5.walmartimages.ca/images/Enlarge/096/805/6000207096805.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Embark on a journey of taste with Great Value Italian Style White Bread. Thick, white slices and a wheat flour topping make this the perfect partner for your pantry or freezer. Whether you need a quick meal for the family or packed lunches for a busy week, Great Value Italian White Bread elevates your sandwich experience with a slice of Italy in every bite."
    },
    {
        "name": "Blueberry Muffins, 6 muffins",
        "price": 5.97,
        "category": "baked",
        "img": "https://i5.walmartimages.ca/images/Enlarge/982/875/6000204982875.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Your Fresh Market™ Blueberry Muffins are a delicious on-the-go breakfast or stellar anytime-of-day snack. Each moist and tender muffin is studded with sweet blueberries for a classic flavour you’ll love."
    },
    {
        "name": "Banana Chocolate Chip Muffins, 6 muffins",
        "price": 5.97,
        "category": "baked",
        "img": "https://i5.walmartimages.ca/images/Enlarge/982/883/6000204982883.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Like banana bread? Then you’ll love Your Fresh Market™ Banana Chocolate Chip Muffins. Our moist and tender muffins pair the mellow, tropical flavour of banana with the sweetness of chocolate chips. Great for busy on-the-go mornings and anytime-of-day snacks."
    },
    {
        "name": "Great Value Everything Bagels",
        "price": 1.97,
        "category": "baked",
        "img": "https://i5.walmartimages.ca/images/Enlarge/096/886/6000207096886.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Round out your morning routine with Great Value Everything Bagels! With 6 bagels per package, the whole family can enjoy a delicious breakfast on the go. Served best toasted, these bagels pair perfectly with jam, cream cheese or butter. With a pack in your pantry or freezer, you'll never rush out the door hungry."
    },
    {
        "name": "fairlife Skim Ultrafiltered Milk 1.5L Bottle",
        "price": 5.98,
        "category": "dairy",
        "img": "https://i5.walmartimages.com/asr/eacae3f3-f1e1-43b5-b058-3cff4fbb7e7f.ef34e5236a92a5dd66019888253614e1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Our fresh Canadian milk is ultrafiltered to be ultra-nutritious, flowing through multiple filters to concentrate its goodness like protein while filtering out half of the natural sugars. What you get is a skim 1.5L milk that has 9 essential nutrients and less sugar than regular milk, without sacrificing delicious taste."
    },
    {
        "name": "fairlife 2% Chocolate Ultrafiltered Milk 1.5L Bottle",
        "price": 5.98,
        "category": "dairy",
        "img": "https://i5.walmartimages.com/asr/db39cdca-db57-4e2a-b968-9a02816cd4f0.fae0a04f96398735e50259b69ca5995d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Our fresh Canadian milk is ultrafiltered to be ultra-nutritious, flowing through multiple filters to concentrate its goodness like protein while filtering out half of the natural sugars. What you get is a 2% 1.5L milk that has 9 essential nutrients and less sugar than regular milk, without sacrificing delicious taste. Our chocolate milk is made with 2% ultrafiltered partly skimmed milk."
    },
    {
        "name": "Marble Cheddar Cheese",
        "price": 5.98,
        "category": "dairy",
        "img": "https://i5.walmartimages.ca/images/Enlarge/014/470/627735014470.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Made with 100% Canadian milk, Great ValueTM Marble Cheddar Cheese is a good source of calcium that’s high in protein, too! This family-sized 400 g block is a great way to add the wholesome creamy goodness of cheese to any meal. Deliciously versatile, there are so many ways to please with cheese. Whether you melt it, grate it, slice it or cube it, cheddar makes everything better!"
    },
    {
        "name": "Cream Cheese Spread",
        "price": 2.97,
        "category": "dairy",
        "img": "https://i5.walmartimages.ca/images/Enlarge/362/336/628915362336.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Ideal for use in baking, made from freshly pasteurized cream and whole milk: source of Vitamin A, firm texture: does not break down in recipes."
    },
    {
        "name": " Herb & Garlic Cream Cheese",
        "price": 6.98,
        "category": "dairy",
        "img": "https://i5.walmartimages.ca/images/Enlarge/1c1/_en/999999-00068100896282_a1c1_en.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Enjoy a little taste of heaven with Philadelphia Herb & Garlic Cream Cheese Product. Each 340 g tub is creamy, delicious and spreadable, and is made with garlic and select herbs for a delightful twist on your longtime favourite. Our herb and garlic Philly is ideal for your morning bagel or to add delicious flavour to any of your savoury recipes. Whether you use it alongside appetizers or spread it on your favourite crackers, pita chips, pretzels and veggies, you'll love the rich and creamy taste."
    },
    {
        "name": "Boneless Skinless Chicken Breasts, 4 Breasts",
        "price": 14.00,
        "category": "meat",
        "img": "https://i5.walmartimages.ca/images/Enlarge/765/017/605388765017.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Serve your family and friends boneless skinless chicken breasts that have been proudly raised on Canadian farms. These fresh boneless skinless chicken breasts have no added hormones, like all chicken in Canada, and are a high-quality source of protein you can trust. Boneless chicken breasts are a versatile and delicious addition to many home-cooked lunches and dinners, including soups, BBQ, salads, casseroles, and more. Dedicated to providing wholesome, real food for Canadians for generations to come, Maple Leaf Foods is the first major food company in the world to become carbon neutral. Join them in their efforts for a more sustainable planet."
    },
    {
        "name": "Naturally Smoked Bacon",
        "price": 4.47,
        "category": "meat",
        "img": "https://i5.walmartimages.ca/images/Enlarge/182/876/6000204182876.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Start your family's morning off with a plate of delicious Great Value Naturally Smoked Bacon on the breakfast table. Our bacon can be quickly cooked in the microwave on the busiest of days or baked in the oven for a leisurely brunch."
    },
    {
        "name": "Stir Fry Beef Strips",
        "price": 14.39,
        "category": "meat",
        "img": "https://i5.walmartimages.ca/images/Enlarge/033/140/6000200033140.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Prepare a quick delicious dinner with the Your Fresh Market AAA Angus Beef Stir Fry Strips. Best prepared by stir frying, add your favourite seasoning and vegetables to create a delicious nutritious meal for your family and friends. Made with 100% Canadian AAA Angus beef providing world class quality that you’ve come to expect from Canada Beef."
    },
    {
        "name": "Halal Beef Stewing Cubes",
        "price": 12.86,
        "category": "meat",
        "img": "https://i5.walmartimages.ca/images/Enlarge/735/923/6000204735923.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Every cut of beef is 100% Canadian AAA Angus. Prepare meal with Your Fresh Market AAA Angus Halal Beef Stewing Cubes, Made with 100% Canadian AAA Angus beef providing world class quality that you’ve come to expect from Canada Beef. Best prepared in the oven, add your favorite seasoning and serve with vegetables to create a delicious nutritious meal for your family and friends."
    },
    {
        "name": "Halal Lean Ground Beef",
        "price": 7.48,
        "category": "meat",
        "img": "https://i5.walmartimages.ca/images/Enlarge/039/669/6000204039669.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Prepare meal With Your Fresh Market Halal Lean Ground Beef, Made with 100% Canadian beef providing world class quality that you’ve come to expect from Canada Beef. Can be used for hamburgers, meatballs, sloppy joe’s, & meatloaf. The possibilities are endless! Enjoy with your family and friends!"
    },
    {
        "name": "Atlantic Salmon Portion",
        "price": 12.59,
        "category": "seafood",
        "img": "https://i5.walmartimages.ca/images/Enlarge/415/401/6000204415401.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "When it’s seafood night, reach for Your Fresh Market™ Atlantic Salmon Portion. Simply season with a blend of herbs and spices, then toss on the BBQ or the oven; it cooks to perfection in no time. Deliciously moist and flaky, it pairs well with salads, a bed of rice, or a medley of steamed veggies. Just add a squeeze of lemon to make the flavours sing."
    },
    {
        "name": "Our Finest Shrimp Ring",
        "price": 5.97,
        "category": "seafood",
        "img": "https://i5.walmartimages.com/asr/c771ae2e-305c-4e69-8c38-e99d64420764.73a607f90c10034521701c5908733f0d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Inspired by the love of exceptional food, Our Finest™ is a collection of outstanding products crafted from superior recipes using premium ingredients. Love seafood? Treat yourself anytime with Our Finest™ Shrimp Ring. Our fully cooked shrimp is pre-peeled and packaged with mild cocktail sauce, making it a zero-effort appetizer—just thaw and enjoy. (#DYK it’s also a fantastic topping for Caesar salads and seafood pizza! Try it in pasta dishes, too.) Each small ring has a minimum of 24 small shrimp, more than enough for seafood-craving couples and small family meals. Our shrimp is sustainably farm raised and Best Aquaculture Practices-certified."
    },
    {
        "name": "Lemon & Herb Atlantic Salmon",
        "price": 18.49,
        "category": "seafood",
        "img": "https://i5.walmartimages.ca/images/Enlarge/415/369/6000204415369.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "When it’s seafood night, reach for Your Fresh Market™ Atlantic Salmon Portion, Lemon & Herb. This tasty cut of salmon is sustainably sourced in Canada. It’s seasoned with a balanced blend of lemon and herbs, and ready to toss on the BBQ or the oven; it cooks to perfection in no time. Deliciously moist and flaky, it pairs well with salads, a bed of rice, or a medley of steamed veggies."
    },
    {
        "name": "High Liner Jumbo Popcorn Shrimp",
        "price": 10.47,
        "category": "seafood",
        "img": "https://i5.walmartimages.com/asr/49850eca-cd12-4821-9be6-2e3ba8ddfd42.6a34d883e374951481dace9516e5e1a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "A crunchy popcorn shrimp with a uniquely juicy jumbo shrimp, versatile enough for a weekday dinner. From shrimp tacos to lettuce wraps, your next family favourite!"
    },
    {
        "name": "JANES ultimates TAVERN BATTERED COD FILLETS",
        "price": 16.48,
        "category": "seafood",
        "img": "https://i5.walmartimages.com/asr/0f54ef6a-91f3-43fd-9755-f5758e1b9678.609780c8a91601b97375eef071847ef6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "des": "Try our ultimates Tavern Battered Cod Fillets — whole cod fillets in a delicious battered coating of toasted wheat crumbs and beer. Don’t forget the tartar sauce for an authentic experience!"
    }
  ]);

};

// ,
//     {
//         "name": "Carrot, 3lb Bag",
//         "price": 2.47,
//         "category": "vegetable",
//         "img": "",
//         "des": ""
//     }


populate().then(() =>{
    mongoose.connection.close()
})