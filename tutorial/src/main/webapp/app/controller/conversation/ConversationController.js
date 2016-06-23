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
    }
});