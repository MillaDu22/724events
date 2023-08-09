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
      //Tri par date de A à B (sens) de mon tableau events avec la méthode sort//
      const tmpByDateDesc = data.focus.sort((evtA, evtB) =>
      /*A passe plus petit que B, affichage du plus ancien (-1, le dernier),
      au plus récent (+1 le premier) dans mon nouveau tableau*/
      new Date(evtA.date) < new Date(evtB.date) ? -1 : +1)
    ;
    setByDateDesc(tmpByDateDesc)
  }
  },[data])
  const nextCard = () => {
    //retrait 1  pour ne plus dépasser du tableau//
    setTimeout(() => setIndex(index < byDateDesc.length -1 ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
          <div
            key={event.title}>
              {/*Ajout key prop pour annulation warning console*/}
              <div key={event.title}
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
            {/*Ajout key prop suite à warning console*/}
            <div className="SlideCard__paginationContainer" key={event.description}>
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
          </div>
        ))}
    </div>
  );
};

export default Slider;
