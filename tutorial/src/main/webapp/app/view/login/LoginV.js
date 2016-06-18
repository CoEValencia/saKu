Ext
        .define(
                'App.view.login.LoginV',
                {
                    extend : Ext.form.Panel,
                    xtype : 'login',

                    config : {
                        baseCls : 'app_login',
                        scrollable : false,
                        fullscreen : true
                    },

                    constructor : function(config) {
                            config = config || {};
                            config.items = this.fwkItems();
                            this.callParent([ config ]);
                            this.onAfter("painted", function(){
                                if(getParameterByName("user_confirm") == "true"){
                                    Fwk.Page.removeLogin();
                                    Ext.Viewport.setActiveItem({
                                        xtype:'confirmuser'
                                    });
                                }
                            });
                    },

                    fwkItems : function() {
                        return [
                                {
                                    xtype : 'label',
                                    html : '<span style="font-style: italic;color:red;font-size:80px;align:center;text-align: center;z-index:100;">Chirr!<span>',
                                    width : 200,
                                    margin : '50 auto',
                                }, {
                                    xtype : 'textfield',
                                    name : 'field',
                                    flex : 0.1,
                                    cls : 'chirr-field',
                                    name : 'j_username',
                                    itemId : 'userNameTextField',
                                    margin : '20 40 20 40 ',
                                    placeHolder : 'Nombre'
                                }, {
                                    xtype : 'textfield',
                                    name : 'j_password',
                                    cls : 'chirr-field',
                                    margin : '20 40 20 40 ',
                                    flex : 0.1,
                                    itemId : 'login_pass',
                                    inputType : 'password',
                                    placeHolder : 'Contraseña'
                                }, {
                                    xtype : 'button',
                                    text : 'Enviar',
                                    cls : 'chirr-button',
//                                    maxWidth : 200,
//                                    margin : '20 auto',
                                    margin : '20 40 20 40 ',
                                    fwkEvent : 'login'
                                }, {
                                    xtype : 'button',
                                    text : 'Nuevo usuario',
                                    cls : 'chirr-button',
//                                    maxWidth : 200,
                                    margin : '20 40 20 40 ',
//                                    margin : '50 auto',
                                    action : 'newUser'
                                } ];
                    }

                });