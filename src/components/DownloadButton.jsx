import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from './Button'

export default function DownloadButton({
  variant,
  href,
  children,
}) {
  return (
    <Button
      variant={variant}
      href={`${href}?download=true`}
      startIcon={<FileDownloadIcon />}
    >
      {children}
    </Button>
  )
}
