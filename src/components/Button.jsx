import Button from "@mui/material/Button";


export default function MyButton({
  variant = 'primary',
  onClick,
  startIcon,
  children,
  href,
}) {
  return (
    <Button
      variant={variant}
      sx={{ minWidth: { xs: "100%", sm: "8.5rem" } }}
      startIcon={startIcon}
      onClick={onClick}
      href={href}
      >
      {children}
    </Button>
  )
}
