/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
 var app = new Vue({
   el: '#app',
   data: {
     message: 'Hello Vue!',
     students: [],
     experiences:[],
     educations:[],
     skills:[],
     capstones:[],
     currentId: ""
     // student: [],
     // currentId: "1",
   },
   mounted: function() {

     $.get('https://macabre-asylum-90626.herokuapp.com/students', function(result){
        //console.log(result);  
        this.students = result;
      }.bind(this));
     
     $.get('https://macabre-asylum-90626.herokuapp.com/experiences', function(result){
        //console.log(result);  
        this.experiences = result;
      }.bind(this));

      $.get('https://macabre-asylum-90626.herokuapp.com/educations', function(result){
        //console.log(result);  
        this.educations = result;
      }.bind(this));

       $.get('https://macabre-asylum-90626.herokuapp.com/skills', function(result){
        //console.log(result);  
        this.skills = result;
      }.bind(this));

       $.get('https://macabre-asylum-90626.herokuapp.com/capstones', function(result){
        //console.log(result);  
        this.capstones = result;
      }.bind(this));

   },
   methods: {

   },
   computed: {

   }
 });
});
