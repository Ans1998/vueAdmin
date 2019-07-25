<template>
    <div>
        <el-table
                :data="tableData.filter(data => !search || data.userName.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="user ID"
                    prop="userId">
            </el-table-column>
            <el-table-column
                    label="用户名"
                    prop="userName">
            </el-table-column>
            <el-table-column
                    label="昵称"
                    prop="nickName">
            </el-table-column>
            <el-table-column
                    label="总余额"
                    prop="sumBalance">
            </el-table-column>
            <el-table-column
                    label="居住地"
                    prop="address">
            </el-table-column>
            <el-table-column
                    align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[1, 2, 3, 4]"
                :page-size="1"
                layout="total, sizes, prev, pager, next, jumper"
                :total="4">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return{
                tableData: [
                    {
                        userId: '1',
                        userName: '王小1',
                        nickName: 'test',
                        sumBalance: '200',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        userId: '2',
                        userName: '王小2',
                        nickName: 'test2',
                        sumBalance: '20',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        userId: '3',
                        userName: '王小3',
                        nickName: 'test3',
                        sumBalance: '180',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        userId: '4',
                        userName: '王小4',
                        nickName: 'test4',
                        sumBalance: '80',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                ],
                search: '',
                currentPage: 4
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
