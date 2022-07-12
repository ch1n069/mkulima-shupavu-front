function inputs(){

    var input = parseInt(document.getElementById('input').value);

    var selection1 = document.getElementById('selection1').value;
    var fprice1 = document.getElementById('fprice1').value;
    var fprice2 = document.getElementById('fprice2').value;
    var fprice3 = document.getElementById('fprice3').value;
    
    var selection2 = document.getElementById('selection2').value;
    var csprice1 = document.getElementById('csprice1').value;
    var csprice2 = document.getElementById('csprice2').value;
    var csprice3 = document.getElementById('csprice3').value;
    var msprice1 = document.getElementById('msprice1').value;
    var msprice2 = document.getElementById('msprice2').value;
    var msprice3 = document.getElementById('msprice3').value;
    var bsprice1 = document.getElementById('bsprice1').value;
    var bsprice2 = document.getElementById('bsprice2').value;
    var bsprice3 = document.getElementById('bsprice3').value;

    var selection3 = document.getElementById('selection3').value;
    var dcprice1 = document.getElementById('dcprice1').value;
    var dcprice2 = document.getElementById('dcprice2').value;
    var dcprice3 = document.getElementById('dcprice3').value;
    var ccprice1 = document.getElementById('ccprice1').value;
    var ccprice2 = document.getElementById('ccprice2').value;
    var ccprice3 = document.getElementById('ccprice3').value;
    var ucprice1 = document.getElementById('ucprice1').value;
    var ucprice2 = document.getElementById('ucprice2').value;
    var ucprice3 = document.getElementById('ucprice3').value;

    if (selection1 === fprice1){
        document.getElementById('total').value = input * fprice1;
    }
    if (selection1 === fprice2){
        document.getElementById('total').value = input * fprice2;
    }
    if (selection1 === fprice3){
        document.getElementById('total').value = input * fprice3;
    }
    if (selection2 === csprice1){
        document.getElementById('total').value = input * csprice1;
    }
    if (selection2 === csprice2){
        document.getElementById('total').value = input * csprice2;
    }
    if (selection2 === csprice3){
        document.getElementById('total').value = input * csprice3;
    }
    if (selection2 === msprice1){
        document.getElementById('total').value = input * msprice1;
    }
    if (selection2 === msprice2){
        document.getElementById('total').value = input * msprice2;
    }
    if (selection2 === msprice3){
        document.getElementById('total').value = input * msprice3;
    }
    if (selection2 === bsprice1){
        document.getElementById('total').value = input * bsprice1;
    }
    if (selection2 === bsprice2){
        document.getElementById('total').value = input * bsprice2;
    }
    if (selection2 === bsprice3){
        document.getElementById('total').value = input * bsprice3;
    }
    if (selection3 === dcprice1){
        document.getElementById('total').value = input * dcprice1;
    }
    if (selection3 === dcprice2){
        document.getElementById('total').value = input * dcprice2;
    }
    if (selection3 === dcprice3){
        document.getElementById('total').value = input * dcprice3;
    }
    if (selection3 === ccprice1){
        document.getElementById('total').value = input * ccprice1;
    }
    if (selection3 === ccprice2){
        document.getElementById('total').value = input * ccprice2;
    }
    if (selection3 === ccprice3){
        document.getElementById('total').value = input * ccprice1;
    }
    if (selection3 === ucprice1){
        document.getElementById('total').value = input * ucprice1;
    }
    if (selection3 === ucprice2){
        document.getElementById('total').value = input * ucprice2;
    }
    if (selection3 === ucprice3){
        document.getElementById('total').value = input * ucprice3;
    }
}