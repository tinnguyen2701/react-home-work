import { Dropdown, Menu } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { UserOutlined } from '@ant-design/icons';

export const AppBar = ({ pages }: {pages: any}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleCloseNavMenu = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  const handleMenuClick = (e: any) => {
    console.log('click', e);
  };
  
  // const menu = (
  //   <Menu
  //     onClick={handleMenuClick}
  //     items={[
  //       {
  //         label: '1st menu item',
  //         key: '1',
  //       },
  //       {
  //         label: '2nd menu item',
  //         key: '2',
  //       },
  //       {
  //         label: '3rd menu item',
  //         key: '3',
  //       },
  //     ]}
  //   />
  // );

  
  return (
    <>
        {/* <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
          Dropdown
        </Dropdown.Button> */}

        <ul>
            {pages?.map((page: any) => (
                <li key={page.label} onClick={() => handleCloseNavMenu(page.path)}>{page.label}</li>
            ))}

            {!!user && (
                <li key={"logout"} onClick={logout}>Logout</li>
            )}
        </ul>
    </>
              
  );
};
