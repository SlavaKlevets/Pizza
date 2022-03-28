const ADD_IM = "ADD_IM";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const PUSH_KOL_VO="PUSH_KOL_VO";
const PUSH_KORZINA="PUSH_KORZINA";
const OCHUSTYT_KORZINA="OCHUSTYT_KORZINA";
const OCHUSTYT_KOLICHESTVO="OCHUSTYT_KOLICHESTVO";

const initialState = {
    img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png",
    name: "Хлебец с сырной начинкой",
    ingr: "Сыр моцарелла, Чеддер",
    cost: "8.49 руб.",
    masa: "375 гр",
    id: 32,
    followed: true,
    kol_vo:0,
    korzina:[],
    zakaz:0
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case OCHUSTYT_KOLICHESTVO:
            return {
                ...state,
                kol_vo:0
            }
        case OCHUSTYT_KORZINA:
            return {
                ...state,
                korzina: []
            }
        case ADD_IM:
            return {
                ...state,
                ...action.img2
            }
        case FOLLOW:
            return {
                ...state,
                followed :action.followed1
            }
        case UNFOLLOW:
            return {
                ...state,
                followed :action.followed1
            }
        default:
            return state
    }
}
export const setImg = (img2) => ({type: ADD_IM, img2});
export const follow = (followed1) => ({type: FOLLOW, followed1});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const push_kol_vo=(kol_vo)=>({type:PUSH_KOL_VO,kol_vo});
export const push_korzina=(korz)=>({type:PUSH_KORZINA,korz});
export const ochustyt_korzina=()=>({type:OCHUSTYT_KORZINA});
export const ochustyt_kol_vo=()=>({type:OCHUSTYT_KOLICHESTVO});


export const followThunk = (followed1) => {
    return (dispatch) => {
        dispatch(follow(followed1));
    };
}
export const ochustytThunk = () => {
    return (dispatch) => {
        dispatch(ochustyt_korzina());
    };
}

export const ochustyt_kol_voThunk = () => {
    return (dispatch) => {
        dispatch(ochustyt_kol_vo());
    };
}
export const unfollowThunk = (followed1) => {
    return (dispatch) => {
        dispatch(unfollow(followed1));
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

export const setImgThunk = (img2) => (dispatch) => {
    //debugger
    dispatch(setImg(img2));
};


export default ProfileReducer;