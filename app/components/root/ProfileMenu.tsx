import {
  Avatar,
  Menu,
  MenuDivider,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import { useFetcher } from "remix";

interface ProfileMenuProps {
  user: User;
}

export const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const fetcher = useFetcher();

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" name={user.name} />
      </MenuButton>
      <MenuList shadow="lg" py="4" px="3" m={0}>
        <Text fontWeight="sm">{user.name}</Text>
        <Text fontSize="0.75em" color="muted" mb="2">
          {user.email}
        </Text>
        <MenuDivider />
        <MenuItem rounded="md">My orders</MenuItem>
        <MenuItem rounded="md">My Favourites</MenuItem>
        <MenuDivider />
        <MenuItem
          rounded="md"
          onClick={() =>
            fetcher.submit({}, { action: "/logout", method: "post" })
          }
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
