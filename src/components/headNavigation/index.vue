<template>
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <el-dropdown @command="handleCommand">
                    <i class="el-icon-setting" style="margin-right: 15px">
                        <span style="margin: 0 5px;">设置</span>
                    </i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="myInfo">个人信息</el-dropdown-item>
                        <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {
            async handleCommand(command) {
                console.log(command)
                if (command == 'logOut') {
                    localStorage.removeItem('user')
                    this.$message({
                        message: '退出成功，正在跳转登录',
                        type: 'success'
                    })
                    await this.$publicFunction.sleep(1800) // 等待(睡眠)
                    this.$router.push({ path: '/login' })
                } else {
                    console.log('aaa')
                }
            }
        }
    }
</script>

<style >

</style>
