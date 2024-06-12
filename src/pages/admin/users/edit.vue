<template>
  <form @submit.prevent="">
    <a-card title="Edit User" style="width: 100%">
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
              <span :class="{
                'text-danger': errors.status_id
              }">Status:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-select
                show-search
                placeholder="Select a status"
                style="width: 100%"
                :options="users_status"
                :filter-option="filterOption"
                allow-clear
                v-model:value="user.status_id"
                :class="{
                  'select-danger': errors.status_id
                }"
            ></a-select>

            <div class="w-100"></div>
            <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.username
              }">Username:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Username"
                allow-clear
                v-model:value="user.username"
                :class="{
                  'input-danger': errors.username
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.username" class="text-danger">{{ errors.username[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.name
              }">Name:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Name"
                allow-clear
                v-model:value="user.name"
                :class="{
                  'input-danger': errors.name
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.email
              }">Email:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Email"
                allow-clear
                v-model:value="user.email"
                :class="{
                  'input-danger': errors.email
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.department_id
              }">Departments:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <div class="input-group">
              <a-select
                  show-search
                  placeholder="Select a departments"
                  style="width: 100%"
                  :options="departments"
                  :filter-option="filterOption"
                  allow-clear
                  v-model:value="user.department_id"
                  :class="{
                    'select-danger': errors.department_id
                  }"
              ></a-select>

<!--              <a-button type="default">-->
<!--                <font-awesome-icon :icon="['fas', 'plus']"/>-->
<!--              </a-button>-->

              <div class="w-100"></div>
              <small v-if="errors.department_id" class="text-danger">{{ errors.department_id[0] }}</small>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end"></div>

          <div class="col-12 col-sm-5">
            <a-checkbox v-model:checked="change_password">
              Change password
            </a-checkbox>
          </div>
        </div>

        <div class="row mb-3" v-if="change_password">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.password
              }">Password:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password
                placeholder="Password"
                allow-clear
                v-model:value="user.password"
                :class="{
                  'input-danger': errors.password
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
          </div>
        </div>

        <div class="row mb-3" v-if="change_password">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.password_confirmation
              }">re-Password:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password
                placeholder="Re-Password"
                allow-clear
                v-model:value="user.password_confirmation"
                :class="{
                  'input-danger': errors.password_confirmation
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.password_confirmation" class="text-danger">{{ errors.password_confirmation[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span>Login recently:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <span>{{ user.login_at }}</span>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span>Password change recently:</span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <span>{{ user.change_password_at }}</span>
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

        <a-button type="primary" html-type="submit">
          <span>Save</span>
        </a-button>
      </div>
    </div>
  </a-card>
  </form>
</template>

<script setup>
  import { ref, reactive, toRefs } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { useMenu } from '../../../stores/use-menu';
  import axios from "axios";
  import {message} from "ant-design-vue";
  const state = useMenu();
  state.onSelectedKeys(['admin-users']);

  const router = useRouter();
  const route = useRoute();
  const users_status = ref([]);
  const departments = ref([]);
  const user = reactive({
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    department_id: [],
    status_id: [],
    login_at: "",
    change_password_at: ""
  });
  const change_password = ref(false);

  const errors = ref({});

  const filterOption = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const getUserEdit = () => {
    axios.get(`http://localhost:8000/api/users/${route.params.id}/edit`)
      .then(function (response) {
        users_status.value = response.data.users_status;
        departments.value = response.data.departments;

        user.username = response.data.user.username;
        user.name = response.data.user.name;
        user.email = response.data.user.email;
        user.department_id = response.data.user.department_id;
        user.status_id = response.data.user.status_id;

        // response.data.user.login_at ? user.login_at = response.data.user.login_at : user.login_at = "Not login yet";
        // response.data.user.change_password_at ? user.change_password_at = response.data.user.change_password_at : user.change_password_at = "Not change password yet";

        user.login_at = response.data.user.login_at ?? "Not login yet";
        user.change_password_at = response.data.user.change_password_at ?? "Not change password yet";
      })
      .catch(function (errors) {
        console.log(errors);
      });
  }

  getUserEdit();
</script>

<style>
  .select-danger { border: 1px solid #ff0000; }
  .input-danger { border-color: #ff0000; }
</style>