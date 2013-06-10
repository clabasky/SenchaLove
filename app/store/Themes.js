Ext.define('Kitchensink.store.Themes', {
        alias: 'store.Thtmes',
        extend: 'Ext.data.Store',
        requires: ['Kitchensink.model.Theme'],

        config: {
            model: 'Kitchensink.model.Theme',
            data: [
                {text: 'Default',  value: 'default'},
                {text: 'Custom', value: 'custom'},
                {text: 'Dark',  value: 'dark'},
                {text: 'Light', value: 'light'}
               
            ]
        }
    });