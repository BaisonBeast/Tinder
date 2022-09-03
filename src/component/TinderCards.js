import React, { useEffect, useState } from 'react'
import "../css/TinderCards.css"
import TinderCard from 'react-tinder-card';
import axios from "../axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("/tinder/cards");
        setPeople(response.data);
      }
      fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
      console.log(name + "Left the screen")
    }

  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(direction) => swiped(direction, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.Imageurl})` }}
                className="card"
              >
                 <h3>{person.name}</h3>
              </div>

            </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards