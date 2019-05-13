Ext.define('EA.store.Expense', {
    extend: 'Ext.data.Store',
    alias: 'store.expense',
    storeId: 'expense',
    fields: [{name:'date', type: 'date'}, 'cat', 'spent'],
    data: {
        items: [
            { "date": "1/1/2015", "cat": "Restaurant", "spent": 100 },
            { "date": "1/1/2015", "cat": "Travel", "spent": 22 },
            { "date": "1/1/2015", "cat": "Insurance", "spent": 343 },
            { "date": "1/1/2015", "cat": "Rent", "spent": 1000 },
            { "date": "1/1/2015", "cat": "Groceries", "spent": 232 },
            { "date": "1/1/2015", "cat": "Utilities", "spent": 300 },
            
            { "date": "2/1/2015", "cat": "Restaurant", "spent": 2342 },
            { "date": "2/1/2015", "cat": "Travel", "spent": 150 },
            { "date": "2/1/2015", "cat": "Insurance", "spent": 500 },
            { "date": "2/1/2015", "cat": "Rent", "spent": 1000 },
            { "date": "2/1/2015", "cat": "Groceries", "spent": 344 },
            { "date": "2/1/2015", "cat": "Utilities", "spent": 211 },
            
            { "date": "3/1/2015", "cat": "Restaurant", "spent": 100 },
            { "date": "3/1/2015", "cat": "Travel", "spent": 150 },
            { "date": "3/1/2015", "cat": "Insurance", "spent": 233 },
            { "date": "3/1/2015", "cat": "Rent", "spent": 1000 },
            { "date": "3/1/2015", "cat": "Groceries", "spent": 2342 },
            { "date": "3/1/2015", "cat": "Utilities", "spent": 533 },
            
            { "date": "4/1/2015", "cat": "Restaurant", "spent": 100 },
            { "date": "4/1/2015", "cat": "Travel", "spent": 150 },
            { "date": "4/1/2015", "cat": "Insurance", "spent": 234 },
            { "date": "4/1/2015", "cat": "Rent", "spent": 1000 },
            { "date": "4/1/2015", "cat": "Groceries", "spent": 400 },
            { "date": "4/1/2015", "cat": "Utilities", "spent": 34 },
            
            { "date": "5/1/2015", "cat": "Restaurant", "spent": 100 },
            { "date": "5/1/2015", "cat": "Travel", "spent": 150 },
            { "date": "5/1/2015", "cat": "Insurance", "spent": 600 },
            { "date": "5/1/2015", "cat": "Rent", "spent": 2345 },
            { "date": "5/1/2015", "cat": "Groceries", "spent": 234 },
            { "date": "5/1/2015", "cat": "Utilities", "spent": 344 },
    ]},
     proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});


Ext.define('MyApp.model.ExpensebyMonth', {
    extend: 'Ext.data.Model',
    fields: [{name:'date', type: 'date'}, 'total']
});

Ext.define('MyApp.store.ExpensebyMonth', {
    extend: 'Ext.data.Store',
    alias: 'store.expensebyMonthStore',
    model: 'MyApp.model.ExpensebyMonth',
    data: (function () {
        var data = [];
        var expense = Ext.createByAlias('store.expense');
        expense.group('date');
        var groups = expense.getGroups();
        groups.each(function (group) {
            data.push({ date: group.config.groupKey, total: group.sum('spent') });
        });
        return data;
    })()
});
    
    