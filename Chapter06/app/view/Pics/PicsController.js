Ext.define('PE.view.pics.PicsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pics',
    views: ['PE.view.pics.Pics'],
    requires: ['PE.store.Pics','PE.store.Albums'],
    
    onNodeSelect: function(node, rec, item, index, e)
    { 
       var albums = [];
       albums.push(rec.id);
       rec.childNodes.forEach(function(item){
           albums.push(item.id);
       });
       
       Ext.getStore('pics').filter({
            property: 'albumId',
            operator: 'in',
            value   : albums
        }); 
    }
});


