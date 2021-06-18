import { React } from "react";

const slopes = [
  {
    id: 1,
    name: "Alpe De Huez",
    slopeElevation: "Diana Prince",
    slopeLength: "hero",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 2,
    name: "Les Orres",
    slopeElevation: "Pamela Lillian Isley",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 3,
    name: "Briancon-Serre Chevaliers",
    slopeElevation: "Dinah Drake",
    slopeLength: "hero",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 4,
    name: "Catwoman",
    slopeElevation: "Selina Kyle",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 5,
    name: "Catwoman",
    slopeElevation: "Selina Kyle",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 6,
    name: "Catwoman",
    slopeElevation: "Selina Kyle",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 7,
    name: "Catwoman",
    slopeElevation: "Selina Kyle",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 8,
    name: "Catwoman",
    slopeElevation: "Selina Kyle",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  },
  {
    id: 9,
    name: "Catwoman",
    slopeElevation: "Selina Kyle",
    slopeLength: "villain",
    price: "50EUR",
    image: "url(./assets/hero.jpg)"
  }
];

console.log(slopes);

const CardListItem = (props) => {
  return (
    <li>
      <div className="card-container">
        <p>
          <strong>{props.slope.name}</strong>
        </p>
        <p>{props.slope.slopeElevation}</p>
        <p>{props.slope.slopeLength}</p>
        <p>{props.slope.price}</p>
      </div>
    </li>
  );
};

const CardList = () => {
  return (
    <div className="x">
      <ul style={{ listStyleType: "none" }}>
        {slopes.map((slope) => {
          return <CardListItem slope={slope} key={slope.id} />;
        })}
      </ul>
    </div>
  );
};

export default function Card() {
  return (
    <main>
      <CardList />
    </main>
  );
}
