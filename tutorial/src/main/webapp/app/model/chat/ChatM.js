Ext.define('App.model.chat.ChatM',{
   extend:'Fwk.data.Model',
   config: {
       fields:[
               {
                   name:'id',
                   type:'int'
               },
               {
                   name:'nombre',
                   type:'string'
                 }//,
//               {
//                   name:'capacidad',
//                   type:'int'
//               }
       ]
   }
});
