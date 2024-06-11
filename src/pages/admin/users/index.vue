<template>
    <div>
        Day la User's page
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useMenu } from '../../../stores/use-menu';
const state = useMenu();
state.onSelectedKeys(['admin-users']);
</script>
