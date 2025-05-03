3:I[5613,[],""]
4:I[1778,[],""]
2:T2185,
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
                    <button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">shirts</button><button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">pants</button><button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">outerwear</button><button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">knitwear</button>
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
                <p class="text-gray-600">5 products</p>
                <select class="border p-2 rounded-md">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>New Arrivals</option>
                </select>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
      <div class="card">
        <img 
          src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Classic Fit Oxford Shirt" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">Classic Fit Oxford Shirt</h3>
          <p class="text-sm text-gray-500">shirts</p>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">4.8 (128)</span>
          </div>
          <div class="mt-2">
            <span class="font-bold">$49.99</span>
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    
      <div class="card">
        <img 
          src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Slim Fit Chino Pants" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">Slim Fit Chino Pants</h3>
          <p class="text-sm text-gray-500">pants</p>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">4.6 (95)</span>
          </div>
          <div class="mt-2">
            <span class="font-bold">$59.99</span>
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    
      <div class="card">
        <img 
          src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Wool Blend Overcoat" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">Wool Blend Overcoat</h3>
          <p class="text-sm text-gray-500">outerwear</p>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">4.9 (67)</span>
          </div>
          <div class="mt-2">
            <span class="text-accent font-bold">$149.99</span>
               <span class="text-gray-500 line-through ml-2">$189.99</span>
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    
      <div class="card">
        <img 
          src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Premium Denim Jeans" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">Premium Denim Jeans</h3>
          <p class="text-sm text-gray-500">pants</p>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">4.7 (156)</span>
          </div>
          <div class="mt-2">
            <span class="font-bold">$79.99</span>
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    
      <div class="card">
        <img 
          src="https://images.unsplash.com/photo-1608030609037-6f8e5ebb0e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Merino Wool Sweater" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">Merino Wool Sweater</h3>
          <p class="text-sm text-gray-500">knitwear</p>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">4.8 (82)</span>
          </div>
          <div class="mt-2">
            <span class="text-accent font-bold">$69.99</span>
               <span class="text-gray-500 line-through ml-2">$89.99</span>
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    
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
  0:["voRP_yjbnfcdoR3ZAN5yU",[[["",{"children":["categories",{"children":["men",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",{"children":["categories",{"children":["men",{"children":["__PAGE__",{},["$L1","$2",null]]},["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","categories","children","men","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","categories","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},[null,"\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <title>StyleHub - Men & Women Fashion</title>\n        <meta name=\"description\" content=\"Discover the latest trends in men and women clothing\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n      </head>\n      <body>[object Object]</body>\n    </html>\n  ",null]],[null,"$L5"]]]]
5:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"StyleHub - Men & Women Fashion"}],["$","meta","3",{"name":"description","content":"Discover the latest trends in men and women clothing"}]]
1:null
