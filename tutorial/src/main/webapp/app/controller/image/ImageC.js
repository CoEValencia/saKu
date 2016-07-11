Ext.define("App.controller.image.ImageC", {
    extend:  Ext.app.Controller ,

    fwkView: 'imagePanel',

    config: {
        control: {
            'imagePanel [action=goBack]': {
                tap: 'goBack'
            },
            'imagePanel [action=newImage]': {
                tap: 'uploadImg'
            }
        }
    },

    goBack: function(){
//      Ext.Viewport.remove(Ext.Viewport.getActiveItem());
        var prev = Fwk.Page.getViewport().getItems().items.length-1;
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
        Fwk.Page.getViewport().setActiveItem(prev);
    },
    
    
      uploadImg: function(){

    },

});