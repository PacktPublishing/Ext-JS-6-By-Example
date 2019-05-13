Ext.define('EA.view.main.Pie', {
        extend: 'Ext.chart.PolarChart',
        requires: ['Ext.chart.series.Pie3D'],
        xtype: 'mainpie',
        height: 800,
        legend: { docked: 'bottom' },
        insetPadding: { top: 100, bottom: 20, left: 80, right: 80 },
        listeners: {
                beforerender: function () {
                        var dateFiter = new Ext.util.Filter({
                            filterFn: function(item) {
                                return item.data.date.getMonth() ==0;
                            }
                        });
                        Ext.getStore('expense').addFilter(dateFiter);
                }
        },
        store: {
                type: 'expense'
        },
        series: [{
                type: 'pie3d',
                donut: 50,
                thickness: 70,
                distortion: 0.5,
                angleField: 'spent',
                label: {
                        field: 'cat',
                }
        }]
});
