<template>
  <div>
    <!-- <h2>THis is a person {{this.person}}</h2> -->
    <div v-if="this.items.length > 0" :key="this.person">
      <h3 class="indRecieptName">
        {{this.person ==='--'? 'Unassigned':this.person}}
      </h3>


      <ul class="list-group">
          <appItem v-for="(item, ind) in this.items" :key=ind :item=item> </appItem>
        <li class="list-group-item list-group-item-secondary">
          <div class="row">
            <div class="col">
              <p>Item Total</p>
            </div>
            <div class="col"> ${{this.itemTotal | currency}}</div>
          </div>
        </li>

        <li class="list-group-item list-group-item-secondary">
          <div class="row">
            <div class="col">
              <p>Tax ({{this.$store.getters.taxPerc * 100}}%)</p>
            </div>
            <div class="col"> ${{this.taxAmt | currency}}</div>
          </div>
        </li>

        <li class="list-group-item list-group-item-secondary">
          <div class="row">
            <div class="col">
              <p>Tip ({{this.$store.getters.tipPerc * 100}}%)</p>
            </div>
            <div class="col"> ${{(this.tipAmt)|currency}}</div>
          </div>
        </li>

        <li class="list-group-item list-group-item-warning">
          <strong>
            <div class="row">
              <div class="col">
                <p>Grand Total:</p>
              </div>
              <div class="col"> ${{this.grandTotal | currency}}</div>
            </div>
          </strong>
        </li>
      </ul>

      <hr>
    </div>
  </div>
</template>

<script>
import Item from '../item/Item.vue'
export default {
  props : ['person'],
  data() {
    return {
      items : [],
    }
  },
  computed: {
    personalItems(){
      const items = this.$store.getters.billItems;
      items.forEach(item =>{
        if (item.person !== this.person) {
        }else{
          this.items.push(item);
        }
      });
      return this.items;
    },
    itemTotal(){
      var sum = 0;
      this.items.forEach(item =>{
        sum += item.price;
      });
      return sum;
    },
    tipAmt(){
      return this.itemTotal * this.$store.getters.tipPerc;
    },
    taxAmt(){
      return this.itemTotal * this.$store.getters.taxPerc;
    },
    grandTotal(){
      return this.itemTotal + this.tipAmt + this.taxAmt;
    }


  },
  created(){
    this.personalItems;    

  },
  components:{
    appItem: Item
  }
  
    
}
</script>

<style>

</style>