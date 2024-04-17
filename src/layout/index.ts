// 常见布局
import Layout1_1 from './plugin/layout/Layout1_1';
import Layout1_2 from './plugin/layout/Layout1_2';
import Layout1_3 from './plugin/layout/Layout1_3';
import Layout1_1_v2 from './plugin/layout/Layout1_1_v2';
import Layout1_1_1 from './plugin/layout/Layout1_1_1';
import Layout1_2_3 from './plugin/layout/Layout1_2_3';
import Layout1_1_1_v2 from './plugin/layout/Layout1_1_1_v2';
import Layout1_2_v2 from './plugin/layout/Layout1_2_v2';
import Layout2_1_v2 from './plugin/layout/Layout2_1_v2';
import Layout1_2_v3 from './plugin/layout/Layout1_2_v3';
import Layout2_1_v3 from './plugin/layout/Layout2_1_v3';
import Layout1_2_v4 from './plugin/layout/Layout1_2_v4';
import Layout_scroll_x from './plugin/layout/Layout_scroll_x';
import Layout_scroll_y from './plugin/layout/Layout_scroll_y';
import MyRenderer from './plugin/cust/MyRenderer';
import business_demo from './plugin/business/Demo';
import business_demo_tree from './plugin/business/Demo_Tree';
import business_demo_mst_sta from './plugin/business/Demo_Mst_Standard';
import business_demo_mst_erp from './plugin/business/Demo_Mst_Erp';
import business_demo_mst_emb from './plugin/business/Demo_Mst_Emb';

const LayoutList: Array<any> = [
  Layout1_1,
  Layout1_2,
  Layout1_3,
  Layout1_1_v2,
  Layout1_1_1,
  Layout1_2_3,
  Layout1_1_1_v2,
  Layout1_2_v2,
  Layout2_1_v2,
  Layout1_2_v3,
  Layout2_1_v3,
  Layout1_2_v4,
  // Layout_fixed_top,
  // Layout_fixed_bottom,
  // Layout_fixed,
  Layout_scroll_x,
  Layout_scroll_y,
  // 自定义组件
  MyRenderer,
  // 自定义业务组件
  business_demo,
  business_demo_tree,
  business_demo_mst_sta,
  business_demo_mst_erp,
  business_demo_mst_emb
];

export default LayoutList;
