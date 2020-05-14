<template>
  <div id="app" class="container-fluid container">
    <app-header></app-header>
    <hr>
    <div id='content'>
      <!-- <img src="./assets/logo.png"> -->

      <add-person-form v-if="this.$store.getters.partyView"></add-person-form>
      <bill-form v-if="this.$store.getters.billFormView"></bill-form>

      <div v-if='this.$store.getters.dividedBillView'>
        <MasterBill></MasterBill>
        <PersonList></PersonList>
      </div>

    </div>
    
    <hr>
    <app-footer></app-footer>
  
  </div>
</template>



<script>
import Header from './components/pageComponents/Header'
import Footer from './components/pageComponents/Footer'

import MasterBill from './components/reciept/MasterBill'
import PersonList from './components/person/PersonList'

import AddPersonForm from './components/person/AddPersonForm.vue'
import BillForm from './components/reciept/BillForm.vue'
export default {
  name: 'app',
  
  components:{
    AddPersonForm,
    PersonList,
    MasterBill,
    BillForm,
    appHeader: Header,
    appFooter: Footer

  },
  created(){
    this.$store.dispatch('initBill');
  }
}
</script>

<style>
/* #content {
  color: #2c3e50;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
} */

body {
  background-color: rgb(186, 211, 218);
  font-family: 'Courier New', Courier, monospace;

}

#app {
  padding-left: 10%;
  padding-right: 10%;
 
}




.sectionHeader {
  text-align: center;
}

p.form-alert {
  color: rgb(48, 6, 6);
  background-color: rgb(231, 181, 181);
}

#masterReciept h2{
  text-align: center;
}

.indRecieptName{
  text-align: center;
}


footer {
  /* background-color: red; */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  /* position: fixed; */
  /* bottom: 0; */
}

</style>
