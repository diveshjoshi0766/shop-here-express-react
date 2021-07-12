import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      name: 'divesh',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }
  ],
  products: [
    {

      name: 'ASUS Celeron Dual Core',
      category: 'Laptop',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41CkeQXMMQL.jpg',
      price: 50000,
      countInStock: 10,
      brand: 'Asus',
      rating: 4.5,
      numReviews: 10,
      description: '4 GB/1 TB HDD/Windows 10 Home X515MA-BR004T Thin and Light Laptop (15.6 inch, Transparent Silver, 1.80 Kg',
    },
    {

      name: 'ASUS TUF Gaming F15 Laptop',
      category: 'Laptop',
      image: 'https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SX569_.jpg',
      price: 61990,
      countInStock: 20,
      brand: 'Asus',
      rating: 4.0,
      numReviews: 10,
      description: '15.6" FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN257T',
    },
    {

      name: 'Dell Inspiron 3501',
      category: 'Laptop',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Yre3zNXIS._SL1000_.jpg',
      price: 44000,
      countInStock: 3,
      brand: 'Dell',
      rating: 4.8,
      numReviews: 17,
      description: '15.6" FHD Display Laptop (11th Gen i3-1115G4/ 8GB / 1 TB HDD/ Integrated Graphics/ Win 10 + MSO/ Soft Mint Color) D560424WIN9S',
    },
    {
 
      name: 'AmazonBasics Urban Laptop and Tablet Case Bag',
      category: 'Bags',
      image: 'https://images-na.ssl-images-amazon.com/images/I/A17nk2WhDnL._SX679_.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Amazon',
      rating: 4.5,
      numReviews: 14,
      description: 'Fully-padded laptop compartment fits most MacBooks and laptops up to 15 inch',
    },
    {

      name: 'WildHorn 100% Genuine Leather (15.6 inch) Laptop Messenger Bag',
      category: 'Bags',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91fqi1jGbYL._SX679_.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'Laptop Compatibility: Yes, Laptop Size: 15.5Strap Type: Adjustable 6 Months',
    },
    {

      name: 'WildHorn Leather Laptop Messenger Bag for Men',
      category: 'Bags',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81bRpusG7KS._UX695_.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'CUSTOMER AWARENESS: We present to you WildHorn Genuine Leather messenger bag.',
    },
    {

      name: 'ASUS Celeron Dual Core',
      category: 'Laptop',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41CkeQXMMQL.jpg',
      price: 50000,
      countInStock: 10,
      brand: 'Asus',
      rating: 4.5,
      numReviews: 10,
      description: '4 GB/1 TB HDD/Windows 10 Home X515MA-BR004T Thin and Light Laptop (15.6 inch, Transparent Silver, 1.80 Kg',
    },
    {

      name: 'ASUS TUF Gaming F15 Laptop',
      category: 'Laptop',
      image: 'https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SX569_.jpg',
      price: 61990,
      countInStock: 20,
      brand: 'Asus',
      rating: 4.0,
      numReviews: 10,
      description: '15.6" FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN257T',
    },
    {

      name: 'Dell Inspiron 3501',
      category: 'Laptop',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Yre3zNXIS._SL1000_.jpg',
      price: 44000,
      countInStock: 3,
      brand: 'Dell',
      rating: 4.8,
      numReviews: 17,
      description: '15.6" FHD Display Laptop (11th Gen i3-1115G4/ 8GB / 1 TB HDD/ Integrated Graphics/ Win 10 + MSO/ Soft Mint Color) D560424WIN9S',
    },
    {

      name: 'AmazonBasics Urban Laptop and Tablet Case Bag',
      category: 'Bags',
      image: 'https://images-na.ssl-images-amazon.com/images/I/A17nk2WhDnL._SX679_.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Amazon',
      rating: 4.5,
      numReviews: 14,
      description: 'Fully-padded laptop compartment fits most MacBooks and laptops up to 15 inch',
    },
    {

      name: 'WildHorn 100% Genuine Leather (15.6 inch) Laptop Messenger Bag',
      category: 'Bags',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91fqi1jGbYL._SX679_.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'Laptop Compatibility: Yes, Laptop Size: 15.5Strap Type: Adjustable 6 Months',
    },
    {

      name: 'WildHorn Leather Laptop Messenger Bag for Men',
      category: 'Bags',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81bRpusG7KS._UX695_.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'CUSTOMER AWARENESS: We present to you WildHorn Genuine Leather messenger bag.',
    },
  ],
};
export default data;