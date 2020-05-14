<template>
    <div id="Reciept">
      <h2 class="sectionHeader">Your Itemized Reciept</h2>
      <hr>

      <div>
        <!-- <h3>Your Reciept</h3> -->
        <ul class="list-group" v-if='!formOpen' >
          <!-- <li class="list-group-item" v-for="(item, ind) in this.reciept" :item="item" :key="ind">
            <div class="row">
              <div class="col">
                <p> {{item.name}} ({{item.person === '--'? 'Unassigned': item.person}})</p>
              </div>
              <div class="col"> ${{item.price}}</div>
            </div>

          </li> -->
          <app-item v-for="(item, ind) in this.reciept" :item="item" :key="ind"></app-item>
        </ul>
      </div>

      <div v-if="this.formOpen" class="form-control-group">
        <label>Item Name</label>
        <input class="form-control" v-model="item.name" type="text/">
        <p class="alert form-alert alert-sm" v-if="this.item.name === ''">Name is required.</p>

        <br>

        <label> Price</label>
        <input class="form-control" type="number" v-model="item.price">
        <p class="alert form-alert alert-sm" v-if="this.item.price < 0">Price cannot be less than 0.</p>

        <br>
        <label>Person Assigned </label>
        <select class="form-control" v-model="item.person" value='--'>
          <option v-for="(person, ind) in this.party" :person="person" :key="ind">
            {{person}}
          </option>
        </select>

        <br>
        <button class="form-control submit" @click="addItemToReciept"
          :disabled="item.price < 0 || item.name=== '' ">
          Submit</button>
      </div>

      <br>
      <button class="btn btn-secondary" @click="formOpen = true" v-show="!formOpen">
        Add an Item</button>
      <hr>
      <div v-show="!this.formOpen">
        <label>Tip %</label>
        <input class="form-control" type="number" v-model="tipPerc">

        <label>Tax Amount</label>
        <input class='form-control' type="number" v-model="taxAmt">

        <br>
      
        <button class="btn btn-primary" @click="advanceToDividedBillView" v-show="this.reciept.length >0">Next</button>
      </div>
    </div>
</template>

<script>
import Item from '../item/Item'
export default {
  data() {
    return {
      formOpen: false,
      item:{
        name: '',
        price: 0,
        person:'--'
      },
      tipPerc: 0,
      taxAmt: 0,
      total: 0,
    }
  },
  computed: {
    reciept(){
      var bill = this.$store.getters.billItems;
      bill.forEach(item=>{
        this.toatal += parseFloat(item.price);
      });
      return bill;
    },
    taxPerc(){
      console.log(this.total);
      return this.taxAmt>0? this.total / this.taxAmt : 0;
    },
    party(){
      return this.$store.getters.party;
    }
  },
  methods: {
    advanceToDividedBillView(){
      
      this.$store.dispatch('updateTipPerc', this.tipPerc);
      this.$store.dispatch('updateTaxPerc', this.taxPerc);
      this.$store.dispatch('goToDividedBillView');
    },

    addItemToReciept(){
      this.total += parseFloat(this.item.price);
      this.formOpen = false;
      const newItem = {
        name: this.item.name,
        price: parseFloat(this.item.price),
        person: this.item.person
      }
      this.$store.dispatch('addItem', newItem);

      this.item.name = '';
      this.item.price = 0;
      this.item.person= '--'
    }

  },
  created() {
    this.$store.dispatch('addPerson', '--');
  },
  components:{
    appItem: Item
  }
}
</script>

<style>

</style>