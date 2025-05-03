(()=>{var e={};e.id=559,e.ids=[559],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6988:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>l});var r=i(482),s=i(9108),a=i(2563),o=i.n(a),n=i(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);i.d(t,c);let l=["",{children:["categories",{children:["women",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,9341)),"C:\\cursor ai\\e-comerce-website\\src\\app\\categories\\women\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,1342)),"C:\\cursor ai\\e-comerce-website\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\cursor ai\\e-comerce-website\\src\\app\\categories\\women\\page.tsx"],p="/categories/women/page",m={require:i,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/categories/women/page",pathname:"/categories/women",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6534:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2583,23)),Promise.resolve().then(i.t.bind(i,6840,23)),Promise.resolve().then(i.t.bind(i,8771,23)),Promise.resolve().then(i.t.bind(i,3225,23)),Promise.resolve().then(i.t.bind(i,9295,23)),Promise.resolve().then(i.t.bind(i,3982,23))},5303:()=>{},9341:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(636);function s(){let e=r.R.filter(e=>"women"===e.category).map(e=>`
      <div class="card">
        <img 
          src="${e.image}" 
          alt="${e.name}" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">${e.name}</h3>
          <p class="text-sm text-gray-500">${e.subcategory}</p>
          <div class="flex items-center mt-1">
            <div class="text-yellow-400">★★★★★</div>
            <span class="text-sm ml-1">${e.rating} (${e.reviews})</span>
          </div>
          <div class="mt-2">
            ${e.salePrice?`<span class="text-accent font-bold">$${e.salePrice.toFixed(2)}</span>
               <span class="text-gray-500 line-through ml-2">$${e.price.toFixed(2)}</span>`:`<span class="font-bold">$${e.price.toFixed(2)}</span>`}
          </div>
          <button class="btn btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </div>
    `).join(""),t=[...new Set(r.R.filter(e=>"women"===e.category).map(e=>e.subcategory))].map(e=>`<button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">${e}</button>`).join("");return`
    <div class="min-h-screen">
      <!-- Header would go here in a real app -->

      <!-- Category Banner -->
      <section class="bg-primary text-white py-16">
        <div class="container text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Women's Collection</h1>
          <p class="text-xl mb-0">Discover our latest styles for women</p>
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
                    ${t}
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
                    <div class="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div>
                    <div class="w-6 h-6 rounded-full bg-pink-300 cursor-pointer"></div>
                    <div class="w-6 h-6 rounded-full bg-white border border-gray-300 cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Products Grid -->
            <div class="w-full md:w-3/4">
              <div class="flex justify-between items-center mb-6">
                <p class="text-gray-600">${r.R.filter(e=>"women"===e.category).length} products</p>
                <select class="border p-2 rounded-md">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>New Arrivals</option>
                </select>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${e}
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
  `}},1342:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s,metadata:()=>r});let r={title:"StyleHub - Men & Women Fashion",description:"Discover the latest trends in men and women clothing"};function s(e){return`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${r.title}</title>
        <meta name="description" content="${r.description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>${String(e.children)}</body>
    </html>
  `}},636:(e,t,i)=>{"use strict";i.d(t,{R:()=>r});let r=[{id:"m1",name:"Classic Fit Oxford Shirt",category:"men",subcategory:"shirts",price:49.99,image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"A timeless Oxford shirt in a comfortable classic fit, perfect for any occasion.",sizes:["S","M","L","XL","XXL"],colors:["White","Blue","Light Blue"],rating:4.8,reviews:128},{id:"m2",name:"Slim Fit Chino Pants",category:"men",subcategory:"pants",price:59.99,image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Modern slim fit chinos made from premium cotton with a touch of stretch for comfort.",sizes:["28","30","32","34","36","38"],colors:["Khaki","Navy","Olive","Black"],rating:4.6,reviews:95},{id:"m3",name:"Wool Blend Overcoat",category:"men",subcategory:"outerwear",price:189.99,salePrice:149.99,image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"A sophisticated wool blend overcoat with a modern cut, perfect for colder weather.",sizes:["S","M","L","XL"],colors:["Charcoal","Camel","Navy"],rating:4.9,reviews:67},{id:"m4",name:"Premium Denim Jeans",category:"men",subcategory:"pants",price:79.99,image:"https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"High-quality denim jeans with a classic straight fit, made from premium selvedge fabric.",sizes:["28","30","32","34","36","38"],colors:["Dark Blue","Medium Wash","Black"],rating:4.7,reviews:156},{id:"m5",name:"Merino Wool Sweater",category:"men",subcategory:"knitwear",price:89.99,salePrice:69.99,image:"https://images.unsplash.com/photo-1608030609037-6f8e5ebb0e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Soft and warm Merino wool sweater in a versatile crew neck design.",sizes:["S","M","L","XL","XXL"],colors:["Grey","Navy","Burgundy","Green"],rating:4.8,reviews:82},{id:"w1",name:"Silk Blouse",category:"women",subcategory:"tops",price:79.99,image:"https://images.unsplash.com/photo-1602371021580-22aca4adbced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Elegant silk blouse with a relaxed fit and timeless design.",sizes:["XS","S","M","L","XL"],colors:["Ivory","Black","Blush","Navy"],rating:4.7,reviews:118},{id:"w2",name:"High-Waisted Tailored Pants",category:"women",subcategory:"pants",price:89.99,image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Sophisticated high-waisted pants with a tailored fit, perfect for office or evening wear.",sizes:["0","2","4","6","8","10","12","14"],colors:["Black","Navy","Camel"],rating:4.8,reviews:96},{id:"w3",name:"Cashmere Cardigan",category:"women",subcategory:"knitwear",price:129.99,salePrice:99.99,image:"https://images.unsplash.com/photo-1631541911222-f7fe7aa4749e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Luxuriously soft cashmere cardigan in a relaxed, versatile design.",sizes:["XS","S","M","L","XL"],colors:["Grey","Cream","Black","Dusty Rose"],rating:4.9,reviews:74},{id:"w4",name:"A-Line Midi Skirt",category:"women",subcategory:"skirts",price:69.99,image:"https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Elegant A-line midi skirt with a flattering silhouette, suitable for any occasion.",sizes:["0","2","4","6","8","10","12","14"],colors:["Black","Navy","Burgundy","Taupe"],rating:4.7,reviews:85},{id:"w5",name:"Wrap Dress",category:"women",subcategory:"dresses",price:99.99,salePrice:79.99,image:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Flattering wrap dress in a flowy fabric with a timeless design.",sizes:["XS","S","M","L","XL"],colors:["Black","Navy","Red","Floral Print"],rating:4.8,reviews:132}]}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[22],()=>i(6988));module.exports=r})();