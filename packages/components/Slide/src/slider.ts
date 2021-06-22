import { Ref, ToRefs, UnwrapRef } from 'vue'

export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any


export interface InjectCarouselScope {
  offsetWidth?: Ref<number>;
  offsetHeight?: Ref<number>;
}

export interface ISliderItemProps {
  name: string;
  label: string | number;
  key: string;
}

export interface ISliderItemData {
  hover: boolean;
  translate: number;
  scale: number;
  active: boolean;
  ready: boolean;
  inStage: boolean;
  animating: boolean;
}

export interface ISliderProps {
  initial: number;
  height: string;
  trigger: string;
  autoplay: boolean;
  interval: number;
  type: string;
  arrow: string;
  loop: boolean;
  direction: string;
}

export type UnionSliderItemData = ISliderItemProps & ToRefs<ISliderItemData>

export interface SliderItem extends UnionSliderItemData {
  uid: number;
  translateItem: (index: number, activeIndex: number, oldIndex: number) => void;
}
