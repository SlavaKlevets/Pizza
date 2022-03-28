const ADD_IMG="ADD_IMG";
const FOLLOW="FOLLOW";
const UNFOLLOW="UNFOLLOW";
const PUSH_KOL_VO="PUSH_KOL_VO";
const PUSH_KORZINA="PUSH_KORZINA";
const VALYE="VALYE";
const SET_ZAKAZ="SET_ZAKAZ";
const SET_MIN_ZAKAZ="SET_MIN_ZAKAZ";

const initialState={
    img:[{
        img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"",
        followed:"",
        valye:false,
        zakaz:0
    }],
    kol_vo:0,
    korzina:[
    ]
};
const KartofanReducer=(state=initialState,action)=>{
switch (action.type){
    case ADD_IMG:
        return{
            ...state,
            img:action.img,
        }
    case SET_ZAKAZ:
        return {
            ...state,
            img:state.img.map(i=>{
                if(i.id===action.userId){
                    return{...i,zakaz:i.zakaz+1}
                }
                return i;
            }),
        }
    case SET_MIN_ZAKAZ:
        return {
            ...state,
            img:state.img.map(i=>{
                if(i.id===action.userId){
                    return{...i,zakaz:i.zakaz-1}
                }
                return i;
            }),
        }
    case VALYE:
        return {
            ...state,
            img:state.img.map(i=>{
                if(i.id===action.userId){
                    return{...i,valye:true}
                }
                return i;
            }),
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
    default: return state
    }
}
    export const setImg=(img)=>({type:ADD_IMG,img});
    export const follow=(userId)=>({type:FOLLOW,userId});
    export const unfollow=(userId)=>({type:UNFOLLOW,userId});
    export const push_kol_vo=(kol_vo)=>({type:PUSH_KOL_VO,kol_vo});
    export const push_korzina=(korz)=>({type:PUSH_KORZINA,korz});
export const push_valye=(userId)=>({type:VALYE,userId});
export const set_zakaz=(userId)=>({type:SET_ZAKAZ,userId});
export const set_min_zakaz=(userId)=>({type:SET_MIN_ZAKAZ,userId})

    export const setImaThunk=(img)=>(dispatch)=>{
        dispatch(setImg(img));
    };
export const followThunk=(userId)=>{
    return(dispatch)=>{
        dispatch(follow(userId));
    };
}
export const setZakaz=(userId)=>{
    return(dispatch)=>{
        dispatch(set_zakaz(userId));
    };
}
export const setMinZakaz=(userId)=>{
    return(dispatch)=>{
        dispatch(set_min_zakaz(userId));
    };
}
export const followValye=(userId)=>{
    return(dispatch)=>{
        dispatch(push_valye(userId));
    };
};
export const unfollowThunk=(userId)=> {
    return (dispatch) => {
        dispatch(unfollow(userId));
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


export default KartofanReducer;