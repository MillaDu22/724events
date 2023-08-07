import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const [byDateDesc, setByDateDesc]= useState([])
  useEffect(() => {
    if (data) {
      //Inversement de l'ordre de tri sur la méthode sort//
      const tmpByDateDesc = data.focus.sort((evtB, evtA) =>
      //faffichage du plus ancien au plus récent dans mon nouveau tableau//
      new Date(evtA.date) < new Date(evtB.date) ? 1 : -1)
    ;
    setByDateDesc(tmpByDateDesc)
  }
  },[data])
  const nextCard = () => {
    setTimeout(
      //retrait 1 pour ne plus dépasser du tableau//
      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                //key prop modifié suite à warning console//
                  key={`${_.title}`}
                  type="radio"
                  name="radio-button"
                  /*deboggagage bouton radio, index slides strictement = à index boutons radio*/
                  checked={index === radioIdx}
                  onChange = {()=> null}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
