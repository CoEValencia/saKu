
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
    requires: ['App.BusinessOperations'],
    models: [
         'chat.ChatM', 'conversation.ConversationM', 'flows.FlowsM'
    ],
    stores: [
         'chat.ChatS', 'flows.FlowsS', 'conversation.ConversationS'
    ],
    controllers: [
        'Main',
        'Sub',
        'login.LoginC',
        'registry.RegistryC',
        'confirmuser.ConfirmUserController', "App.controller.chat.ChatAddController",
        'chat.ChatMainController',
        'flows.FlowsController',
        'conversation.ConversationController'
    ],
    views: [
        'MainMenu',
        'Main',
        'Sub',
        'login.LoginV',
        'chat.ChatMainV','App.view.chat.ChatAddV',
        'registry.RegistryV',
        'confirmuser.ConfirmUser',
        'flows.FlowsV',
        'App.view.conversation.ConversationV'
    ],

    launch: function() {
		this.title=i18n.appName;
        document.title = Fwk.config.title = i18n.appName;
    }
});