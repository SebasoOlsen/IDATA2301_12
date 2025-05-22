import "../assets/css/common/global.css";
import "../assets/css/product-page.css";
/**
 * Test component for displaying a sample hotel page layout.
 *
 * @component
 * @returns {JSX.Element} The rendered test hotel page.
 */
export default function Test() { ... }
export default function Test() {
  return (
    <main>
      <div class="hotel-container">
        <div class="hotel-images">
          <div
            class="main-image"
            th:style="'background-image: url(' + @{/pictures/andante_main.jpg} + ')'"
          ></div>
          <div class="thumbnails">
            <div
              class="thumbnail"
              th:style="'background-image: url(' + @{/pictures/andante_room1.jpg} + ')'"
            ></div>
            <div
              class="thumbnail"
              th:style="'background-image: url(' + @{/pictures/andante_pool.jpg} + ')'"
            ></div>
            <div
              class="thumbnail"
              th:style="'background-image: url(' + @{/pictures/andante_view.jpg} + ')'"
            ></div>
          </div>
        </div>

        <div class="hotel-info-box">
          <h2>Andante Hotel</h2>
          <p>
            <strong>Location:</strong> City Center, Barcelona, Spain
          </p>
          <p>
            <strong>Rating:</strong> ⭐⭐⭐⭐ (8.5/10)
          </p>
          <p>
            Andante Hotel offers modern rooms with complimentary Wi-Fi, a
            rooftop pool, and 24-hour gym access...
          </p>
          <ul class="features">
            <li>Complimentary Wi-Fi</li>
            <li>Rooftop Pool</li>
            <li>24-hour Gym Access</li>
            <li>Breakfast Buffet (optional)</li>
          </ul>
          <p>
            <strong>Price:</strong> From $150/night (Booking.com) • $200/night
            (Agoda)
          </p>
          <a th:href="@{/booking}" class="book-button">
            Book Now
          </a>
        </div>
      </div>

      <section class="property-features">
        <h3>Property Features</h3>
        <div class="features-grid">
          <div class="feature-box">Fabulous breakfast</div>
          <div class="feature-box">Private parking</div>
          <div class="feature-box">Outdoor swimming pool</div>
          <div class="feature-box">Free WiFi</div>
          <div class="feature-box">Airport shuttle</div>
          <div class="feature-box">Private bathroom</div>
          <div class="feature-box">City view</div>
          <div class="feature-box">Fitness centre</div>
          <div class="feature-box">Family rooms</div>
          <div class="feature-box">Facilities for disabled guests</div>
        </div>

        <div class="property-highlights">
          <h4>Property Highlights</h4>
          <p>
            <strong>Located in the heart of Barcelona</strong>
          </p>
          <p>Breakfast info: Continental, Vegetarian, Gluten-free, Buffet</p>
          <button>Reserve</button>
        </div>
      </section>

      <section class="reviews-section">
        <div class="reviews-left">
          <div class="overall-rating">
            8.6/10 <span>Excellent</span>
          </div>
          <p>942 verified reviews</p>
        </div>

        <div class="reviews-right">
          <div class="review-card">
            <h4>10/10 Exceptional</h4>
            <p>Excellent hotel with wonderful staff and restaurant.</p>
            <p>
              <strong>Jorge</strong> • Aug 22, 2024
            </p>
          </div>
          <div class="review-card">
            <h4>8/10 Very good</h4>
            <p>Pool was excellent.</p>
            <p>
              <strong>Gerard</strong> • Aug 24, 2024
            </p>
          </div>
          <a href="#" class="see-all-reviews">
            See all 942 reviews
          </a>
          <div class="feedback">
            Tell us how we can improve our site. <a href="#">Share feedback</a>
          </div>
        </div>
      </section>
    </main>
  );
}
