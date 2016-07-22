Ext.define("App.controller.chat.ChatAddController", {
    extend:  Ext.app.Controller ,

    fwkView: 'chataddcontroller',

    config: {
        control: {
            'chatadd [action=createStream]': {
                tap: 'createStream'
            },
            'chatadd [action=goBack]': {
                tap: 'goBack'
            }
        }
    },

    createStream: function(btn){
        var name = Ext.ComponentQuery.query("#streamName")[0].getValue();
        if(name === ''){
            return;
        }
        var me = this;
        
        App.bo.addChats({
            params:{'name':name},
            mask: true,
            success: function(response, opts) {
                Ext.Msg.alert('Aviso', response.name + " creado correctamente", function(){
                    Ext.Viewport.remove(Ext.Viewport.getActiveItem());
                });
            }
        });
    },
    
    goBack: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
    }

});