import React from "react";
import "./header.css";
import { useSelector, useDispatch,useState,useNavigate } from "../../common/common.import";
import { switchTheme } from "../../redux/slice/themeSlice";
import AppLogo from "../../images/logo.svg";
import { VscBellDot } from "react-icons/vsc";
import { Avatar, Image } from "antd";
import FaceAvatar from "../../images/face28.jpg";
import PopupMenu from "../popupmenu/index";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { AiOutlineInfoCircle,AiOutlineSetting,AiOutlinePoweroff } from "react-icons/ai";

export default function Header() {
  const isdark = useSelector((state) => state.theme.isDark);
  const navigate = useNavigate()
  const menu = (
    <Menu
      className="popup-menu"
      items={[
        {
          key: "0",
          label: (
            <div className="container p-3">
            <h6>Notifications</h6>
          </div>
          ),
          disabled : true
        },
        {
          key: "1",
          label: (
            <div className="logout-item p-2">
             <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Application Error</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
            </div>
          ),
          icon: <AiOutlineSetting size={20}  color="blue" className="text-primary" />,
        },
        {
          key: "2",
          label: (
            <div className="logout-item p-2">
              <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Settings</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
            </div>
          ),
          icon: <AiOutlinePoweroff size={20}  color="blue" className="text-primary" />,
        },
        {
          key: "3",
          label: (
            <div className="logout-item p-2">
              <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">New user registration</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
            </div>
          ),
          icon: <AiOutlinePoweroff size={20}  color="blue" className="text-primary" />,
        },
      ]}
    />
  );

  const ProfileMenu = (
    <Menu
    className="popup-menu"
      items={[
        {
          key: "0",
          label: (
            <div className="container p-3">
              <h6>Deebendu Zestic IT Solutions Private Limited</h6>
            </div>
          ),
          disabled : true
        },
        {
          key: "1",
          label: (
            <div className="logout-item p-2">
              <a class="dropdown-item">
                Setting
              </a>
            </div>
          ),
          icon: <AiOutlineSetting size={20}  color="blue" className="text-primary" />,
        },
        {
          key: "2",
          label: (
            <div className="logout-item p-2">
              <a class="dropdown-item" >
                Logout
              </a>
            </div>
          ),
          icon: <AiOutlinePoweroff size={20}  color="blue" className="text-primary" />,
        },
      ]}
    />
  );

  return (
    <div className="layout-header">
      <div className="row">
        <div className="col d-flex align-items-center justify-content-start">
          <div className="header-logo d-flex align-items-center justify-content-center">
            <img src={AppLogo} width={40} height={34} />
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <div className="header-menu">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="notification-icon"
            >
              <VscBellDot className="bell-icon" />
            </Dropdown>

            <Dropdown
              overlay={ProfileMenu}
              trigger={["click"]}
              className="profile-avatar"
            >
              <Avatar src={FaceAvatar} className="profile-img" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
