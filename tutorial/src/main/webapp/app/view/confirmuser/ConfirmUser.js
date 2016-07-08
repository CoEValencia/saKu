Ext
        .define(
                'App.view.confirmuser.ConfirmUser',
                {
                    extend : Ext.form.Panel,
                    xtype : 'confirmuser',

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
                            html : '<span style="font-family:titleFont;color:red;font-size:22px;align:center;text-align: center;z-index:100;">Chirr!<span>',
                            width : 200,
                            margin : '20 40 20 40 ',
                        }, {
                            xtype : 'label',
                            html : '<span>Confirma tu usuario<span>',
                            width : 200,
                            margin : '20 40 20 40 ',
                        },{
                            xtype : 'textfield',
                            cls : 'chirr-field-black',
                            margin : '20 40 20 40 ',
                            flex : 0.1,
                            itemId : 'passwordTextField',
                            inputType : 'password',
                            placeHolder : 'Contraseña'
                        }, {
                            xtype : 'button',
                            text : 'Confirmar cuenta',
                            cls : 'chirr-button',
                            margin : '20 40 20 40 ',
                            action : 'makeConfirm'
                        } ];
                    }

                });