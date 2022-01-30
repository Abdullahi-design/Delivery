<template>
  <div>
    <div class="font-semibold text-5xl my-20 mx-52 text-gray-500">Select Your Prefered Delivery Method</div>
    <div class="flex justify-evenly">
      <div @click="pick" class="bg-gray-200 border-2 border-gray-400 px-3 cursor-pointer" v-for="(trans, index) in van" :key="index">
        <img :src="trans.img" alt="">
        <div>
          <div class="text-md tracking-tighter">Velicle Type:<span class="text-md font-semibold"> {{trans.type}} </span></div>
          <div class="text-md tracking-tighter">Maximum load Capacity:<span class="font-bold"> {{trans.capacity}} </span></div>
          <div class="text-md tracking-tighter">Approximated Speed:<span class="text-sm font-bold"> {{trans.speed}} </span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    van(){
      return this.$store.getters.getTruck
    },
    pick(){
      // alert(`Select your delivey method depending on your load capacity`)
    }
  }

}
</script>

<style scoped>

</style>