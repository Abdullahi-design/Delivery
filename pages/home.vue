<template>
    <div class="bg-gray-50">
        <nav class="flex justify-between fixed w-full bg-white h-20 shadow-md pb-5">
            <div class="flex">
                <img src="/icons/offers.png" alt="" class="ml-12 mt-2 w-16 h-16">
                <div class="mt-4 ml-2 font-sans font-semibold text-3xl text-red-600">Skin <span class="text-black"> Delivery</span></div>
            </div>
            <!-- <div class="flex justify-between mr-20 mt-5 text-gray-500 font-semibold text-md font-sans list-none">
                <li class="hover:text-red-500">DOCS</li>
                <li class="hover:text-red-500">EXAMPLES</li>
                <li class="hover:text-red-500">RESOURCES</li>
                <li class="hover:text-red-500">BLOG</li>
            </div> -->
        </nav>
        <div class="p-20 bg-white"></div>
        <div class=" flex justify-between shadow-md bg-white">
            <div class="pl-12">
                <header class=" font-sans font-semibold text-5xl">Welcome to <br><span class="text-red-600">Skin</span> delivery app</header>
                <p class="text-gray-500 font-semibold text-xl font-mono mt-7">Skin welcomes you to one of the most <br> powerful delivery system in northern Nigeria.</p>
                <p class="font-sans font-semibold text-lg text-gray-700"><span class="text-red-600">Skin:</span> We shop your Cart</p>
                <nuxt-link to="/" target="/">
                    <button class="font-semibold w-40 my-12 text-md py-3  text-white bg-red-600 rounded-md hover:bg-red-500">GET STARTED</button>
                </nuxt-link>
                <nuxt-link to="/welcome" target="/welcome">
                    <button class="font-semibold w-44 my-12 text-md py-3  text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400 hover:text-white uppercase">Request Delivery</button>
                </nuxt-link>
                <a href="#email"><p class="-mt-6 pb-20 text-gray-600 font-sans font-semibold text-md">Get <span class="text-red-600">SKIN</span> updates to your inbox each month 💌</p></a>
            </div>
            <div>
                <img src="/icons/truck.png" alt="" class="mr-12">
            </div>
        </div>
        <div class="shadow-md ">
            <p class="text-gray-600 font-sans font-semibold text-2xl text-center mt-12">Why <span class="text-red-600">Skin</span></p>
            <div class="flex justify-around">
                <div>
                    <img src="/icons/offer.png" alt="" class="w-40">
                    <p class="font-sans font-bold text-2xl text-gray-700 py-5 pl-10">COST</p>
                    <p class="text-gray-600 font-sans font-semibold text-md">our cost of delivery is low</p>
                    <p class="text-gray-600 font-sans font-semibold text-md"><span class="text-red-600">Skin</span> is based on a powerful modular <br> 
                    architecture. You can choose from any <br> delivery mode to make your delivery faster <br> and easier. </p>
                </div>
                <div>
                    <img src="/icons/minivan.png" alt="" class="w-40">
                    <p class="font-sans font-bold text-2xl text-gray-700 py-5 pl-10">DELIVERY</p>
                    <p class="text-gray-600 font-sans font-semibold text-md">We deliver fast </p>
                    <p class="text-gray-600 font-sans font-semibold text-md"><span class="text-red-600">Skin</span> is based on a powerful modular <br> 
                    architecture. You can choose from any <br> delivery mode to make your delivery faster <br> and easier. </p>
                </div>
                <div>
                    <img src="/icons/order.png" alt="" class="w-40">
                    <p class="font-sans font-bold text-2xl text-gray-700 py-5 pl-10">ENJOYABLE</p>
                    <p class="text-gray-600 font-sans font-semibold text-md">We make your cart confential</p>
                    <p class="text-gray-600 font-sans font-semibold text-md"><span class="text-red-600">Skin</span> is based on a powerful modular <br> 
                    architecture. You can choose from any <br> delivery mode to make your delivery faster <br> and easier. </p>
                </div>
            </div>
            <div class="text-center">
                <nuxt-link to="/welcome" target="/welcome">
                    <button class="font-semibold w-52 my-12 text-md py-3  text-white bg-red-600 rounded-md hover:bg-red-500">TRY SKIN</button>
                </nuxt-link>
            </div>
        </div>
        <!-- <div class=" bg-blue-300">
            <p class="text-gray-600 font-sans font-semibold text-2xl text-center mt-12">Who Uses <span class="text-red-600">Skin</span></p>
        </div> -->
        <div class="bg-white shadow-md  mt-12 pl-12">
            <p class="text-gray-600 font-sans font-semibold text-3xl py-8">SPONSORS</p>
            <article class="text-gray-600 font-sans font-semibold text-md"><span class="text-red-600">SKIN</span> is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop <br>
                    new features for the project is not sustainable without proper financial backing. If you run a business and are using Nuxt in a revenue- <br>
                    generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy <br>
                    and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers. If <br>
                    you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.
            </article>
            <div class="flex justify-around my-12">
                <a href="www.instagram.com">
                    <img src="/sponsors/instagram.png" alt="" class="w-32 h-32">
                </a>
                <a href="www.absam.com.ng">
                    <img src="/sponsors/Absam.png" alt="ab" class="w-32 h-32">
                </a>
                <a href="www.chickenmall.com.ng">
                    <img src="/sponsors/AnimalCare.png" alt="cc" class="w-32 h-32">
                </a>
            </div>
            <div class="text-center">
                <nuxt-link to="/truck" target="/truck">
                    <button class="font-semibold w-52 my-12 text-md py-3  text-white bg-red-600 rounded-md hover:bg-red-500">BECOME A SPONSOR</button>
                </nuxt-link>                
            </div>
        </div>
        <div class="text-center">
            <header class="text-gray-600 font-sans font-semibold text-2xl text-center mt-12"><span class="text-red-600">SKIN</span> Newsletter</header>
            <p class="text-gray-600 font-sans font-semibold text-md text-center">Get the latest SKIN stucks news to your inbox, curated by the SKIN team.</p>
            <div class="-mt-5">
                <input type="email" name="" id="email" placeholder="Email" class="border border-r-0 py-4 px-3 hover:border-red-400 outline-none">
                <nuxt-link to="/" target="/">
                    <button class="font-semibold w-32 my-12 text-md py-4  text-white bg-red-600 rounded-sm -ml-2 hover:bg-red-500">SUBSCRIBE</button>
                </nuxt-link>
            </div> 
        </div>
        <footer class="h-64 mt-8 bg-white">
            <div class="flex justify-around list-none pt-12 ">
                <div>
                    <header class="text-gray-600 font-serif font-semibold text-xl pb-4">Discover</header>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600">Our Team</li>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600 py-2">Design Kit</li>
                    <li class="  font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600">Contact Us</li>
                </div>
                <div>
                    <header class="text-gray-600 font-serif font-semibold text-xl pb-4">Help</header>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600">Resource</li>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600 py-2">Chart with us</li>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600">Contribution guide</li>
                </div>
                <div>
                    <header class="text-gray-600 font-serif font-semibold text-xl pb-4">Support</header>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600">Our Goodies Store</li>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600 py-2">Sponsoring & donations</li>
                    <li class=" font-sans text-sm font-semibold cursor-pointer text-gray-500 hover:text-red-600">Training & consultancy</li>
                </div>
            </div>
            <hr class="mt-8 mb-4">
            <div class="flex justify-around">
                <p class="font-sans text-gray-600 font-semibold">Copy Right</p>
                <a href="www.skin.com.ng" class="font-sans text-gray-600 font-semibold">Deployed by <span class="text-red-600">Skin</span></a>
                <select name="language" id="" class="mx-8 px-8 outline-none font-sans text-gray-600 font-semibold">
                    <option value="">English</option>
                    <option value="">Hausa</option>
                    <option value="">Spanish</option>
                    <option value="">Arabic</option>
                </select>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>