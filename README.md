# data-set

> 一个前端数据分析和取数的模块，参考 SQL 的基本逻辑和语法。可以用于轻量级的前端本地数据交互式探索分析。



## Install

```bash
$ npm i --save @prototeam/data-set
```



## Usage

```ts
import { DataSet, MAX, RAW } from '@prototeam/data-set';

const data = [
  {  id: 'A', gender: 'M', subject: 'chinese', score: 99 },
  {  id: 'B', gender: 'M', subject: 'english', score: 90 },
  {  id: 'C', gender: 'F', subject: 'english', score: 60 },
  {  id: 'D', gender: 'F', subject: 'chinese', score: 80 },
];

const ds = new DataSet(data);

// 查询各个学科的最大分数
ds.query()
  .select(RAW('id'), MAX('score'), RAW('gender'))
  .groupBy('subject')
  .record();

// 查询后两名成绩的同学
ds.query()
  .select(RAW('id'), RAW('gender'), RAW('gender'), RAW('score'))
  .orderBy(true, 'score')
  .limit(2)
  .record();
```



## License

MIT