import React from "react";
import "./top.css";

function TopPage() {
  return (
    <>
      <section class="first-section">
        <div>
          <img
            class="avatar"
            alt="avatar"
            src="/images/hero-Illustration.png"
          />
        </div>
        <div>
          <h1>
            Create your
            <br />
            portfolio in
            <br />
            minutes
          </h1>
          <p>
            With Fiber, you can setup your own <br />
            personal portfolio in miunutes with
            <br />
            dozens of premade, beautiful
            <br />
            templates
          </p>
          <button class="start-btn desktop-start-btn">Start Free Trial</button>
          <div class="anchor-middle">
            <a href="#">Viev Examples</a>
          </div>
          <div class="checkmark one">
            <img alt="checkmark" src="/images/Checkmark.svg" />
            <p class="checkmark-p">No Credit Card Required</p>
          </div>
          <div class="checkmark two">
            <img alt="checkmark" src="/images/Checkmark.svg" />
            <p class="checkmark-p">10 Free Templates</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopPage;
