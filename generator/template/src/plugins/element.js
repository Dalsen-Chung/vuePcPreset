import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Form,
  FormItem,
  Tooltip,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Scrollbar,
  Card,
  Drawer,
  Radio,
  RadioGroup,
  Select,
  Option,
  MessageBox,
  Loading,
  Message,
  Notification,
  Table,
  TableColumn,
  Switch,
  Row,
  Pagination,
  DatePicker,
  Tag,
  Backtop,
  Icon,
  Dialog,
  Tree,
  Upload,
  Popconfirm,
  Link,
  Image
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Scrollbar)
Vue.use(Card)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading.directive)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Tag)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Tree)
Vue.use(Upload)
Vue.use(Popconfirm)
Vue.use(Link)
Vue.use(Image)

Vue.prototype.$loading = ({ lock = true, text = '加载中', background = 'rgba(0, 0, 0, 0.7)' } = {}) => Loading.service({ lock, text, background})
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
