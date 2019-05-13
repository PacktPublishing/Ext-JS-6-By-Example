
Ext.define('EA.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.alert('TODO: show the details of the expense for the selected expense category');
    },
    onMonthSelect: function (combo, record) {
            console.log(record);
            Ext.getStore('expense').clearFilter();
            var dateFiter = new Ext.util.Filter({
                filterFn: function(item) {
                    return item.data.date.getMonth() ==['Jan', 'Feb', 'Mar', 'Apr', 'May'].indexOf(record.raw[0]);
                }
            });
            Ext.getStore('expense').addFilter(dateFiter);
    }
});
