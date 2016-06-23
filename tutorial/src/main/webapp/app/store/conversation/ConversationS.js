Ext.define('App.store.conversation.ConversationS',{
    extend:'Fwk.data.Store',
    alias:'store.conversation',
    requires:['App.model.conversation.ConversationM'],
    config:{
        model:'App.model.conversation.ConversationM',
        remoteSort: false,
        autoLoad: false,
        proxy:{
            type: 'fwkajax',
            api:{
                read:'messageByFlow'
            }
        }
    }
});