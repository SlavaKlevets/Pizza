
const ADD_IMG="ADD_IMG";
const FOLLOW="FOLLOW";
const UNFOLLOW="UNFOLLOW";


const initialState={
    img:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        id:"",
        followed:true
    }],

};
const NovostyReducer=(state=initialState,action)=>{
switch (action.type){
    case ADD_IMG:
        return{
            ...state,
            img:action.img,
        }
    case FOLLOW:
        return {
            ...state,
            img:state.img.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:true}
                }
                return i;
            }),
        }
    case UNFOLLOW:
        return {
            ...state,
            img:state.img.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:false}
                }
                return i;
            }),
        }
    default: return state
    }
}
    export const setImg=(img)=>({type:ADD_IMG,img});
    export const follow=(userId)=>({type:FOLLOW,userId});
    export const unfollow=(userId)=>({type:UNFOLLOW,userId});

    export const setImaThunk=(img)=>(dispatch)=>{
        dispatch(setImg(img));
    };
    export const followThunk=(userId)=>{
        return(dispatch)=>{
            dispatch(follow(userId));
        };
    }
    export const unfollowThunk=(userId)=> {
        return (dispatch) => {
            dispatch(unfollow(userId));
        }
    };


export default NovostyReducer;