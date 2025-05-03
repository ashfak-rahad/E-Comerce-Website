export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women';
  subcategory: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 'm1',
    name: 'Classic Fit Oxford Shirt',
    category: 'men',
    subcategory: 'shirts',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A timeless Oxford shirt in a comfortable classic fit, perfect for any occasion.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Light Blue'],
    rating: 4.8,
    reviews: 128
  },
  {
    id: 'm2',
    name: 'Slim Fit Chino Pants',
    category: 'men',
    subcategory: 'pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Modern slim fit chinos made from premium cotton with a touch of stretch for comfort.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    rating: 4.6,
    reviews: 95
  },
  {
    id: 'm3',
    name: 'Wool Blend Overcoat',
    category: 'men',
    subcategory: 'outerwear',
    price: 189.99,
    salePrice: 149.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A sophisticated wool blend overcoat with a modern cut, perfect for colder weather.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Camel', 'Navy'],
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'm4',
    name: 'Premium Denim Jeans',
    category: 'men',
    subcategory: 'pants',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'High-quality denim jeans with a classic straight fit, made from premium selvedge fabric.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Medium Wash', 'Black'],
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'm5',
    name: 'Merino Wool Sweater',
    category: 'men',
    subcategory: 'knitwear',
    price: 89.99,
    salePrice: 69.99,
    image: 'https://images.unsplash.com/photo-1608030609037-6f8e5ebb0e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Soft and warm Merino wool sweater in a versatile crew neck design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Navy', 'Burgundy', 'Green'],
    rating: 4.8,
    reviews: 82
  },
  {
    id: 'w1',
    name: 'Silk Blouse',
    category: 'women',
    subcategory: 'tops',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1602371021580-22aca4adbced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Elegant silk blouse with a relaxed fit and timeless design.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Black', 'Blush', 'Navy'],
    rating: 4.7,
    reviews: 118
  },
  {
    id: 'w2',
    name: 'High-Waisted Tailored Pants',
    category: 'women',
    subcategory: 'pants',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Sophisticated high-waisted pants with a tailored fit, perfect for office or evening wear.',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    colors: ['Black', 'Navy', 'Camel'],
    rating: 4.8,
    reviews: 96
  },
  {
    id: 'w3',
    name: 'Cashmere Cardigan',
    category: 'women',
    subcategory: 'knitwear',
    price: 129.99,
    salePrice: 99.99,
    image: 'https://images.unsplash.com/photo-1631541911222-f7fe7aa4749e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Luxuriously soft cashmere cardigan in a relaxed, versatile design.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Cream', 'Black', 'Dusty Rose'],
    rating: 4.9,
    reviews: 74
  },
  {
    id: 'w4',
    name: 'A-Line Midi Skirt',
    category: 'women',
    subcategory: 'skirts',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Elegant A-line midi skirt with a flattering silhouette, suitable for any occasion.',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    colors: ['Black', 'Navy', 'Burgundy', 'Taupe'],
    rating: 4.7,
    reviews: 85
  },
  {
    id: 'w5',
    name: 'Wrap Dress',
    category: 'women',
    subcategory: 'dresses',
    price: 99.99,
    salePrice: 79.99,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Flattering wrap dress in a flowy fabric with a timeless design.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Red', 'Floral Print'],
    rating: 4.8,
    reviews: 132
  }
]; 