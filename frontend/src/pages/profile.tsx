import ProfileService from "../services/profileservice";
import { ProfileType } from "../types/profiletypes";
import ReviewCard from "../components/reviewcard";

interface ProfileProps {
  profile: ProfileType;
  error: string;
}
export async function getServerSideProps({ query }: any) {
  if (!query.slug)
    return {
      props: {},
    };
  try {
    const profile = await ProfileService.getProfile(query.slug);
    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Server error...",
      },
    };
  }
}

export default function ({ profile, error }: ProfileProps) {
  if (error) return error;
  if (!profile) return "";
  const {
    name,
    avatarUrl,
    city,
    country,
    qunoScoreText,
    treatmentsLastYear,
    ratingsAverage,
    reviews,
    yearsExperience,
  } = profile;
  return (
    <div className="flex flex-col justify-start profile">
      <div className="flex flex-col justify-start profile-slider">
        <img src={avatarUrl} />
      </div>
      <div className="flex flex-col justify-start p-8 profile-info">
        <span className="profile-department">Hair Transplant</span>
        <span className="profile-title">{name}</span>
        <div className="flex flex-row justify-start profile-location">
          <img src="/images/Mapfill.svg" />
          <span className="location-name">{`${city}, ${country}`}</span>
        </div>
        <div className="flex flex-row justify-start profile-raiting">
          <img src="/images/countfill.svg" />
          <div className="flex flex-col justify-start profile-comments">
            <h5>{qunoScoreText}</h5>
            <span>Qunoscore</span>
          </div>
        </div>
        <div className="flex flex-col justify-start profile-reviews">
          <div className="flex flex-row justify-start profile-raitings">
            <img src="/images/star.svg" />
            <span className="reviews-text">
              <b>{`${ratingsAverage}`}</b>
              {` (${reviews.length} reviews)`}
            </span>
          </div>
          <div className="flex flex-row justify-start profile-exp">
            <img src="/images/check.svg" />
            <span>{`${treatmentsLastYear} treatments last year`}</span>
          </div>
          <div className="flex flex-row justify-start profile-exp">
            <img src="/images/check.svg" />
            <span>{`${yearsExperience} years of experience`}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center profile-links">
          <a
            className="flex flex-col justify-center text-center profile-link-const"
            href=""
          >
            Get consultation
          </a>
          <a
            className="flex flex-col justify-center text-center profile-link-app"
            href=""
          >
            Book appointment
          </a>
        </div>
      </div>
      {reviews?.map((review, index) => (
        <ReviewCard key={`${review.date}-${index}`} {...review} />
      ))}
    </div>
  );
}
