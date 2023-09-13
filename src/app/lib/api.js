
const toApi = async(data, route) =>{


    try {
        const response = await fetch(`http://localhost:3000/api/${route}/`,{
            method: "POST",
            headers:{
            "Content-Type": "application/json"
            },
    
            body: JSON.stringify(data)
        })
        
       
    
        return response
        
    } catch (error) {
        
        console.error("Error occured", error.message)
    }
    
    }
    
    
    module.exports = toApi;