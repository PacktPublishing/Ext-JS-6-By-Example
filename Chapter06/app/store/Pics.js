Ext.define('Pic', {
    extend: 'Ext.data.Model',
    fields: ['id', 'url', 'albumId']
});

Ext.define('PE.store.Pics', {
    extend: 'Ext.data.Store',
    storeId: 'pics',
    model: 'Pic',
proxy: {
        type: 'rest',
        url: 'pics', // url that will load data with respect to start and limit params
        reader: {
            type: 'json'
        }
    }
});

Ext.create('PE.store.Pics').load();