# Manual

> This is the manual of question module

## questions generate

### *How to import?*

const {

 GetWrongSet,

 SetWrongSet,

 GetJSONLength,

 RefreshWrongSet,

 JudgeUserAnswer

} = require(“<file path of answerhandler.js>”)

### *data structure*

```js
question:{
    question_type: number;
    expression: string;
    result: number;
}
```

### *functions*

1. GetQuestion(mode)

   | Input value            | return value | function                                                     | example                                                      |
   | ---------------------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | Array of question mode | question     | 根据用户给定需做题模式，从用户今日的需做题中随机生成一道需做题或错题，并自动更新今日需做题信息库 | input: [1, 2, 3]  return:{question_type: 1; expression: "1+1";result: 2;} |

2. GenerateQuestionByMode(mode)

   | Input value            | return value | function               | example                                                      |
   | ---------------------- | ------------ | ---------------------- | ------------------------------------------------------------ |
   | Array of question mode | question     | 根据用户给定需做题模式 | input: [1, 2, 3]  return:{question_type: 1; expression: "1+1";result: 2;} |

3. GetOrderedWrongQuestion(mode)

