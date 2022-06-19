import { useState } from "react";
import Filter from "../components/filter";
import Header from "../components/header";
import Profile from "../components/profilecard";
import ProfileService from "../services/profileservice";
import { ProfileType, FilterKes, BestScore } from "../types/profiletypes";

interface IndexProps {
  profiles: ProfileType[];
}

const FILTER_DATA = [
  { id: FilterKes.BEST_CONO_SCORE, text: "Best Qunoscore" },
  { id: FilterKes.BEST_REVIEWS, text: "Best reviews" },
  { id: FilterKes.LOWEST_PRICE, text: "Lowest price" },
];
const BEST_RAITING = 4;
const LOWEST_PRICE = 1500;
export async function getServerSideProps() {
  try {
    const profiles = await ProfileService.getProfiles();
    return {
      props: {
        profiles,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default function IndexPage({ profiles }: IndexProps) {
  const [filterId, setFilterId] = useState("");

  const filterData = (): ProfileType[] => {
    switch (filterId) {
      case FilterKes.BEST_CONO_SCORE:
        return profiles.filter(
          (profile) => profile.qunoScoreText === BestScore.EXCELENT
        );
      case FilterKes.BEST_REVIEWS:
        return profiles.filter(
          (profile) => profile.ratingsAverage >= BEST_RAITING
        );
      case FilterKes.LOWEST_PRICE:
        return profiles.filter((profile) => profile.basePrice <= LOWEST_PRICE);
      default:
        return profiles;
    }
  };
  return (
    <div className="main">
      <Header />
      <Filter
        select={filterId}
        filters={FILTER_DATA}
        onFilterChange={setFilterId}
      />
      <div className="flex flex-col justify-start p-8">
        {filterData().map((profile) => (
          <Profile key={profile.slug} {...profile} />
        ))}
      </div>
    </div>
  );
}
