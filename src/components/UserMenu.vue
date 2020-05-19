<template>
    <v-menu :close-on-content-click="true" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
            <v-btn  small fab color="primary" v-on="on">
                <v-icon>person</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="@/assets/img/default_user.png" alt="User">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ user.email }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item :to="{ name: 'orders' }">
                    <v-list-item-action>
                        <v-icon white>all_inbox</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Orders</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="$store.dispatch('auth/logout')">
                    <v-list-item-action>
                        <v-icon white>power_settings_new</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.getters['auth/getUser'] || {};
            }
        }
    }
</script>

<style>
</style>