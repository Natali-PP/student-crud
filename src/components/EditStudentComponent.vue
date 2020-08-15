<template>
  <div class="flex item-center justify-center">
    <div 
      class="shadow-lg rounded py-8 px-12" 
      :class="this.mode == 'outrun' ? 'bg-indigo-900': 'bg-white'">
      <h1 class="font-mono text-2xl">Update student!</h1>
      <form class="mt-4" @submit.prevent="handleUpdateStudent" >
        <div class="mt-4">
          <label>Name</label>
          <input type="text" v-model="student.name" 
class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mt-1 focus:outline-none focus:shadow-outline" placeholder="Enter student name">
        </div>
        <div class="mt-4">
          <label>Email</label>
          <input type="email" v-model="student.email" 
class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mt-1 focus:outline-none focus:shadow-outline" placeholder="Enter student email">
        </div>
        <div class="mt-4">
          <label>Phone</label>
          <input type="text" v-model="student.phone" 
class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mt-1 focus:outline-none focus:shadow-outline" placeholder="Enter student phone number">
        </div>
        <div class="mt-6 w-full">
          <button type="submit" class="w-full shadow-sm  hover:bg-transparent  font-mono font-semibold  border  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            :class="this.mode == 'outrun' ? 'bg-pink-outrun  hover:bg-pink-600': 'bg-purple-400 hover:text-purple-400 hover:border-purple-300'">Change!</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default ({
  name:'editStudent',
  created(){
    let apiURL= `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
    axios.get(apiURL).then( res =>{
      this.student= res.data
    }).catch( err => {
        console.log(err);
      });
  },
  data(){
    return {
      student:{},
    }
  },
  methods: {
    handleUpdateStudent(){
      let apiURL= `http://localhost:4000/api/update-student/${this.$route.params.id}`;
      axios.post( apiURL, this.student).then( (res) =>{
        console.log(res);
        this.$router.push('/view')
      }).catch( err => {
        console.log(err);
      });

    }
  },
  props: ['mode'],
})
</script>
