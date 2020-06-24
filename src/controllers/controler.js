const renderIndex = (req,res)=>{
    res.render('index')
}
const renderHistoria = (req,res)=>{
    res.render('historia')
}

 

module.exports={
    renderIndex,
    renderHistoria
}