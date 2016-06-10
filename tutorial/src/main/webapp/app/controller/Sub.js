Ext.define('App.controller.Sub', {
    extend: 'Fwk.app.Controller',
    fwkView: 'sub',
    config: {
        control: {
            'sub [action=return]': {
                tap: 'onReturnTap'
            }
        }
    },

    onReturnTap: function(btn) {
        Fwk.Page.pop();
    }
});