Ext.define('App.store.chat.ChatS',{
    extend:'Fwk.data.Store',
    alias:'store.chat',
    requires:['App.model.chat.ChatM'],
    config:{
        model:'App.model.chat.ChatM',
        remoteSort: false,
        autoLoad: false,
        proxy:{
            type: 'fwkajax',
            api:{
                read:'findChatsLike'
            }
        },
//        data: [{
//                name:'PruebaChat0',
//                id: '0'
//            },{
//                name: 'PruebaChat1',
//                id: '1'
//            },{
//                name: 'PruebaChat2',
//                id: '2'
//            }],
    }
});
