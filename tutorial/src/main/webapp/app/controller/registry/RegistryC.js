Ext.define("App.controller.registry.RegistryC", {
    extend:  Ext.app.Controller ,

    fwkView: 'registry',

    config: {
        control: {
            'registry': {
                action: 'doLogin'
            },
            'registry button[fwkEvent=login]': {
                tap: 'doLogin'
            },
            'registry [action=newUser]': {
                tap: 'doNewUser'
            }
        }
    },

    doNewUser: function(btn){    
//        location.reload();
        
        Ext.Ajax.request({
            url: 'bo/USUARIO_FIND.htm',
            success: function(response){
                debugger
            }
        });
    },


    /**
     * Se ejecuta cuando el usuario quiere envíar el formulario de login al servidor.
     */
    doLogin: function(btn) {
    }

});