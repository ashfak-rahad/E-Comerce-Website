import { products } from '../data/products';

export default function HomePage() {
  // For non-JSX approach, we'll build HTML strings
  const featuredMenProducts = products
    .filter(p => p.category === 'men')
    .slice(0, 3)
    .map(product => `
      <div class="card">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">${product.rating} (${product.reviews})</span>
          </div>
          <div class="mt-2">
            ${product.salePrice ? 
              `<span class="text-accent font-bold">$${product.salePrice.toFixed(2)}</span>
               <span class="text-gray-500 line-through ml-2">$${product.price.toFixed(2)}</span>` : 
              `<span class="font-bold">$${product.price.toFixed(2)}</span>`
            }
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    `)
    .join('');

  const featuredWomenProducts = products
    .filter(p => p.category === 'women')
    .slice(0, 3)
    .map(product => `
      <div class="card">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">${product.rating} (${product.reviews})</span>
          </div>
          <div class="mt-2">
            ${product.salePrice ? 
              `<span class="text-accent font-bold">$${product.salePrice.toFixed(2)}</span>
               <span class="text-gray-500 line-through ml-2">$${product.price.toFixed(2)}</span>` : 
              `<span class="font-bold">$${product.price.toFixed(2)}</span>`
            }
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    `)
    .join('');

  // Construct the full HTML
  return `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="bg-primary text-white py-16">
        <div class="container text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">StyleHub</h1>
          <p class="text-xl md:text-2xl mb-8">Discover Your Personal Style</p>
          <div class="flex justify-center gap-4">
            <a href="/categories/men" class="btn btn-primary px-8 py-3">Shop Men</a>
            <a href="/categories/women" class="btn btn-secondary px-8 py-3">Shop Women</a>
          </div>
        </div>
      </section>

      <!-- Men's Featured Products -->
      <section class="py-12 bg-gray-50">
        <div class="container">
          <h2 class="text-3xl font-bold mb-8">Men's Featured Collection</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${featuredMenProducts}
          </div>
          <div class="text-center mt-8">
            <a href="/categories/men" class="btn btn-secondary px-8 py-3">View All Men's</a>
          </div>
        </div>
      </section>

      <!-- Women's Featured Products -->
      <section class="py-12">
        <div class="container">
          <h2 class="text-3xl font-bold mb-8">Women's Featured Collection</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${featuredWomenProducts}
          </div>
          <div class="text-center mt-8">
            <a href="/categories/women" class="btn btn-secondary px-8 py-3">View All Women's</a>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="py-12 bg-gray-100">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="text-accent text-4xl mb-4">🚚</div>
              <h3 class="text-xl font-semibold mb-2">Free Shipping</h3>
              <p class="text-gray-600">On all orders over $50</p>
            </div>
            <div class="text-center p-6">
              <div class="text-accent text-4xl mb-4">🔄</div>
              <h3 class="text-xl font-semibold mb-2">Easy Returns</h3>
              <p class="text-gray-600">30-day return policy</p>
            </div>
            <div class="text-center p-6">
              <div class="text-accent text-4xl mb-4">🔒</div>
              <h3 class="text-xl font-semibold mb-2">Secure Payments</h3>
              <p class="text-gray-600">Protected by industry-leading encryption</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="py-12 bg-secondary text-white">
        <div class="container text-center">
          <h2 class="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p class="mb-6 max-w-2xl mx-auto">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div class="flex max-w-md mx-auto">
            <input type="email" placeholder="Your email address" class="flex-grow px-4 py-2 rounded-l-md" />
            <button class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-primary text-white py-12">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">StyleHub</h3>
              <p class="text-gray-300">Your destination for quality fashion.</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Shop</h4>
              <ul class="space-y-2">
                <li><a href="/categories/men" class="text-gray-300 hover:text-white">Men</a></li>
                <li><a href="/categories/women" class="text-gray-300 hover:text-white">Women</a></li>
                <li><a href="/sale" class="text-gray-300 hover:text-white">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Help</h4>
              <ul class="space-y-2">
                <li><a href="/shipping" class="text-gray-300 hover:text-white">Shipping</a></li>
                <li><a href="/returns" class="text-gray-300 hover:text-white">Returns</a></li>
                <li><a href="/contact" class="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" class="text-gray-300 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2023 StyleHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `;
} 