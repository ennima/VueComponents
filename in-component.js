/**
	Component Logic
*/

Vue.component('card',{
	props:['title', 'im', 'desc'],

  mounted(){

  },
  data(){
  	return {
    	clicks: null,
    }
  },
  methods:{
  	openProject: function (event){
    	console.log('Opening:',this.uid);
      localStorage.current_project = this.uid;
    }

  },
  computed:{

  }

});
