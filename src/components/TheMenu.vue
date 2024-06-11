<template>
    <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
    >
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <UserOutlined /><span>Users</span>
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <TagOutlined /><span>Roles</span>
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <SettingOutlined /><span>Settings</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>

<script setup>
import { 
    UserOutlined,
    TagOutlined,
    SettingOutlined
} from '@ant-design/icons-vue';
import { useMenu } from '../stores/use-menu';
const state = useMenu();
</script>