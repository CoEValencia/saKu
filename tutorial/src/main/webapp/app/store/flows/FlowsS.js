Ext.define('App.store.flows.FlowsS',{
    extend:'Fwk.data.Store',
    alias:'store.flow',
    requires:['App.model.flows.FlowsM'],
    config:{
        model:'App.model.flows.FlowsM',
        remoteSort: false,
        autoLoad: false,
        proxy:{
            type: 'fwkajax',
            api:{
                read:'findFlowsById'
            }
        }
    }
});
