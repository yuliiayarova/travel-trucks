"use client";

import { getCamperById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CamperDetails.module.css";
import { FaStar } from "react-icons/fa6";
import { IoMapOutline } from "react-icons/io5";
import Gallery from "@/components/Gallery/Gallery";
import Reviews from "@/components/Reviews/Reviews";

export default function CamperDetailsClient() {
  const { camperId } = useParams<{ camperId: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error || !camper) return <p>Something went wrong.</p>;

  return (
    <main className={css.container}>
      <section className={css.camperDetailsSection}>
        <div className={css.camperGallery}>
          <Gallery camper={camper} />
        </div>
        <div className={css.camperContent}>
          <div className={css.camperMainInfo}>
            <h2 className={css.camperName}>{camper.name}</h2>
            <div className={css.wrapper}>
              <span className={css.ratingWrapper}>
                <FaStar className={css.starIcon} />
                {camper.rating} ({camper.totalReviews} Reviews)
              </span>
              <span className={css.locationWrapper}>
                <IoMapOutline className={css.iconLocation} />
                {camper.location}
              </span>
            </div>
            <p className={css.camperPrice}>€{camper.price}</p>

            <p className={css.camperDescr}>{camper.description}</p>
          </div>

          <div className={css.camperDetails}>
            <h2 className={css.detailsCaption}>Vehicle details</h2>

            <ul className={css.tagList}>
              <li className={css.tagItem}>{camper.engine}</li>

              <li className={css.tagItem}>{camper.transmission}</li>
              <li className={css.tagItem}>{camper.form}</li>

              {camper.amenities.map((amenity) => (
                <li className={css.tagItem} key={amenity}>
                  {amenity}
                </li>
              ))}
            </ul>

            <div className={css.metaRow}>
              <dt>Form</dt>
              <dd className={css.metaData}>{camper.form}</dd>
              <dt>Length</dt>
              <dd className={css.metaData}>{camper.length}</dd>
              <dt>Width</dt>
              <dd className={css.metaData}>{camper.width}</dd>
              <dt>Height</dt>
              <dd className={css.metaData}>{camper.height}</dd>
              <dt>Tank</dt>
              <dd className={css.metaData}>{camper.tank}</dd>
              <dt>Consumption</dt>
              <dd className={css.metaData}>{camper.consumption}</dd>
            </div>
          </div>
        </div>
      </section>
      <section className={css.reviewsSection}>
        <h2 className={css.reviewsTitle}>Reviews</h2>
        <div className={css.reviewsWrapper}>
          <Reviews />
          <p>forma</p>
        </div>
      </section>
    </main>
  );
}
