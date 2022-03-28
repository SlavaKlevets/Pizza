const ADD_IMG="ADD_IMG";
const ADD_IMG2="ADD_IMG2";
const ADD_IMG3="ADD_IMG3";
const ADD_IMG4="ADD_IMG4";
const ADD_IMG5="ADD_IMG5";
const FOLLOW="FOLLOW";
const UNFOLLOW="UNFOLLOW";
const PUSH_KOL_VO="PUSH_KOL_VO";
const PUSH_KORZINA="PUSH_KORZINA";
const FOLLOW2="FOLLOW2";
const UNFOLLOW2="UNFOLLOW2";
const FOLLOW3="FOLLOW3";
const UNFOLLOW3="UNFOLLOW3";
const FOLLOW4="FOLLOW4";
const UNFOLLOW4="UNFOLLOW4";
const FOLLOW5="FOLLOW5";
const UNFOLLOW5="UNFOLLOW5";

const initialState={
    img:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        followed:""
    }],
    img2:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        followed:""
    }],
    img3:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        followed:""
    }],
    img4:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        followed:""
    }],
    img5:[{ img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        followed:""
    }],
    kol_vo:0,
    korzina:[
    ]
};
const NapitkiReducer=(state=initialState,action)=>{
switch (action.type){
    case ADD_IMG:
        return{
            ...state,
            img:action.img,
        }
        case ADD_IMG2:
        return{
            ...state,
            img2:action.img,
        }
    case ADD_IMG3:
        return{
            ...state,
            img3:action.img,
        }
    case ADD_IMG4:
        return{
            ...state,
            img4:action.img,
        }
    case ADD_IMG5:
        return{
            ...state,
            img5:action.img,
        }
    case PUSH_KORZINA:
        return{
            ...state,
            korzina:[...state.korzina,action.korz]
        }
    case PUSH_KOL_VO:
        return{
            ...state,
            kol_vo:action.kol_vo
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
    case FOLLOW2:
        return {
            ...state,
            img2:state.img2.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:true}
                }
                return i;
            }),
        }
    case UNFOLLOW2:
        return {
            ...state,
            img2:state.img2.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:false}
                }
                return i;
            }),
        }
    case FOLLOW3:
        return {
            ...state,
            img3:state.img3.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:true}
                }
                return i;
            }),
        }
    case UNFOLLOW3:
        return {
            ...state,
            img3:state.img3.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:false}
                }
                return i;
            }),
        }
    case FOLLOW4:
        return {
            ...state,
            img4:state.img4.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:true}
                }
                return i;
            }),
        }
    case UNFOLLOW4:
        return {
            ...state,
            img4:state.img4.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:false}
                }
                return i;
            }),
        }
    case FOLLOW5:
        return {
            ...state,
            img5:state.img5.map(i=>{
                if(i.id===action.userId){
                    return{...i,followed:true}
                }
                return i;
            }),
        }
    case UNFOLLOW5:
        return {
            ...state,
            img5:state.img5.map(i=>{
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
    export const setImg2=(img)=>({type:ADD_IMG2,img});
    export const setImg3=(img)=>({type:ADD_IMG3,img});
    export const setImg4=(img)=>({type:ADD_IMG4,img});
    export const setImg5=(img)=>({type:ADD_IMG5,img});
export const follow=(userId)=>({type:FOLLOW,userId});
export const unfollow=(userId)=>({type:UNFOLLOW,userId});
export const push_kol_vo=(kol_vo)=>({type:PUSH_KOL_VO,kol_vo});
export const push_korzina=(korz)=>({type:PUSH_KORZINA,korz});

export const follow2=(userId)=>({type:FOLLOW2,userId});
export const unfollow2=(userId)=>({type:UNFOLLOW2,userId});
export const follow3=(userId)=>({type:FOLLOW3,userId});
export const unfollow3=(userId)=>({type:UNFOLLOW3,userId});
export const follow4=(userId)=>({type:FOLLOW4,userId});
export const unfollow4=(userId)=>({type:UNFOLLOW4,userId});
export const follow5=(userId)=>({type:FOLLOW5,userId});
export const unfollow5=(userId)=>({type:UNFOLLOW5,userId});



    export const setImThunk=(img)=>(dispatch)=>{
        dispatch(setImg(img));
    };
        export const setImThunk2=(img)=>(dispatch)=>{
        dispatch(setImg2(img));
        };
            export const setImThunk3=(img)=>(dispatch)=>{
        dispatch(setImg3(img));
            };
                export const setImThunk4=(img)=>(dispatch)=>{
        dispatch(setImg4(img));
                };
                    export const setImThunk5=(img)=>(dispatch)=>{
        dispatch(setImg5(img));
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
export const followThunk2=(userId)=>{
    return(dispatch)=>{
        dispatch(follow2(userId));
    };
}
export const unfollowThunk2=(userId)=> {
    return (dispatch) => {
        dispatch(unfollow2(userId));
    }
};
export const followThunk3=(userId)=>{
    return(dispatch)=>{
        dispatch(follow3(userId));
    };
}
export const unfollowThunk3=(userId)=> {
    return (dispatch) => {
        dispatch(unfollow3(userId));
    }
};
export const followThunk4=(userId)=>{
    return(dispatch)=>{
        dispatch(follow4(userId));
    };
}
export const unfollowThunk4=(userId)=> {
    return (dispatch) => {
        dispatch(unfollow4(userId));
    }
};
export const followThunk5=(userId)=>{
    return(dispatch)=>{
        dispatch(follow5(userId));
    };
}
export const unfollowThunk5=(userId)=> {
    return (dispatch) => {
        dispatch(unfollow5(userId));
    }
};












export const pushKolVo=(kol_vo)=>{
    return (dispatch)=>{
        //debugger
        dispatch(push_kol_vo(kol_vo));
    }
};

export const pushKorzina=(korz)=>{
    return (dispatch)=>{
        //debugger
        dispatch(push_korzina(korz));
    }
};


export default NapitkiReducer;