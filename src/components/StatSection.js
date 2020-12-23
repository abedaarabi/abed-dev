import React from "react";

function StatSection() {
  return (
    <section class="stats">
      <div class="container">
        <h3 class="stats-heading text-center my-1">
          “No matter where construction team members are physically, they need
          to be able to collaborate with one another in order to keep work
          moving along schedule,” said James Cook, head of integrations,
          Autodesk Construction Solutions. “Embedding Matterport’s 3D
          walk-throughs into the BIM 360 Project Home dashboard provides
          construction team members spatial context alongside essential project
          data so they can seamlessly collaborate and make decisions from any
          location, saving time and money to keep projects on track.”
        </h3>

        <div class="grid grid-3 text-center my-4">
          <div>
            <i class="fas fa-server fa-3x"></i>
            <h3>10,349,405</h3>
            <p class="text-secondary">Downlads</p>
          </div>

          <div>
            <i class="fas fa-project-diagram fa-3x"></i>
            <h3>2,343,265</h3>
            <p class="text-secondary">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
