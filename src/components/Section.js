import React from "react";


function Section({ text }) {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Eaier Deployment</h1>
          <p>
            Building Information Management (BIM) is gaining popularity in the
            AEC industry for design and construction. Moving into the operations
            phase of the building, non-geometric information such as indoor
            environmental quality, and essential building services become
          </p>
          <a href="feature.html" className="btn btn-outline">
            Read More
          </a>
        </div>
        <div className="showcase-form card">
          <h2>Request a Demo</h2>
          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
              />
            </div>
            <div className="form-control">
              <input type="text" name="email" placeholder="Email" required />
            </div>

            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Section;
