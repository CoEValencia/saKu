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
                    
                    initialize: function () {                
                    this.onBefore("painted", function () {
                        this.fireEvent('fireCheckImage');            
                });
            },
                    fwkItems : function() {
                        return [ {
                            xtype:'panel',
                            layout: {
                                type: 'hbox',
                            },
                            items:[{
                                xtype : 'button',
                                iconCls:'arrow_left',
                                cls : 'chirr-button',
                                margin : '20 40 20 40 ',
                                action : 'goBack'
                            },{
                                xtype : 'label',
                                html : '<span style="font-family:titleFont;color:red;font-size:22px;align:center;text-align: center;z-index:100;">Chirr!<span>',
                                width : 150,
                                margin : '30 40 20 40 ',
                            }]
                        },{
                            xtype: 'image',
                            id:'avatarImage',
                            cls:'image-circle',
                            margin : 'auto',
                            src: 'img/camera-icon.png',
                            action:'uploadImage'
                        },{
                            xtype : 'textfield',
                            name : 'field',
                            flex : 0.1,
                            cls : 'chirr-field-black',
                            itemId : 'nameFieldreg',
                            margin : '20 40 20 40 ',
                            placeHolder : 'Nombre de usuario'
                        },{
                            xtype : 'textfield',
                            name : 'field',
                            flex : 0.1,
                            cls : 'chirr-field-black',
                            itemId : 'emailTextField',
                            margin : '20 40 20 40 ',
                            placeHolder : 'E-mail'
                        }, {
                            xtype : 'textfield',
                            cls : 'chirr-field-black',
                            margin : '20 40 20 40 ',
                            flex : 0.1,
                            itemId : 'passwordTextField',
                            inputType : 'password',
                            placeHolder : 'Contraseña'
                        }, {
                            xtype : 'textfield',
                            cls : 'chirr-field-black',
                            margin : '20 40 20 40 ',
                            flex : 0.1,
                            itemId : 'passwordReTextField',
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