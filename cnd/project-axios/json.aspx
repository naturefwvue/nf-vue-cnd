{
  "company":{
    "findMeta":{
      "quickFind":[1010,1013,1005,1008],
      "allFind":[1000,1001,1002,1003,1009,1004,1005,1010,1006,1007,1012,1011,1008],
      "colCount":4,
      "customer":{
        "100": {
          "name":"方案二",
          "keys":[1002,1003,1006]
        },
        "101":{
          "name":"方案三",
          "keys":[1007,1004,1010]
        }
      }
    },
    "findItem":{
      "1010":{
        "controlId": "1010",
        "colName": "private,city,area,c1,c2,c3,c4,c5",
        "controlType": 200,
        "placeholder": "省市区",
        "title": "省市区",
        "level": 2,
        "optionKind": 2,
        "optionList": [
          { "value": 1, "label": "浙江", "isLeaf": false },
          { "value": 2, "label": "江苏", "isLeaf": false },
          { "value": 3, "label": "辽宁", "isLeaf": false }
        ],
        "optionList2": [
          { "parent": 1, "value": 11, "label": "杭州" },
          { "parent": 1, "value": 12, "label": "宁波" },
          { "parent": 1, "value": 13, "label": "温州" },
          { "parent": 2, "value": 21, "label": "南京" },
          { "parent": 2, "value": 22, "label": "无锡" },
          { "parent": 3, "value": 31, "label": "沈阳" },
          { "parent": 3, "value": 32, "label": "大连" }
        ],
        "tdCount":3
      },
      "1012":{
        "controlId": "1012",
        "colName": "education",
        "controlType": 183,
        "placeholder": "学历",
        "title": "学历",
        "optionList": [
          { "value": 1, "label": "高中" },
          { "value": 2, "label": "大专" },
          { "value": 3, "label": "本科" },
          { "value": 4, "label": "硕士" },
          { "value": 5, "label": "博士" }
        ],
        "tdCount":3
      },
      "1000":{
          "controlId": 1000,
          "colName": "companyName",
          "controlType": 101,
          "class": "",
          "placeholder": "公司名称",
          "title": "公司名称",
          "size": 10,
          "maxlength": 100,
          "optionList": [],
          "findKind":"402",
          "findKindList": [401,403,402,404,405,406],
          "tdCount":1
      },
      "1001":{
          "controlId": 1001,
          "colName": "companyCode",
          "controlType": 131,
          "class": "",
          "placeholder": "公司邮编",
          "title": "公司邮编",
          "min": 100000,
          "max": 999999,
          "step": 1,
          "maxlength": 6,
          "optionList": [] ,
          "findKind":"401",
          "findKindList": [411,417,412,431,413,414,415,416],
          "tdCount":1
      },
      "1002":{
          "controlId": 1002,
          "colName": "legalPerson",
          "controlType": 101,
          "class": "",
          "placeholder": "法人姓名",
          "title": "法人",
          "autocomplete": "on",
          "size": 10,
          "maxlength": 50,
          "optionList": [] ,
          "findKind":"403",
          "findKindList": [401,403,402,404,405,406],
          "tdCount":1
      },
      "1003":{
          "controlId": 1003,
          "colName": "liaisonMan",
          "controlType": 101,
          "class": "",
          "placeholder": "联系人姓名",
          "title": "联系人",
          "size": 10,
          "maxlength": 50,
          "optionList": [],
          "findKind":"404",
          "findKindList": [401,403,402,404,405,406],
          "tdCount":1
      },
      "1004": {
        "controlId": "1004",
        "colName": "address",
        "controlType": 101,
        "class": "",
        "placeholder": "公司地址",
        "title": "公司地址",
        "size": 10,
        "maxlength": 50,
        "optionKey": "",
        "optionList": [],
        "findKind":"405",
        "findKindList": [401,403,402,404,405,406],
        "tdCount":1
      },
      "1005": {
        "controlId": "1005",
        "colName": "telphone",
        "controlType": 103,
        "placeholder": "公司电话",
        "title": "公司电话",
        "size": 10,
        "maxlength": 50,
        "optionKey": "",
        "optionList": [],
        "findKind":"401,402",
        "findKindList": [401,403,402,404,405,406],
        "tdCount":1
      },
      "1006": {
        "controlId": "1006",
        "colName": "URL",
        "controlType": 105,
        "class": "",
        "placeholder": "公司网址",
        "title": "公司网址",
        "autocomplete": "on",
        "size": 10,
        "maxlength": 50,
        "optionKey": "",
        "optionList": [],
        "findKind":"401,402",
        "findKindList": [401,403,402,404,405,406],
        "tdCount":1
      },
      "1007": {
        "controlId": "1007",
        "colName": "Email",
        "controlType": 104,
        "class": "",
        "placeholder": "公司邮件",
        "title": "公司邮件",
        "size": 10,
        "maxlength": 50,
        "optionKey": "",
        "optionList": [],
        "findKind":"402",
        "findKindList": [401,403,402,404,405,406],
        "tdCount":1
      },
      "1008": {
        "controlId": 1008,
        "colName": "type",
        "title": "公司类型",
        "controlType": 190,
        "placeholder": "公司类型",
        "class": "",
        "optionList": [
          { "value": 1, "title": "有限责任公司" },
          { "value": 2, "title": "股份有限责任公司" },
          { "value": 3, "title": "个人独资企业" },
          { "value": 4, "title": "合伙企业" },
          { "value": 5, "title": "个体工商户" }
        ],
        "findKind":"401",
        "findKindList": ["401","402"],
        "tdCount":1
      },
      "1009": {
        "controlId": 1009,
        "colName": "createDate",
        "controlType": 141,
        "class": "",
        "title": "成立日期",
        "placeholder": "成立日期",
        "min": "1950-01-01",
        "max": "2999-12-31",
        "step": 1,
        "findKind":"423",
        "findKindList": [421,427,422,423,424,425,426],
        "tdCount":3
      },
      "1013": {
        "controlId": 1013,
        "colName": "createTime",
        "controlType": 149,
        "class": "",
        "title": "成立时间",
        "placeholder": "成立时间",
        "min": "1950-01-01",
        "max": "2999-12-31",
        "step": 1,
        "findKind":"423",
        "findKindList": [421,427,422,423,424,425,426],
        "tdCount":3
      },
      "1011":{
        "controlId": 1011,
        "colName": "hobby",
        "controlType": 182,
        "isClear": true,
        "disabled": false,
        "required": true,
        "readonly": false,
        "pattern": "",
        "class": "",
        "title": "爱好",
        "optionList": [
          { "value": 1, "label": "篮球" },
          { "value": 2, "label": "足球" },
          { "value": 3, "label": "排球" }
        ],
        "tdCount":3
      }
    }
  },
  "person":{
    "findMeta":{
      "quickFind":[2000,2001,2002,2003],
      "allFind":[2000,2001,2002,2003,2004,2005],
      "colCount":4,
      "customer":{
        "200": {
          "name":"方案一",
          "keys":[2000,2004,2005]
        },
        "201":{
          "name":"方案二",
          "keys":[2002,2004,2005]
        }
      }
    },
    "findItem":{
      "2000":{
          "controlId": 100,
          "colName": "personId",
          "controlType": 101,
          "class": "",
          "placeholder": "工号",
          "title": "工号",
          "size": 10,
          "maxlength": 10,
          "optionList": [],
          "tdCount":1
      },
      "2001":{
          "controlId": "2001",
          "colName": "personName",
          "controlType": 101,
          "isClear": true,
          "disabled": false,
          "required": true,
          "readonly": false,
          "pattern": "",
          "class": "",
          "placeholder": "员工姓名",
          "title": "姓名",
          "autocomplete": "on",
          "size": 10,
          "maxlength": "50",
          "tdCount":1
      },
      "2002": {
          "controlId": 2002,
          "colName": "Gender",
          "controlType": 183,
          "isClear": true,
          "disabled": false,
          "required": true,
          "readonly": false,
          "pattern": "",
          "class": "",
          "title": "性别",
          "optionList": [
            { "value": "男", "title": "男" },
            { "value": "女", "title": "女" }
          ],
          "tdCount":3
      },
      "2003":{
          "controlId": "2012",
          "colName": "nation",
          "controlType": 106,
          "isClear": true,
          "disabled": false,
          "required": true,
          "readonly": false,
          "pattern": "",
          "class": "",
          "placeholder": "员工姓名",
          "title": "民族",
          "optionKey": "minzu",
          "optionList": [
              { "value": 1, "title": "汉" },
              { "value": 2, "title": "蒙古" },
              { "value": 3, "title": "满族" },
              { "value": 4, "title": "回族" },
              { "value": 5, "title": "朝鲜" }
          ]
      },
      "2004":{
          "controlId": "2012",
          "colName": "education",
          "controlType": 190,
          "isClear": true,
          "disabled": false,
          "required": true,
          "readonly": false,
          "pattern": "",
          "class": "",
          "placeholder": "学历",
          "title": "学历",
          "optionList": [
              { "value": 1, "title": "高中" },
              { "value": 2, "title": "大专" },
              { "value": 3, "title": "本科" },
              { "value": 4, "title": "硕士" },
              { "value": 5, "title": "博士" }
          ],
          "tdCount":1
      },
      "2005":{
          "controlId": 100,
          "colName": "hobby",
          "controlType": 182,
          "isClear": true,
          "disabled": false,
          "required": true,
          "readonly": false,
          "pattern": "",
          "class": "",
          "title": "爱好",
          "optionList": [
            { "value": 1, "title": "篮球" },
            { "value": 2, "title": "足球" },
            { "value": 3, "title": "排球" }
          ],
          "tdCount":3
      }
    }
  }
}