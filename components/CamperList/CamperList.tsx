import { Camper } from "@/types/camper";
import css from "./CamperList.module.css";
import Image from "next/image";
import Button from "../Button/Button";

interface CamperListProps {
  campers: Camper[];
}
export default function CamperList({ campers }: CamperListProps) {
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper.id} className={css.camperItem}>
          <Image
            src={camper.coverImage}
            alt="Camper image"
            width={220}
            height={240}
            className={css.camperImage}
          />
          <div className={css.camperInfo}>
            <h2 className={css.camperName}>{camper.name}</h2>
            <p className={css.camperPrice}>{camper.price}</p>
          </div>
          <p>
            {camper.rating} {camper.totalReviews}
          </p>
          <p>{camper.location}</p>
          <p>{camper.description}</p>
          <span>{camper.amenities}</span>
          <Button href={`/catalog/${camper.id}`} text="Show more" />
        </li>
      ))}
    </ul>
  );
}
