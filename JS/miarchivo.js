let catalogo = prompt("¿Cual de los siguentes catalogos busca?  *MOTOCROSS *ATV *PISTA *INDUMENTARIA").toUpperCase();

switch(catalogo) {
    case 'MOTOCROSS'.toUpperCase():
        alert("Aqui tiene su catalogo de Motocross,Gracias.");
        break;
    
    case 'ATV'.toUpperCase():
        alert("Aqui tiene su catalogo de ATV,Gracias.");
        break;
    
    case 'PISTA'.toUpperCase():
        alert("Aqui tiene su catalogo de Pista,Gracias.");
        break;     

    case 'INDUMENTARIA'.toUpperCase():
        alert("Aqui tiene su catalogo de Indumentaria,Gracias.");
        break;   
        
    default:
        alert("Disculpe no ha seleccionado ningun catalogo.");
        break;     
        
}




