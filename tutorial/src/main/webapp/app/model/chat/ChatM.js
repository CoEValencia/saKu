Ext.define('App.model.chat.ChatM',{
   extend:'Fwk.data.Model',
   config: {
       fields:[
               {
                   name:'id',
                   type:'int'
               },
               {
                   name:'name',
                   type:'string'
                 }//,
//               {
//                   name:'capacidad',
//                   type:'int'
//               }
       ]
   }
});
