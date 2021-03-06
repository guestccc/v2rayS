import Vue from 'vue';
import {
  Input,
  InputNumber,
  Switch,
  Button,
  Icon,
  Menu,
  Breadcrumb,
  Tabs,
  Card,
  Divider,
  Progress,
  Modal,
  Drawer,
  Form,
  Select,
  Table,
  Collapse,
  Popconfirm,
  Tooltip,
  Row,
  Col,

  Message,
} from 'ant-design-vue';

Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Progress);
Vue.use(Modal);
Vue.use(Drawer);
Vue.use(Form);
Vue.use(Table);
Vue.use(Select);
Vue.use(Collapse);
Vue.use(Popconfirm);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Col);

Vue.prototype.$message = Message;
