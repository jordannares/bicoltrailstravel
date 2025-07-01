const Footer = () => {
  return (
    <section className="bg-amber-50 relative">
      <div className="py-20">
        <div className="mx-auto text-start max-container grid grid-cols-1 lg:grid-cols-4 ">
          <div>
            <h1>About Bicol Tour</h1>
            <ul className="text-sm">
              <li>About</li>
              <li>Press</li>
              <li>Resources and Policies</li>
            </ul>
          </div>
          <div>
            <h1>Explore</h1>
            <ul className="text-sm">
              <li>Write a review</li>
              <li>Join</li>
              <li>Add a Place</li>
            </ul>
          </div>
          <div>
            <h1>Do Business With Us</h1>
            <ul className="text-sm">
              <li>Owners</li>
              <li>Business Advantage</li>
            </ul>
          </div>
          <div>
            <h1>Tripadvisor Sites</h1>
            <ul className="text-sm">
              <li>iPhopne App</li>
              <li>Android App</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="mx-auto max-container ">
          <p className="text-sm">© 2025 Bicol Tour. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
