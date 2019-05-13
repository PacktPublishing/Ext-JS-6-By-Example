Ext.define('CD.view.contactList.ContactListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contactList',
    stores: {
        todos: {
            storeId: 'todosStore',
        fields: [ 'name', 'email', 'phone' ],
//            autoLoad: true,
            sorters: [{
                property: 'done',
                direction: 'ASC'
            }],
//         model: 'User',
            data: [
                { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
                { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
            ]
        }
    }
});
