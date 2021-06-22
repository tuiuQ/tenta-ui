import Alert from './components/Alert'
import Aside from './components/Aside'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Carousel from './components/Carousel'
import CarouselDirector from './components/CarouselDirector'
import CarouselDot from './components/CarouselDot'
import CarouselItem from './components/CarouselItem'
import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
import Col from './components/Col'
import Container from './components/Container'
import Dialog from './components/Dialog'
import Divider from './components/Divider'
import Footer from './components/Footer'
import Form from './components/Form'
import FormItem from './components/FormItem'
import Header from './components/Header'
import Input from './components/Input'
import InputNumber from './components/InputNumber'
import Link from './components/Link'
import Magnifier from './components/Magnifier'
import Main from './components/Main'
import Radio from './components/Radio'
import RadioGroup from './components/RadioGroup'
import Select from './components/Select'
import Slide from './components/Slide'
import SlideItem from './components/SlideItem'
import Switch from './components/Switch'

import type { App } from 'vue'

import "./assets/fonts/iconfont.css"
import "./assets/styles/index.less"

const components = [
  Alert,
  Aside,
  Button,
  ButtonGroup,
  Carousel,
  CarouselDirector,
  CarouselDot,
  CarouselItem,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Dialog,
  Divider,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Link,
  Magnifier,
  Main,
  Radio,
  RadioGroup,
  Select,
  Slide,
  SlideItem,
  Switch
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Alert,
  Aside,
  Button,
  ButtonGroup,
  Carousel,
  CarouselDirector,
  CarouselDot,
  CarouselItem,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Dialog,
  Divider,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Link,
  Magnifier,
  Main,
  Radio,
  RadioGroup,
  Select,
  Slide,
  SlideItem,
  Switch
}

export default {
  version: '1.0.5',
  install
}