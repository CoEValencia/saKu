Ext.define("App.controller.confirmuser.ConfirmUserController", {
    extend:  Ext.app.Controller ,

    fwkView: 'confirmuser',

    config: {
        control: {
            'confirmuser [action=makeConfirm]': {
                tap: 'makeConfirm'
            }
        }
    },

    makeConfirm: function(btn){    
        
        App.bo.validateUser({
            params:{id: parseInt(getParameterByName("id"))},
            mask: true,
            success: function(response, opts) {
            }
        });
        window.location =  window.location.href.split("?")[0];
    }
});