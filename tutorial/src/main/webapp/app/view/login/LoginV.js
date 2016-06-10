Ext.define('App.view.login.LoginV', {
    extend:  Ext.form.Panel ,
    xtype: 'login',

    config: {
        baseCls:'app_login',
        scrollable: false,
        fullscreen: true
    },
    
    constructor: function(config) {
        config = config || {};
        config.items = this.fwkItems();
        this.callParent([config]);
    },
    
    

    fwkItems: function() {
        return [
            {
                xtype: 'panel',
                maxWidth: 400,
                itemId:'form_login',
                cls:'app_login',
                margin: '18% auto 0 auto',
                defaults:{
                    margin: '0 auto'
                },
                items: [{
                        xtype: 'panel',
                        cls:'app_header_logo',
                        width: 350,
                        height: 50,
                        style: {
                        }
                    },{
                        xtype: 'label',
                        html: '<span style="color:white;font-size:80px;align:center;z-index:100;">Chirr<span>',
                        width: 200
                    },{
                        xtype: 'textfield',
                        placeHolder: 'Usuario',
                        name: 'j_username',
                        itemId: 'userNameTextField',
                        autoComplete: false,
                        autoCorrect: false,
                        maxWidth: 200,
                        margin: '60 auto 0 auto'
                    },{
                        xtype: 'passwordfield',
                        placeHolder: 'Contraseña',
                        name: 'j_password',
                        maxWidth: 200,
                        margin: '20 auto 0 auto'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Enviar',
                //cls: 'app_login_button',
                maxWidth: 200,
                margin: '20 auto',
                fwkEvent: 'login'
            },
            {
                xtype: 'button',
                text: 'Nuevo usuario',
               // cls: 'app_login_button',
                maxWidth: 200,
                margin: '50 auto',
                action: 'newUser'
            }
        ];
    }
    
});