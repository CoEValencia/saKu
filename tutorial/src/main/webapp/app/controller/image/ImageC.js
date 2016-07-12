Ext.define("App.controller.image.ImageC", {
    extend:  Ext.app.Controller ,

    fwkView: 'imagePanel',

    config: {
        control: {
            'imagePanel [action=goBack]': {
                tap: 'goBack'
            },
            'imagePanel [action=tapImage]': {
                tap: 'onTapImage'
            },
            'imagePanel [action=saveImage]': {
                tap: 'onTapAceptar'
            }
        }
    },

    goBack: function(){
//      Ext.Viewport.remove(Ext.Viewport.getActiveItem());
        globalImageTapped=null;
        var prev = Fwk.Page.getViewport().getItems().items.length-1;
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());
        Fwk.Page.getViewport().setActiveItem(prev);
    },
    
      onTapImage: function(imageTapped){
          var catImage=Ext.getCmp("cat_avatar");
          var dogImage=Ext.getCmp("dog_avatar");
          var rabbitImage=Ext.getCmp("rabbit_avatar");
          var penguinImage=Ext.getCmp("penguin_avatar");
          
          globalImageTapped = imageTapped.getId();

          imageTapped.setCls("image-selected");

          if (imageTapped.getId()!=catImage.getId()){
              catImage.setCls("image-circle");
          }

          if (imageTapped.getId()!=dogImage.getId()){
              dogImage.setCls("image-circle");
          }

          if (imageTapped.getId()!=rabbitImage.getId()){
              rabbitImage.setCls("image-circle");
          }

          if (imageTapped.getId()!=penguinImage.getId()){
              penguinImage.setCls("image-circle");
          }
          
    },
    
    onTapAceptar: function(btn){
       var prev = Fwk.Page.getViewport().getItems().items.length-1;
        Ext.Viewport.remove(Ext.Viewport.getActiveItem());         
        Fwk.Page.getViewport().setActiveItem(prev);
    }


});