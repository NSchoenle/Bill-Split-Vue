<template>
  <div id="masterRec">
    <h2>Master Reciept</h2>
    <ul class="list-group">

      <!-- For each item in the list, create a new appItem element -->
      <appItem v-for="(item,ind) in billItems" :key="ind" :item='item'></appItem>
      
      <!-- Add in the tax, tip, and total rows -->
      <div>
        <li class="list-group-item ">
          <div class="row">
            <div class="col">
              Item Total:
            </div>
            <div class="col">
              $ {{this.itemTotal | currency}}
            </div>
          </div>
        </li>

        <li class="list-group-item ">
          <div class="row">
            <div class="col">
              Tax ({{this.$store.getters.taxPerc * 100}}%):
            </div>
            <div class="col">
              $ {{this.billTax | currency}}
            </div>
          </div>
        </li>
        <li class="list-group-item ">
          <div class="row">
            <div class="col">
              Tip ({{this.$store.getters.tipPerc * 100}}%):
            </div>
            <div class="col">
              $ {{this.billTip | currency}}
            </div>
          </div>
        </li>

        <li class="list-group-item list-group-item-success">
          <strong>
            <div class="row">
              <div class="col">
                Grand Total
              </div>
              <div class="col">
                $ {{this.grandTotal | currency}}
              </div>
            </div>
          </strong>
        </li>
      </div>

    </ul>
  </div>
</template>

<script>
import Item from '../item/Item'

export default {
  computed: {
    billItems(){
      return this.$store.getters.billItems;
    },
    itemTotal(){
      var sum = 0;
      this.billItems.forEach(item => {
        sum +=item.price;
      });
      return sum;
    },
    billTax(){
      return this.itemTotal * this.$store.getters.taxPerc;
    },
    billTip(){
      return this.itemTotal * this.$store.getters.tipPerc;
    },
    grandTotal(){
      return this.itemTotal + this.billTax + this.billTip; 
    }
  },
  components:{
    appItem:Item
  },

}
</script>

<style scoped>
masterReciept {
  padding: 10%;
}
h2{
  text-align: center;
}

</style>