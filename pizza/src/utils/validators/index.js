export const requiredField=value=>{
    if(value)return undefined;
    return "Field is required"
}
export const maxLength30=(maxlength)=>value=>{
    if(value.length>maxlength) return "Max length 30 symbols";
    return undefined;
}