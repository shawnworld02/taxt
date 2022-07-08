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
            >{{ menuTab[0].text }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, isRef, toRefs, onMount } from "@vue/composition-api";
import {
  scriptFilter,
  validateEmailReg,
  validatePwdReg,
  validateCodeReg,
} from "@/utils/validate";
export default {
  name: "LoginPage",
  setup(props, { refs }) {
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
      ruleForm.password = scriptFilter(value);
      value = ruleForm.password;
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
      ruleForm.duplicatePassword = scriptFilter(value);
      value = ruleForm.duplicatePassword;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== ruleForm.password) {
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

    //这里面放置data数据、生命周期、自定义的函数
    //声明一个对象类型，要用reactive
    const menuTab = reactive([
      { text: "登录", id: 1 },
      { text: "注册", id: 2 },
    ]);
    //表单绑定数据
    const ruleForm = reactive({
      username: "",
      password: "",
      duplicatePassword: "",
      code: "",
    });
    //表单的验证
    const rules = reactive({
      //当失去焦点时，就会触发验证方法
      username: [{ validator: validateUsername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      duplicatePassword: [
        { validator: validateDuplicatePassword, trigger: "blur" },
      ],
      code: [{ validator: checkCode, trigger: "blur" }],
    });
    //对象类型取值直接调用变量
    console.log(menuTab);

    //声明一个基础数据类型，要用ref
    const model = ref("login");
    const currentIndexOfItem = ref(0);
    //基础类型取值要用 "变量.value"
    console.log(model.value);

    //ifRef 判断一个数据是否是基本数据类型
    console.log(isRef(model) ? true : false);

    //toRefs 将一个对象类型转成普通类型(多用于解构赋值的场景)
    function useMousePosition() {
      const pos = reactive({
        x: 0,
        y: 0,
      });
      return toRefs(pos);
    }
    const { x, y } = useMousePosition();
    console.log(x, y);

    /**
     * vue3生命周期
     */
    //挂载完成后
    onMount(() => {});

    /**
     * 声明函数，取消了methods
     */
    const handleClick = (index) => {
      currentIndexOfItem.value = index;
      //点击不同按钮切换模块
      model.value = index === 0 ? "login" : "register";
    };
    const submitForm = (formName) => {
      refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return {
      menuTab,
      model,
      ruleForm,
      rules,
      handleClick,
      submitForm,
    };
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
