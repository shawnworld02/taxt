/**
 * 过滤特殊字符
 */
export function scriptFilter(str) {
  var pattern = new RegExp(
    "[`~!@#$%^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{ }【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}

/**
 * 验证邮箱正则
 */
export function validateEmailReg(value) {
  let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  return reg.test(value);
}

/**
 * 验证密码正则 6至20位的字母+数字
 */
export function validatePwdReg(value) {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return reg.test(value);
}

/**
 * 验证验证码正则 6位字母+数字
 */
export function validateCodeReg(value) {
  let reg = /^[0-9a-z]{6}$/;
  return reg.test(value);
}
