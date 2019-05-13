Ext.define('PE.view.main.Main', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'PE.view.pics.Pics'
    ],
    autoScroll: true,
    xtype: 'app-main',
    items: [{
            xype: 'container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
         
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    flex:1,
                    
                    items: [
                        {
                            html: '<h1 class="header">PACKT ExtJS by Example - Picture Explorer</h1>',
                            width: '100%'
                        },
                        {
                            xtype: 'app-pics',
                            width: '100%'
                        }
                    ]
                }
            ]
        }
    ]
});