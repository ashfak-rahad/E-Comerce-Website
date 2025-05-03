import { products } from '../../../data/products';

export default function MenCategoryPage() {
  const menProducts = products
    .filter(p => p.category === 'men')
    .map(product => `
      <div class="card">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-sm text-gray-500">${product.subcategory}</p>
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

  // Group products by subcategory
  const subcategories = [...new Set(products.filter(p => p.category === 'men').map(p => p.subcategory))];
  const subcategoryButtons = subcategories.map(sub => 
    `<button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">${sub}</button>`
  ).join('');

  return `
    <div class="min-h-screen">
      <!-- Header would go here in a real app -->

      <!-- Category Banner -->
      <section class="bg-primary text-white py-16">
        <div class="container text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Men's Collection</h1>
          <p class="text-xl mb-0">Find your style with our latest men's fashion</p>
        </div>
      </section>

      <!-- Filters and Products -->
      <section class="py-12">
        <div class="container">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Sidebar Filters -->
            <div class="w-full md:w-1/4">
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-bold mb-4">Filters</h2>
                
                <div class="mb-6">
                  <h3 class="font-semibold mb-3">Categories</h3>
                  <div class="space-y-2">
                    ${subcategoryButtons}
                  </div>
                </div>
                
                <div class="mb-6">
                  <h3 class="font-semibold mb-3">Price Range</h3>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <input type="checkbox" id="price1" class="mr-2">
                      <label for="price1">Under $50</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="price2" class="mr-2">
                      <label for="price2">$50 - $100</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="price3" class="mr-2">
                      <label for="price3">$100 - $200</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="price4" class="mr-2">
                      <label for="price4">$200+</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="font-semibold mb-3">Colors</h3>
                  <div class="flex flex-wrap gap-2">
                    <div class="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
                    <div class="w-6 h-6 rounded-full bg-blue-600 cursor-pointer"></div>
                    <div class="w-6 h-6 rounded-full bg-gray-500 cursor-pointer"></div>
                    <div class="w-6 h-6 rounded-full bg-green-700 cursor-pointer"></div>
                    <div class="w-6 h-6 rounded-full bg-white border border-gray-300 cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Products Grid -->
            <div class="w-full md:w-3/4">
              <div class="flex justify-between items-center mb-6">
                <p class="text-gray-600">${products.filter(p => p.category === 'men').length} products</p>
                <select class="border p-2 rounded-md">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>New Arrivals</option>
                </select>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menProducts}
              </div>
              
              <!-- Pagination -->
              <div class="flex justify-center mt-10">
                <div class="flex">
                  <a class="px-4 py-2 border border-gray-300 rounded-l-md bg-primary text-white">1</a>
                  <a class="px-4 py-2 border-t border-b border-gray-300 hover:bg-gray-100">2</a>
                  <a class="px-4 py-2 border border-gray-300 rounded-r-md hover:bg-gray-100">3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer would go here in a real app -->
    </div>
  `;
} 