import { AntentaUIComponent, AntentaUIComponentSize } from './component'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'


export declare class AnButton extends AntentaUIComponent {

  // 按钮大小
  size: AntentaUIComponentSize

  // 按钮类型
  type: ButtonType

  // 朴素按钮
  plain: boolean

  // 圆角按钮
  round: boolean

  // 禁用
  disabled: boolean

  // 图标类名
  icon: string

  // 原生type属性
  nativeType: ButtonNativeType
}
