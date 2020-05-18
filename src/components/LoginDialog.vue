<template>
    <v-dialog v-model="show" width="500px" persistent>
        <v-card>
            <v-card-text class="py-6">
                <v-row>
                    <v-col>
                        <LoginForm />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import LoginForm from './LoginForm'
    
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        components: {
            LoginForm
        }        
    }
</script>

<style lang="scss" scoped>

</style>