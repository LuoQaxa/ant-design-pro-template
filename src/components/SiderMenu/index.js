import 'rc-drawer/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer';
import SiderMenu from './SiderMenu';

// wrap 区别手机端和pc端
// props是一个对象，使用对象展开运算符传递所有props到子组件
// object spread operator在reducer中的运用更多，因为reducer应该返回一个新的state，以前会用object.assign()
// 创建对象的拷贝，但是冗长的写法会降低reducer的可读性
const SiderMenuWrapper = props =>
  props.isMobile ? (
    <DrawerMenu
      getContainer={null}
      level={null}
      handleChild={<i className="drawer-handle-icon" />}
      onHandleClick={() => {
        props.onCollapse(!props.collapsed);
      }}
      open={!props.collapsed}
      onMaskClick={() => {
        props.onCollapse(true);
      }}
    >
      <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed} />
    </DrawerMenu>
  ) : (
    <SiderMenu {...props} />
  );

export default SiderMenuWrapper;
