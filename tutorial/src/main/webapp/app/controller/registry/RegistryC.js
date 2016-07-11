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
            },
            'registry [action=uploadImage]': {
                tap: 'doUploadImage'
            },
            'registry [action=goBack]': {
                tap: 'goBack'
            }
        }
    },
    
    goBack: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
    },

    doUploadImage: function(){
        Ext.Viewport.setActiveItem({
            xtype:'imagePanel'
        });
    },


    doNewUser: function(btn){    
        
        var name = Ext.ComponentQuery.query("#nameFieldreg")[0].getValue();
        var email = Ext.ComponentQuery.query("#emailTextField")[0].getValue();
        var password = Ext.ComponentQuery.query("#passwordTextField")[0].getValue();
        var rePassword = Ext.ComponentQuery.query("#passwordReTextField")[0].getValue();
        //comit
        
        if(password === rePassword && password != ""){
        
            Ext.Viewport.mask();
            Ext.Ajax.request({
                url: 'public/ADD_NEW_USER.wbo', 
                params:{
                  userName:name,
                  password:password,
                  email:email
                },
                success: function(response){
                    Fwk.Msg.error(response.responseText, function(){location.reload();});
                    Ext.Viewport.unmask();
                }, 
                failure: function () {
                    Ext.Viewport.unmask();
                }
        });
        }
    },


    /**
     * Se ejecuta cuando el usuario quiere envíar el formulario de login al servidor.
     */
    doLogin: function(btn) {
    },
    

});