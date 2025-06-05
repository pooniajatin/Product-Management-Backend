require('dotenv').config()
const connectDB=require('./db/connect');
const Product =require('./models/product')


const products = 
[
  {
    "name": "Wireless Bluetooth Headphones",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    "price": 79.99,
    "description": "Premium wireless Bluetooth headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    "rating": 4.5
  },
  {
    "name": "Stainless Steel Water Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    "price": 24.99,
    "description": "Eco-friendly double-wall insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. 32oz capacity.",
    "rating": 4.7
  },
  {
    "name": "Mechanical Gaming Keyboard",
    "imageUrl": "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    "price": 129.99,
    "description": "RGB backlit mechanical keyboard with blue switches, perfect for gaming and typing. Durable aluminum frame with customizable keys.",
    "rating": 4.6
  },
  {
    "name": "Organic Cotton T-Shirt",
    "imageUrl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    "price": 19.99,
    "description": "Comfortable 100% organic cotton t-shirt with a classic fit. Available in multiple colors and environmentally sustainable.",
    "rating": 4.3
  },
  {
    "name": "Smart Fitness Watch",
    "imageUrl": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop",
    "price": 199.99,
    "description": "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life. Water-resistant design.",
    "rating": 4.4
  },
  {
    "name": "Ceramic Coffee Mug Set",
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    "price": 34.99,
    "description": "Set of 4 handcrafted ceramic coffee mugs with unique glazed finish. Microwave and dishwasher safe. Perfect for daily use.",
    "rating": 4.8
  },
  {
    "name": "Laptop Backpack",
    "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    "price": 49.99,
    "description": "Durable laptop backpack with padded compartment for 15.6 laptops, multiple pockets, and water-resistant material. Perfect for students and professionals.",
    "rating": 4.5
  },
  {
    "name": "LED Desk Lamp",
    "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    "price": 39.99,
    "description": "Adjustable LED desk lamp with touch control, multiple brightness levels, and USB charging port. Eye-caring light for work and study.",
    "rating": 4.6
  },
  {
    "name": "Yoga Mat",
    "imageUrl": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    "price": 29.99,
    "description": "Non-slip yoga mat made from eco-friendly TPE material. 6mm thick for comfort and stability during yoga and exercise sessions.",
    "rating": 4.4
  },
  {
    "name": "Portable Phone Charger",
    "imageUrl": "https://images.unsplash.com/photo-1609592094538-94936deac38f?w=500&h=500&fit=crop",
    "price": 25.99,
    "description": "10,000mAh portable power bank with fast charging technology. Compact design with dual USB ports and LED battery indicator.",
    "rating": 4.3
  },
  {
    "name": "Indoor Plant Pot Set",
    "imageUrl": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    "price": 18.99,
    "description": "Set of 3 ceramic plant pots with drainage holes and saucers. Perfect for small indoor plants and succulents. Modern minimalist design.",
    "rating": 4.7
  },
  {
    "name": "Bluetooth Speaker",
    "imageUrl": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    "price": 59.99,
    "description": "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures.",
    "rating": 4.5
  },
  {
    "name": "Sunglasses",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
    "price": 89.99,
    "description": "UV400 polarized sunglasses with lightweight titanium frame. Stylish design offering maximum protection and comfort for all-day wear.",
    "rating": 4.6
  },
  {
    "name": "Kitchen Knife Set",
    "imageUrl": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop",
    "price": 79.99,
    "description": "Professional 5-piece stainless steel kitchen knife set with wooden block. Sharp, durable blades perfect for all cooking needs.",
    "rating": 4.8
  },
  {
    "name": "Running Shoes",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    "price": 119.99,
    "description": "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance during long runs.",
    "rating": 4.4
  }
]

const start =async()=>{
  try {
    await connectDB(process.env.DB_URL)
    await Product.deleteMany();
    await Product.create(products)
     process.exit(0) 
  } catch (error) {
    console.log(error);
     process.exit(1) 
    
  }
}
start();
