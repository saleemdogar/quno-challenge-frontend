import { reviewsType } from "../types/profiletypes";
export default function ({
  patientName,
  country,
  headline,
  content,
}: reviewsType) {
  return (
    <div className="flex flex-col justify-start p-8 review-card">
      <div className="flex flex-row justify-start review-header">
        <img />
        <div className="flex flex-col justify-start review-cont">
          <h5>{patientName}</h5>
          <span>{country}</span>
          <div className="flex flex-row justify-start start-cont">
            <img src="/images/star.svg" />
            <img src="/images/star.svg" />
            <img src="/images/star.svg" />
            <img src="/images/star.svg" />
            <img src="/images/star.svg" />
          </div>
        </div>
      </div>
      <h5>{headline}</h5>
      <p>{content}</p>
    </div>
  );
}
