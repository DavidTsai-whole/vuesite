<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/product">
              <span data-feather="bar-chart-2"> productlist</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon">
              <span data-feather="bar-chart-2"> coupon</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
