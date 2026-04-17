import { Camper } from "@/types/camper";
import css from "./CamperList.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { BsFuelPump, BsDiagram3 } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";

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
            <div className={css.camperHeader}>
              <h2 className={css.camperName}>{camper.name}</h2>
              <p className={css.camperPrice}>€{camper.price}</p>
              <div className={css.meta}>
                <span>
                  {camper.rating} {camper.totalReviews}
                </span>
                <span>{camper.location}</span>
              </div>
            </div>

            <p className={css.camperDescr}>{camper.description}</p>

            <ul className={css.tagList}>
              <li className={css.tagItem}>
                <BsFuelPump className={css.tagIcon} />
                {camper.engine}
              </li>
              <li className={css.tagItem}>
                <BsDiagram3 className={css.tagIcon} /> {camper.transmission}
              </li>
              <li className={css.tagItem}>
                <FaCar className={css.tagIcon} />
                {camper.form}
              </li>
            </ul>
            <Button href={`/catalog/${camper.id}`} text="Show more" />
          </div>
        </li>
      ))}
    </ul>
  );
}
