Ext.define("App.controller.conversation.ConversationController", {
    extend:  Ext.app.Controller ,

    fwkView: 'conversationcontroller',

    config: {
        control: {
            'conversation': {
                show: 'loadData'
            },
            'conversation [action=goBack]': {
                tap: 'goBack'
            },
            'conversation [action=sendMessage]': {
                tap: 'sendMessage'
            }
        }
    },

    loadData : function(cmp){
      App.bo.messageByFlow({
          params:{'id':cmp.ID_FLOW},
          mask: true,
          success: function(response, opts) {
              Ext.ComponentQuery.query("#messageList")[0].getStore().removeAll();
              Ext.ComponentQuery.query("#messageList")[0].getStore().addData(response);
          }
      });
    },
    
    goBack: function(){
        var prev = Fwk.Page.getViewport().getItems().items.length-1;
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
        Fwk.Page.getViewport().setActiveItem(prev);
    },
    
    sendMessage: function (cmp) {
        
        var id = cmp.up('conversation').ID_FLOW;
        var message =   Ext.ComponentQuery.query("#textToSend")[0].getValue();
        
        App.bo.sendMessage({
            params:{'flow.id':id, 'message': message, 'user.id':Fwk.Security.userInfo.id},
            mask: false,
            success: function(response, opts) {
                response['user.id'] = response.user.id;
                Ext.ComponentQuery.query("#messageList")[0].getStore().add(response);
                Ext.ComponentQuery.query("#textToSend")[0].setValue("");
            }
        });
    }
});