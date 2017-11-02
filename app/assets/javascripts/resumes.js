/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
 var app = new Vue({
   el: '#app',
   data: {
     message: 'Hello Vue!',
     students: [],
     showModal: false
    },

   mounted: function() {

     $.get('https://macabre-asylum-90626.herokuapp.com/students', function(result){
        this.students = result;
      }.bind(this));

   },
   methods: {

   },
   computed: {

   }
 });
});
