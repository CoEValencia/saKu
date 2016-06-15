Ext.define('App.BusinessOperations', {
    extend : 'Fwk.app.Controller',
    init : function() {
    }

}, function() {

    Fwk.BO.register({
        'usuarioFind' : 'bo/USUARIO_FIND' + Fwk.config.fwkBOPathSuffix
    });
});
