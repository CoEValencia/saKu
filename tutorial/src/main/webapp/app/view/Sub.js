Ext.define('App.view.Sub', {
    extend: 'Fwk.Container',
    xtype: 'sub',
    requires: [],
    config: {
    },

    initialize: function() {
        this.config.title = i18n.sub.title;
        this.setItems([
            {
                xtype: 'fwkbutton',
                action: 'return',
                text: i18n.sub.buttonText,
                centered: true
            }
        ]);
    }
});