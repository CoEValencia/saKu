Ext
        .define(
                'App.view.chat.ChatAddV',
                {
                    extend : Ext.form.Panel,
                    xtype : 'chatadd',

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
                                html : '<span style="font-style: italic;color:red;font-size:22px;align:center;text-align: center;z-index:100;">Chirr!<span>',
                                width : 200,
                                margin : '30 40 20 40 ',
                            }]
                        },{
                            xtype : 'textfield',
                            name : 'field',
                            flex : 0.1,
                            text:'Nombre',
                            cls : 'chirr-field-black',
                            itemId : 'streamName',
                            margin : '20 40 20 40 ',
                            placeHolder : 'Nombre del stream'
                        }, {
                            xtype : 'button',
                            text : 'Crear Stream',
                            cls : 'chirr-button',
                            margin : '20 40 20 40 ',
                            action : 'createStream'
                        }];
                    }

                });