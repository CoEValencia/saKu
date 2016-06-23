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
                 }
       ]
   }
});
