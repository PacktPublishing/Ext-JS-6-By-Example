/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('EA.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'EA.view.main.MainController',
        'EA.view.main.MainModel',
        'EA.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

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
