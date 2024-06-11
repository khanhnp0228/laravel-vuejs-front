<template>
  <a-card title="Create new User" style="width: 100%">
    <div class="row mb-3">
      <div class="col-12 col-sm-4">

        <div class="row">
          <div class="col-12 d-flex justify-content-center mb-3">
            <a-avatar shape="square" :size="200">
              <template #icon>
                <img src="../../../assets/logo.jpg" alt="Avatar">
              </template>
            </a-avatar>
          </div>

          <div class="col-12 d-flex justify-content-center">
            <a-button type="primary">
              <font-awesome-icon :icon="['fas', 'plus']" class="me-2" /><span>Upload</span>
            </a-button>
          </div>
        </div>

      </div>
      <div class="col-12 col-sm-8">
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Status:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-select
                show-search
                placeholder="Select a status"
                style="width: 100%"
                :options="[]"
                :filter-option="[]"
            ></a-select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Username:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Username"
                allow-clear
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Name:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Name"
                allow-clear
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Email:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Email"
                allow-clear
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Departments:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <div class="input-group">
              <a-select
                  show-search
                  placeholder="Select a departments"
                  style="width: 100%"
                  :options="[]"
                  :filter-option="[]"
              ></a-select>

              <a-button type="default">
                <font-awesome-icon :icon="['fas', 'plus']"/>
              </a-button>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Password:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password
                placeholder="Password"
                allow-clear
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>re-Password:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password
                placeholder="Re-Password"
                allow-clear
            />
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
        <a-button class="me-0 me-sm-2 mb-3 mb-sm-0">
          <router-link :to="{ name: 'admin-users' }">
            <span>Cancel</span>
          </router-link>

        </a-button>

        <a-button type="primary">
          <span>Save</span>
        </a-button>
      </div>
    </div>
  </a-card>
</template>

<script setup>
  import { useMenu } from '../../../stores/use-menu';
  const state = useMenu();
  state.onSelectedKeys(['admin-users']);
</script>