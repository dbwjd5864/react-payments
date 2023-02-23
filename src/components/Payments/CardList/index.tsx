import { Dispatch, Fragment, SetStateAction } from "react";
import { CardListType } from "types/payments";
import Card from "components/common/Card";
import { STEP } from "../../../constants/Payments";

interface CardListProps {
  cardList: CardListType[];
  clearCardInfo: () => void;
  setStep: Dispatch<SetStateAction<number>>;
}

const CardList = ({ cardList, clearCardInfo, setStep }: CardListProps) => {
  const handleCardAddClick = () => {
    clearCardInfo();
    setStep(STEP.SECOND);
  };

  return (
    <>
      <h2>카드 목록</h2>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>

          {cardList.map((card: CardListType, index) => {
            return (
              <Fragment key={index}>
                <Card input={card} backgroundColor={card?.backgroundColor} />
                <span className="card-nickname">{card?.nickname}</span>
              </Fragment>
            );
          })}

          <Card onClick={handleCardAddClick} />
        </div>
      </div>
    </>
  );
};

export default CardList;
