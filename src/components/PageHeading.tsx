import { Divider, Stack, Typography, Skeleton } from "@mui/material";

export type PageHeadingProps = {
  subtitle: string;
  title: string;
  loading?: boolean;
  children: React.ReactNode;
};

const PageHeading = ({
  subtitle,
  title,
  loading,
  children,
}: PageHeadingProps) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography variant="body2" color={"#6C737F"}>
            {subtitle}
          </Typography>

          {loading ? (
            <Skeleton
              variant="text"
              animation={false}
              height="32px"
            />
          ) : (
          <Typography
            variant="h1"
            color={"#1A202C"}
            fontWeight={600}
            fontSize={24}
            lineHeight={"32px"}
          >
            {title}
          </Typography>
          )}
        </Stack>
        <Stack direction="row" alignItems="flex-end">
          {children}
        </Stack>
      </Stack>
      <Divider sx={{mt: 1, mb: 3}}/>
    </>
  );
};

export default PageHeading;

// There is no need to test this component as it is a too simple of a component with only very basic functionality.
