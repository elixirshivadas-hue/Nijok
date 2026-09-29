(function () {
  "use strict";

  function initNIJOKRedesign() {

    document.body.classList.add("nijok-reference");

    /* =========================
       NEW HERO SECTION
    ========================= */

    const oldHero = document.querySelector(".hero");

    if (oldHero && !document.getElementById("nijok-reference-hero")) {

      const hero = document.createElement("section");

      hero.id = "nijok-reference-hero";

      hero.innerHTML = `
        <div class="nijok-deco-leaf a"></div>
        <div class="nijok-deco-leaf b"></div>

        <div class="nijok-hero-inner">

          <div class="nijok-hero-content">

            <div class="nijok-hero-kicker">
              FOOD KNOWLEDGE GAME
            </div>

            <h1 class="nijok-hero-title">
              Play. Learn.<br>
              <em>Discover Food.</em>
            </h1>

            <p class="nijok-hero-copy">
              Test your knowledge, explore new cultures and
              discover the stories behind every dish.
              NIJOK makes learning about food fun,
              interactive and rewarding.
            </p>

            <div class="nijok-hero-actions">

              <button
                class="nijok-ref-btn primary"
                onclick="document.getElementById('play')?.scrollIntoView({behavior:'smooth'})">
                🌿 Start Playing →
              </button>

              <button
                class="nijok-ref-btn secondary"
                onclick="document.getElementById('learn')?.scrollIntoView({behavior:'smooth'})">
                How It Works
              </button>

            </div>

          </div>


          <div class="nijok-hero-visual">

            <div class="nijok-leaf-bg"></div>

            <div class="nijok-food-collage">

              <div class="nijok-food-photo one">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85"
                  alt="Food">
              </div>

              <div class="nijok-food-photo two">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85"
                  alt="Food">
              </div>

              <div class="nijok-food-photo three">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85"
                  alt="Food culture">
              </div>

              <div class="nijok-food-photo four">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85"
                  alt="Pizza">
              </div>

            </div>

            <div class="nijok-hero-story">
              Every Food<br>
              Has a Story
            </div>

          </div>

        </div>
      `;

      oldHero.replaceWith(hero);
    }


    /* =========================
       FEATURE STRIP
    ========================= */

    if (!document.getElementById("nijok-reference-features")) {

      const hero = document.getElementById("nijok-reference-hero");

      if (hero) {

        const features = document.createElement("section");

        features.id = "nijok-reference-features";

        features.innerHTML = `

          <div class="nijok-feature">
            <div class="nijok-feature-icon">🧠</div>
            <strong>Fun & Engaging</strong>
            <span>Learn through interactive quizzes.</span>
          </div>

          <div class="nijok-feature">
            <div class="nijok-feature-icon">🌎</div>
            <strong>Global & Local</strong>
            <span>Explore food from everywhere.</span>
          </div>

          <div class="nijok-feature">
            <div class="nijok-feature-icon">📖</div>
            <strong>Build Knowledge</strong>
            <span>History, culture and ingredients.</span>
          </div>

          <div class="nijok-feature">
            <div class="nijok-feature-icon">🏆</div>
            <strong>Earn Rewards</strong>
            <span>Collect points and badges.</span>
          </div>

          <div class="nijok-feature">
            <div class="nijok-feature-icon">👥</div>
            <strong>Compete & Share</strong>
            <span>Challenge friends and climb.</span>
          </div>

        `;

        hero.after(features);
      }
    }


    /* =========================
       CHANGE GAME HEADING
    ========================= */

    function updateGameHeading() {

      const heading = document.querySelector(".playground-heading");

      if (!heading) return;

      const title = heading.querySelector("h2");

      const description = heading.querySelector("p");

      if (title) {
        title.innerHTML =
          `Choose Your <span>Challenge</span>`;
      }

      if (description) {
        description.textContent =
          "Different ways to play. Same goal — become a curious Food Explorer.";
      }
    }


    /* =========================
       DAILY CHALLENGE
    ========================= */

    function addDailyChallenge() {

      if (document.getElementById("nijok-reference-daily")) {
        return;
      }

      const playSection = document.getElementById("play");

      if (!playSection) return;

      const daily = document.createElement("section");

      daily.id = "nijok-reference-daily";

      daily.innerHTML = `

        <div class="nijok-daily-inner">

          <div class="nijok-daily-copy">

            <span>
              🌿 TODAY'S CHALLENGE
            </span>

            <h2>
              How much do you know about food?
            </h2>

            <p>
              Take today's quick food quiz,
              earn points and keep your learning
              streak alive.
            </p>

            <button
              onclick="openGame('quiz')">
              Start Today's Challenge →
            </button>

          </div>


          <div class="nijok-daily-art">

            <div>
              Think.<br>
              Explore.<br>
              Learn.
            </div>

            <span>🌿</span>

          </div>

        </div>
      `;

      playSection.after(daily);
    }


    /* =========================
       INITIALIZE
    ========================= */

    updateGameHeading();

    addDailyChallenge();


    /* Run again because existing
       NIJOK JS may load sections
       dynamically. */

    setTimeout(function () {
      updateGameHeading();
      addDailyChallenge();
    }, 1000);

  }


  /* =========================
     START
  ========================= */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initNIJOKRedesign
    );

  } else {

    initNIJOKRedesign();

  }

})();
