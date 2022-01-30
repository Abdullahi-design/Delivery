<template>
    <div class="bg-gray-100 h-screen">
        <div class="p-12"></div>
        <div class="h-5/6 w-3/6 bg-white m-auto">
            <div @click="pick" class="w-28 ml-6 cursor-pointer" v-for="(trans, index) in van" :key="index">
                <img :src="trans.img" alt="">
                <!-- <div>
                    <div class="text-md tracking-tighter">Velicle Type:<span class="text-md font-semibold"> {{trans.type}} </span></div>
                    <div class="text-md tracking-tighter">Maximum load Capacity:<span class="font-bold"> {{trans.capacity}} </span></div>
                    <div class="text-md tracking-tighter">Approximated Speed:<span class="text-sm font-bold"> {{trans.speed}} </span></div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        van(){
            return this.$store.getters.getTruck
        }
    }

}
</script>

<style>

</style>