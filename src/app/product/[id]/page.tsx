import { products } from '../../../data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return `
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-4">Product Not Found</h1>
          <p class="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <a href="/" class="btn btn-primary">Return to Home</a>
        </div>
      </div>
    `;
  }

  const colorButtons = product.colors.map(color => 
    `<button class="px-4 py-2 border rounded-md mr-2 mb-2 hover:border-accent">${color}</button>`
  ).join('');

  const sizeButtons = product.sizes.map(size => 
    `<button class="px-4 py-2 border rounded-md mr-2 mb-2 hover:border-accent">${size}</button>`
  ).join('');

  // Product recommendations - products in the same category
  const recommendations = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map(rec => `
      <div class="card">
        <img src="${rec.image}" alt="${rec.name}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-md font-semibold">${rec.name}</h3>
          <div class="mt-2">
            ${rec.salePrice ? 
              `<span class="text-accent font-bold">$${rec.salePrice.toFixed(2)}</span>
               <span class="text-gray-500 line-through ml-2">$${rec.price.toFixed(2)}</span>` : 
              `<span class="font-bold">$${rec.price.toFixed(2)}</span>`
            }
          </div>
        </div>
      </div>
    `)
    .join('');

  return `
    <div class="min-h-screen">
      <!-- Breadcrumbs -->
      <div class="bg-gray-100 py-3">
        <div class="container">
          <div class="text-sm text-gray-600">
            <a href="/" class="hover:text-accent">Home</a> / 
            <a href="/categories/${product.category}" class="hover:text-accent">${product.category === 'men' ? "Men's" : "Women's"}</a> / 
            <a href="/categories/${product.category}/${product.subcategory}" class="hover:text-accent">${product.subcategory}</a> / 
            <span class="text-gray-900">${product.name}</span>
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <section class="py-12">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Product Images -->
            <div>
              <div class="mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src="${product.image}" 
                  alt="${product.name}" 
                  class="w-full h-96 object-cover object-center"
                />
              </div>
              <div class="grid grid-cols-4 gap-2">
                <div class="border rounded-md overflow-hidden cursor-pointer hover:border-accent">
                  <img src="${product.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
                <div class="border rounded-md overflow-hidden cursor-pointer">
                  <img src="${product.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
                <div class="border rounded-md overflow-hidden cursor-pointer">
                  <img src="${product.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
                <div class="border rounded-md overflow-hidden cursor-pointer">
                  <img src="${product.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
              </div>
            </div>

            <!-- Product Info -->
            <div>
              <h1 class="text-3xl font-bold mb-2">${product.name}</h1>
              <div class="flex items-center mb-4">
                <div class="text-yellow-400">★★★★★</div>
                <span class="text-sm ml-1">${product.rating} (${product.reviews} reviews)</span>
              </div>

              <div class="mb-6">
                ${product.salePrice ? 
                  `<span class="text-accent text-2xl font-bold">$${product.salePrice.toFixed(2)}</span>
                   <span class="text-gray-500 line-through ml-2">$${product.price.toFixed(2)}</span>` : 
                  `<span class="text-2xl font-bold">$${product.price.toFixed(2)}</span>`
                }
              </div>

              <p class="text-gray-600 mb-6">${product.description}</p>

              <div class="mb-6">
                <h3 class="font-semibold mb-3">Color</h3>
                <div class="flex flex-wrap">
                  ${colorButtons}
                </div>
              </div>

              <div class="mb-6">
                <h3 class="font-semibold mb-3">Size</h3>
                <div class="flex flex-wrap">
                  ${sizeButtons}
                </div>
              </div>

              <div class="mb-6 flex items-center">
                <div class="mr-4">
                  <label for="quantity" class="block mb-2 font-semibold">Quantity</label>
                  <div class="flex border rounded-md w-32">
                    <button class="px-3 py-2 bg-gray-100 hover:bg-gray-200">-</button>
                    <input type="number" id="quantity" min="1" value="1" class="w-full text-center border-x" />
                    <button class="px-3 py-2 bg-gray-100 hover:bg-gray-200">+</button>
                  </div>
                </div>
              </div>

              <div class="flex space-x-4">
                <button class="btn btn-primary py-3 px-8 flex-grow">Add to Cart</button>
                <button class="btn border border-gray-300 py-3 px-4 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Product Details Tabs -->
      <section class="py-8 bg-gray-50">
        <div class="container">
          <div class="border-b border-gray-300">
            <div class="flex">
              <button class="px-6 py-3 font-semibold border-b-2 border-accent">Description</button>
              <button class="px-6 py-3 text-gray-600 hover:text-black">Details</button>
              <button class="px-6 py-3 text-gray-600 hover:text-black">Reviews (${product.reviews})</button>
            </div>
          </div>
          <div class="py-6">
            <p class="mb-4">${product.description}</p>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero mollis rhoncus. Proin sit amet ultrices dolor. Duis nec ipsum quis est aliquam interdum et vel dolor. Donec aliquam tellus eget magna ornare efficitur.</p>
            <p>Phasellus sodales placerat elit, non tempor sem. Vivamus at risus augue. Phasellus vel justo odio. Quisque rhoncus consequat quam, vel fringilla nibh blandit ac.</p>
          </div>
        </div>
      </section>

      <!-- You May Also Like -->
      <section class="py-12">
        <div class="container">
          <h2 class="text-2xl font-bold mb-6">You May Also Like</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${recommendations}
          </div>
        </div>
      </section>
    </div>
  `;
} 