import React from "react";

const Service = () => {
  return (
    <section
      id="service"
      className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto"
    >
      <div class="stats bg-neutral shadow">
        <div class="stat">
          <div class="stat-title text-base-100 uppercase">Total Project</div>
          <div class="stat-value text-base-100 text-center">10</div>
          <div class="stat-desc text-base-100">21% more than last month</div>
        </div>
      </div>
      <div class="stats bg-neutral shadow">
        <div class="stat">
          <div class="stat-title text-base-100 uppercase">Happy customers</div>
          <div class="stat-value text-base-100 text-center">60+</div>
          <div class="stat-desc text-base-100">52% more than last month</div>
        </div>
      </div>
      <div class="stats bg-neutral shadow">
        <div class="stat">
          <div class="stat-title text-base-100 uppercase">Awarded</div>
          <div class="stat-value text-base-100 text-center">30+</div>
          <div class="stat-desc text-base-100">82% more than last month</div>
        </div>
      </div>
    </section>
  );
};

export default Service;
