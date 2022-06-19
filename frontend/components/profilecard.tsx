import { ProfileType } from "../types/profiletypes";
import Link from "next/link";

export default function ({
  name,
  avatarUrl,
  city,
  country,
  qunoScoreText,
  treatmentsLastYear,
  ratingsAverage,
  reviews,
  yearsExperience,
  basePrice,
  slug,
}: ProfileType) {
  return (
    <div className="flex flex-col justify-start profile-card">
      <div className="flex flex-row justify-start profile-card-intro">
        <img src={avatarUrl} />
        <div className="flex flex-col justify-start profile-card-info">
          <span className="department">Hair Transplant</span>
          <span className="title">{name}</span>
          <div className="flex flex-row justify-start location">
            <img src="/images/map.svg" />
            <span className="location-name">{`${city}, ${country}`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start profile-card-reviews">
        <div className="flex flex-col justify-center details">
          <img src="/images/count.svg" />
          <h5>{qunoScoreText}</h5>
          <span>Qunoscore</span>
        </div>
        <div className="flex flex-col justify-start description">
          <div className="flex flex-row justify-start">
            <img src="/images/star.svg" />
            <span className="reviews-text">
              <b>{`${ratingsAverage}`}</b>
              {` (${reviews.length} reviews)`}
            </span>
          </div>
          <div className="flex flex-row justify-start">
            <img src="/images/check.svg" />
            <span>{`${treatmentsLastYear} treatments last year`}</span>
          </div>
          <div className="flex flex-row justify-start">
            <img src="/images/check.svg" />
            <span>{`${yearsExperience} years of experience`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between prices">
        <div className="flex flex-col justify-center prices-cont">
          <span className="text-center">starting from</span>
          <span className="text-center mt-1.5">
            <b>{`€${basePrice}`}</b>
          </span>
        </div>
        <Link href={`/profile?slug=${slug}`}>
          <a className="flex flex-col justify-center text-center">
            See doctor profile
          </a>
        </Link>
      </div>
    </div>
  );
}
