Ext.define('Kitchensink.model.Theme', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'value',          type: 'string'},
            {name: 'text',        type: 'string'}
        ]
    }
});
