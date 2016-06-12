Ext
        .define(
                'App.view.registry.RegistryV',
                {
                    extend : Ext.form.Panel,
                    xtype : 'registry',

                    config : {
                        baseCls : 'app_login',
                        scrollable : true,
                        fullscreen : true
                    },

                    constructor : function(config) {
                        config = config || {};
                        config.items = this.fwkItems();
                        this.callParent([ config ]);
                    },

                    fwkItems : function() {
                        return [ {
                            xtype : 'label',
                            html : '<span style="font-style: italic;color:red;font-size:22px;align:center;text-align: center;z-index:100;">Chirr!<span>',
                            width : 200,
                            margin : '20 40 20 40 ',
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            margin : 'auto',
                            src: 'img/camera-icon.png',
                        },{
                            xtype : 'textfield',
                            name : 'field',
                            flex : 0.1,
                            cls : 'chirr-field-black',
                            name : 'j_username',
                            itemId : 'userNameTextField',
                            margin : '20 40 20 40 ',
                            placeHolder : 'Nombre de usuario'
                        },{
                            xtype : 'textfield',
                            name : 'field',
                            flex : 0.1,
                            cls : 'chirr-field-black',
                            name : 'j_username',
                            itemId : 'userNameTextField',
                            margin : '20 40 20 40 ',
                            placeHolder : 'E-mail'
                        }, {
                            xtype : 'textfield',
                            name : 'j_password',
                            cls : 'chirr-field-black',
                            margin : '20 40 20 40 ',
                            flex : 0.1,
                            itemId : 'login_pass',
                            inputType : 'password',
                            placeHolder : 'Contraseña'
                        }, {
                            xtype : 'textfield',
                            name : 'j_password',
                            cls : 'chirr-field-black',
                            margin : '20 40 20 40 ',
                            flex : 0.1,
                            itemId : 'login_pass',
                            inputType : 'password',
                            placeHolder : 'Repita la contraseña'
                        }, {
                            xtype : 'button',
                            text : 'Registrar',
                            cls : 'chirr-button',
                            margin : '20 40 20 40 ',
                            action : 'newUser'
                        } ];
                    }

                });