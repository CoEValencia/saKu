Ext
        .define(
                'App.view.flows.FlowsV',
                {
                    extend : Ext.form.Panel,
                    xtype : 'flows',

                    config : {
                        baseCls : 'app_login',
                        layout:'vbox',
                        scrollable : false
                    },

                    constructor : function(config) {
                        config = config || {};
                        this.ID_FLOW = config.idflow || -1;
                        this.ID_NAME = config.name || "";
                        
                        config.items = this.fwkItems();
                        this.callParent([ config ]);
                    },

                    fwkItems : function() {
                        return [ {
                            xtype:'panel',
                            layout: {
                                type: 'hbox',
                            },
                            style: 'background-color:#FA5858',
                            items:[{
                                xtype : 'button',
                                iconCls:'arrow_left',
                                cls : 'chirr-button-gray',
                                margin : '20 40 20 40 ',
                                action : 'goBack'
                            },{
                                xtype : 'label',
                                html : '<span style="font-family:titleFont;color:white;font-size:22px;align:center;text-align: center;z-index:100;">'+this.ID_NAME+'<span>',
                                width : 200,
                                margin : '30 40 20 40 ',
                            }]
                        },{
                            xtype:'fwklist',
                            cls:'chirr-field',
                            itemId:'flowList',
//                            margin : '20 40 20 40 ',
                            store: {
                                xclass : 'App.store.flows.FlowsS'
                            },
                            flex:1,
                            action:'tapList',
                            itemTpl: new Ext.XTemplate(
                                    '<center><tpl>',
                                    '{name}',
                                    '</tpl></center>'
                            )

                        },{
                            xtype:'panel',
                            layout: {
                                type: 'hbox',
                                pack : 'end'
                            },
                            style: 'background-color:#FA5858',
                            items:[{
                                xtype : 'button',
                                iconCls:'add',
                                
                                cls : 'chirr-button-gray',
                                margin : '20 40 20 40 ',
                                action : 'addNewFlow'
                            }]
                        } ];
                    }

                });