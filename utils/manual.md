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

   | Input value            | return value                     | function                                                     | example                               |
   | ---------------------- | -------------------------------- | ------------------------------------------------------------ | ------------------------------------- |
   | Array of question mode | {question:question, type:number} | 根据用户给定需做题模式，从用户今日的需做题中随机生成一道需做题或错题,返回题目的对象以及类型（每日新题/错题） | input: [1, 2, 3]  return:{question,0} |

2. GenerateQuestionByMode(mode)

   | Input value            | return value | function                             | example                                                      |
   | ---------------------- | ------------ | ------------------------------------ | ------------------------------------------------------------ |
   | Array of question mode | question     | 根据用户给定需做题模式生成题目并返回 | input: [1, 2, 3]  return:{question_type: 1; expression: "1+1";result: 2;} |

3. GetOrderedWrongQuestion(mode)

   | Input value            | return value | function                             | example                                                      |
   | ---------------------- | ------------ | ------------------------------------ | ------------------------------------------------------------ |
   | Array of question mode | question     | 根据用户给定需做题模式生成题目并返回 | input: [1, 2, 3]  return:{question_type: 1; expression: "1+1";result: 2;} |

4. 

