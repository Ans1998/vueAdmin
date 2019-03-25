<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="7" :offset="8">
                <div style="margin-top: 40%;">
                    <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input v-model="loginForm.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                            <el-button @click="resetForm()">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            var verifyUserName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'))
                }
                callback()
            }
            var verifyPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    callback()
                }
            }
            return {
                loginForm: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [
                        { validator: verifyUserName, trigger: 'blur' }
                    ],
                    password: [
                        { validator: verifyPassword, trigger: 'blur' }
                    ]
                }
            };
        },
        // created activated
        created() {
            // console.log(this.$route.query.referer)
        },
        mounted() {
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        // console.log(this.registerForm)
                        if (localStorage.getItem('user')) {
                            var user = JSON.parse(localStorage.getItem('user'))
                        } else {
                            this.$message.error('请先注册账号')
                            return false
                        }
                        if (user.userName !== this.loginForm.userName && user.password !== this.loginForm.password) {
                            this.$message.error('请检查用户名或者密码')
                            return false
                        }
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        })
                        await this.$publicFunction.sleep(1800) // 等待(睡眠)
                        // console.log('跳转页面')
                        if (this.$route.query.referer) {
                            this.$router.push({ path: this.$route.query.referer })
                        } else {
                            // this.$router.go(-1)
                            this.$router.push({ path: '/' })
                        }

                    } else {
                        return false;
                    }
                })
            },
            resetForm() {
                this.$router.push({ path: '/register' })
            }
        }
    }
</script>

<style>

</style>
