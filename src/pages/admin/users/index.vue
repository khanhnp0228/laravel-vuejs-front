<template>
    <div>
      <a-card title="Users" style="width: 100%">
        <div class="row">
          <div class="col-12">
            <a-table :dataSource="users" :columns="columns" >
              <template #bodyCell="{ column, index, record }">

                <template v-if="column.key === 'index'">
                  <span>{{index + 1}}</span>
                </template>

                <template v-if="column.key === 'status'">
                  <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                  <span v-else-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
                </template>

              </template>
            </a-table>
          </div>
        </div>
      </a-card>
    </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useMenu } from '../../../stores/use-menu';
  const state = useMenu();
  state.onSelectedKeys(['admin-users']);

  const users = ref([]);
  const columns = [
    {
      title: '#',
      key: 'index',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'username',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Departments',
      dataIndex: 'departments',
      key: 'departments',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  const getUsers = () => {
    axios.get('http://localhost:8000/api/user/')
        .then(function (response) {
          // handle success
          users.value = response.data;
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  }

  // const getUsers2 = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/api/user/');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  getUsers();

</script>
