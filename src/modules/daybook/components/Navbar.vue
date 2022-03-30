<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" 
                alt="Vue Logo"
                height="24"
                class="d-inline-block aling-text-top mx-2">
                {{ username }}
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-info mx-2"
                @click="onLogout">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import UseAuth from "@/modules/auth/composables/UseAuth"
import { useRouter } from 'vue-router'

export default {
    setup() {
        
        const router = useRouter()

        const { username, logout } = UseAuth()

        return {
            username, 
            onLogout: () => {
                router.push({ name: 'login'})
                logout()
            },
        }
    },
}
</script>