<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-card>
                    <v-alert
                            class="mb-3"
                        :value="isLoginError"
                        type="error"
                    >
                        아이디와 비밀번호를 확인해주세요.
                    </v-alert>
                    <v-alert
                            class="mb-3"
                            :value="isLogin"
                            type="success"
                    >
                        아이디와 비밀번호를 확인해주세요.
                    </v-alert>
                    <v-toolbar flat>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">

                        <v-text-field
                                label="이메일을입력하세요"
                                v-model="email"
                        ></v-text-field>
                        <v-text-field
                                label="패스워드를입력하세요"
                                type="password"
                                v-model="password"
                        ></v-text-field>
                        <v-btn
                                color="primary"
                                block
                                large
                                depressed
                                @click="login({
                                    email,
                                    password
                                })"

                        >로그인</v-btn>
                    </div>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState, mapActions} from 'vuex'
    export default{
        data(){
            return {
                email: null,
                password:null,
            }
        },
        computed:{
          ...mapState(['isLogin', 'isLoginError'])
        },
        methods:{
            ...mapActions(['login'])
        }
    }
</script>