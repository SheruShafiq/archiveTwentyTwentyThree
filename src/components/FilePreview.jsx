import { Skeleton } from "@mui/material";

const FilePreview = ({ url }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} >
      <Skeleton
        style={{ position: 'absolute' }}
        variant="rectangular"
        animation="wave"
        height={"100%"}
        width={"100%"}
      />
      <embed style={{ position: 'absolute' }} src={url} type="application/pdf" width="100%" height="100%" />
    </div>
  )
}

export default FilePreview;
