export default function LinkedInBadge() {
  return (
    <div className="w-full flex justify-center">
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
      <div
        className="badge-base LI-profile-badge mx-auto block"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="nahuelbello"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://dk.linkedin.com/in/nahuelbello?trk=profile-badge"
        >
        </a>
      </div>
    </div>
  );
}