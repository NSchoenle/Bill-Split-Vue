/* This is the file for an individual bill item. 

Each item has:
  * id: a number
  * name: a string 
  * price: a number
  * person: a string (the id of the person assigned)
*/ 
<template>
  <div>
     <li class="list-group-item list-group-item-secondary">
        <div class="row">
          <div class="col">
            {{this.item.name}}: {{this.item.person}}
          </div>
          <div class="col"> ${{this.item.price | currency}} </div>
        </div>
      </li>
  </div>
</template>

<script>
export default {
  props : ['item'],
//  data() {
//     return {
//       id: '',
//       name: '',
//       price: 0,
//       person: ''
//     }
//   },
  // methods(){

  // },
}
</script>

<style>

</style>