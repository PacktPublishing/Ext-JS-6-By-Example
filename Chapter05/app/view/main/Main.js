Ext.define('CD.view.main.Main', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'CD.view.contactList.ContactList'
    ],
    autoScroll: true,
    xtype: 'app-main',
//    cls: 'main',

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
                    width: '100%',
                    
                    items: [
                        {
                            html: '<h1 class="header">PACKT ExtJS by Example</h1>',
                            width: '100%'
                        },
                        {
                            xtype: 'app-contactList',
                            width: '100%',
                            height: '100%'
                        }
                    ]
                }
            ]
        }
    ]
});