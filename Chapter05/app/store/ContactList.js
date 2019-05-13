Ext.define('Contact', {
    extend: 'Ext.data.Model',
    fields: ['fname', 'lname', 'email', 'address','city', 'state','phone','type']
});

Ext.define('CD.store.ContactList', {
    extend: 'Ext.data.Store',
    storeId: 'contactList',
    model: 'Contact',
    pageSize: 5,
proxy: {
        type: 'rest',
        url: 'contactlist', // url that will load data with respect to start and limit params
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }
});

Ext.create('CD.store.ContactList').load();