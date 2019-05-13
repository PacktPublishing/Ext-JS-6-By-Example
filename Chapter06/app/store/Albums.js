Ext.define('PE.store.Albums', {
    extend: 'Ext.data.TreeStore',
	storeId: 'albums',
    root: {
        expanded: true,
        children: [
            
            { id: 100, text: ' California', expanded: true, children: [
                { id: 600, text: ' Big Sur', leaf: true},
                { id: 500, text: ' Yosemite', leaf: true}
            ] },
           { id: 400, text: ' Arizona', expanded: true, children: [
                { id: 300, text: ' Horseshoe bend', leaf: true }
            ] },
            { id: 200, text: ' Home', leaf: true },
            { id: 700, text: ' India', expanded: true, children: [
                { id: 800, text: ' Ooty', leaf: true },
                { id: 900, text: ' Chennai', leaf: true},
                { id: 1000, text: ' Munnar', leaf: true },
            ] },
        ]
    }
});

Ext.create('PE.store.Albums');