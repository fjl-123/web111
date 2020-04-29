<template>
    <div class="tablebox">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column label="头像" width="180">
           <template slot-scope="scope">
             <div>
                 <img :src="scope.row.avatarUrl" width="50" height="50"/>
             </div>
           </template>
    </el-table-column>
    <el-table-column prop="realName" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="city" label="所在城市">
    </el-table-column>
     <el-table-column prop="height" label="身高">
    </el-table-column>
    </el-table>
<div class="block">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="sizenum" layout="total, prev, pager, next" :total="totleNum">
    </el-pagination>
</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                currentPage: 1,
                sizenum: 20,
                totleNum: 1
            }
        },
        created() {
            this.getAll()
        },
        methods: {
            getAll() {
                const self = this;
                this.$axios.get(' https://route.showapi.com/126-2', {
                    params: {
                        showapi_appid: "170097",
                        showapi_sign: "6c6b83607a8a44bf9434d5065de917ef",
                        type: '可爱',
                        page: self.currentPage,
                        order: 1
                    }
                }).then(res => {
                    console.log(res);
                    self.tableData = res.data.showapi_res_body.pagebean.contentlist;
                    self.totleNum = res.data.showapi_res_body.pagebean.allNum;
                })
            },
            handleSizeChange(val) {
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                this.getAll()
            }
        },
    }
</script>
<style>
    .tablebox {
        width: 90%;
        margin: 20px auto;
    }
</style>