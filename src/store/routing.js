const state = {
  partyView : true,
  billFormView: false,
  dividedBillView: false
};

const mutations = {
  'CHANGE_PAGE' (state, page){
    switch (page) {
      case 'party':
        state.partyView = true;
        state.billFormView = false;
        state.dividedBillView = false;
        break;

      case 'reciept':
        state.billFormView = true;
        state.partyView = false;
        state.dividedBillView = false;
        break;
      case 'dividedBill':
        state.dividedBillView = true;
        state.partyView = false;
        state.billFormView = false;
        break;
      default:
        break;
    }
  } 
};

const actions = {
  goToPartyView(context){
    context.commit('CHANGE_PAGE', 'party');
  },
  goToBillFormView(context){
    context.commit('CHANGE_PAGE', 'reciept');
  },
  goToDividedBillView(context){
    context.commit('CHANGE_PAGE', 'dividedBill');
  },
};

const getters = {
  partyView: state =>{
    return state.partyView;
  },
  billFormView: state =>{
    return state.billFormView;
  },
  dividedBillView: state =>{
    return state.dividedBillView;
  }
};


export default{
  state,
  mutations,
  actions,
  getters
}