Ext.define('App.view.MainMenu', {
    extend: 'Fwk.dataview.ListMenu',
    xtype: 'mainmenu',

    constructor: function(config) {
        config.fwkEntries = [
            {
                text: i18n.menu.helloWorld.title,
                items: [
                    {
                        text: 'Chats',
                        main: true,
                        view: {xtype: 'chatMainV'}
                    },{
                        text: 'Favs. Chats',
                        main:false,
                        vies:{xtype: ''}
                    }
                ]

            }
        ];

        this.callParent(arguments);
    }
});
