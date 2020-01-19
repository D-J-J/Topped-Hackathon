import React from 'react';
import Competition from '../../models/competition';
import CompetitionCard from '../CompetitionCard';

export default function RecipeReviewCard() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  let comp1 = new Competition(1,"fuck","you",1,1,1,1,1);
  let comp2 = new Competition(1,"bitch","ass",1,1,1,1,1);

  let compList = [];
  compList.push(comp1);
  compList.push(comp2);
  
  let cardList = [];
  compList.forEach(element =>{ 
    cardList.push(
      <CompetitionCard competiton={element}/>
    )
  });
  
  console.log(cardList);
    return (
        <div>
          {cardList}
        </div>
    );
}