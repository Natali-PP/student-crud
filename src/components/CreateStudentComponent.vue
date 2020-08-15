<template>
  <div class="flex item-center justify-center">
    <div 
      class=" shadow-lg rounded py-8 px-12"
      :class="this.mode == 'outrun' ? 'bg-indigo-900': 'bg-white'">
      <h1 class="font-mono text-2xl">Create new student!</h1>
      <template v-if="createdAlert" >
        <h1 
          class=" rounded text-center p-2"
          :class="this.mode == 'outrun' ? 'bg-cyan-outrun': 'text-green-900 bg-green-300'"> Success! Student Created</h1>
      </template>
      <form class="mt-4" @submit.prevent="handleSubmit" >
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
          <!-- <button class="w-full bg-transparent hover:bg-blue-300 text-blue-400 font-mono font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">Submit!</button> -->
          <button type="submit" 
            class="w-full shadow-sm  hover:bg-transparent  font-mono font-semibold  border  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            :class="this.mode == 'outrun' ? 'bg-pink-outrun  hover:bg-pink-600': 'bg-purple-400 hover:text-purple-400 hover:border-purple-300'">
            Submit!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default ({
  name:'createStudent',
  data(){
    return {
      student: {
        name:'',
          email:'',
          phone:'',
      },
      createdAlert: false,
    }
  },
  methods: {
    handleSubmit(){
      let apiURL = 'http://localhost:4000/api/create-student';
      axios.post( apiURL, this.student).then( () => {
        //this.$router.push('/view')
        //this.$refs.anyName.reset();
        this.student = {
          name: '',
          email: '',
          phone: ''
        };
        this.createdAlert=true;
        setTimeout( () => this.createdAlert= false, 2000);
      }).catch( err => {
        console.log(err);
      });
    }
  },
  props: ['mode'],

})
</script>
