<template>
  <div id="appTitle">
    <h1>{{ msg }}</h1>

    <div id='nav' class="row">
      <div class="col">
        <a class="nav-item nav-link active" @click="pageNavigation('party')">Party</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link" @click="pageNavigation('bill')">Create Bill</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link" @click="pageNavigation('master')">Split It</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Bill Splitter 0.1'
    }
  },
  methods: {
    pageNavigation(page){
      switch(page) {
        case 'party':
          this.$store.dispatch('goToPartyView');
          break;
        case 'bill':
          this.$store.dispatch('goToBillFormView');
          break;
        case 'master':
          this.$store.dispatch('goToDividedBillView');
          break;
        default:
          break;
      }

    }  
  },
}
</script>

<style>
#appTitle {
  text-align: center;
  padding: 10px;
}
#nav{
  vertical-align: center;
  text-align: center;
  background-color: #fff3cd;
  border-radius: 5px;
  padding: 1%;
}
a{
  cursor: pointer;
  color: #a6863e;
}



</style>