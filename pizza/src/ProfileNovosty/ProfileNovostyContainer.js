import React from 'react';
import ProfileNovosty from "./ProfileNovosty.jsx";
import {connect} from "react-redux";
import {setImgThunk,followThunk, unfollowThunk} from "../reducers/ProfileNovostyReducer";
import {withRouter} from "react-router";


class ProfileNovostyContainer extends React.Component {

      img1=[
            {   img: "https://backend.dominos.by/media/dominos/news/2021/11/16/16-11-21-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1_2.png",
                name: "​​​*Акция",
                id:0,
                text:"В связи с возможным ростом количества заказов время выдачи может быть увеличено. Заранее просим извинить за возможные неудобства.\n" +
                  "\n" +
                  "​​​*Акция \"CRAZY FRIDAY\" действует 19.11.2021 (11:00 - 23:00) во всех пиццериях Domino's Pizza по формам реализации ЗАЛ/ ВЫНОС/ САМОВЫВОЗ.\n" +
                  "\n" +
                  "*Акционные блюда: пиццы среднего и большого размеров (30, 36 см), категорий: Красная цена; Классические, Любимые, Премиум, Легенды на классике, тонком, ультратонком тесте, а также на пиццы с Hot dog бортом. В подарок выдается пицца с меньшей стоимостью. Каждая подарочная пицца реализуется по цене 1 копейка.\n" +
                  "\n" +
                  "*В акции не участвуют пиццы маленького размера (22 см), категория \"Собери свою пиццу\", пиццы с сырным бортом, а также пиццы с измененной рецептурой (заменой/ удалением/ добавлением ингредиентов).\n" +
                  "\n" +
                  "*Заказы на время не принимаются. \n" +
                  "\n" +
                  "*Количество акционного товара ограничено. Акция не суммируется с другими специальными предложениями пиццерии. \n" +
                  "\n" +
                  " \n" +
                  "\n" +
                  "Ну, погнали!"
      },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/15/1024_1024.png",
              name: "АЙДА ЗА ПОКУПКАМИ В 5 ЭЛЕМЕНТ!",
              id:1,
              text:"АЙДА ЗА ПОКУПКАМИ В 5 ЭЛЕМЕНТ!\n" +
                  "\n" +
                  " \n" +
                  "\n" +
                  "Друзья, 15.11 – 21.11.2021 при покупке от 50 рублей в сети магазинов «5 элемент» Вы получите чек-купон со скидкой 30% на пиццу в Доминос!\n" +
                  "\n" +
                  "Купоном можно воспользоваться при заказе в 11:00 – 23:00 в зале/ навынос/ на самовывоз! 1 заказ по акции = 1 пицца с меньшей стоимостью в чеке со скидкой.\n" +
                  "\n" +
                  "Чек-купон действителен 7 дней с даты выдачи и изымается сотрудником пиццерии после получения Клиентом заказа.\n" +
                  "\n" +
                  " \n" +
                  "\n" +
                  "Чтобы совершить заказ по акции на самовывоз из пиццерии, Клиенту необходимо сообщить о наличии купона на скидку оператору колл-центра по телефону 7717.\n" +
                  "\n" +
                  " \n" +
                  "\n" +
                  "- Денежная компенсация, взамен предоставления скидки, не производится.\n" +
                  "\n" +
                  "- Эквивалент скидки – чек-купон (срок действия 7 дней с момента совершения покупки). \n" +
                  "\n" +
                  "- Акция не суммируется с другими скидками и специальными предложениями."
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/11/kids-new.jpg",
              name: "ДЕЛИМСЯ ЛАЙФХАКОМ, КАК ПОЛУЧИТЬ КЕШБЭК ПРИ ЗАКАЗЕ В ЗАЛЕ!",
              id:2,
              text:"ДЕЛИМСЯ ЛАЙФХАКОМ, КАК ПОЛУЧИТЬ КЕШБЭК ПРИ ЗАКАЗЕ В ЗАЛЕ!\n" +
                  "\n" +
                  " \n" +
                  "\n" +
                  "11 - 25.11.2021 во всех наших пиццериях при любом заказе на сумму от 20 рублей вы получите чек-купон с промокодом на 200 бонусов (2 рубля).\n" +
                  "\n" +
                  " \n" +
                  "\n" +
                  "КАК ИМИ ВОСПОЛЬЗОВАТЬСЯ? ВСЕ ПРОСТО!\n" +
                  "\n" +
                  "- Введите промокод в Профиле в личном кабинете в окне \"Введите промокод на бонусы\" и нажмите кнопку \"Зачислить\".\n" +
                  "\n" +
                  "- Промокод является уникальным и действует до 30.11.2021.\n" +
                  "\n" +
                  "- Бонусы будут зачислены в ваш личный кабинет в течение 24 часов.\n" +
                  "\n" +
                  "- Срок действия бонусов по промокоду 30 дней.\n" +
                  "\n" +
                  "- Бонусы по акции суммируются с другими бонусами по ПЛ. Расчет бонусами за заказ по акции невозможен."
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/11/_1.png",
              name: "",
              id:3,
              text:""
          },
          {   img: "https://backend.dominos.by/media/dominos/news/2021/11/10/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_6_%D0%BB%D0%B5%D1%82_%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_1024%D1%851024-min.png",
              name: "",
              id:4,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/09/09-11-21-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.png",
              name: "",
              id:5,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/08/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D1%86%D0%B5%D0%BD%D0%B0_1024%D1%851024_08.11.21.png",
              name: "",
              id:6,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/05/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2021-11-05_135900.png",
              name: "",
              id:7,
              text:""
          },
          {   img: "https://backend.dominos.by/media/dominos/news/2021/11/02/02-11-21_Crazy%D0%92%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.png",
              name: "",
              id:8,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/02/7_%D0%BA%D0%B0%D1%80%D0%B0%D1%82_1024%D1%851024.jpg",
              name: "",
              id:9,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/02/caprice_%D1%80%D0%B5%D1%81%D0%B0%D0%B9%D0%B7%D1%8B_1024%D1%851024.jpg",
              name: "",
              id:10,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/02/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9.png",
              name: "",
              id:11,
              text:""
          },
          {   img: "https://backend.dominos.by/media/dominos/news/2021/11/02/%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B8_%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.png",
              name: "",
              id:12,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/11/01/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D1%86%D0%B5%D0%BD%D0%B0_1024%D1%851024_01.11-min.png",
              name: "",
              id:13,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/10/29/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_%D0%BA%D1%80%D0%BE%D1%81%D1%81_%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_%D0%98%D0%BD%D0%B2%D0%B8%D1%82%D1%80%D0%BE_1024%D1%851024.png",
              name: "",
              id:14,
              text:""
          },
          {
              img: "https://backend.dominos.by/media/dominos/news/2021/10/29/%D0%B4%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_%D0%90%D0%97%D0%A1_1024x1024.jpg",
              name: "",
              id:15,
              text:""
          }
];

    componentDidMount() {
        let id=this.props.match.params.id;
        this.props.setImgThunk(this.img1[id]);
    }


    render() {
        return (
            <div>
                <ProfileNovosty {...this.props} profilenovosty={this.props.profilenovosty} follow={this.props.followThunk} unfollow={this.props.unfollowThunk} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilenovosty: state.profilenovosty
    }
};


let WithUrlDataContainerComponent=withRouter(ProfileNovostyContainer);


export default connect(mapStateToProps, {setImgThunk,followThunk,unfollowThunk})(WithUrlDataContainerComponent);