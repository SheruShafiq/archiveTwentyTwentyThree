import React from "react";
import { Divider, Stack, Skeleton } from "@mui/material";
import ListItem from './Item'

const ListTable = ({ items, loading, onClick }) => {

  if (loading) {
    return (
      <Stack gap={3}>
        {[...Array(3)].map((e, i) => (
          <Stack key={i}>
            <Skeleton
              variant="text"
              height="32px"
              sx={{maxWidth: 300}}
            />
            <Skeleton
              variant="rectangular"
              height={60}
            />
          </Stack>
        ))}
      </Stack>
    );
  }

  return (
    <Stack gap={3}>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            title={item.title}
            content={item.description}
            onClick={() => onClick(item)}
            image={item.icon}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Stack>
  )
}

export default ListTable;
