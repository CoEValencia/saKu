Ext
        .define(
                'App.view.conversation.ConversationV',
                {
                    extend : Ext.form.Panel,
                    xtype : 'conversation',

                    config : {
                        baseCls : 'app_login',
                        layout:'vbox',
                        scrollable : false
                    },

                    constructor : function(config) {
                        config = config || {};
                        this.ID_NAME = config.name;
                        this.ID_FLOW = config.idflow;
                        
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
                                html : '<span style="font-style: italic;color:white;font-size:22px;align:center;text-align: center;z-index:100;">'+this.ID_NAME+'<span>',
                                width : 200,
                                margin : '30 40 20 40 ',
                            }]
                        },
                        {
                            xtype:'fwklist',
                            cls:'chirr-field',
                            itemId:'messageList',
//                            margin : '20 40 20 40 ',
                            store: {
                                xclass : 'App.store.conversation.ConversationS'
                            },
                            disableSelection: true,
                            scrollToTopOnRefresh:false,
                            flex:1,
                            itemTpl: new Ext.XTemplate(
                                    '{% var bStyle = values["user.id"] == Fwk.Security.userInfo.id ? "color: #58FA58 ; text-align:right; margin-top:20px !important;"  : "margin-top:20px !important;"; %}',                                   
                                    '{% var name = values["user.id"] != Fwk.Security.userInfo.id ? values["user.name"] : ""; %}',
                                    '<tpl>',
                                    '<div class="message_name"><span>{[name]}</span></div>',
                                    '<div style="font-size:12px; color:#A4A4A4; text-align: right;font-style: italic; float: right;"><span>{date:this.formatDate}</span></div>',
                                    '<div style="{[bStyle]}">{message}</div>',
                                    '</tpl>', {
                                        formatDate: function(value) {
                                            if (Ext.Date.format(value,'d/m/Y') != Ext.Date.format(new Date(),'d/m/Y'))
                                                return  'El ' + Ext.Date.format(value,'d/m/Y') + ' a las ' + Ext.Date.format(value,'H:m');
                                            else return 'Hoy a las ' + Ext.Date.format(value,'H:i');
                                }
                            }
                                    
                            )
                        },
                        {
                            xtype:'panel',
                            layout: {
                                type: 'hbox',
                                pack : 'end'
                            },
                            items:[{
                                xtype : 'textfield',
                                name : 'field',
                                action:'enteraction',
                                flex : 0.1,
                                itemId : 'textToSend',
                                margin : '20 40 20 40 ',
                                placeHolder : 'Escribe...'
                            },{
                                xtype : 'button',
                                iconCls:'arrow_right',
                                cls : 'chirr-button-gray',
                                margin : '20 40 20 40 ',
                                action : 'sendMessage'
                            }]
                        } ];
                    }

                });