const ExtraSction = () => {
  return (
    <div className="my-8">
      {/* why choose us */}
      <div className="card lg:card-side bg-base-100  max-w-[1100px] mx-auto">
        <figure className="lg:w-3/4 items-center flex">
          <img
            className="w-full"
            src="https://imgur.com/V8Eud7f.png"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Why Choose SEAventures?</h2>
          <p>
            Discover the essence of Southeast Asia with SEAventures. Here's why
            we're your ideal travel companion.
            <br />
            1. Expert Guidance: <br />
            With over 30 years of experience, SEAventures offers unparalleled
            insight into the region's hidden gems and authentic experiences.
            <br />
            2. Authentic Encounters:
            <br />
            Immerse yourself in Southeast Asia's culture through genuine
            interactions and unique adventures curated by our local experts.
            <br />
            3. Tailored Experiences:
            <br />
            Enjoy personalized service and flexibility, ensuring your journey
            reflects your preferences and desires.
            <br />
            4. Sustainable Travel:
            <br />
            We're committed to responsible tourism, supporting local communities
            and preserving the environment for future generations.
            <br />
            5. Affordable Luxury:
            <br />
            Experience the best of Southeast Asia without compromise, with
            unbeatable value and quality. Conclusion: Choose SEAventures for a
            journey filled with discovery, connection, and unforgettable
            memories in Southeast Asia.
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      {/* our popularity */}
      <h3 className="block text-center text-4xl my-6">Our Success</h3>
      <div className="stats shadow mx-auto w-full ">
        <div className="stat flex justify-center">
          <div>
            <div className="stat-title">Solo Travelers</div>
            <div className="stat-value">15K</div>
            <div className="stat-desc">1992 - Present</div>
          </div>
        </div>

        <div className="stat flex justify-center">
          <div>
            <div className="stat-title">Family Tour</div>
            <div className="stat-value">3,215</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
        </div>

        <div className="stat flex justify-center">
          <div>
            <div className="stat-title">New Travel Registers</div>
            <div className="stat-value">200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSction;
