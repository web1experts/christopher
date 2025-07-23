import { Avatar } from '../catalyst/avatar'
import { Dropdown, DropdownButton, DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from '../catalyst/dropdown'
import { ArrowRightStartOnRectangleIcon, ChevronDownIcon, Cog8ToothIcon, LightBulbIcon, PlusIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '../catalyst/navbar'

import { Home, Settings, BarChart } from 'lucide-react';
import './sidebarStyle.css'

const Sidebar = () => {
  return (
    <div className="sidebarPanel">
      <Navbar>
        <Avatar src="./images/FosterLogoProfilePicture.png" />
        <NavbarLabel>The Foster Company</NavbarLabel>
        <NavbarDivider className="max-lg:hidden" />
        <NavbarSection className="max-lg:hidden">
          <NavbarItem href="/" current>Home</NavbarItem>
          <NavbarItem href="/events">Events</NavbarItem>
          <NavbarItem href="/orders">Orders</NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
          <Dropdown>
            <DropdownButton as={NavbarItem}>
              <Avatar src="./images/FosterLogoProfilePicture.png" square />
              <NavbarLabel>Christopher</NavbarLabel>
            </DropdownButton>
            <DropdownMenu className="min-w-64" anchor="bottom end">
              <DropdownItem href="/my-profile">
                <UserIcon />
                <DropdownLabel>My profile</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="/settings">
                <Cog8ToothIcon />
                <DropdownLabel>Settings</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/logout">
                <ArrowRightStartOnRectangleIcon />
                <DropdownLabel>Sign out</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarSection>
      </Navbar>
    </div>
  );
};

export default Sidebar;