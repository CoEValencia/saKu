Ext.define('App.BusinessOperations', {
    extend : 'Fwk.app.Controller',
    init : function() {
    }

}, function() {

    Fwk.BO.register({
        'usuarioFind' : 'bo/USUARIO_FIND' + Fwk.config.fwkBOPathSuffix,
        'permisosUserFind' : 'bo/PERMISOS_FIND_BY_ID' + Fwk.config.fwkBOPathSuffix,
        'permisosCheck' : 'public/CHECK_PERMISOS_USER' + Fwk.config.fwkBOPathSuffix,
        'validateUser' : 'public/VALIDATE_USER' +  Fwk.config.fwkBOPathSuffix,
        'findChatsLike' : 'bo/STREAM_FIND_BY_NAME'  +  Fwk.config.fwkBOPathSuffix
    });
});
