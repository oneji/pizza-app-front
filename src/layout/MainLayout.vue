<template>
    <div>
        <!-- Toolbar -->
        <Toolbar />

        <!-- Content -->
        <v-content>
            <v-container>
                <transition name="slide-x-transition" mode="out-in">
                    <router-view />
                </transition>
            </v-container>
        </v-content>

        <!-- Footer -->
        <v-footer app fixed>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar'

    export default {
        components: {
            Toolbar
        }    
    }
</script>

<style lang="scss" scoped>

</style>