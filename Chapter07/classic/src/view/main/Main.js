
Ext.define('EA.view.main.Main', {
        extend: 'Ext.tab.Panel',
        xtype: 'app-main',

        requires: [
                'Ext.plugin.Viewport',
                'Ext.window.MessageBox',
                'EA.view.main.MainController',
                'EA.view.main.List',
                'EA.view.main.Bar',
                'EA.view.main.Pie'
        ],

        controller: 'main',
        autoScroll: true,
        ui: 'navigation',

        tabBarHeaderPosition: 1,
        titleRotation: 0,
        tabRotation: 0,

        header: {
                layout: {
                        align: 'stretchmax'
                },
                title: {
                        text: 'Expense Analyzer ',
                        flex: 0
                },
                iconCls: 'fa-th-list'
        },

        tabBar: {
                flex: 1,
                layout: {
                        align: 'stretch',
                        overflowHandler: 'none'
                }
        },

        responsiveConfig: {
                tall: {
                        headerPosition: 'top'
                },
                wide: {
                        headerPosition: 'left'
                }
        },

        defaults: {
                bodyPadding: 20,
                tabConfig: {
                        plugins: 'responsive',
                        responsiveConfig: {
                                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                                },
                                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                                }
                        }
                }
        },

        items: [{
                title: 'Year to Date',
                iconCls: 'fa-bar-chart',
                items: [
                        {
                                html: '<h3>Your average expense per month is: ' + Ext.createByAlias('store.expensebyMonthStore').average('total') + '</h3>',
                                height: 70,
                        }, {
                                xtype: 'mainlist'
                        }, 
                        {
                                xtype: 'mainbar'
                        }
                    ]
                },
                {
                    title: 'By Month',
                    iconCls: 'fa-pie-chart',
                    items: [{
                            xtype: 'combo',
                            value: 'Jan',
                            fieldLabel: 'Select Month',
                            store: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                            listeners: {
                                select: 'onMonthSelect'
                            }

                          }, {
                             xtype: 'mainpie'
                        }]
                }
           ]
});
