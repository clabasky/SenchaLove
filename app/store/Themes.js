Ext.define('Kitchensink.store.Themes', {
        alias: 'store.Thtmes',
        extend: 'Ext.data.Store',
        requires: ['Kitchensink.model.Theme'],

        config: {
            model: 'Kitchensink.model.Theme',
            data: [
                {text: 'Default',  value: 'default'},
                {text: 'Dark',  value: 'dark-theme'},
                {text: 'Light', value: 'light-theme'},
                {text: 'Ocean', value: 'ocean'},
                {text: 'Fire', value: 'fire'},
                {text: 'Earth', value: 'earth'},
                {text: 'Grape', value: 'grape'}
               
            ]
        }
    });