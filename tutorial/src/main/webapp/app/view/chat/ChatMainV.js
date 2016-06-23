Ext.define('App.view.chat.ChatMainV', {
    extend: 'Fwk.Container',
    xtype: 'chatMainV',
    iconCls:'compose',
    config: {
        layout:'vbox',
        baseCls : 'app_login',
    },


    initialize: function() {
        var me = this;

        App.bo.permisosCheck({
            params:{id: Fwk.Security.userInfo.id},
            mask: true,
            success: function(response, opts) {
               if(response.length == 0){
                   Fwk.Msg.error("Por favor, confirme su cuenta. Revise su correo", function(){Fwk.Security.logout();});
               }else{
                   me.setItems([
                                  {
                                      xtype : 'label',
                                      html : '<span style="font-style: italic;color:red;font-size:22px;align:center;text-align: center;z-index:100;">Chirr!<span>',
                                      width : 200,
                                      margin : '20 auto',
                                  },{
                                      xtype:'panel',
                                      layout: {
                                          type: 'hbox',
                                      },
                                      items:[{
                                          xtype : 'button',
                                          text : '',
                                          iconCls:'search',
                                          cls : 'chirr-button',
                                          margin : '0 20 10 40 ',
                                          action : 'searchList'
                                      },{
                                          xtype : 'textfield',
                                          name : 'field',
                                          flex : 0.1,
                                          cls : 'chirr-field',
                                          name : 'searchField',
                                          itemId : 'searchField',
                                          margin : '0 40 10 0 ',
                                          placeHolder : 'Search...'
                                      }]
                                  },

//                                  {
//                                      xtype: 'searchfield',
//                                      //placeHolder: 'Search...',
//                                      itemId: 'searchBox',
//                                      cls:'chirr-field',
//                                      //maxWidth : 200,
//                                      margin : '20 40 20 40 ',
//                                      //flex : 0.5,
//                                      store: {
//                                          xclass : 'App.store.chat.ChatS'
//                                      },
//                                      displayField: 'nombre',
//                                      valueField: 'id'
//                                  }
                                  {
                                      xtype:'fwklist',
                                      cls:'chirr-field',
                                      itemId:'chatList',
                                      margin : '20 40 20 40 ',
                                      store: {
                                          xclass : 'App.store.chat.ChatS'
                                      },
                                      disableSlection: true,
                                      flex:1,
                                      action:'tapList',
                                      itemTpl: new Ext.XTemplate(
                                              '<tpl>',
                                              '{name}',
                                              '</tpl>'
                                      )

                                  },{
                                      xtype : 'button',
                                      text : 'Crear stream',
                                      cls : 'chirr-button',
                                      margin : '20 40 20 40 ',
                                      action : 'makeConfirm'
                                  }  
                                  ]);
               }
            }
        });
        
        // this.config.title = 'Listado de chats';
        // debugger;
        
        this.setFwkNavBarItems([
                                {
                                    iconCls: 'icon-question',
                                    fwkEvent: 'help'
                                }
                                ]);
    },

});