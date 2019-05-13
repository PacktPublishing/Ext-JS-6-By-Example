
Ext.application({
    name: 'Calc',    
    launch: function () {
        Ext.create('Calc.view.main.Main').show();
        //Will create the calculator as a floating, movable window within the browser 
    }
});
