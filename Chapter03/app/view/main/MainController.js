Ext.define('Calc.view.main.MainController', {
    
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    views: ['Calc.view.main.Main'],
    models: ['Main'],
    
    state: {
        operatorClicked: false,
        selectedOperator: null,
        dotClicked: false,
        op1: 0,
        numberClicked: false,
        sign: true,
        decimal: false
    },

    onClickClear: function () {
        
        var vm = this.getViewModel();
        vm.set('display','0');
        this.state.selectedOperator=null;
        this.state.op1=0;
        this.state.isPositive = true;
        this.state.decimal = false;
        this.state.sign = true;
    },

    onClickChangeSign: function (btn) {
        
        var vm = this.getViewModel();
        var cur = vm.get('display');
        if(cur!='0') {
            if(this.state.sign===true ) {
                vm.set('display', '-' + cur);
            }
            else {
                vm.set('display', cur.toString().substring(1));
            }
        }
        this.state.sign=!this.state.sign;  
    },

    onClickOp: function (btn) {
        
        if(this.state.selectedOperator!=null && this.state.numberClicked===true)
        {
            var vm = this.getViewModel();
            var op2 = parseFloat(vm.get('display'));
            var op1 = parseFloat(this.state.op1);
            var result = 0;
            
            switch(this.state.selectedOperator){
                    case '+':
                    result = op1 + op2;
                    break;
                    
                    case '-':
                    result = op1 - op2;
                    break;
                    
                    case '&times;':
                    result = op1 * op2;
                    break;
                    
                    case '&divide;':
                    result = op1 / op2;
                    break;
                    
                    
            }
            vm.set('display', Math.round(result * 100) / 100);
            this.state.selectedOperator=null;
        }
        if(btn.text!='=') {
            this.state.operatorClicked = true;  
        }
        this.state.selectedOperator = btn.text;
        this.state.numberClicked = false; 
    },

    onClickDot: function (btn) {
        if(this.state.decimal===false) {
            var vm = this.getViewModel();
            vm.set('display', vm.get('display') + '.');
        }
    },

    onClickNumber: function (btn) {
        
        this.state.numberClicked = true;
        if(this.state.selectedOperator ==='='){
            this.onClickClear();
        }
        
        var vm = this.getViewModel();
        if(this.state.operatorClicked===true) {
            this.state.op1= vm.get('display');
            vm.set('display', btn.text);
            this.state.operatorClicked=false;
        }
        else{
            var cur = vm.get('display');
            if(cur == '0') {
                cur = '';
            }
            vm.set('display', cur + btn.text);
        }

    }
});