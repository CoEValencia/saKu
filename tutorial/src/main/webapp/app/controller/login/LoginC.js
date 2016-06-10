Ext.define("App.controller.login.LoginC", {
    extend:  Ext.app.Controller ,

    fwkView: 'login',

    config: {
        control: {
            'login': {
                action: 'doLogin'
            },
            'login button[fwkEvent=login]': {
                tap: 'doLogin'
            },
            'login [action=newUser]': {
                tap: 'doNewUser'
            }
        }
    },

    doNewUser: function(btn){             
//      btn.up('login').reset();
//      Ext.Viewport.add(Ext.create('Login.view.PasswordForgetV'));
//      Ext.Viewport.setActiveItem('passwordforget');
    },


    /**
     * Se ejecuta cuando el usuario quiere envíar el formulario de login al servidor.
     */
    doLogin: function(btn) {

        var form = btn.up('login');
        var params = form.getValues();

        form.setMasked({
            xtype: 'fwkloadmask',
            indicator: true,
            message: i18n.mask.loading
        });

        Fwk.Security.validateCredentials(params);
        form.setMasked(false);
//      else {
//      Ext.Msg.alert('Aviso', 'Se ha producido un error en la autentificacion', Ext.emptyFn);

//      var params = this.lookupReference('fwkLoginForm').getValues();
//      if(this.lookupReference('fwkLoginForm').isValid()){
//      Fwk.Security.validateCredentials(params);
//      }
//      else{
//      Ext.Msg.show({
//      title: 'Aviso',
//      message: 'El usuario y la contraseña son necesarios',
//      closable: false,
//      buttons: Ext.Msg.OK,
//      cls:'alert_msg'
//      });
//      }

    },

loginHandler: function(var1,var2,var3){
    debugger;
}

});