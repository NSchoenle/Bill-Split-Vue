<template>
  <div>
    <h1>Person List</h1>
    <div>
      <person  v-for="person in party" :person='person' :key="person"></person>
    </div>
  </div>
</template>

<script>
import Person from './Person'
import Item from '../item/Item'
export default {
  data(){
    return{
      // party: ['Bob','Alice','Marie','--'] //This should actually get an array of names from the store
      party: []
    }
  },
  created(){
    this.party = this.$store.getters.party;
  },
  components:{
    Person,
    appItem: Item
  }
}
</script>

<style>

</style>