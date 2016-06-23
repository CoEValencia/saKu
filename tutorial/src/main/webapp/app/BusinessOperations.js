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
        'findChatsLike' : 'bo/STREAM_FIND_BY_NAME'  +  Fwk.config.fwkBOPathSuffix,
        'addChats' : 'bo/STREAM_UPDATE'  +  Fwk.config.fwkBOPathSuffix,
        'findFlowsById' : 'bo/FLOW_FIND_BY_ID'  +  Fwk.config.fwkBOPathSuffix,
        'flowsUpdate' : 'bo/FLOW_UPDATE'  +  Fwk.config.fwkBOPathSuffix,
        'messageByFlow' : 'bo/MESSAGE_FIND_BY_FLOW' +  Fwk.config.fwkBOPathSuffix
    });
});
