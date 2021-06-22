import { AntentaUIComponent } from './component'

export declare class AnCol extends AntentaUIComponent {

  // 栅格占据的列数
  span: number

  // 栅格左侧的间隔格数
  offset: number

  // <768px响应式栅格数或者栅格属性对象
  xs: number

  // >=768px响应式栅格数或者栅格属性对象
  sm: number

  // >=992px响应式栅格数或者栅格属性对象
  md: number

  // >=1200px响应式栅格数或者栅格属性对象
  lg: number

  // >=1920px响应式栅格数或者栅格属性对象
  lx: number

  // 栅格向右移动格数
  push: number

  // 栅格向左移动格数
  pull: number
}
