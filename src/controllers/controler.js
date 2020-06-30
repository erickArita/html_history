const renderIndex = (req,res)=>{
    res.render('index', {name :"index"})
    
}
const renderHistoria = (req,res)=>{
    // en un objeto mando el nombre de cada pagina para hacer operaciones con los link internos
    res.render('historia',{name : "historia"})
     
}

const renderEtiquetas = (req,res)=>{
    res.render('etiquetas',{name : "etiquetas"})
     
}

 

module.exports={
    renderIndex,
    renderHistoria,
    renderEtiquetas
}