<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
    email: string;
    password: string;
    remember: boolean;
}
const formState = reactive<FormState>({
    email: '',
    password: '',
    remember: true,
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
    return !(formState.email && formState.password);
});
</script>

<template>
    <div class="container">
        <div class="auth-page">
            <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-form-item label="Email" name="email"
                    :rules="[{ required: true, message: 'Please input your E-mail!' }]">
                    <a-input v-model:value="formState.email">
                        <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                        </template>
                    </a-input>
                </a-form-item>

                <a-form-item label="Password" name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password">
                        <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>

                <a-form-item>
                    <a-form-item name="remember" no-style>
                        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                    </a-form-item>
                    <a class="login-form-forgot" href="">Forgot password</a>
                </a-form-item>

                <a-form-item>
                    <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                        Log in
                    </a-button>
                    Or
                    <a href="">register now!</a>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.auth-page {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    // &__background {
    //     width: 1110px;
    //     height: 100vh;
    //     background-image: url('../assets/image.png');
    //     background-size: contain;
    //     background-repeat: no-repeat;
    // }
}

#components-form-demo-normal-login .login-form {
    max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
    float: right;
}

#components-form-demo-normal-login .login-form-button {
    width: 100%;
}
</style>