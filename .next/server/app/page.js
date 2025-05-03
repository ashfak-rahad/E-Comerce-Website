(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},50:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>g,tree:()=>l});var i=s(482),a=s(9108),r=s(2563),o=s.n(r),c=s(8300),n={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>c[e]);s.d(t,n);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1136)),"C:\\cursor ai\\e-comerce-website\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,1342)),"C:\\cursor ai\\e-comerce-website\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\cursor ai\\e-comerce-website\\src\\app\\page.tsx"],m="/page",p={require:s,loadChunk:()=>Promise.resolve()},g=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6534:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},5303:()=>{},1342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,metadata:()=>i});let i={title:"StyleHub - Men & Women Fashion",description:"Discover the latest trends in men and women clothing"};function a(e){return`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${i.title}</title>
        <meta name="description" content="${i.description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>${String(e.children)}</body>
    </html>
  `}},1136:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(636);function a(){let e=i.R.filter(e=>"men"===e.category).slice(0,3).map(e=>`
      <div class="card">
        <img 
          src="${e.image}" 
          alt="${e.name}" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">${e.name}</h3>
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
    `).join(""),t=i.R.filter(e=>"women"===e.category).slice(0,3).map(e=>`
      <div class="card">
        <img 
          src="${e.image}" 
          alt="${e.name}" 
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">${e.name}</h3>
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
    `).join("");return`
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
            ${e}
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
            ${t}
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
  `}},636:(e,t,s)=>{"use strict";s.d(t,{R:()=>i});let i=[{id:"m1",name:"Classic Fit Oxford Shirt",category:"men",subcategory:"shirts",price:49.99,image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"A timeless Oxford shirt in a comfortable classic fit, perfect for any occasion.",sizes:["S","M","L","XL","XXL"],colors:["White","Blue","Light Blue"],rating:4.8,reviews:128},{id:"m2",name:"Slim Fit Chino Pants",category:"men",subcategory:"pants",price:59.99,image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Modern slim fit chinos made from premium cotton with a touch of stretch for comfort.",sizes:["28","30","32","34","36","38"],colors:["Khaki","Navy","Olive","Black"],rating:4.6,reviews:95},{id:"m3",name:"Wool Blend Overcoat",category:"men",subcategory:"outerwear",price:189.99,salePrice:149.99,image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"A sophisticated wool blend overcoat with a modern cut, perfect for colder weather.",sizes:["S","M","L","XL"],colors:["Charcoal","Camel","Navy"],rating:4.9,reviews:67},{id:"m4",name:"Premium Denim Jeans",category:"men",subcategory:"pants",price:79.99,image:"https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"High-quality denim jeans with a classic straight fit, made from premium selvedge fabric.",sizes:["28","30","32","34","36","38"],colors:["Dark Blue","Medium Wash","Black"],rating:4.7,reviews:156},{id:"m5",name:"Merino Wool Sweater",category:"men",subcategory:"knitwear",price:89.99,salePrice:69.99,image:"https://images.unsplash.com/photo-1608030609037-6f8e5ebb0e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Soft and warm Merino wool sweater in a versatile crew neck design.",sizes:["S","M","L","XL","XXL"],colors:["Grey","Navy","Burgundy","Green"],rating:4.8,reviews:82},{id:"w1",name:"Silk Blouse",category:"women",subcategory:"tops",price:79.99,image:"https://images.unsplash.com/photo-1602371021580-22aca4adbced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Elegant silk blouse with a relaxed fit and timeless design.",sizes:["XS","S","M","L","XL"],colors:["Ivory","Black","Blush","Navy"],rating:4.7,reviews:118},{id:"w2",name:"High-Waisted Tailored Pants",category:"women",subcategory:"pants",price:89.99,image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Sophisticated high-waisted pants with a tailored fit, perfect for office or evening wear.",sizes:["0","2","4","6","8","10","12","14"],colors:["Black","Navy","Camel"],rating:4.8,reviews:96},{id:"w3",name:"Cashmere Cardigan",category:"women",subcategory:"knitwear",price:129.99,salePrice:99.99,image:"https://images.unsplash.com/photo-1631541911222-f7fe7aa4749e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Luxuriously soft cashmere cardigan in a relaxed, versatile design.",sizes:["XS","S","M","L","XL"],colors:["Grey","Cream","Black","Dusty Rose"],rating:4.9,reviews:74},{id:"w4",name:"A-Line Midi Skirt",category:"women",subcategory:"skirts",price:69.99,image:"https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Elegant A-line midi skirt with a flattering silhouette, suitable for any occasion.",sizes:["0","2","4","6","8","10","12","14"],colors:["Black","Navy","Burgundy","Taupe"],rating:4.7,reviews:85},{id:"w5",name:"Wrap Dress",category:"women",subcategory:"dresses",price:99.99,salePrice:79.99,image:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Flattering wrap dress in a flowy fabric with a timeless design.",sizes:["XS","S","M","L","XL"],colors:["Black","Navy","Red","Floral Print"],rating:4.8,reviews:132}]}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[22],()=>s(50));module.exports=i})();