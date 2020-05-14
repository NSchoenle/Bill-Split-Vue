<template>
  <div id="appTitle">
     <h1 >{{ msg }}</h1>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          
          <table class=" alert-warning center">
            <tr>
              <td>
                <a class="nav-item nav-link active" @click="pageNavigation('party')">Party</a>
              </td>
          
              <td>
                <a class="nav-item nav-link" @click="pageNavigation('bill')">Create Bill</a>
              </td>
            
              <td>
                <a class="nav-item nav-link" @click="pageNavigation('master')">Split It</a>
              </td>
            </tr>
          </table>
        
       

        </div>
      </div>
    </nav>
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

table.center{
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
th, td {
  padding: 15px;
  text-align: right;
  vertical-align: center;
}
</style>