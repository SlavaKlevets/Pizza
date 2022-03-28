const ADD_IMG="ADD_IMG";


const initialState={
    img:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:""
    }]
};
const AkciiReducer=(state=initialState,action)=>{
switch (action.type){
    case ADD_IMG:
        return{
            ...state,
            img:action.img,
        }
    default: return state
    }
}
    export const setImg=(img)=>({type:ADD_IMG,img});


    export const setImThunk=(img)=>(dispatch)=>{
        dispatch(setImg(img));
    };



export default AkciiReducer;