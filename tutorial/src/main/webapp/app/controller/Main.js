Ext.define('App.controller.Main', {
    extend: 'Fwk.app.Controller',
    fwkView: 'main',
    config: {
        control: {
            'main [action=openSub]': {
                tap: 'onOpenSubTap'
            }
        }
    },

    onOpenSubTap: function(btn) {
        Fwk.Page.push({
            xtype: 'sub'
        });
    }
});