Ext.define('App.store.chat.ChatS',{
    extend:'Fwk.data.Store',
    alias:'store.chat',
    requires:['App.model.chat.ChatM'],
    config:{
        model:'App.model.chat.ChatM',
        remoteSort: false,
        autoLoad: true,
//        proxy:{
//            type: 'fwkajax',
//            api:{
//                read:'chatFind'
//            }
//        }
        data: [{
                nombre:'PruebaChat0',
                id: '0'
            },{
                nombre: 'PruebaChat1',
                id: '1'
            },{
                nombre: 'PruebaChat2',
                id: '2'
            }],
    }
});
