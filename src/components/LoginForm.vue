<template>
    <v-card class="elevation-2 px-4 py-5">                    
        <v-responsive>
            <v-layout row justify-center>
                <v-flex>
                    <div class="user-avatar"></div>
                </v-flex>
            </v-layout>
        </v-responsive> 
                            
        <v-card-text>
            <v-form 
                @submit.prevent="login"
                ref="form"
                lazy-validation
            >
                <v-text-field 
                    name="email" 
                    label="Email" 
                    type="text"
                    v-model="email" 
                    :rules="emailRules"
                    required
                ></v-text-field>
                
                <v-text-field 
                    name="password" 
                    label="Password" 
                    hint="At least 6 symbols"
                    v-model="password" 
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    @click:append="() => (showPassword = !showPassword)"
                    :type="showPassword ? 'password' : 'text'"
                    :rules="passwordRules"
                    required
                ></v-text-field>

                <v-btn 
                    class="mt-4" 
                    color="info" 
                    block 
                    type="submit"
                    :loading="getAuthLoadingState"
                >
                    Log in
                </v-btn>
            </v-form>
        </v-card-text> 
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('auth', [ 'getAuthLoadingState' ])
    },
    data() {
        return {
            showPassword: true,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ],
        }
    },
    methods: {
        login() {
            let validation = this.$refs.form.validate();

            if(validation) {
                this.$emit('login', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-avatar {
        width: 70px;
        height: 70px;
        display: block;
        text-align: center;
        border-radius: 100%;
        background-image: url('../assets/img/default_user.png');
        background-repeat: no-repeat;
        background-color: rgba(0, 0, 0, .085);
        background-position: center;
        background-size: cover;
        margin: 0 auto;
    }
</style>