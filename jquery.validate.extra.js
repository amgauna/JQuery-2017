// Válidar o CPF ou CNPJ.
jQuery.validator.addMethod("cgc", function(cgc, element)
{
    cgc = cgc.trim(cgc);
    cgc = cgc.replace('.','');
    cgc = cgc.replace('.','');
    cgc = cgc.replace('-','');
    cgc = cgc.replace('/','');
    if (cgc.length == 11){
        retorno = jQuery.validator.methods.cpf.call(this, cgc, element);
    }else if (cgc.length == 14){
        retorno = jQuery.validator.methods.cnpj.call(this, cgc, element);
    }else{
        retorno = false;
    }
    return retorno;
}, "Digite um CNPJ ou CPF válido");


// Válidar o CPF.
jQuery.validator.addMethod("cpf", function(cpf, element)
{
    cpf = jQuery.trim(cpf);
    cpf = cpf.replace('.','');
    cpf = cpf.replace('.','');
    cpf = cpf.replace('-','');
    cpf = cpf.replace('/','');
    while(cpf.length < 11) cpf = "0"+ cpf;
    var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    var a = [];
    var b = new Number;
    var c = 11;
    for (i=0; i<11; i++){
        a[i] = cpf.charAt(i);
        if (i < 9) b += (a[i] * --c);
    }
    if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
    b = 0;
    c = 11;
    for (y=0; y<10; y++) b += (a[y] * c--);
    if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
    var retorno = true;
    if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) retorno = false;
    return this.optional(element) || retorno;
}, "Digite um CPF válido");


// Válidar o CNPJ.
jQuery.validator.addMethod("cnpj", function(cnpj, element)
{
    cnpj = jQuery.trim(cnpj);
    cnpj = cnpj.replace('/','');
    cnpj = cnpj.replace('.','');
    cnpj = cnpj.replace('.','');
    cnpj = cnpj.replace('-','');
    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    digitos_iguais = 1;
    if (cnpj.length < 14 && cnpj.length < 15){
        return false;
    }
    for (i = 0; i < cnpj.length - 1; i++){
        if (cnpj.charAt(i) != cnpj.charAt(i + 1)){
            digitos_iguais = 0;
            break;
        }
    }
    if (!digitos_iguais){
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--){
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2){
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)){
            return false;
        }
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--){
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2){
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)){
            return false;
        }
        return true;
    }else{
        return false;
    }
}, "Digite um CNPJ válido");


// Válidar formato de hora.
jQuery.validator.addMethod("time", function(value, element)
{
    return /^([01]?[0-9]|2[0-3])(:[0-5][0-9]){2}$/.test(value);
}, "Hora inválida.");


// Válidar se data existe.
jQuery.validator.addMethod("valdate", function(value, element)
{ 
    var currVal = value;    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern);
    
    if (dtArray == null){
        return false;
    }

    dtDay= dtArray[1];
    dtMonth = dtArray[3];
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12){
        return false;
    }else if (dtDay < 1 || dtDay> 31){
        return false;
    }else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31){
        return false;
    }else if (dtMonth == 2){
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)){
            return false;
        }
    }

    return true;
    
}, "Data inválida.");