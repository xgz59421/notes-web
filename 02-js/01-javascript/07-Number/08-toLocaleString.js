/** 使用本地设置格式化字符串
 * number.toLocaleString(locales, options)
 * @param locales 可选，格式化对象，可以是
    ar-SA 阿拉伯 (沙特阿拉伯)
    bn-BD 孟加拉语（孟加拉国）
    bn-IN 孟加拉国（印度）
    cs-CZ 捷克语（捷克共和国）
    da-DK 丹麦语（丹麦）
    de-AT 奥地利德语
    de-CH "瑞士"德语
    de-DE 标准德语
    el-GR 现代希腊语
    en-AU 澳大利亚英语
    en-CA 加拿大英语
    en-GB 英式英语
    en-IE 爱尔兰英语
    en-IN 印度英语
    en-NZ 新西兰英语
    en-US 美国英语
    en-ZA 英语（南非）
    es-AR 阿根廷 西班牙语
    es-CL 智利 西班牙语
    es-CO 哥伦比亚西班牙语
    es-ES 卡斯蒂利亚西班牙语（在西班牙中北部使用）
    es-MX 墨西哥西班牙语
    es-US 式西班牙语
    fi-FI 芬兰语（芬兰）
    fr-BE 比利时法语
    fr-CA 加拿大法语
    fr-CH "瑞士"法语
    fr-FR 标准法语（在法国）
    he-IL 希伯来语（以色列）
    hi-IN 印地语（印度）
    hu-HU 匈牙利语（匈牙利）
    id-ID 印度尼西亚语（印度尼西亚语）
    it-CH "瑞士"意大利语
    it-IT 标准意大利语（在意大利使用）
    ja-JP 日语（日本）
    ko-KR 韩语（韩国）
    nl-BE 比利时荷兰语
    nl-NL 标准荷兰语
    no-NO 挪威语（挪威）
    pl-PL 波兰语（波兰）
    pt-BR 巴西葡萄牙语
    pt-PT 欧洲葡萄牙语
    ro-RO 罗马尼亚语（罗马尼亚）
    ru-RU 俄语（俄罗斯联邦）
    sk-SK 斯洛伐克语（斯洛伐克）
    sv-SE 瑞典语（瑞典）
    ta-IN 印度泰米尔语
    ta-LK 斯里兰卡泰米尔语
    th-TH 泰语（泰国）
    tr-TR 土耳其语（土耳其）
    zh-CN 中国大陆，简体字
    zh-HK 香港地区，繁体字
    zh-TW 台湾地区，繁体字
 * @param options 
    "decimal" 用于纯数字格式；
    "currency" 用于货币格式；
    "percent" 用于百分比格式;
    "unit" 用于单位格式
 * @returns String, 小数点后有固定的 x 位数字
 * @version ECMAScript6
 */

let num1 = new Number(1000000)
let text1 = num1.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' })
let text2 = num1.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
let text3 = num1.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

console.log(text1) // €1,000,000.00
console.log(text2) // ¥1,000,000.00
console.log(text3) // $1,000,000.00
console.log((2000000).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })) // ￥2,000,000
