Ext.define('App.view.Main', {
    extend: 'Fwk.Container',
    xtype: 'main',
    requires: [],
    config: {
    },

    initialize: function() {
        this.config.title = 'Listado de chats';

        this.setItems([
            {
                xtype: 'fwklist',              
                itemId: 'chatCombo',
                fieldLabel: 'Elige el chat al que unirte',
                store: {
                    xclass : 'App.store.chat.ChatS'
                },
                disableSlection: true,
                flex:1,
                //centered: true,
                itemTpl: new Ext.XTemplate(
                    '<tpl>',
                        '{nombre}',
                    '</tpl>'
                )
            },
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