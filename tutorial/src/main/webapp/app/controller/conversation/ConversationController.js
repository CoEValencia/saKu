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
            },
            'conversation textfield#textToSend': { //handle Enter on the companyName textfield
                keyup: 'enterKeyPress'
            }
        }
    },

    loadData : function(cmp){
        
//        Ext.ComponentQuery.query("#messageList")[0].getScrollable().getScroller().scrollToEnd();
        this.TIMMER = setInterval(function () {
            var last ="2016-06-29T22:00:00";
            if(Ext.ComponentQuery.query("#messageList")[0].getStore().data.length != 0){
                last = Ext.ComponentQuery.query("#messageList")[0].getStore().last().data.date;
            }
              App.bo.messageByFlow({
                  params:{'id':cmp.ID_FLOW, 'superior':last},
                  mask: false,
                  success: function(response, opts) {
                      if(response.length > Ext.ComponentQuery.query("#messageList")[0].getStore().data.length){
                          Ext.ComponentQuery.query("#messageList")[0].getStore().addData(response);
                          setTimeout(function(){
                              Ext.ComponentQuery.query("#messageList")[0].getScrollable().getScroller().scrollToEnd(true);
                          },100);  
                      }
                  }
              });
          }, 800);
    },
    
    goBack: function(cmp){
        clearInterval(this.TIMMER);
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
                setTimeout(function(){
                    Ext.ComponentQuery.query("#messageList")[0].getScrollable().getScroller().scrollToEnd(true);
                },100);  
                Ext.ComponentQuery.query("#textToSend")[0].setValue("");
            }
        });
    },
    
    enterKeyPress: function(obj, e, eOpts ){
        if(e.event.keyCode == 13){
            var id = obj.up('conversation').ID_FLOW;
            var message =   Ext.ComponentQuery.query("#textToSend")[0].getValue();
            
            App.bo.sendMessage({
                params:{'flow.id':id, 'message': message, 'user.id':Fwk.Security.userInfo.id},
                mask: false,
                success: function(response, opts) {
                    response['user.id'] = response.user.id;
                    Ext.ComponentQuery.query("#messageList")[0].getStore().add(response);
                    setTimeout(function(){
                        Ext.ComponentQuery.query("#messageList")[0].getScrollable().getScroller().scrollToEnd(true);
                    },100);  
                    Ext.ComponentQuery.query("#textToSend")[0].setValue("");
                }
            });
        }
    }
});