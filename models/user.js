import mongoose,{Schema,model} from "mongoose"

const userschema = new Schema({
username :{
    type : String
},
email :{
    type : String
},
password :{
type : String
}
},{timestamps:true})

const modelDb = model("modelDb",userschema)

export {modelDb}