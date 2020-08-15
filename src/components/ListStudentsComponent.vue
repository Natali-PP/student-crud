<template>
  <div class="transition" >
    <h1 class="font-mono text-center text-2xl">Display all the students!</h1>
    <div class="px-3 py-4 flex item-center justify-center">
      <table class="table-autow-full text-md  shadow-md rounded mb-4">
        <thead class="" 
               :class="this.mode == 'outrun' ? 'transition bg-indigo-900': 'transition bg-gray-200'">
          <tr>
            <th 
              class="px-4 py-2 p-3 font-bold uppercase border"
              :class="this.mode == 'outrun' ? ' text-gray-100': 'border-gray-300 text-gray-600' "
              >Name</th>
            <th 
              class="px-4 py-2 p-3 font-bold uppercase border"
              :class="this.mode == 'outrun' ? ' text-gray-100': 'border-gray-300 text-gray-600' ">
              Email</th>
            <th  
              class="px-4 py-2 p-3 font-bold uppercase border"
              :class="this.mode == 'outrun' ? ' text-gray-100': 'border-gray-300 text-gray-600' ">
              Phone</th>
            <th 
              class="px-4 py-2 p-3 font-bold uppercase border" 
              :class="this.mode == 'outrun' ? ' text-gray-100': 'border-gray-300 text-gray-600' ">
              Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="mode === 'outrun' ? 'hover:bg-gray-800': 'hover:bg-orange-100'"
            v-for="student in students" :key="student._id">
            <td class="p-3 px-5 border border-gray-300 " >{{student.name}}</td>
            <td class="p-3 px-5 border border-gray-300 " >{{student.email}}</td>
            <td class="p-3 px-5 border border-gray-300 " >{{student.phone}}</td>
            <td class="p-3 px-5 border border-gray-300 flex flex-row items-center " :class="mode === 'outrun' ? 'hover:bg-gray-800': 'hover:bg-orange-100'">
              <router-link 
                :to="{name: 'edit', params: {id: student._id}}"

                ><button class="bg-green-500 hover:bg-green-700 py-2  text-white font-bold px-4 rounded mr-4"
                         >Edit Student</button>

              </router-link>
                <div >
                  <vue-confirmation-button

                    :messages="customMessages"
                    v-on:confirmation-success="deleteStudent(student._id)">
                  </vue-confirmation-button>
                </div>
                <!--  <button 
                  @click.prevent="openModal = true"
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                  <div 
                  class="fixed overflow-x-hidden overflow-y-auto inset-00 flex justify-center items-center  shadow-2xl"
                  v-if="openModal">
                  <div class="relative shadow-2xl">
                  <div class="bg-white w-full rounded shadow-2xl flex flex-col p-20 items-center">
                  <span>Are you sure you want to delete this student?</span>
                  <div>
                  <button 
                  class="rounded bg-red-500 text-white px-6 mt-2 py-2 x-3/12 m-auto mb-3 mr-5"
                  @click.prevent="deleteStudent(student._id)"
                  >Delete</button>
                  <button 
                  class="rounded bg-blue-500 text-white px-6 mt-2 py-2 x-3/12 m-auto mb-3 ml-5"
                  @click.prevent="openModal = false"
                  >Cancel</button>
                  </div>
                  </div>
                  </div>
                  </div> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import vueConfirmationButton from './ConfirmationButton.vue';

export default ({
  created(){
    let apiURL = 'http://localhost:4000/api';
    axios.get(apiURL).then( res =>{
      this.students= res.data;
    }).catch( err => {
      console.log(err);
    });
  },
  data(){
    return {
      students:[],
      customMessages: [
        'Delete Student',
        'Are you sure? 🤨🤔',
        '💥 Done 🕶 💅'
      ]
    }
  },
  methods: {
    deleteStudent(id){
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.students.findIndex(elem=>elem._id===id);
      console.log(' el id es ' + id+ ', el index a elminiar es '+ indexOfArrayItem+ 'cuyo elem es'+ this.students[indexOfArrayItem].name)

      axios.delete(apiURL).then( () =>{
        this.students.splice(indexOfArrayItem, 1);        
      }).catch( err => {
        console.log(err);
      });

    }
  },
  props: ['mode'],
  components: {
    vueConfirmationButton,
  },
})
</script>

<style>
.bg-purple-outrun-2 {
  background: #261447;
  transition: background 0.3s ease-in-out;
}
.bg-purple-outrun-3 {
  background: #541388;
  transition: background 0.3s ease-in-out;
}
</style>
