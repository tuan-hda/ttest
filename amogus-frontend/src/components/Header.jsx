import React, { useState } from "react";
import { Navbar, Button, Text, Avatar, Dropdown, Input, useTheme } from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [currNav, setNav] = useState("1");

  const handleNavClick = (key) => {
    setNav(key);
  };

  return (
    <div className='sticky top-0 z-10'>
      <Navbar isBordered={false} variant='sticky'>
        <Navbar.Brand>
          <Link to='/' className='flex items-center'>
            <img src={logo} alt='Logo' className='w-10 mr-6' />
            <Text b hideIn='xs'>
              GREENSUS
            </Text>
          </Link>
        </Navbar.Brand>

        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              aria-label='search'
              contentLeft={<SearchIcon fill='var(--nextui-colors-accents6)' size={16} />}
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder='Search...'
            />
          </Navbar.Item>
          {/* <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
          </Dropdown> */}
          <Navbar.Content>
            <Navbar.Link color='inherit' href='/login'>
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} color={"success"} href='/signup'>
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default Header;
