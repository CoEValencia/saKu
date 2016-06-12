
Ext.merge(Fwk.config, {
    // Sobreescribir el Login por defecto
     fwkLogin: {
       //controller: 'App.controller.login.LoginC',
       view: 'App.view.login.LoginV',
       alias: 'login',
      // loginUrl: 'my_custom_login'
     }
});


Fwk.application({
    title: '**Chirr',
    
//    fwkBOPathSuffix:'.wbo',

    models: [
         'chat.ChatM'
             ],
    stores: [
         'chat.ChatS'
             ],
    controllers: [
        'Main',
        'Sub',
        'login.LoginC',
        'registry.RegistryC'
        ],
    views: [
        'MainMenu',
        'Main',
        'Sub',
        'login.LoginV',
        'chat.ChatMainV',
        'registry.RegistryV'
    ],

    launch: function() {
		this.title=i18n.appName;
        document.title = Fwk.config.title = i18n.appName;
    }
});