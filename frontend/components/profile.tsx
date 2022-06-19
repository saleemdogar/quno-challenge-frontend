import { ProfileType } from "../types/types";

export default function ({ name, avatarUrl, city, country }: ProfileType) {
  return (
    <div className="flex flex-col justify-start profile">
      <div className="flex flex-row justify-start profile-intro">
        <img src={avatarUrl} />
        <div className="flex flex-col justify-start profile-info">
          <span className="department">Hair Transplant</span>
          <span className="title">{name}</span>
          <div className="flex flex-row justify-start location">
            <img src="/images/map.svg" />
            <span className="location-name">{`${city},${country}`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start reviews"></div>
      <div className="flex flex-row justify-start prices"></div>
    </div>
  );
}
