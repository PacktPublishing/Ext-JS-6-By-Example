/**
 * This view is an example list of people.
 */
Ext.define('EA.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    maxHeight: 400,
    autoScroll: true,
    pageSize: 25,
    requires: [
        'EA.store.Expense'
    ],

    title: 'Year to date expense by category',

    store: {
        type: 'expense'
    },

    columns: {
        defaults: {
            flex:1
        },
        items: [
        { text: 'Category',  dataIndex: 'cat' },
        {  formatter: "date('F')", text: 'Month', dataIndex: 'date'},
        { text: 'Spent', dataIndex: 'spent' }
    ]}
});
