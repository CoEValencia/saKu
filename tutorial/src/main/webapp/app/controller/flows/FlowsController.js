Ext.define("App.controller.flows.FlowsController", {
    extend:  Ext.app.Controller ,

    fwkView: 'flowscontroller',

    config: {
        control: {
            'flows': {
                show: 'loadData'
            },
            'flows [action=goBack]': {
                tap: 'goBack'
            },
            'flows [action=addNewFlow]': {
                tap: 'addNewFlow'
            },
            'flows [action=tapList]':{
                itemsingletap:'tapList'
            }
        }
    },

    loadData : function(cmp){
      App.bo.findFlowsById({
          params:{'id':cmp.ID_FLOW},
          mask: true,
          success: function(response, opts) {
              Ext.ComponentQuery.query("#flowList")[0].getStore().removeAll();
              Ext.ComponentQuery.query("#flowList")[0].getStore().addData(response);
          }
      });
    },
    
    goBack: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
    },
    
    addNewFlow:function(cmp){
        var id = cmp.up('flows').ID_FLOW;
        Ext.Msg.prompt({
            title:'Nuevo Hilo',
            msg:'introduzca el nombre del Hilo:',
            },'',
            function(btn, text){
              if (btn == 'ok' && text != ''){
                  App.bo.flowsUpdate({
                      params:{'stream':id, name:text},
                      mask: true,
                      success: function(response, opts) {
                          Ext.ComponentQuery.query("#flowList")[0].getStore().add(response);
                      }
                  });
              }
        });
    },
    
    tapList:function( me, index, target, record, e, eOpts){

        
//        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
        Ext.Viewport.setActiveItem({
            xtype:'conversation',
            itemId:'conv-'+record.data.id,
            idflow: record.data.id,
            name: record.data.name
        });
    }
});