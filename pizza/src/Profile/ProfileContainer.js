import React from 'react';
import Profile from "./Profile.jsx";
import {connect} from "react-redux";
import {setImgThunk, followThunk, unfollowThunk, pushKolVo, pushKorzina} from "../reducers/ProfileReducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {


   img=[{
          img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png",
          name: "Хлебец с сырной начинкой",
          ingr: "Сыр моцарелла, Чеддер",
          cost: 8.49,
          masa: "375 гр",
          id:32,
          followed:true,
          zakaz:0
      },
            {  img: "https://images.dominos.by/media/dominos/osg/api/2021/10/14/izi_frizi_small.png",
                name: "Изи Фризи",
                ingr: "Сыр моцарелла, Картофель фри, Соус Чесночный, Сосиски куриные, Ветчина",
                cost: 25.99,
                masa: "640 гр.",
                id:1,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2021/10/14/chedderoni_small.png",
                name: "Чеддерони",
                ingr: "Крем фреш, Чеддер, Ветчина, Пепперони, Сыр моцарелла",
                cost: 25.99,
                masa: "640 гр.",
                id:2,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2021/08/05/Beef_BBQ_small-min.png",
                name: "Биф BBQ",
                ingr: "Телятина, Шпинат, Сыр моцарелла, Черри, Соус барбекю, Баварские колбаски",
                cost: 25.99,
                masa: "640 гр.",
                id:3,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/03/11/govyadina_burger_small.png",
                name: "Говядина BURGER",
                ingr: "Шампиньоны, Телятина, Сыр моцарелла, Соус Бургер, Лук, Огурцы",
                cost: 25.99,
                asa: "640 гр.",
                id:4,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2021/08/05/kolbaski_i_opyata_small-min.png",
                name: "Колбаски и опята",
                ingr: "Баварские колбаски, Опята, Сыр моцарелла, Соус Чесночный, Горчица",
                cost: 25.99,
                masa: "640 гр.",
                id:5,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/11/18/chiken_fresh_small.png",
                name: "Чикен Ранч",
                ingr: "Соус Чесночный, Томаты, Сыр моцарелла, Курица",
                cost: 25.99,
                masa: "640 гр.",
                id:6,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png",
                name: "Карбонара",
                ingr: "Шампиньоны, Лук, Крем фреш, Бекон, Сыр моцарелла, Ветчина",
                cost: 25.99,
                masa: "640 гр.",
                id:7,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/firmennaya.png",
                name: "Доминос Фирменная",
                ingr: "Пармезан, Курица, Сыр моцарелла, Лук, Томатный соус Domino's, Бекон, Сладкий перец, Томаты, Буженина, Телятина, Шампиньоны",
                cost: 25.99,
                masa: "640 гр.",
                id:8,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png",
                name: "Мексиканская",
                ingr: "Сыр моцарелла, Сладкий перец, Соус Бургер, Халапеньо, Курица, Кукуруза, Томаты",
                cost: 26.49,
                masa: "945 гр",
                id:9,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/provence.png",
                name: "Прованс",
                ingr: "Томаты, Голубой сыр, Сыр моцарелла, Крем фреш, Пепперони, Ветчина",
                cost: 27.89,
                masa: "545 гр",
                id:10,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2019/07/03/myunkhenskaya_small.png",
                name: "Мюнхенская",
                ingr: "Баварские колбаски, Томаты, Соус барбекю, Горчица, Сыр моцарелла, Мюнхенские колбаски, Ветчина",
                cost: 33.39,
                masa: "590 гр",
                id:11,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png",
                name: "5 Сыров",
                ingr: "Фета, Крем фреш, Голубой сыр, Пармезан, Чеддер, Сыр моцарелла",
                cost: 25.99,
                masa: "640 гр.",
                id:12,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2021/03/23/rivyera_small_mNcDSaS.png",
                name: "Ривьера",
                ingr: "Соус Чесночный, Шпинат, Сыр моцарелла, Черри, Ветчина, Маслины",
                cost: 26.49,
                masa: "650 гр",
                id:13,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png",
                name: "Фермерская",
                ingr: "Огурцы, Ветчина, Сыр моцарелла, Соус Чесночный",
                cost: 26.39,
                masa: "585 гр",
                id:14,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2019/07/29/gribnaya_small.png",
                name: "Грибная с голубым сыром",
                ingr: "Голубой сыр, Сыр моцарелла, Опята, Соус Чесночный, Шампиньоны",
                cost: 31.39,
                masa: "835 гр",
                id:15,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/spice.png",
                name: "Спайси",
                ingr: "Пепперони, Халапеньо, Сыр моцарелла, Томатный соус Domino's, Бекон, Томаты",
                cost: 26.49,
                masa: "880 гр",
                id:16,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/tsyplenok__dominator_small-min.png",
                name: "Цыпленок Доминатор",
                ingr: "оматы, Мюнхенские колбаски, Курица, Сыр моцарелла, Соус Чесночный, Огурцы, Сладкий перец",
                cost: 28.89,
                masa: "635 гр",
                id:17,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/eksravaganzza_small-min.png",
                name: "ЭкстраваганZZа",
                ingr: "Телятина, Шампиньоны, Томатный соус Domino's, Сыр моцарелла, Пепперони, Лук, Сладкий перец, Оливки, Ветчина",
                cost: 28.49,
                masa: "480 гр",
                id:18,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/07/14/super_pepperoni_small-min.png",
                name: "Супер Пепперони",
                ingr: "Томатный соус Domino's, Сыр моцарелла, Пепперони",
                cost: 26.49,
                masa: "940 гр",
                id:19,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/barbecue.png",
                name: "Барбекю",
                ingr: "Лук, Курица, Соус барбекю, Бекон, Шампиньоны, Сыр моцарелла",
                cost: 27.89,
                masa: "570 гр",
                id:20,
                followed:false,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/kantri.png",
                name: "Кантри",
                ingr: "Соус Чесночный, Лук, Ветчина, Сыр моцарелла, Огурцы, Шампиньоны, Бекон",
                cost: 32.39,
                masa: "630 гр",
                id:21,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/01/09/gipnotika_small.png",
                name: "Гипнотика",
                ingr: "Телятина, Бекон, Крем фреш, Пепперони, Обжаренный лук, Шпинат, Соус барбекю, Сыр моцарелла",
                cost: 26.49,
                masa: "630 гр",
                id:22,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni_bluz.png",
                name: "Пепперони Блюз",
                ingr: "Голубой сыр, Пепперони, Сыр моцарелла, Соус Чесночный",
                cost: 20.49,
                masa: "345 гр",
                id:23,
                followed:false,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2018/09/12/toskana.png",
                name: "Тоскана",
                ingr: "Томаты, Фета, Курица, Сыр моцарелла, Соус Чесночный, Шпинат",
                cost: 26.49,
                masa: "625 гр",
                id:24,
                followed:true,
                zakaz:0
            },
            {  img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_ostryye_small.png",
                name: "Крылышки острые",
                ingr: "Сальса соус, Томатный соус 25г",
                cost: 8.99,
                masa: "245 гр",
                id:25,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_s_gorchichnym_sousom_small.png",
                name: "Куриные Крылышки",
                ingr: "Горчичный соус 25г",
                cost: 8.99,
                masa: "245 гр",
                id:26,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_barbekyu_small.png",
                name: "Крылышки барбекю",
                ingr: "Соус барбекю",
                cost: 8.99,
                masa: "245 гр",
                id:27,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/kurinoye_file_small.png",
                name: "Куриное филе",
                ingr: "Соус сырный 25гр",
                cost: 9.99,
                asa: "245 гр",
                id:28,
                followed:true,
                zakaz:0
            },
            {   img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png",
                name: "Картофельные Дольки",
                ingr: "Сальса соус, Томатный соус 25г",
                cost: 4.99,
                masa: "245 гр",
                id:29,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/09/18/kartofel_fri_small.png",
                name: "Картофель фри",
                ingr: "Горчичный соус 25г",
                cost: 8.99,
                masa: "245 гр",
                id:30,
                followed:true,
                zakaz:0
            },
            {
                img: "https://images.dominos.by/media/dominos/osg/api/2020/09/18/draniki_small.png",
                name: "Драники",
                ingr: "Соус барбекю",
                cost: 8.99,
                masa: "245 гр",
                id:31,
                followed:true,
                zakaz:0
            },
        {   img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png",
            name: "Хлебец с сырной начинкой",
            ingr: "Сыр моцарелла, Чеддер",
            cost: 8.49,
            masa: "375 гр",
            id:32,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81%D0%BE_%D1%88%D0%BF%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D0%BC_%D0%B8_%D1%84%D0%B5%D1%82%D0%BE%D0%B9.png",
            name: "Хлебец со шпинатом и фетой",
            ingr: "Сыр моцарелла, Чеддер, Шпинат, Фета",
            cost: 8.99,
            masa: "395 гр",
            id:33,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B8_%D1%85%D0%B0%D0%BB%D0%B0%D0%BF%D0%B5%D0%BD%D1%8C%D0%BE.png",
            name: "Хлебец с беконом и халапеньо",
            ingr: "Бекон, Сыр моцарелла, Халапеньо, Чеддер",
            cost: 8.99,
            masa: "415 гр",
            id:34,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%B1%D0%B0%D0%B9%D1%82%D1%81%D1%8B_%D1%81_%D0%BF%D0%B0%D1%80%D0%BC%D0%B5%D0%B7%D0%B0%D0%BD%D0%BE%D0%BC.png",
            name: "Пармезан байтс",
            ingr: "Пармезан",
            cost: 3.49,
            masa: "175 гр",
            id:35,
            followed:true,
            zakaz:0
        },
        {  img: "https://images.dominos.by/media/dominos/osg/api/2021/02/09/Grecheskiy_small.png",
            name: "Салат Греческий",
            ingr: "Оливковое масло",
            cost: 7.49,
            masa: "180 гр",
            id:36,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/02/09/Caesar_small.png",
            name: "Салат Цезарь",
            ingr: "Курица, Пармезан, Соус цезарь 25гр",
            cost: 7.99,
            masa: "200 гр",
            id:37,
            followed:true,
            zakaz:0
        },
        {  img: "https://images.dominos.by/media/dominos/osg/api/2019/06/26/dzhem_rolly_small.png",
            name: "Джем-роллы с грушей",
            ingr: "",
            cost: 4.99,
            masa: "245 гр",
            id:38,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/cream_rolly_small.png",
            name: "Крем-роллы",
            ingr: "",
            cost: 5.99,
            masa: "300 гр",
            id:39,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/shoko_rolly_small.png",
            name: "Шоко-роллы",
            ingr: "",
            cost: 6.99,
            masa: "270 гр",
            id:40,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BB%D0%B0%D0%B2%D0%B0_%D0%BA%D0%B5%D0%B9%D0%BA.png",
            name: "Лава кейк",
            ingr: "",
            cost: 5.49,
            masa: "95 гр",
            id:41,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/baytsy_s_koritsey_small.png",
            name: "Байтсы с корицей + джем (20г)",
            ingr: "",
            cost: 3.99,
            masa: "185 гр",
            id:42,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/dzhem_abrikosovyy_small.png",
            name: "Джем Абрикос",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:43,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/dzhem_klubnichnyy__small.png",
            name: "Джем Клубника",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:44,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/dzhem_klyukvennyy_small.png",
            name: "Джем Клюква",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:45,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/baytsy_s_koritsey_small.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:46,
            followed:true,
            zakaz:0
        },
        {  img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BA%D0%BB%D1%8E%D0%BA%D0%B2%D0%B0_%D1%81_%D0%B8%D0%BC%D0%B1%D0%B8%D1%80%D0%B5%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png",
            name: "Джем-роллы с грушей",
            ingr: "",
            cost: 4.99,
            masa: "245 гр",
            id:47,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B5%D0%BF%D0%B8%D1%85%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81_%D1%82%D0%B8%D0%BC%D1%8C%D1%8F%D0%BD%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png",
            name: "Крем-роллы",
            ingr: "",
            cost: 5.99,
            masa: "300 гр",
            id:48,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%B8%D0%B7_%D1%81%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%8B_%D1%81_%D0%B1%D0%B0%D0%B7%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png",
            name: "Шоко-роллы",
            ingr: "",
            cost: 6.99,
            masa: "270 гр",
            id:49,
            followed:true,
            zakaz:0
        },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png",
          name: "Лава кейк",
          ingr: "",
          cost: 5.49,
          masa: "95 гр",
          id:50,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BA%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%B0_%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0_02.07.21.png",
          name: "Байтсы с корицей + джем (20г)",
          ingr: "",
          cost: 3.99,
          masa: "185 гр",
          id:51,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D1%81%D1%80_%D0%B3%D0%B0%D0%B705_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
          name: "Джем Абрикос",
          ingr: "",
          cost: 0.8,
          masa: "20 гр",
          id:52,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D0%B1%D0%B5%D0%B7_%D0%B3%D0%B0%D0%B7%D0%B005_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
          name: "Джем Клубника",
          ingr: "",
          cost: 0.8,
          masa: "20 гр",
          id:53,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/02/17/%D0%BA%D0%BE%D0%BB%D0%B005%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_27.05.20.png",
          name: "Джем Клюква",
          ingr: "",
          cost: 0.8,
          masa: "20 гр",
          id:54,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/02/17/%D0%BA%D0%BE%D0%BB%D0%B01%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_27.05.20.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:55,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D0%BA%D0%BE%D0%BB%D0%B0_05%D0%BB_%D0%B1%D0%B5%D0%B7_%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0_640%D1%85441_02.07.21.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:56,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B1%D0%B5%D0%B7_%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0_640%D1%85441_02.07.21.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:57,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BA%D0%B2%D0%B0%D1%81_%D1%85%D0%B0%D1%82%D0%BD%D0%B8_09%D0%BB.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:58,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/07/22/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D0%B01%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_22.07.21.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:59,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BA%D0%B2%D0%B0%D1%81_%D1%85%D0%B0%D1%82%D0%BD%D0%B8_%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_09%D0%BB.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:60,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2021/07/22/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D0%B0_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_22.07.21.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:61,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BE%D0%BA_%D0%A0%D1%87%D0%B8_%D0%90%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_1%D0%BB.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:62,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D1%80%D0%B8%D1%87_%D1%8F%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_1%D0%BB.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:63,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%84%D1%80%D1%83%D1%82_1%D0%BB.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:64,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2019/03/01/%D1%81%D0%BE%D0%BA_%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD_03_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:65,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2019/03/01/%D1%81%D0%BE%D0%BA_%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%87%D0%B8%D0%BD-%D0%BC%D0%B0%D0%BD%D0%B3%D0%BE_03_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
          name: "Джем Клюква",
          ingr: "",
          cost: 0.8,
          masa: "20 гр",
          id:66,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2018/12/12/%D1%81%D0%BE%D0%BA_%D0%B2%D0%B8%D1%88%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_1%D0%BB_11.12.18.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:67,
          followed:true,
          zakaz:0
      },
      {
          img: "https://images.dominos.by/media/dominos/osg/api/2019/03/01/%D1%81%D0%BE%D0%BA_%D0%B2%D0%B8%D1%88%D0%BD%D1%8F_03_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
          name: "Байтсы с корицей",
          ingr: "",
          cost: 2.99,
          masa: "185 гр",
          id:68,
          followed:true,
          zakaz:0
      },
        {  img: "https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_BBQ.png",
            name: "Соус Барбекю",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:69,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A2%D0%BE%D0%BC%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Томатный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:70,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Чесночный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:71,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_cezar.png",
            name: "Соус Цезарь",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:72,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%9A%D0%B8%D1%81%D0%BB%D0%BE-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Кисло-сладкий",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:73,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A1%D1%8B%D1%80%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Сырный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:74,
            followed:true,
            zakaz:0
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%B3%D0%BE%D1%80%D1%87%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Горчичный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:75,
            followed:true,
            zakaz:0
        }
];

    componentDidMount() {
        let id=this.props.match.params.id;
        this.props.setImgThunk(this.img[id]);

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} pushKorzina={this.props.pushKorzina} korzina={this.props.korzina} pushKolVo={this.props.pushKolVo} follow={this.props.followThunk} unfollow={this.props.unfollowThunk} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        kol_vo:state.profile.kol_vo,
        korzina:state.profile.korzina
    }
};


let WithUrlDataContainerComponent=withRouter(ProfileContainer);


export default connect(mapStateToProps, {setImgThunk,followThunk,unfollowThunk,pushKolVo,pushKorzina})(WithUrlDataContainerComponent);