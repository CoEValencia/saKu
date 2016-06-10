Ext.define('App.view.chat.ChatMainV', {
    extend: 'Fwk.Container',
    xtype: 'chatMainV',
    iconCls:'compose',
    config: {
        layout:'vbox'
    },


    initialize: function() {
        this.config.title = 'Listado de chats';
        debugger;
        this.setItems([
                       {
                           xtype: 'fieldset',
                           title: 'Elige un chat:',
                           items: [
                                   {
                                       xtype: 'selectfield',
                                       label: 'Nombre',
                                       store: {
                                           xclass : 'App.store.chat.ChatS'
                                       },
                                       displayField: 'nombre',
                                       valueField: 'id'
                                   }
                                   ]
                       },
//                     {
//                     xtype: 'fwklist',              
//                     itemId: 'chatCombo',
//                     fieldLabel: 'Elige el chat al que unirte',
//                     store: {
//                     xclass : 'App.store.chat.ChatS'
//                     },
//                     disableSlection: true,
//                     flex:1,
//                     //centered: true,
//                     itemTpl: new Ext.XTemplate(
//                     '<tpl>',
//                     '{nombre}',
//                     '</tpl>'
//                     )
//                     },
                       {
                           xtype: 'button',
                           text: 'Entrar',
                           //cls: 'app_login_button',
                           maxWidth: 200,
                           margin: '20 auto',
                           fwkEvent: 'enterChat'
                       },
                       ]);

        this.setFwkNavBarItems([
                                {
                                    iconCls: 'icon-question',
                                    fwkEvent: 'help'
                                }
                                ]);
    },

});