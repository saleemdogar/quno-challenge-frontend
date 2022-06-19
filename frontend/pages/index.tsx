import Filter from "../components/filter";
import Header from "../components/header";
import Profile from "../components/profile";
import ProfileService from "../services/profileservice";
import { ProfileType } from "../types/types";

interface IndexProps {
  profiles: ProfileType[];
}
const FILTER_DATA = [
  { id: "bestQunoscore", text: "Best Qunoscore" },
  { id: "bestreviews", text: "Best reviews" },
  { id: "lowestprice", text: "Lowest price" },
];

export async function getServerSideProps() {
  try {
    const profiles = await ProfileService.getProfileData();
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
  return (
    <div className="main">
      <Header />
      <Filter select="bestQunoscore" filters={FILTER_DATA} />
      <div className="flex flex-col justify-start p-8">
        {profiles?.map((profile) => (
          <Profile key={profile.slug} {...profile} />
        ))}
      </div>
    </div>
  );
}
