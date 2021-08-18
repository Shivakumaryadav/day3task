var cat={
    name:'fluffy',
    activities:['play','eat cat food'],
    catfriends:[{
        name:'bar',
        activities:['be grumpy','eat bread omlet'],
        weight:8,
        furcolor:'white',
    
    },

    {

    name:'foo',
    activities:['sleep','pre-sleep naps'],
    weight:3,
    }
     ]
   }
   for(var i=0;i<cat.activities.length;i++){
       console.log(cat.activities[i])
   }
for(i in cat){
    console.log(i);
    for(const value of cat.activities){
        console.log(value);
    }
   cat.activities.forEach(myFunction);
   function myFunction(item,index){
       console.log(item);
   }
}




// resume//


var resume={
    name:'Shiva kumar Chigiri',
    branch:'ECE',
    Qualification:'B.tech',
    
    Address:{
        village:'jallaram',
        city:'Godavarikhani',
        State:'Telangana',
        Country:'India'
    },
    mailid:'chigirishivakumaryadav18@gmail.com'

    
}
console.log(resume);