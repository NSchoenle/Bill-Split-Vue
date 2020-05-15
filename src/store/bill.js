import dummy_data from '../data/dummy_data.js'

const state = {
  // party:['Bob','Alice','Marie'], //dummy data
  party:[], 
  billItems: [],
  taxPerc: 0,
  tipPerc: 10
};

const mutations = {
  'SET_BILL' (state, billItems){
      state.billItems = billItems;
  },
  'ADD_ITEM'(state, item){
    state.billItems.push(item);
  },
  'UPDATE_TAX' (state, tax){
    state.taxPerc = tax;
  },
  'UPDATE_TIP' (state, tip){
    state.tipPerc = tip;
  },
  'ADD_PERSON' (state, person){
    // person = person.toLowerCase();
    if (!state.party.includes(person)){
      if(person==='--'){
        state.party.unshift(person);
      }else{
        state.party.push(person);
      }
    }else{
      console.log(`${person} already in party`);
    }
    console.log(state.party);
  },
  'EDIT_PERSON' (state, person){
   //TODO: Add Code to update person's name 
   console.log(`Editing ${person}`);
  },
  'DELETE_PERSON'(state, person){
    //TODO: Add code to remove person from list and clear their assignments
    console.log(`Deleting ${person}`);
  },
};

const actions = {
  addItem: (context, item)=>{
      context.commit('ADD_ITEM', item);
  },
  initBill: (context) =>{
      // context.commit('SET_BILL', dummy_data); //Set up the bill with some starter dummy data for testing
    
    },
    updateTaxPerc: (context, taxPerc) =>{
      context.commit('UPDATE_TAX', taxPerc);
    },
    updateTipPerc: (context, tipPerc) =>{
      if (tipPerc >0){
        context.commit('UPDATE_TIP', tipPerc);
      }else{
        context.commit('UPDATE_TIP', 0);
      }
    },
    
    addPerson: (context, person) =>{
        context.commit('ADD_PERSON', person);
    },
    updatePerson: (context, person) => {
      context.commit('UPDATE_PERSON', person);
    },
    deletePerson: (context, person) =>{
      context.commit(context, person);
    },
};

const getters = {
  party: state =>{
    return state.party;
  },
  billItems: state => {
    console.log('getting bill items');
      return state.billItems;
  }, 
  taxPerc: state => {
    console.log('getting tax percent');
    return (state.taxPerc / 100);
  },
  tipPerc: state => {
    console.log('getting tip percent');
    return (state.tipPerc / 100);
  }
};


export default{
  state,
  mutations,
  actions,
  getters
}