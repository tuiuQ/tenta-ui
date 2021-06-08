import Magnifier from './components/Magnifier/index.vue'
import Stars from './components/Stars/index.vue'
import Modal from './components/Modal/index.vue'
import Button from './components/Button/index.vue'
import Divider from './components/Divider/index.vue'
import Carousel from './components/Carousel/index.vue'
import CarouselItem from './components/Carousel/item.vue'
import Dialog from './components/Dialog/index.vue'
import Selector from './components/Selector/index.vue'
import Input from './components/Input/index.vue'
import Switch from './components/Switch/index.vue'
import Radio from './components/Radio/index.vue'
import RadioGroup from './components/RadioGroup/index.vue'
import Checkbox from './components/Checkbox/index.vue'
import CheckboxGroup from './components/CheckboxGroup/index.vue'
import Form from './components/Form/index.vue'
import FormItem from './components/FormItem/index.vue'
import Row from './components/Row/index.vue'
import Col from './components/Col/index.vue'

import './assets/fonts/iconfont.css';
import './assets/styles/styles.less';


const components = [
  Magnifier,
  Stars,
  Modal,
  Button,
  Divider,
  Carousel,
  CarouselItem,
  Dialog,
  Selector,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Row,
  Col
];

const install = function (Vue: any) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
