Ext.define("Fwk.controller.Login", {
    extend:  Fwk.app.Controller ,
               
                       
                      
      

    fwkView: 'fwklogin',

    config: {
        control: {
            'fwklogin': {
                action: 'doLogin'
            },
            'fwklogin button[fwkEvent=login]': {
                tap: 'doLogin'
            },
            '[fwkEvent=logout]': {
                tap: 'doLogout'
            }
        }
    },

    launch: function() {
        App.app.on("securitynosession", this.showLogin, this);
        App.app.on("securityloginsuccess", this.loginSuccess, this);
        App.app.un("securityloginfailure", this.loginFailure, this);
    },

    /**
     * Muestra la pantalla de login en respuesta al evento "securitynosession".
     */
    showLogin: function() {
        App.app.on("securityloginsuccess", this.loginSuccess, this);
        App.app.on("securityloginfailure", this.loginFailure, this);
        Fwk.Page.showLogin();
    },

    /**
     * Se ejecuta cuando el usuario quiere envíar el formulario de login al servidor.
     */
    doLogin: function(formChild) {
        var form = this.fwkQuery(formChild);

        form.setMasked({
            xtype: 'fwkloadmask',
            indicator: true,
            message: i18n.mask.loading
        });

        Fwk.Security.validateCredentials(form.getValues());
    },

    /**
     * Se ejecuta cuando el usuario quiere cerrar su sesión.
     */
    doLogout: function(btn) {
        Ext.Msg.confirm(i18n.logout.title, i18n.logout.message, function(buttonId) {
            if(buttonId == "yes") {
                Fwk.Security.logout();
            }
        });
    },


    /**
     * Se ejecuta en respuesta al evento "securityloginsuccess". Elimina el formulario de login (si existe)
     * y muestra la pantalla principal de la aplicación.
     */
    loginSuccess: function() {
        App.app.un("securityloginsuccess", this.loginSuccess, this);
        App.app.un("securityloginfailure", this.loginFailure, this);

        var form = Ext.ComponentQuery.query('fwklogin')[0];

        if (form) {
            form.setMasked(false);
        }

        Fwk.Page.showApp();
    },

    /**
     * Se ejecuta en respuesta al evento "securityloginfailure". Muestra el mensaje de error devuelto por el servidor, si hay uno.
     */
    loginFailure: function(error, response) {
        var form = Ext.ComponentQuery.query('fwklogin')[0];

        if (form){
            form.setMasked(false);
        }
        
        var message, error;

        if(response && response.responseText){
            try{
                error = Ext.decode(response.responseText);
            }catch(e){
                error = null;
            }
        }
        
        if (error && error.errorMessage) {
            message = 'Usuario o contraseña incorrectos';
        } else {
            message = i18n.login.error;
        }
        
        Fwk.Msg.error(message);
    }
});