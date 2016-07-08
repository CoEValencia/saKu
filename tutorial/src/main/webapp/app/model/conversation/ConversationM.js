Ext.define('App.model.conversation.ConversationM',{
   extend:'Fwk.data.Model',
   config: {
       fields:[
               {
                   name:'id',
                   type:'int'
               },
               {
                   name:'message',
                   type:'string'
               },
               {
                   name:'user.id',
                   type:'int'
               },
               {
                   name:'user.name',
                   type:'string'
               },{
                   name: 'date',
                   type: 'date',
                   dateFormat: 'c'
               }
       ]
   }
});
