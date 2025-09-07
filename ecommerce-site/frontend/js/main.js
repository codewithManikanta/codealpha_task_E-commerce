// main.js

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

const products = [
    // Home Appliances (20)
    {
        id: 1,
        name: "Washing Machine",
        price: 17999,
        category: "Home Appliances",
        description: "Fully automatic washing machine with smart features.",
        image: "https://cdn.simplegreen.com/web22/images/cleaning_tips/tip_hero/laundry/standard-washing-machine.jpg"
    },
    {
        id: 2,
        name: "Refrigerator",
        price: 22999,
        category: "Home Appliances",
        description: "Double door refrigerator with inverter technology.",
        image: "https://images.thdstatic.com/productImages/7a0476bd-3604-4857-b56f-bace8b5e7f7e/svn/fingerprint-resistant-stainless-steel-ge-french-door-refrigerators-gne25jykfs-64_1000.jpg"
    },
    {
        id: 3,
        name: "Microwave Oven",
        price: 7999,
        category: "Home Appliances",
        description: "Convection microwave oven for baking and grilling.",
        image: "https://cdn11.bigcommerce.com/s-8vy557m296/images/stencil/original/products/329/4678/50_SMC1161KW_DRAMA_WEB__51689.1744660516.JPG?c=2"
    },
    {
        id: 4,
        name: "Dishwasher",
        price: 24999,
        category: "Home Appliances",
        description: "Automatic dishwasher for hassle-free cleaning.",
        image: "https://images.thdstatic.com/productImages/9ca681bb-0576-44ad-b236-67e67340e33a/svn/fingerprint-resistant-stainless-ge-built-in-dishwashers-gdt650syvfs-64_600.jpg"
    },
    {
        id: 5,
        name: "Air Conditioner",
        price: 32999,
        category: "Home Appliances",
        description: "Split AC with fast cooling and energy saving.",
        image: "https://klivago.com/media/image/product/4947/lg/samsung-air-conditioner-r32-wall-unit-ar35-ar09txhqasineu-x-26-kw-i-9000-btu.jpg"
    },
    {
        id: 6,
        name: "Ceiling Fan",
        price: 2499,
        category: "Home Appliances",
        description: "Energy-efficient ceiling fan with remote.",
        image: "https://www.depuley.com/cdn/shop/files/depuley-52-modern-ceiling-fan-no-light-with-remote-indooroutdoor-ceiling-fan-without-light-3-blade-low-profile-fan-for-patiosfarmhouse-reversible-dc-motor-2-dow-215450.jpg?v=1711595443"
    },
    {
        id: 7,
        name: "Table Lamp",
        price: 599,
        category: "Home Appliances",
        description: "LED table lamp with adjustable brightness.",
        image: "https://www.ikea.com/us/en/images/products/flyghoejd-table-lamp-brass-beige__1244487_pe921207_s5.jpg"
    },
    {
        id: 8,
        name: "Wall Clock",
        price: 399,
        category: "Home Appliances",
        description: "Modern wall clock for home decor.",
        image: "https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/1280x1280/products/242/2936/QXA598BLH-NB__13826.1724708587.png?c=2"
    },
    {
        id: 9,
        name: "Electric Kettle",
        price: 899,
        category: "Home Appliances",
        description: "Quick boiling electric kettle with auto shut-off.",
        image: "https://cosori.com/cdn/shop/files/Smart0.8LGooseneckElectricKettle-Black.jpg?v=1689702302&width=1445"
    },
    {
        id: 10,
        name: "Air Purifier",
        price: 4999,
        category: "Home Appliances",
        description: "HEPA filter air purifier for clean air.",
        image: "https://levoit.com/cdn/shop/products/levoit-core-300-air-purifier-791897.jpg?v=1706049661&width=768"
    },
    {
        id: 11,
        name: "Water Bottle",
        price: 299,
        category: "Home Appliances",
        description: "Stainless steel water bottle, keeps water cold.",
        image: "https://www.camelbak.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-camelbak-master-catalog/default/dwcc95d26f/images/large/1649407060.jpg?sh=650&sm=fit&sw=650"
    },
    {
        id: 12,
        name: "Coffee Maker",
        price: 2499,
        category: "Home Appliances",
        description: "Automatic coffee maker for fresh coffee.",
        image: "https://m.media-amazon.com/images/I/61pMfdsalZL.jpg"
    },
    {
        id: 13,
        name: "Induction Cooktop",
        price: 1999,
        category: "Home Appliances",
        description: "Energy-efficient induction cooktop.",
        image: "https://www.irisusainc.com/cdn/shop/files/2-in-1.jpg?v=1707881600&width=1080"
    },
    {
        id: 14,
        name: "Mixer Grinder",
        price: 2999,
        category: "Home Appliances",
        description: "Powerful mixer grinder for kitchen needs.",
        image: "https://m.media-amazon.com/images/I/51zWWvI6pGL.jpg"
    },
    {
        id: 15,
        name: "Rice Cooker",
        price: 1499,
        category: "Home Appliances",
        description: "Automatic rice cooker with keep-warm function.",
        image: "https://newellbrands.imgix.net/9f666742-db03-3571-a96b-41483930f312/9f666742-db03-3571-a96b-41483930f312.jpg"
    },
    {
        id: 16,
        name: "Toaster",
        price: 799,
        category: "Home Appliances",
        description: "2-slice toaster with browning control.",
        image: "https://i5.walmartimages.com/seo/WHALL-2-Slice-Toaster-Stainless-Steel-Toaster-with-Wide-Slot-6-Shade-Settings-Bagel-Function-Removable-Crumb-Tray_b732c8b2-6c8b-45ce-a5bb-3a60a623274f.d2e539c92dfee279d6cfc6196a8c3ed7.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768"
    },
    {
        id: 17,
        name: "Hair Dryer",
        price: 999,
        category: "Home Appliances",
        description: "Quick dry hair dryer with cool shot.",
        image: "https://i5.walmartimages.com/seo/Revlon-1875W-Compact-Hair-Dryer-Black_9b619d96-02a9-470c-8c84-8ec2fda3cf6c.5afe0804f72f7d268cdb573c763bdaaa.jpeg"
    },
    {
        id: 18,
        name: "Steam Iron",
        price: 1299,
        category: "Home Appliances",
        description: "Non-stick steam iron for wrinkle-free clothes.",
        image: "https://www.rowentausa.com/media/catalog/product/d/r/drsrcmtmgbpz9x3opy0t_sbqpcswqss5gzj6k.jpg?bg-color=255%2C255%2C255&canvas=1000%3A1000&fit=bounds&height=1000&optimize=high&width=1000"
    },
    {
        id: 19,
        name: "Robot Vacuum",
        price: 12999,
        category: "Home Appliances",
        description: "Automatic robot vacuum cleaner for your home.",
        image: "https://i5.walmartimages.com/asr/663e5f56-637d-4166-950a-c56d7aeafee4_8.94bbe9885a598fe3b46169aafa518fd5.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768"
    },
    {
        id: 20,
        name: "Smart Bulb",
        price: 499,
        category: "Home Appliances",
        description: "WiFi-enabled smart bulb with color changing.",
        image: "https://m.media-amazon.com/images/I/61F2ZWv5XsL.jpg"
    },

    // Fitness (20)
    {
        id: 21,
        name: "Yoga Mat",
        price: 799,
        category: "Fitness",
        description: "Non-slip yoga mat for fitness routines.",
        image: "https://images.thdstatic.com/productImages/618b7928-6565-4ece-af7d-9af1bc128dd9/svn/aqua-prosourcefit-gym-mats-ps-1996-etm-aqua-64_600.jpg"
    },
    {
        id: 22,
        name: "Dumbbells Set",
        price: 1499,
        category: "Fitness",
        description: "Pair of dumbbells for home workouts.",
        image: "https://xmarkfitness.com/cdn/shop/files/3107.1-BLACK-2.jpg?v=1719254567"
    },
    {
        id: 23,
        name: "Skipping Rope",
        price: 299,
        category: "Fitness",
        description: "Adjustable skipping rope for cardio.",
        image: "https://gravity.fitness/cdn/shop/files/11-GravityFitness.webp?v=1749120795&width=767"
    },
    {
        id: 24,
        name: "Treadmill",
        price: 24999,
        category: "Fitness",
        description: "Foldable treadmill for home gym.",
        image: "https://contents.mediadecathlon.com/p2544966/k%24094c2f605cc932357646d771743046ef/picture.jpg"
    },
    {
        id: 25,
        name: "Exercise Bike",
        price: 9999,
        category: "Fitness",
        description: "Stationary exercise bike for indoor cycling.",
        image: "https://sunnyhealthfitness.com/cdn/shop/products/sunny-health-fitness-bikes-elite-interactive-series-exercise-bike-SF-B220045-10_750x.jpg?v=1668458344"
    },
    {
        id: 26,
        name: "Protein Shaker",
        price: 399,
        category: "Fitness",
        description: "Leak-proof protein shaker bottle.",
        image: "https://images.openai.com/thumbnails/url/4ZvkiHicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5xzKowdg4P9nDMyDXMDQjILE1LdXcrd_GzNK0wCC-IdPHOSc9KS09yLg_LznZxjg-s8ossjKjK8y1SKwYAyjEp4A"
    },
    {
        id: 27,
        name: "Fitness Band",
        price: 1299,
        category: "Fitness",
        description: "Monitor your health and activity with this fitness band.",
        image: "https://cdn.mos.cms.futurecdn.net/eiXSAmjKzX7zzZfHMriaSV.jpg"
    },
    {
        id: 28,
        name: "Smart Watch",
        price: 3999,
        category: "Fitness",
        description: "Track your fitness and notifications with this smart watch.",
        image: "https://us.kospet.com/cdn/shop/files/homepage-tank-m3-ultra-smartwatch-card-min.webp?v=1743399812&width=1200"
    },
    {
        id: 29,
        name: "Resistance Bands",
        price: 499,
        category: "Fitness",
        description: "Set of resistance bands for strength training.",
        image: "https://m.media-amazon.com/images/I/61-mXMMKyHL._UF1000%2C1000_QL80_.jpg"
    },
    {
        id: 30,
        name: "Foam Roller",
        price: 699,
        category: "Fitness",
        description: "Foam roller for muscle recovery and massage.",
        image: "https://m.media-amazon.com/images/I/71PEFlvnS9L.jpg"
    },
    {
        id: 31,
        name: "Push Up Bars",
        price: 399,
        category: "Fitness",
        description: "Push up bars for upper body workouts.",
        image: "https://www.skelcore.com/cdn/shop/products/SC-PUBARS9_png_1220x_crop_center.jpg?v=1743675342"
    },
    {
        id: 32,
        name: "Kettlebell",
        price: 899,
        category: "Fitness",
        description: "Cast iron kettlebell for strength training.",
        image: "https://americanbarbell.com/cdn/shop/files/KB-1v2.jpg?v=1698731284"
    },
    {
        id: 33,
        name: "Ab Roller",
        price: 499,
        category: "Fitness",
        description: "Ab roller for core strengthening exercises.",
        image: "https://assets.roguefitness.com/f_auto%2Cq_auto%2Cc_limit%2Cw_1600%2Cb_rgb%3Affffff/catalog/Conditioning/Speed%20and%20Agility/Core%20and%20Stability/AD0053/AD0053-H_p1yblu.png"
    },
    {
        id: 34,
        name: "Gym Gloves",
        price: 299,
        category: "Fitness",
        description: "Anti-slip gym gloves for weightlifting.",
        image: "https://m.media-amazon.com/images/I/7103NHYCp3L._UF1000%2C1000_QL80_.jpg"
    },
    {
        id: 35,
        name: "Pull Up Bar",
        price: 999,
        category: "Fitness",
        description: "Doorway pull up bar for upper body workouts.",
        image: "https://m.media-amazon.com/images/I/31ulUaIia-L._UF1000%2C1000_QL80_.jpg"
    },
    {
        id: 36,
        name: "Jump Rope",
        price: 299,
        category: "Fitness",
        description: "Speed jump rope for cardio training.",
        image: "https://i5.walmartimages.com/seo/Athletic-Works-Speed-Jump-Rope-with-Light-Weight-Handles-9-Length-Black_64c03392-d085-4649-8a66-a1c13889cef6.c30b4a070760547b109bda47f0d41f91.jpeg"
        },
    {
        id: 37,
        name: "Gym Bag",
        price: 799,
        category: "Fitness",
        description: "Spacious gym bag with multiple compartments.",
        image: "https://vader-prod.s3.amazonaws.com/1742308718-mhl-gym-bag-gymshark-1137-67d98564ceacc.jpg"
    },
    {
        id: 38,
        name: "Sports Water Bottle",
        price: 399,
        category: "Fitness",
        description: "BPA-free sports water bottle for hydration.",
        image: "https://images.24hourwristbands.com/image/upload/d_shop_images%3Aproduct%3Aplaceholder-image.jpg/f_auto/q_100/shop_images/product/20_Oz_Translucent_Sports_Water_Bottles_64b712189c1e3.jpg"
    },
    {
        id: 39,
        name: "Fitness Tracker",
        price: 1999,
        category: "Fitness",
        description: "Fitness tracker with heart rate monitor.",
        image: "https://m.media-amazon.com/images/I/51CtR%2BquteL._UF894%2C1000_QL80_.jpg"
    },
    {
        id: 40,
        name: "Medicine Ball",
        price: 799,
        category: "Fitness",
        description: "Medicine ball for strength and conditioning.",
        image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-c6e4-61f5-8270-2bc750e030a8/raw?se=2025-08-15T08%3A07%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=98fefbc0-8383-5855-a52f-261b224e7d03&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A47%3A14Z&ske=2025-08-16T01%3A47%3A14Z&sks=b&skv=2024-08-04&sig=D/chbas2a1iPrTO5/5o9fyqGL7CiXeBsLW/XrL%2B3eRo%3D"
    },

    // Accessories (20)
    {
        id: 41,
        name: "Wireless Headphones",
        price: 2499,
        category: "Accessories",
        description: "High-quality wireless headphones with noise cancellation.",
        image: "https://m.media-amazon.com/images/I/41JACWT-wWL.jpg"
    },
    {
        id: 42,
        name: "Bluetooth Speaker",
        price: 1599,
        category: "Accessories",
        description: "Portable speaker with deep bass and long battery life.",
        image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-4470-61f9-8a32-1bc6fddfe9fc/raw?se=2025-08-15T08%3A19%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=9724d828-6307-5eed-baa6-794acd2125bc&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A47%3A04Z&ske=2025-08-16T01%3A47%3A04Z&sks=b&skv=2024-08-04&sig=VLchXaAiZKI90HUkujJ12TA%2B5UMoUIzzX4olxqKdljk%3D"
    },
    {
        id: 43,
        name: "Laptop Bag",
        price: 899,
        category: "Accessories",
        description: "Water-resistant laptop bag with multiple compartments.",
        image: "https://m.media-amazon.com/images/I/81OgnNe3PrL._UF1000%2C1000_QL80_.jpg"
    },
    {
        id: 44,
        name: "USB Power Bank",
        price: 799,
        category: "Accessories",
        description: "Fast charging power bank with 10000mAh capacity.",
        image: "https://signatize.in/wp-content/uploads/2025/06/03-1.jpg"
    },
    {
        id: 45,
        name: "Wireless Mouse",
        price: 499,
        category: "Accessories",
        description: "Ergonomic wireless mouse for smooth navigation.",
        image: "https://cdn.mos.cms.futurecdn.net/GttMZ84yZoqEaQcJ4vAWbd.jpg"
    },
    {
        id: 46,
        name: "Gaming Keyboard",
        price: 1499,
        category: "Accessories",
        description: "RGB backlit gaming keyboard with mechanical keys.",
        image: "https://cdn.shopify.com/s/files/1/0776/9554/9721/files/steel_480x480.jpg?v=1735198632"
    },
    {
        id: 47,
        name: "Portable SSD",
        price: 3499,
        category: "Accessories",
        description: "High-speed portable SSD for quick data transfer.",
        image: "https://image-us.samsung.com/SamsungUS/home/computing/memory-storage/portable-solid-state-drives/10-31-2023/gallery-images/T5_EVO_02_Performance_1200x800.jpg?%24product-details-jpg%24="
    },
    {
        id: 48,
        name: "Action Camera",
        price: 4999,
        category: "Accessories",
        description: "Waterproof action camera for adventure lovers.",
        image: "https://cdn.outsideonline.com/wp-content/uploads/2025/03/best-action-cameras_s.jpg"
    },
    {
        id: 49,
        name: "Smartphone Stand",
        price: 299,
        category: "Accessories",
        description: "Adjustable smartphone stand for desk use.",
        image: "https://www.mytrendyphone.co.uk/blog/12/wp-content/uploads/2020/09/smartphone-tripod-stand.jpg"
    },
    {
        id: 50,
        name: "Tablet Cover",
        price: 499,
        category: "Accessories",
        description: "Protective tablet cover with stand.",
        image: "https://image.made-in-china.com/202f0j00gyOkTbsnMrqC/2024-New-Design-PU-Material-Protective-Tablet-Case-Cover-for-iPad-Air-5-PRO-11-and-8th-9th-Gen-10th-10-9-Gen-Tablet-Cover.webp"
    },
    {
        id: 51,
        name: "Wireless Charger",
        price: 699,
        category: "Accessories",
        description: "Fast wireless charger compatible with all devices.",
        image: "https://images.mobilefun.co.uk/graphics/450pixelp/94937.jpg"
    },
    {
        id: 52,
        name: "Bluetooth Earbuds",
        price: 1799,
        category: "Accessories",
        description: "Compact Bluetooth earbuds with long battery life.",
        image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-76f0-61f9-b144-2fe40f721bf7/raw?se=2025-08-15T08%3A25%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=756a8335-6303-5d76-a89e-f941da86db6c&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T07%3A24%3A10Z&ske=2025-08-16T07%3A24%3A10Z&sks=b&skv=2024-08-04&sig=df5dhoqa6lY%2BJ9Z6mur%2BmxrhmYfv3heWi4PXBHtbGmE%3D"
    },
    {
        id: 53,
        name: "Photo Frame",
        price: 299,
        category: "Accessories",
        description: "Wooden photo frame for memorable moments.",
        image: "https://frameamo.com/cdn/shop/articles/Webshop_Header_600x600_crop_center_520x500_0f2f5b97-9c2c-428c-9293-8b1720abc763.webp?v=1736962637"
    },
    {
        id: 54,
        name: "Scented Candles",
        price: 499,
        category: "Accessories",
        description: "Pack of 4 scented candles for relaxation.",
        image: "https://images.moneycontrol.com/static-mcnews/2024/08/20240805142046_Different-kinds-of-candles-for-home--770x433.jpg"
    },
    {
        id: 55,
        name: "Smart TV Remote",
        price: 399,
        category: "Accessories",
        description: "Universal smart TV remote control.",
        image: "https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AdawWSXlsgIbCYVpOp2UwwQ.jpeg"
    },
    {
        id: 56,
        name: "Tripod Stand",
        price: 799,
        category: "Accessories",
        description: "Adjustable tripod stand for cameras and phones.",
        image: "https://avfgroup.com/us/wp-content/uploads/sites/3/2021/08/fsl1000hoxlwb_08_large.jpg"
        
    },
    {
        id: 57,
        name: "Ring Light",
        price: 999,
        category: "Accessories",
        description: "LED ring light for perfect selfies and videos.",
        image: "https://d3e79alseq88cx.cloudfront.net/cms/641357cfc35369593e118812/1600"
    },
    {
        id: 58,
        name: "Screen Cleaner Kit",
        price: 299,
        category: "Accessories",
        description: "Screen cleaner kit for mobiles and laptops.",
        image: "https://purosol.com/cdn/shop/products/Purosol_Screen_Cleaner_16oz_and_4oz_w_air_cloth_1024x1024.jpg?v=1527517508"
    },
    {
        id: 59,
        name: "Cable Organizer",
        price: 199,
        category: "Accessories",
        description: "Cable organizer for tidy workspace.",
        image: "https://m.media-amazon.com/images/I/61ANgTfJEYL._UF1000%2C1000_QL80_.jpg"
    },
    {
        id: 60,
        name: "Stylus Pen",
        price: 399,
        category: "Accessories",
        description: "Universal stylus pen for touch devices.",
        image: "https://m.media-amazon.com/images/I/71MdH4SJYAL.jpg"
    },
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation.",
        image: "https://www.telegraph.co.uk/content/dam/recommended/2025/04/01/TELEMMGLPICT000418537464_17435116016240_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=640"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 3999,
        category: "Electronics",
        description: "Track your fitness and notifications with this smart watch.",
        image: "https://www.digitaltrends.com/wp-content/uploads/2022/11/Apple-Watch-Series-8-and-Galaxy-Watch-5.jpg?p=1&resize=1200%2C720"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1599,
        category: "Electronics",
        description: "Portable speaker with deep bass and long battery life.",
        image: "https://www.soundguys.com/wp-content/uploads/2024/07/portable-bluetooth-speakers-hero-scaled-e1729020016241.jpg"
    },
    {
        id: 4,
        name: "Smartphone",
        price: 15999,
        category: "Electronics",
        description: "Latest Android smartphone with powerful processor.",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A47%2Ccw%3A2513%2Cch%3A1414%2Cq%3A80%2Cw%3A2513/ofGqkYpx8Yc37L34gTHoMT.jpg"
    },
    {
        id: 5,
        name: "Tablet",
        price: 9999,
        category: "Electronics",
        description: "Lightweight tablet for work and entertainment.",
        image: "https://static.independent.co.uk/2024/11/01/16/best-tablets-1-november-2024.jpg?fit=crop&height=900&width=1200"
    },
    {
        id: 6,
        name: "Wireless Charger",
        price: 699,
        category: "Electronics",
        description: "Fast wireless charger compatible with all devices.",
        image: "https://cdn.shopify.com/s/files/1/0023/9688/1007/files/EDA006183501A_1.jpg?v=1722019569"
    },
    {
        id: 8,
        name: "Smart TV",
        price: 24999,
        category: "Electronics",
        description: "4K Ultra HD Smart TV with streaming apps.",
        image: "https://fpdvision.com/cdn/shop/files/fpd-43-inch-palette-series-smart-tv-frameless-tv-google-tv-dolby-hdr-10-support-342745.png?v=1745474788"
    },
    {
        id: 9,
        name: "Home Theater",
        price: 7999,
        category: "Electronics",
        description: "Surround sound home theater system.",
        image: "https://hips.hearstapps.com/hmg-prod/images/fun-lighting-64b433f17a68a.png?crop=0.8978675645342312xw%3A1xh%3Bcenter%2Ctop&resize=1200%3A%2A"
    },
    {
        id: 10,
        name: "DSLR Camera",
        price: 29999,
        category: "Electronics",
        description: "Professional DSLR camera for photography.",
        image: "https://cdn11.bigcommerce.com/s-5fnw76w7/images/stencil/1280x1280/products/6194/10810/canon_3616c016_eos_90d_dslr_camera_1566949680_1502489__41463.1568321145.jpg?c=2"
    },
    {
        id: 11,
        name: "Tripod Stand",
        price: 799,
        category: "Electronics",
        description: "Adjustable tripod stand for cameras and phones.",
        image: "https://www.ulanzi.com/cdn/shop/products/7_a474223a-08c3-4515-86d8-503f797fafbd.jpg?v=1747989842&width=800"
    },
    {
        id: 12,
        name: "Ring Light",
        price: 999,
        category: "Electronics",
        description: "LED ring light for perfect selfies and videos.",
        image: "https://lumecube.com/cdn/shop/files/577A3947-1200x800-5b2df79_1199x.jpg?v=1727992187"
    },
    {
        id: 13,
        name: "VR Headset",
        price: 3499,
        category: "Electronics",
        description: "Immersive VR headset for gaming and movies.",
        image: "https://m.media-amazon.com/images/I/51pdPTbbjzL._UF1000%2C1000_QL80_.jpg"
    },
    {
        id: 14,
        name: "Smart Bulb",
        price: 499,
        category: "Electronics",
        description: "WiFi-enabled smart bulb with color changing.",
        image: "https://cdn.mos.cms.futurecdn.net/GApU52fq7tGYAx9Un4mGXi.jpg"
    },
    {
        id: 15,
        name: "Robot Vacuum",
        price: 12999,
        category: "Electronics",
        description: "Automatic robot vacuum cleaner for your home.",
        image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-c1d8-61f5-bd83-4ca61055aa4a/raw?se=2025-08-15T08%3A21%3A50Z&sp=r&sv=2024-08-04&sr=b&scid=5e4791cc-0ddf-590c-befb-6a37a2d809a4&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A45%3A30Z&ske=2025-08-16T01%3A45%3A30Z&sks=b&skv=2024-08-04&sig=/Xjj4%2BpIVbIhtTxNkjUpdwTnpMxshdRhzz0gtfiASZ8%3D"
    },
    {
        id: 16,
        name: "Portable SSD",
        price: 3499,
        category: "Electronics",
        description: "High-speed portable SSD for quick data transfer.",
        image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-0144-61f6-87d9-77f1e25d6b72/raw?se=2025-08-15T07%3A40%3A22Z&sp=r&sv=2024-08-04&sr=b&scid=375dc38e-1c7b-57fd-b782-dcd735fc4470&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A46%3A37Z&ske=2025-08-16T01%3A46%3A37Z&sks=b&skv=2024-08-04&sig=j3eJAnRaaF6vxQ1ftTiNeskm8IvgsfsA%2Bkkx6tyByVE%3D"
    },
    {
        id: 17,
        name: "Action Camera",
        price: 4999,
        category: "Electronics",
        description: "Waterproof action camera for adventure lovers.",
        image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-2284-61f9-9f83-c849304a77d5/raw?se=2025-08-15T07%3A42%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=1d0e68e2-b281-511d-b721-72465d581eb6&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A48%3A02Z&ske=2025-08-16T01%3A48%3A02Z&sks=b&skv=2024-08-04&sig=7x0Gp8SQsvLtklMuRyHEZaFmjiXDWGtMV46KxwmqgW8%3D"
    },
    {
        id: 18,
        name: "Smartphone Stand",
        price: 299,
        category: "Electronics",
        description: "Adjustable smartphone stand for desk use.",
        image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-5f58-61f9-9f90-9ce4d796f345/raw?se=2025-08-15T07%3A44%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=4002b24f-22a5-5030-b2fc-ba63c5b1e172&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A49%3A10Z&ske=2025-08-16T01%3A49%3A10Z&sks=b&skv=2024-08-04&sig=F923wVyQW3pCua1OcscxDKW3yB06fIkYUXcm2r4wm5g%3D"
    },
    {
        id: 19,
        name: "Tablet Cover",
        price: 499,
        category: "Electronics",
        description: "Protective tablet cover with stand.",
        image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-3338-61f5-9c9f-45bcfb3ea752/raw?se=2025-08-15T07%3A45%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=27fddbc2-10e2-5dbd-9d3e-a68c8da76bbc&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A48%3A17Z&ske=2025-08-16T01%3A48%3A17Z&sks=b&skv=2024-08-04&sig=j1q/kbGBUcVCdMBCfGSFz%2BbJFY5sCKLmqaftbh2DC5I%3D"
    },
    {
        id: 20,
        name: "Smart TV Remote",
        price: 399,
        category: "Electronics",
        description: "Universal smart TV remote control.",
        image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-089c-61f9-aa50-7c51cf0c9e15/raw?se=2025-08-15T07%3A46%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=0981a1a2-c955-5770-bf57-3609850d0cd4&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A46%3A55Z&ske=2025-08-16T01%3A46%3A55Z&sks=b&skv=2024-08-04&sig=P%2Bq3EM9mPCe56/FOWHyvKYbAgZvXSsFHy4yJcu7Jd1U%3D"
    }
];

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );
    renderProducts(filtered);
});

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const cat = this.dataset.category;
        if (cat === "All") {
            renderProducts(products);
        } else {
            renderProducts(products.filter(p => p.category === cat));
        }
    });
});

function renderProducts(list = products) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    list.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            <p class="desc">${product.description}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productCard);
    });
}

async function loadProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <a href="product.html?id=${product.id}">View Details</a>
        `;
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

window.onload = () => {
    renderProducts(products);
};
