<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="(item, index) in menuTab"
          @click="handleClick(index)"
          :class="currentIndexOfItem === index ? 'current' : ''"
          :key="item.id"
        >
          {{ item.text }}
        </li>
      </ul>
      <!--表单验证-->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <!-- 用户名 -->
        <el-form-item prop="username" class="item-form">
          <label>用户名</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input
            type="text"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- 验证重复密码 -->
        <el-form-item
          prop="duplicatePassword"
          class="item-form"
          v-show="model === 'register'"
        >
          <label>重复密码</label>
          <el-input
            type="text"
            v-model="ruleForm.duplicatePassword"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15"
              ><el-input
                v-model.number="ruleForm.code"
                minlength="6"
                maxlength="6"
              ></el-input
            ></el-col>
            <el-col :span="9"
              ><el-button type="success" class="block"
                >获取验证码</el-button
              ></el-col
            >
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm('ruleForm')"
            class="login-btn block"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  scriptFilter,
  validateEmailReg,
  validatePwdReg,
  validateCodeReg,
} from "@/utils/validate";
export default {
  name: "LoginPage",
  data() {
    //验证用户名
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!validateEmailReg(value)) {
        //邮箱验证正则
        callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    //验证密码
    const validatePassword = (rule, value, callback) => {
      //密码过滤特殊字符
      this.ruleForm.password = scriptFilter(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!validatePwdReg(value)) {
        //密码正则
        callback(new Error("密码格式有误，应为6-20位数字或字母"));
      } else {
        callback();
      }
    };
    //验证重复密码
    const validateDuplicatePassword = (rule, value, callback) => {
      //密码过滤特殊字符
      this.ruleForm.duplicatePassword = scriptFilter(value);
      value = this.ruleForm.duplicatePassword;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        //密码正则
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    //验证验证码
    const checkCode = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入验证码"));
      } else if (!validateCodeReg(value)) {
        //验证码正则
        return callback("验证码格式有误");
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { text: "登录", id: 1 },
        { text: "注册", id: 2 },
      ],
      //模块的值
      model: "",
      currentIndexOfItem: 0,
      ruleForm: {
        username: "",
        password: "",
        duplicatePassword: "",
        code: "",
      },
      rules: {
        //当失去焦点时，就会触发验证方法
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        duplicatePassword: [
          { validator: validateDuplicatePassword, trigger: "blur" },
        ],
        code: [{ validator: checkCode, trigger: "blur" }],
      },
    };
  },

  created() {},
  mounted() {
    //挂载完成后自动执行
  },
  methods: {
    handleClick(index) {
      this.currentIndexOfItem = index;
      //点击不同按钮切换模块
      this.model = index === 0 ? "login" : "register";
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
  .item-form {
    margin-bottom: 30px;
  }
  .block {
    display: block;
    width: 100%;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>
