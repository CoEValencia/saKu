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
                                html : '<span style="font-style: italic;color:red;font-size:12px;align:center;text-align: center;z-index:100;">Selecciona la imagen:<span>',
                                width : 200,
                                margin : '30 40 20 40 ',
                            }]
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            margin : '10 auto',
                            src: 'img/cat-icon.png',
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            margin : '10 auto',
                            src: 'img/rabbit-icon.png',
                           // margin: '10 0 0 0'
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            margin : '10 auto',
                            src: 'img/dog-icon.png',
                        },{
                            xtype: 'image',
                            cls:'image-circle',
                            margin : '10 auto',
                            src: 'img/penguin-icon.png',
   
                        },{
                            xtype : 'button',
                            text : 'Aceptar',
                            cls : 'chirr-button',
                            margin : '20 40 20 40 ',
                            action : 'newImage'
                        } ];
                    }

                });