import Select from '../models/select.js'


export const SelectText = async(req,res) => {


    try{

    const{select,userId} = req.body 

    const newSelect = new Select({select,userId})
    
    await newSelect.save()
    res.status(200).json(newSelect)


    }
    catch(error){
        console.log(error)
    }
} 


export const getSelect =async (req,res) => {
 

    try{

 const select = await Select.findByIdAndDelete(req.params.id)
res.status(200).json(select)
 }
 catch(error){
    console.log(error)
 }

}