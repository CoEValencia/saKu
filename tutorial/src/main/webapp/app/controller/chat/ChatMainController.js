Ext.define("App.controller.chat.ChatMainController", {
    extend:  Ext.app.Controller ,

    fwkView: 'chatmaincontroller',

    config: {
        control: {
            'chatMainV [action=makeConfirm]': {
                tap: 'createStream'
            },
            'chatMainV [action=searchList]': {
                tap: 'searchList'
            },
            'chatMainV [action=tapList]':{
                itemsingletap:'tapList'
            }
//            'chatMainV': {
//                painted: 'loadData'
//            }
        }
    },

    createStream: function(btn){    
        Ext.Viewport.setActiveItem({
            xtype:'chatadd'
        });
    },
    
    loadData : function(cmp){
       
    },
    
    searchList: function(btn){
        var filter = Ext.ComponentQuery.query("#searchField")[0].getValue();
        if(filter === ''){
            return;
        }
        
//        Ext.ComponentQuery.query("#chatList")[0].getStore().load({
//            params :{
//                'name':'Def'
//            },
//            method:'POST',
//            mask:true
//        });
        App.bo.findChatsLike({
            params:{'name':filter},
            mask: true,
            success: function(response, opts) {
                Ext.ComponentQuery.query("#chatList")[0].getStore().removeAll();
                Ext.ComponentQuery.query("#chatList")[0].getStore().addData(response);
            }
        });
    },
    
    tapList:function( me, index, target, record, e, eOpts){
        Ext.Viewport.setActiveItem({
            xtype:'flows',
            id:'flow-'+record.data.id,
            idflow: record.data.id,
            name: record.data.name
        });
    }
});