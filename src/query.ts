import { Data, Field } from './types';

export class Query {

  private data;

  constructor(data: Data) {
    this.data = data;
  }

  /**
   * 选择字段
   * @param fields 
   */
  public select(...fields: Field[]): Query {

    // TODO

    return this;
  }

  /**
   * 按照字段排序
   * @param field 
   * @param asc 
   */
  public orderBy(fields: string, asc?: boolean): Query {

    // TODO
    
    return this;
  }

  /**
   * 按照字段分组
   * @param asc 
   * @param fields 
   */
  public groupBy(fields: string): Query {

    // TODO
    
    return this;
  }

  /**
   * 取 n 条数据
   * @param n 
   */
  public limit(n: number): Query {

    // TODO
    
    return this;
  }

  /**
   * 返回最后的查询数据
   */
  public record(): Data {

    // TODO
    
    return [];
  }
}