<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem></br>
        <FormItem>
          <Button type="primary" @click="handleReset('formInline')" class="button-left">重置</Button>

          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { type: 'string', max: 10, message: '用户名至多为十位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码最少是六位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
          handleReset (name) {
            this.formInline.user = ''
            this.formInline.password = ''
          },
          handleSubmit(name) {
              this.$refs[name].validate((valid) => {
                  if (valid) {
                      this.$Message.success('登录成功!');
                      //将用户名传过去显示在页面
                      this.$emit('closeLogin',this.formInline.user)
                  } else {
                      this.$Message.error('登录失败，请重新登录!');
                  }
              })
          }
        }
    }
</script>
<style scoped>
.button-left{
  margin-right: 20px;
}
</style>
