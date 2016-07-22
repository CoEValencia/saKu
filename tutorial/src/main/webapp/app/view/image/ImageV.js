Ext
        .define(
                'App.view.image.ImageV',
                {
                    extend : Ext.form.Panel,
                    xtype : 'imagePanel',

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
                                html : '<span style="font-style: italic;color:red;font-size:15px;align:center;text-align: center;z-index:100;">Selecciona una imagen:<span>',
                                width : 150,
                                margin : '30 40 20 40 ',
                            }]
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            id: 'cat_avatar',
                            margin : '10 auto',
                            src: 'img/cat-icon.png',
                             action : 'tapImage'
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            id: 'rabbit_avatar',
                            margin : '10 auto',
                            src: 'img/rabbit-icon.png',
                             action : 'tapImage'
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            id: 'dog_avatar',
                            margin : '10 auto',
                            src: 'img/dog-icon.png',
                             action : 'tapImage'
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            id: 'penguin_avatar',
                            margin : '10 auto',
                            src: 'img/penguin-icon.png',
                            action : 'tapImage'
   
                        },{
                            xtype : 'button',
                            text : 'Aceptar',
                            cls : 'chirr-button',
                            margin : '20 40 20 40 ',
                            action : 'saveImage'
                        } ];
                    }

                });