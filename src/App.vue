<template>
  <div class="pastel w-screen h-screen" :class="this.mode== 'outrun' ? 'outrun' : ''">
    <nav  >
      <ul class="flex p-8 items-center justify-center flex-wrap">
        <li 
          class="p-2 mr-2 text-center  rounded-sm "
          :class="this.mode === 'outrun'? 'bg-yellow-outrun': 'bg-green-200'">
          <h3 class="font-mono text-xl">MEVN CRUD 👾</h3>
        </li>
        <li 
          class="flex-1  p-2 mr-2 text-center  rounded-sm"
          :class="this.mode === 'outrun'? 'bg-pink-outrun': ' bg-purple-200'">
          <router-link  class="font-mono text-xl" to="/">Create Student</router-link> 
        </li>
        <li 
          class="flex-1 mr-2  p-2 text-center rounded-sm"
          :class="this.mode === 'outrun'? 'bg-cyan-outrun': ' bg-pink-200 '">
          <router-link  class="font-mono text-xl" to="/view">View Students</router-link>
        </li>
        <ThemeToggle :mode="mode" @toggle="toggle"/>
      </ul>
    </nav>
    <div class="">
      <router-view :mode="mode" />
    </div>
  </div>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle.vue';
export default({
  name: 'App',
  data() {
    return {
      mode: 'pastel',
    }
  },
  components:{
    ThemeToggle
  },
  methods:{
    toggle(){
      if (this.mode == 'outrun'){
        this.mode = 'pastel'
      } else {
        this.mode = 'outrun';
      }
    },
  },

});
</script>

<style>
.pastel {
  background: #FFFFF0;
  transition: background 0.3s ease-in-out;
}

.outrun {
  background: #241734;
  color: #fff;
  transition: background 0.3s ease-in-out;
}

.bg-pink-outrun{
  background: #f6019d;
}

.bg-yellow-outrun{
  background: #f9c80e;
}
.bg-cyan-outrun{
  background: #2de2e6;
}
</style>
