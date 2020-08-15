<template>
  <div
    class="mr-2 p-2 text-center rounded-sm font-mono text-xl"
    :class="this.mode == 'outrun'? 'bg-outrun-orange': 'bg-indigo-200'">
    <button @click="$emit('toggle')">{{themeSelect}}</button>
    <!--<label>V
      {{mode}}
      <input 
      type="checkbox"
      :checked="this.mode === 'outrun' ? 'checked' : false"
      @toggle="$emit('toggle')"/>
    </label> -->
  </div>
</template>
<script>
export default {
  props: ['mode'],
  name:'ThemeToggle',
  computed:{
    themeSelect(){
      if(this.mode === 'outrun'){
        return 'Mode Outrun 🚀'
      } else {
        return 'Mode Pastel 💅'
      }
    },
  },
};
</script>
<style>
.bg-outrun-orange {
  background: #ff6c11;
  transition: background 0.3s ease-in-out;
}
</style>
