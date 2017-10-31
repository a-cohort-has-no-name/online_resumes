/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
 var app = new Vue({
   el: '#app',
   data: {
     message: 'Hello Vue!',
     student: [
  { "id":1,
    "firstName":"Bruce",
    "lastName": "Wayne",
    "email":"bruce.wayne@wayneenterprise.com",
    "phone":"6085328974",
    "bio":"Billionaire industrialist and notorious playboy. Also secretly impersonifies the crime-fighting vigilante known as Batman.",
    "linkedin":"https://www.linkedin.com/in/batman-bruce-wayne-43275131/",
    "twitter":"thebatman",
    "blogUrl":"https://www.lego.com/en-us/batmanmovie/bloggithub",
    "resumeUrl":"",
    "githubUrl":"https://github.com/batmanjs/batman",
    "photo":"https://images.forbes.com/media/lists/fictional/2011/bruce-wayne_197x282.jpg",
    "experiences":[
      {
        "id":1,
        "startDate":"11-05-92",
        "endDate":"",
        "jobTitle":"CEO",
        "company":"Wayne Enterprises",
        "details":"Chief Exectuvite Office of Wayne Enterprises.",
      },
       {
        "id":2,
        "startDate":"07-07-91",
        "endDate":"",
        "jobTitle":"crime-fighting vigilante",
        "company":"Batman Inc",
        "details":"Fights crime and kick ass. ",
      }
    ],
    "educations":[
      {
        "id":1,
        "startDate":"08-25-86",
        "endDate":"12-15-89",
        "degree":"Business Administration",
        "school":"Univeristy at Gotham",
        "details":"",
      },
      {
        "id":2,
        "startDate":"02-01-90",
        "endDate":"06-05-91",
        "degree":"Bachelor in Kicking ass",
        "school":"Raz Algul school of Kicking Ass",
        "details":"Learn how to kick ass.",
      }
    ],
    "skills":[
      {
        "id":1,
        "name":"Money",
      },
      {
        "id":2,
        "name":"Investing",
      },
      {
        "id":3,
        "name":"Kicking ass",
      },
    ],
    "capstones":[
      {
        "id":1,
        "name":"Batmobile",
        "description":"Build a military batmobile that gets through everything.",
        "url":"",
        "screenshot":""
      },
       {
        "id":2,
        "name":"Saving Gotham",
        "description":"Saved gotham from being destroyed.",
        "url":"",
        "screenshot":""
      }
    ],
   }

   ]
   },
   mounted: function() {

   },
   methods: {

   },
   computed: {

   }
 });
});
