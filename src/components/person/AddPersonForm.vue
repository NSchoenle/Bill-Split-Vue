<template>
  <div>
    <div id="party">
      <h2 class="sectionHeader">Your Party</h2>
      <hr>
      <div>
        <p class="alert alert-warning" v-if="this.party.length < 2">You must have a party of at least 2.</p>

        <div>
          <ul class="list-group">
            <li class="list-group-item list-group" v-for="(person, ind) in this.party" :key="ind">
              <div class="row">
                <div class="col-6">
                  <p>{{person}}</p>
                </div>
                <div class="col-6">
                  <button class="btn btn-secondary btn-sm" @click="editPerson(person)">Edit</button>
                  <button class="btn btn-danger btn-sm" @click="deletePerson(ind)">Delete</button>
                </div>
                
              </div>
            </li>
          </ul>



          <div v-if="this.partyFormOpen">
            <label class="form-label">Name</label>
            <input class="form-control" v-model="currentPersonName" type="text/">
            <br>
            <button class="form-control btn-submit" @click="addPersonToParty"
              :disabled="this.currentPersonName.length < 1">Add Person</button>
          </div>

          <br>

          <button class="btn btn-secondary" @click="partyFormOpen = true" v-show="!this.partyFormOpen">New
            Person</button>

          <button class="btn btn-primary" v-if="this.party.length >= 2 && !this.partyFormOpen"
            @click='advanceToBillForm'
            >Next</button>

        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // party:[],
     
      partyFormOpen : false,
      currentPersonName: ''
    }
  },
  computed :{
    party(){
      return this.$store.getters.party;
    }
  },
  created(){
    this.items = this.$store.getters.party;
  },
  methods: {
    addPersonToParty(){
      this.$store.dispatch('addPerson', this.currentPersonName);
      this.partyFormOpen = false;
      this.currentPersonName = '';
    },
    editPerson(person){
      this.currentPersonName = person;
      this.$store.dispatch('deletePerson', this.currentPersonName);
    },
    deletePerson(id){

    },




    advanceToBillForm(){
      this.$store.dispatch('goToBillFormView');
    }
  },
  
}
</script>

<style>

</style>