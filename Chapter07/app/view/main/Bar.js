Ext.define('EA.view.main.Bar', {
        extend: 'Ext.chart.CartesianChart',
        requires: ['Ext.chart.axis.Category',
                'Ext.chart.series.Bar3D',
                'Ext.chart.axis.Numeric',
                'Ext.chart.interactions.ItemHighlight'],
        xtype: 'mainbar',
        height: 500,
        padding: { top: 50, bottom: 20, left: 100, right: 100 },
        legend: { docked: 'bottom' },
        insetPadding: { top: 100, bottom: 20, left: 20, right: 40 },

        store: {
                type: 'expensebyMonthStore',
                sort: false,
        },
        axes: [{
                type: 'numeric',
                position: 'left',
                grid: true,
                title: { text: 'Spendings in $', fontSize: 16 },
                minimum: 0,

        }, {
                type: 'category',
                title: { text: 'Month', fontSize: 16 },
                position: 'bottom',
                label: {
                        font: 'bold Arial',
                        rotate: { degrees: 300 },
                },
                renderer: function (date) {
                        return ["Jan", "Feb", "Mar", "Apr", "May"][date.getMonth()];
                },
        }
        ],
        series: [{
                type: 'bar3d',
                xField: 'date',
                stacked: false,
                title: ['Total'],
                yField: ['total']
        }],
        sprites: [{
                type: 'text',
                text: 'Expense by Month',
                font: '20px Helvetica',
                width: 120,
                height: 35,
                x: 60,
                y: 40
        },
        ]
});
