<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="7" :offset="8">
                <div style="margin-top: 40%;">
                    <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input v-model="registerForm.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="cfPassword">
                            <el-input type="password" v-model="registerForm.cfPassword" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm()">返回登录</el-button>
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
                    if (this.registerForm.cfPassword !== '') {
                        this.$refs.ruleForm2.validateField('verifyPassword')
                    }
                    callback()
                }
            };
            var verifyCfPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                registerForm: {
                    userName: '',
                    password: '',
                    cfPassword: ''
                },
                rules: {
                    userName: [
                        { validator: verifyUserName, trigger: 'blur' }
                    ],
                    password: [
                        { validator: verifyPassword, trigger: 'blur' }
                    ],
                    cfPassword: [
                        { validator: verifyCfPassword, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        // console.log(this.registerForm)
                        let user = JSON.stringify(this.registerForm)
                        localStorage.setItem('user', user)
                        this.$message({
                            message: '注册成功，正在跳转登录',
                            type: 'success'
                        })
                        await this.$publicFunction.sleep(1800) // 等待(睡眠)
                        this.$router.push({ path: '/login' })
                    } else {
                        return false;
                    }
                })
            },
            resetForm() {
                this.$router.push({ path: '/login' })
            }
        }
    }
</script>

<style scoped>

</style>
