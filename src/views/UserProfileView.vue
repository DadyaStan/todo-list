<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { useAuthStore } from '../store/authStore';
import {
    UserOutlined,
    UnorderedListOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';

const authStore = useAuthStore(); 

const selectedKeys = ref<string[]>(['2']);
const collapsed = ref<boolean>(false);

const userData = ref<any>({});

onBeforeMount(() => {
    //userData.value = localStorage.getItem('userData') 
    const asd: any = localStorage.getItem('userData');
    userData.value = JSON.parse(asd);
    console.log(userData.value)
});

const logout = async () => {
    await authStore.logout();
}
</script>

<template>
    <div class="wrapper">
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
                <div class="logo" />
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <router-link to="/todo-list/todo">
                    <a-menu-item key="1">
                        <unordered-list-outlined />
                        <span>Todo</span>
                    </a-menu-item>
                    </router-link>

                    <router-link to="/todo-list/profile">
                        <a-menu-item key="2">
                            <user-outlined />
                            <span>Profile</span>
                        </a-menu-item>
                    </router-link>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                </a-layout-header>
                <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '100vh' }">
                    <div>
                        Твоё имя - {{ userData.username }}
                    </div>
                    <div>
                        Твоя почта - {{ userData.email }}
                    </div>
                    <button @click="logout" style="padding: 10px; cursor: pointer;">
                        Logout
                    </button>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<style lang="scss">

header {
    & span {
        padding: 15px;
    }
}

#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>