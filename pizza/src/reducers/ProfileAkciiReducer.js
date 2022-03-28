const ADD_IM = "ADD_IM";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
    img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png",
    name: "Хлебец с сырной начинкой",
    ingr: "Сыр моцарелла, Чеддер",
    cost: "8.49 руб.",
    masa: "375 гр",
    id: 32,
    followed: true
};

const ProfileAkciiReducer = (state = initialState, action) => {
    switch (action.type) {
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
export const unfollow = (followed1) => ({type: UNFOLLOW, followed1});

export const followThunk = (followed1) => {
    return (dispatch) => {
        dispatch(follow(followed1));
    };
};

export const unfollowThunk = (followed1) => {
    return (dispatch) => {
        dispatch(unfollow(followed1));
    }
};

export const setImgThunk = (img2) => (dispatch) => {
    dispatch(setImg(img2));
};


export default ProfileAkciiReducer;