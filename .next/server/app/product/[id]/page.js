(()=>{var e={};e.id=188,e.ids=[188],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6420:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>l});var i=s(482),r=s(9108),a=s(2563),o=s.n(a),c=s(8300),n={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>c[e]);s.d(t,n);let l=["",{children:["product",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6464)),"C:\\cursor ai\\e-comerce-website\\src\\app\\product\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,1342)),"C:\\cursor ai\\e-comerce-website\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\cursor ai\\e-comerce-website\\src\\app\\product\\[id]\\page.tsx"],m="/product/[id]/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/product/[id]/page",pathname:"/product/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6534:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},5303:()=>{},1342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r,metadata:()=>i});let i={title:"StyleHub - Men & Women Fashion",description:"Discover the latest trends in men and women clothing"};function r(e){return`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${i.title}</title>
        <meta name="description" content="${i.description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>${String(e.children)}</body>
    </html>
  `}},6464:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(636);function r({params:e}){let t=i.R.find(t=>t.id===e.id);if(!t)return`
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-4">Product Not Found</h1>
          <p class="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <a href="/" class="btn btn-primary">Return to Home</a>
        </div>
      </div>
    `;let s=t.colors.map(e=>`<button class="px-4 py-2 border rounded-md mr-2 mb-2 hover:border-accent">${e}</button>`).join(""),r=t.sizes.map(e=>`<button class="px-4 py-2 border rounded-md mr-2 mb-2 hover:border-accent">${e}</button>`).join(""),a=i.R.filter(e=>e.category===t.category&&e.id!==t.id).slice(0,4).map(e=>`
      <div class="card">
        <img src="${e.image}" alt="${e.name}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-md font-semibold">${e.name}</h3>
          <div class="mt-2">
            ${e.salePrice?`<span class="text-accent font-bold">$${e.salePrice.toFixed(2)}</span>
               <span class="text-gray-500 line-through ml-2">$${e.price.toFixed(2)}</span>`:`<span class="font-bold">$${e.price.toFixed(2)}</span>`}
          </div>
        </div>
      </div>
    `).join("");return`
    <div class="min-h-screen">
      <!-- Breadcrumbs -->
      <div class="bg-gray-100 py-3">
        <div class="container">
          <div class="text-sm text-gray-600">
            <a href="/" class="hover:text-accent">Home</a> / 
            <a href="/categories/${t.category}" class="hover:text-accent">${"men"===t.category?"Men's":"Women's"}</a> / 
            <a href="/categories/${t.category}/${t.subcategory}" class="hover:text-accent">${t.subcategory}</a> / 
            <span class="text-gray-900">${t.name}</span>
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
                  src="${t.image}" 
                  alt="${t.name}" 
                  class="w-full h-96 object-cover object-center"
                />
              </div>
              <div class="grid grid-cols-4 gap-2">
                <div class="border rounded-md overflow-hidden cursor-pointer hover:border-accent">
                  <img src="${t.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
                <div class="border rounded-md overflow-hidden cursor-pointer">
                  <img src="${t.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
                <div class="border rounded-md overflow-hidden cursor-pointer">
                  <img src="${t.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
                <div class="border rounded-md overflow-hidden cursor-pointer">
                  <img src="${t.image}" alt="Thumbnail" class="w-full h-24 object-cover" />
                </div>
              </div>
            </div>

            <!-- Product Info -->
            <div>
              <h1 class="text-3xl font-bold mb-2">${t.name}</h1>
              <div class="flex items-center mb-4">
                <div class="text-yellow-400">★★★★★</div>
                <span class="text-sm ml-1">${t.rating} (${t.reviews} reviews)</span>
              </div>

              <div class="mb-6">
                ${t.salePrice?`<span class="text-accent text-2xl font-bold">$${t.salePrice.toFixed(2)}</span>
                   <span class="text-gray-500 line-through ml-2">$${t.price.toFixed(2)}</span>`:`<span class="text-2xl font-bold">$${t.price.toFixed(2)}</span>`}
              </div>

              <p class="text-gray-600 mb-6">${t.description}</p>

              <div class="mb-6">
                <h3 class="font-semibold mb-3">Color</h3>
                <div class="flex flex-wrap">
                  ${s}
                </div>
              </div>

              <div class="mb-6">
                <h3 class="font-semibold mb-3">Size</h3>
                <div class="flex flex-wrap">
                  ${r}
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
              <button class="px-6 py-3 text-gray-600 hover:text-black">Reviews (${t.reviews})</button>
            </div>
          </div>
          <div class="py-6">
            <p class="mb-4">${t.description}</p>
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
            ${a}
          </div>
        </div>
      </section>
    </div>
  `}},636:(e,t,s)=>{"use strict";s.d(t,{R:()=>i});let i=[{id:"m1",name:"Classic Fit Oxford Shirt",category:"men",subcategory:"shirts",price:49.99,image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"A timeless Oxford shirt in a comfortable classic fit, perfect for any occasion.",sizes:["S","M","L","XL","XXL"],colors:["White","Blue","Light Blue"],rating:4.8,reviews:128},{id:"m2",name:"Slim Fit Chino Pants",category:"men",subcategory:"pants",price:59.99,image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Modern slim fit chinos made from premium cotton with a touch of stretch for comfort.",sizes:["28","30","32","34","36","38"],colors:["Khaki","Navy","Olive","Black"],rating:4.6,reviews:95},{id:"m3",name:"Wool Blend Overcoat",category:"men",subcategory:"outerwear",price:189.99,salePrice:149.99,image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"A sophisticated wool blend overcoat with a modern cut, perfect for colder weather.",sizes:["S","M","L","XL"],colors:["Charcoal","Camel","Navy"],rating:4.9,reviews:67},{id:"m4",name:"Premium Denim Jeans",category:"men",subcategory:"pants",price:79.99,image:"https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"High-quality denim jeans with a classic straight fit, made from premium selvedge fabric.",sizes:["28","30","32","34","36","38"],colors:["Dark Blue","Medium Wash","Black"],rating:4.7,reviews:156},{id:"m5",name:"Merino Wool Sweater",category:"men",subcategory:"knitwear",price:89.99,salePrice:69.99,image:"https://images.unsplash.com/photo-1608030609037-6f8e5ebb0e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Soft and warm Merino wool sweater in a versatile crew neck design.",sizes:["S","M","L","XL","XXL"],colors:["Grey","Navy","Burgundy","Green"],rating:4.8,reviews:82},{id:"w1",name:"Silk Blouse",category:"women",subcategory:"tops",price:79.99,image:"https://images.unsplash.com/photo-1602371021580-22aca4adbced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Elegant silk blouse with a relaxed fit and timeless design.",sizes:["XS","S","M","L","XL"],colors:["Ivory","Black","Blush","Navy"],rating:4.7,reviews:118},{id:"w2",name:"High-Waisted Tailored Pants",category:"women",subcategory:"pants",price:89.99,image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Sophisticated high-waisted pants with a tailored fit, perfect for office or evening wear.",sizes:["0","2","4","6","8","10","12","14"],colors:["Black","Navy","Camel"],rating:4.8,reviews:96},{id:"w3",name:"Cashmere Cardigan",category:"women",subcategory:"knitwear",price:129.99,salePrice:99.99,image:"https://images.unsplash.com/photo-1631541911222-f7fe7aa4749e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Luxuriously soft cashmere cardigan in a relaxed, versatile design.",sizes:["XS","S","M","L","XL"],colors:["Grey","Cream","Black","Dusty Rose"],rating:4.9,reviews:74},{id:"w4",name:"A-Line Midi Skirt",category:"women",subcategory:"skirts",price:69.99,image:"https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Elegant A-line midi skirt with a flattering silhouette, suitable for any occasion.",sizes:["0","2","4","6","8","10","12","14"],colors:["Black","Navy","Burgundy","Taupe"],rating:4.7,reviews:85},{id:"w5",name:"Wrap Dress",category:"women",subcategory:"dresses",price:99.99,salePrice:79.99,image:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",description:"Flattering wrap dress in a flowy fabric with a timeless design.",sizes:["XS","S","M","L","XL"],colors:["Black","Navy","Red","Floral Print"],rating:4.8,reviews:132}]}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[22],()=>s(6420));module.exports=i})();