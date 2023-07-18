// import JSEncrypt from '@/jsencrypt.js';
import JSEncrypt from '@/jsencrypt/bin/jsencrypt.js'

//公钥
const publicKey ='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsza+tflzoKK2ABgARVNFL/ThrnHw7AvVXDv6QHOJs2FAb98romF5Uj+rsXoLW7WIZOdwSH95nxq7XXSibiwLTZP8aNQKf85j2VL0/O9s8Wk2E9VKrHWMalpJpuu8nx3qBDQURvklwpoDvmg3D2Gq+P8C8j+BsVwR/qA0hm3iWVQIDAQAB';

//私钥
const privateKey= 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIp6hGHeSZiglE0k8ZvX2yB5JjWAWY7CEdpqczXKgNpnU8YyLlFN41YfVSihWeouPBQxlbvB4NKPYTx2ehwdMEw7FGucdxV10BtCWDKHKXx9AsYOlmyw5/hXBOhrIKIYGCiS1B3fztYJgfzvm09rjOMAx6x+/FBfDGpFjZ8aI6ItAgMBAAECgYAUZ7NEHJYpqFfR+kSj2y3N3iw0LAKGV7B7x73MSlesVxdwGArdLiX2lc1dnFD8ge2WaCwRK6NuQ3RnjWm25NIt4co64GypD5YQmWTnkWyrehP2dsL9Xd6bXe4RmDgU2zAAh+bk/oHPVMqUto17O/Re8ZP/VvYRKS//RpcvH+3/gQJBAMuZJj1915HdGmrQQ5WVUY3CX++IwGVNrOc8hz4ONoKXhUzG/W/ho0ODbC64ZRemIbGw0bCS+V9Q4KP+EVnJXw0CQQCuHrWe0ff6nH+mbCcU4gBk1cOnPvoTxl+RyFbUbv0WE4GwXmFf0GneyGuOsv4DN7eU1jNmv9zj+SIEbZpXG4ehAkEAiGIt8JEk34wKDzU1oLUmrVxgoXes0e+HfFraiaJBt5dCbxz5VoICuM4HoQBaj8300jANN0gtDkGCSbh+7PNs3QJAXA8Mg44MCEqaCwl/mEDtaGLE8TYQzkfB27gKgIK1+OgTV4ZvAVOVxh49D9N/DYB15ZFi1951EWt1GtZAFfIOQQJBAJwzheAmmqgCmJwGNKj7yKC4WTz70x9bqHDwAN9Jji/JPgTTfWbxHEn2dmrYm3y0D0UHnsmri4dfUEpRkW32x6Q=';


//加密
export function encrypt (txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encryptLong(txt) // 对需要加密的数据进行加密
}

//解密
export function decrypt (txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decryptLong(txt)
}